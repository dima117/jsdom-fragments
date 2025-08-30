[**jsdom-fragments**](README.md)

***

# jsdom-fragments

## Ожидание появления элементов

### waitForElement()

```ts
function waitForElement(
   selector, 
   container, 
options?): Promise<Element>;
```

Defined in: [wait.ts:15](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/wait.ts#L15)

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

Defined in: [wait.ts:39](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/wait.ts#L39)

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

Defined in: [utils.ts:11](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/utils.ts#L11)

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

Defined in: [utils.ts:21](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/utils.ts#L21)

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

Defined in: [utils.ts:32](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/utils.ts#L32)

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

Defined in: [utils.ts:50](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/utils.ts#L50)

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

Defined in: [utils.ts:68](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/utils.ts#L68)

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

Defined in: [BaseFragment.ts:13](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L13)

#### Constructors

##### Constructor

```ts
new BaseFragment(container): BaseFragment;
```

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L14)

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

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L14)

#### Accessors

##### text

###### Get Signature

```ts
get text(): string;
```

Defined in: [BaseFragment.ts:61](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L61)

###### Returns

`string`

#### Methods

##### getElement()

```ts
protected getElement(selector): Element;
```

Defined in: [BaseFragment.ts:16](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L16)

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

Defined in: [BaseFragment.ts:20](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L20)

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

Defined in: [BaseFragment.ts:24](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L24)

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

Defined in: [BaseFragment.ts:28](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L28)

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

Defined in: [BaseFragment.ts:35](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L35)

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

Defined in: [BaseFragment.ts:39](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L39)

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

Defined in: [BaseFragment.ts:44](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L44)

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

Defined in: [BaseFragment.ts:52](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L52)

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

Defined in: [BaseFragment.ts:56](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L56)

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

Defined in: [BaseFragment.ts:65](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L65)

###### Returns

`Promise`\<`void`\>

***

### FragmentConstructor()\<T\>

```ts
type FragmentConstructor<T> = (container) => T;
```

Defined in: [BaseFragment.ts:11](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/BaseFragment.ts#L11)

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

***

### getAllElements()

```ts
function getAllElements(selector, container): Element[];
```

Defined in: [queries.ts:3](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L3)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`Element`[]

***

### getElement()

```ts
function getElement(selector, container): Element;
```

Defined in: [queries.ts:7](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`Element`

***

### getElementGlobally()

```ts
function getElementGlobally(selector, container): Element;
```

Defined in: [queries.ts:16](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`Element`

***

### getTypedElement()

```ts
function getTypedElement<T>(
   ctr, 
   selector, 
   container): T;
```

Defined in: [queries.ts:23](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L23)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Element` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `T` |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`T`

***

### findElement()

```ts
function findElement(
   selector, 
   container, 
   text?): undefined | Element;
```

Defined in: [queries.ts:33](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |
| `container` | `Element` |
| `text?` | `string` \| `RegExp` |

#### Returns

`undefined` \| `Element`

***

### findElementGlobally()

```ts
function findElementGlobally(selector, container): undefined | Element;
```

Defined in: [queries.ts:51](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L51)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`undefined` \| `Element`

***

### findTypedElement()

```ts
function findTypedElement<T>(
   ctr, 
   selector, 
   container): undefined | T;
```

Defined in: [queries.ts:58](https://github.com/dima117/jsdom-fragments/blob/7fc5d14407c6726854c3a3c8e10db88052f2c1ea/src/queries.ts#L58)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Element` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `T` |
| `selector` | `string` |
| `container` | `Element` |

#### Returns

`undefined` \| `T`
