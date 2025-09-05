# jsdom-fragments

`jsdom-fragments` — реализация паттерна [Page Object](https://ru.wikipedia.org/wiki/PageObject) с использованием DOM API. Помогает описать структурированный и типизированный API для работы с UI вашего приложения в тестах и сценариях автоматизации. В контексте библиотеки `jsdom-fragments` обертки над элементами интерфейса мы называем "фрагментами страниц" (page fragments).

- [Полная документация по API](./docs/api.md)

## Использование

### BaseFragment

Библиотека содержит класс `BaseFragment`, который предоставляет базовый API для элементов интерфейса:

- метод `async click(): Promise<void>` — кликнуть по элементу
- свойство `text: string` — получить текст внутри элемента с нормализацией (удаление пробелов в начале и конце, замена неразрывного пробела `&nbsp` на обычный)
- свойство `container: Element` — содержит целевой DOM-элемент, который был указан при создании фрагмента

#### Пример

```ts
import { BaseFragment } from 'jsdom-fragments';

const buttonElem = document.getElementById('my-button');

// для создания фрагмента нужно передать
// в конструктор целевой DOM-элемент
const button = new BaseFragment(buttonElem);

// кликнуть по элементу
await button.click();

// получить текст внутри элемента
expect(button.text).toBe('Click me');

// button.container === buttonElem
console.log(button.container);
```

### Расширение BaseFragment

Вы можете унаследоваться от базового класса BaseFragment и расширить его API дополнительными свойствами и методами для удобной работы с вашими конкретными элементами интерфейса.

#### Пример

```ts
import { BaseFragment } from 'jsdom-fragments';

class ButtonFragment extends BaseFragment {
    get disabled(): boolean {
        return this.container.hasAttribute('disabled');
    }
}

const buttonElem = document.getElementById('my-button');
const button = new ButtonFragment(buttonElem);

expect(button.disabled).toBeFalsy();
```

Вы можете добавлять дополнительные методы для взаимодействия с элементом. Например, вы можете эмулировать события наведения мыши на элемент или вводить текст в поле ввода. Для взаимодействия с DOM элементами используйте API из библиотеки `@testing-library/user-event`.

#### Пример

```ts
import events from '@testing-library/user-event';

class ButtonFragment extends BaseFragment {
    hover() {
        return events.hover(this.container);
    }
}

const buttonElem = document.getElementById('my-button');
const button = new ButtonFragment(buttonElem);

// навести на кнопку указатель мыши
await button.hover();
```

### Иерархия фрагментов

Если в вашем интерфейсе есть сложный блок, состоящий из более простых блоков, то вы можете описать для него фрагмент, содержащий фрагменты для своих частей.

Для типизированного обращения к вложенным фрагментам по css селектору используйте методы класса `BaseFragment`:
- `protected get<T extends BaseFragment>(c: FragmentConstructor<T>, selector: string): T`
   получить фрагмент вложенного элемента; если заданный элемент не найден, сгенерировать ошибку
- `protected find<T extends BaseFragment>(c: FragmentConstructor<T>, selector: string): T | undefined`
   получить фрагмент опционального вложенного элемента; если заданный элемент не найден, вернуть `undefined`
- `protected getAll<T extends BaseFragment>(c: FragmentConstructor<T>, selector: string): T[]`
   получить фрагменты всех вложенных элементов одного типа

#### Пример

``` ts
class TodoItemFragment extends BaseFragment {
    removeButton(): ButtonFragment {
        return this.get(ButtonFragment, '.btn-remove')
    }
}

class TodoListFragment extends BaseFragment {
    items(): TodoItemFragment[] {
        return this.getAll(TodoItemFragment, '.todo-item')
    }

    getItemByText(text: string): TodoItemFragment {
        return this.items.find(x => x.text === text);
    }
}

const list = new TodoListFragment(listElem);

await list.getItemByText('работать').removeButton.click();

expect(list.items.length).toBe(2);
```
