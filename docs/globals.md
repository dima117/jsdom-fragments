[**jsdom-fragments**](README.md)

***

# jsdom-fragments

## Поиск элементов на странице

### getAllElements()

```ts
function getAllElements(selector, container): Element[];
```

Defined in: [queries.ts:10](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L10)

Получить все элементы, соответствующие заданному селектору

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор для поиска элементов |
| `container` | `Element` | Контейнер (родительский элемент), внутри которого нужно выполнить поиск |

#### Returns

`Element`[]

Возвращает массив найденных элементов. Если элементы не найдены, вернет пустой массив

***

### getElement()

```ts
function getElement(selector, container): Element;
```

Defined in: [queries.ts:21](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L21)

Получить элемент, соответствующий заданному селектору. Если элемент не найден, то будет ошибка

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор для поиска элемента |
| `container` | `Element` | Контейнер (родительский элемент), внутри которого нужно выполнить поиск |

#### Returns

`Element`

Возвращает найденный элемент, а если не найден, генерирует ошибку

***

### getElementGlobally()

```ts
function getElementGlobally(selector): Element;
```

Defined in: [queries.ts:36](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L36)

Получить элемент, соответствующий заданному селектору. Работает аналогично функции [getElement](#getelement-2) с контейнером `document.body`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор для поиска элемента |

#### Returns

`Element`

Возвращает найденный элемент, а если не найден, генерирует ошибку

***

### getTypedElement()

```ts
function getTypedElement<T>(
   ctr, 
   selector, 
   container): T;
```

Defined in: [queries.ts:52](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L52)

Получить элемент заданного типа. Если элемент не найден в заданном контейнере или он не относится к заданному типу, то будет сгенерирована ошибка

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Element` | Конкретный тип элемента |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctr` | () => `T` | Конструктор элемента конкретного типа |
| `selector` | `string` | Селектор для поиска элемента |
| `container` | `Element` | Контейнер (родительский элемент), внутри которого нужно выполнить поиск |

#### Returns

`T`

Если в заданном контейнере найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Иначе будет сгенерирована ошибка

#### Example

```ts
const input: HTMLInputElement = getTypedElement(HTMLInputElement, '.my-input');
console.log(input.value)
```

***

### findElement()

```ts
function findElement(
   selector, 
   container, 
   text?): undefined | Element;
```

Defined in: [queries.ts:70](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L70)

Найти опциональный элемент внутри заданного контейнера. Если элемент не найден, то вернуть `undefined`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор для поиска элемента |
| `container` | `Element` | Контейнер (родительский элемент), внутри которого нужно выполнить поиск |
| `text?` | `string` \| `RegExp` | Строка или Regexp для фильтрации по тексту элемента |

#### Returns

`undefined` \| `Element`

Возвращает найденный элемент, либо `undefined`, если элемент не найден

***

### findElementGlobally()

```ts
function findElementGlobally(selector, text?): undefined | Element;
```

Defined in: [queries.ts:95](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L95)

Найти опциональный элемент на странице. Если элемент не найден, то вернуть `undefined`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор для поиска элемента |
| `text?` | `string` \| `RegExp` | Строка или Regexp для фильтрации по тексту элемента |

#### Returns

`undefined` \| `Element`

Возвращает найденный элемент, либо `undefined`, если элемент не найден

***

### findTypedElement()

```ts
function findTypedElement<T>(
   ctr, 
   selector, 
   container): undefined | T;
```

Defined in: [queries.ts:113](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/queries.ts#L113)

Найти опциональный элемент заданного типа. Если элемент не найден, то вернуть `undefined`

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Element` | Конкретный тип элемента |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctr` | () => `T` | Конструктор элемента конкретного типа |
| `selector` | `string` | Селектор для поиска элемента |
| `container` | `Element` | Контейнер (родительский элемент), внутри которого нужно выполнить поиск |

#### Returns

`undefined` \| `T`

Если в заданном контейнере найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Если элемент не найден, то будет возвращен `undefined`. Если найденный элемент относится к другому типу, то будет сгенерирована ошибка

#### Example

```ts
const input: HTMLInputElement = findTypedElement(HTMLInputElement, '.my-optional-input');
if (input) {
  console.log(input.value)
}
```

## Ожидание появления элементов

### waitForElement()

```ts
function waitForElement(
   selector, 
   container, 
options?): Promise<Element>;
```

Defined in: [wait.ts:15](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/wait.ts#L15)

Дождаться появляния заданного DOM элемента. Внутри используется хелпер [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library, который в течение заданного времени с заданным интервалом проверяет выполнение условия (наличие заданного элемента). Если элемент не появится в течение заданного времени, то будет сгенерировано исключение.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | Селектор, задающий нужный элемент |
| `container` | `Element` | Контейнер, в котором производить поиска элемента. Значение по умолчанию `document.body` |
| `options?` | `waitForOptions` | Параметры ожидания — аналогичны параметрам хелпера [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library |

#### Returns

`Promise`\<`Element`\>

Асинхронно возвращает найденный элемент

#### Example

```ts
const button: Element = await waitForElement('.SaveButton')
```

***

### waitForFragment()

```ts
function waitForFragment<T>(
   ctr, 
   selector, 
   container, 
options?): Promise<T>;
```

Defined in: [wait.ts:39](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/wait.ts#L39)

Дождаться появляния DOM элемента и создать на его основе фрагмент базового типа. Работает аналогично [waitForElement](#waitforelement).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`BaseFragment`](#basefragment) | Тип фрагмента, который нужно создать |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctr` | [`FragmentConstructor`](#fragmentconstructor)\<`T`\> | Конструктор фрагмента заданного типа |
| `selector` | `string` | Селектор, задающий нужный элемент |
| `container` | `Element` | Контейнер, в котором производить поиска элемента. Значение по умолчанию `document.body` |
| `options?` | `waitForOptions` | Параметры ожидания — аналогичны параметрам метода [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library |

#### Returns

`Promise`\<`T`\>

Асинхронно возвращает созданный фрагмент

#### Example

```ts
class ButtonFragment extends BaseFragment {
   // ...
}

const button: ButtonFragment = await waitForFragment(ButtonFragment, '.SaveButton')
```

## Вспомогательные функции

### normalizeText()

```ts
function normalizeText(text): string;
```

Defined in: [utils.ts:10](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/utils.ts#L10)

Нормализует заданный текст:
- преобразует `null` и `undefined` в пустую строку
- обрезает пустые символы по краям
- заменяет неразрывные пробелы `&nbsp;` на обычные

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `undefined` \| `null` \| `string` | Строка, которую нужно преобразовать |

#### Returns

`string`

Нормализованная строка

***

### getText()

```ts
function getText(el): string;
```

Defined in: [utils.ts:20](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/utils.ts#L20)

Возвращает нормализованный текст элемента

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `Element` | Элемент, текст которого нужно получить |

#### Returns

`string`

Текст элемента из поля `textContent`, нормализованный с помощью [normalizeText](#normalizetext)

***

### compareString()

```ts
function compareString(input, expected): boolean;
```

Defined in: [utils.ts:31](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/utils.ts#L31)

Сравнивает строку с другой строкой или регулярным выражением, предварительно нормализовав её с помощью [normalizeText](#normalizetext)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `undefined` \| `null` \| `string` | Строка для сравнения |
| `expected` | `string` \| `RegExp` | Ожидаемая строка или регулярное выражение |

#### Returns

`boolean`

Возвращает `true`, если нормализованная исходная строка равна ожидаемой строке или соответствует заданному регулярному выражению, иначе — `false`

***

### castElement()

```ts
function castElement<T>(ctr, el): T;
```

Defined in: [utils.ts:52](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/utils.ts#L52)

Приводит элемент типа `Element` к заданному конкретному типу

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Element` | Конкретный тип элемента |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctr` | () => `T` | Конструктор элемента конкретного типа |
| `el` | `Element` | Элемент страницы |

#### Returns

`T`

Если элемент является элементом заданного типа, то приводит его тип к заданному, иначе генерирует ошибку

#### Example

```ts
const el: Element = getElement('.my-input');
const input: HTMLInputElement = castElement(HTMLInputElement, el);
console.log(input.value)
```

***

### elementIsInTheDocument()

```ts
function elementIsInTheDocument(el): boolean;
```

Defined in: [utils.ts:68](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/utils.ts#L68)

Проверяет, находится ли заданный элемент в документе

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `Element` | Элемент, который нужно проверить |

#### Returns

`boolean`

Возвращает `true`, если элемент находится внутри документа

#### Remarks

Логика работы аналогична методу [toBeInTheDocument](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinthedocument) из библиотеки [@testing-library/jest-dom](https://npmjs.com/package/@testing-library/jest-dom)

## Other

### BaseFragment

Defined in: [BaseFragment.ts:13](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L13)

#### Constructors

##### Constructor

```ts
new BaseFragment(container): BaseFragment;
```

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `container` | `Element` |

###### Returns

[`BaseFragment`](#basefragment)

#### Properties

##### container

```ts
protected container: Element;
```

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L14)

#### Accessors

##### text

###### Get Signature

```ts
get text(): string;
```

Defined in: [BaseFragment.ts:61](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L61)

###### Returns

`string`

#### Methods

##### getElement()

```ts
protected getElement(selector): Element;
```

Defined in: [BaseFragment.ts:16](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |

###### Returns

`Element`

##### getTypedElement()

```ts
protected getTypedElement<T>(ctr, selector): T;
```

Defined in: [BaseFragment.ts:20](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L20)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Element` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `T` |
| `selector` | `string` |

###### Returns

`T`

##### findElement()

```ts
protected findElement(selector): undefined | Element;
```

Defined in: [BaseFragment.ts:24](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |

###### Returns

`undefined` \| `Element`

##### findTypedElement()

```ts
protected findTypedElement<T>(ctr, selector): undefined | T;
```

Defined in: [BaseFragment.ts:28](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L28)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Element` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `T` |
| `selector` | `string` |

###### Returns

`undefined` \| `T`

##### has()

```ts
protected has(selector): boolean;
```

Defined in: [BaseFragment.ts:35](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |

###### Returns

`boolean`

##### get()

```ts
protected get<T>(c, selector): T;
```

Defined in: [BaseFragment.ts:39](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L39)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BaseFragment`](#basefragment) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | [`FragmentConstructor`](#fragmentconstructor)\<`T`\> |
| `selector` | `string` |

###### Returns

`T`

##### find()

```ts
protected find<T>(c, selector): undefined | T;
```

Defined in: [BaseFragment.ts:44](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L44)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BaseFragment`](#basefragment) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | [`FragmentConstructor`](#fragmentconstructor)\<`T`\> |
| `selector` | `string` |

###### Returns

`undefined` \| `T`

##### getAll()

```ts
protected getAll<T>(c, selector): T[];
```

Defined in: [BaseFragment.ts:52](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L52)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BaseFragment`](#basefragment) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | [`FragmentConstructor`](#fragmentconstructor)\<`T`\> |
| `selector` | `string` |

###### Returns

`T`[]

##### textFromSelector()

```ts
protected textFromSelector(selector): string;
```

Defined in: [BaseFragment.ts:56](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |

###### Returns

`string`

##### click()

```ts
click(): Promise<void>;
```

Defined in: [BaseFragment.ts:65](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L65)

###### Returns

`Promise`\<`void`\>

***

### FragmentConstructor()\<T\>

```ts
type FragmentConstructor<T> = (container) => T;
```

Defined in: [BaseFragment.ts:11](https://github.com/dima117/jsdom-fragments/blob/1f208a7cc117b52c064fba7811d841ab46cf44c1/src/BaseFragment.ts#L11)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BaseFragment`](#basefragment) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `container` | `Element` |

#### Returns

`T`
