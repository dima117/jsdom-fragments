[**jsdom-fragments**](README.md)

***

# jsdom-fragments

## Classes

### BaseFragment

Defined in: [BaseFragment.ts:13](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L13)

#### Constructors

##### Constructor

```ts
new BaseFragment(container): BaseFragment;
```

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L14)

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

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L14)

#### Accessors

##### text

###### Get Signature

```ts
get text(): string;
```

Defined in: [BaseFragment.ts:61](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L61)

###### Returns

`string`

#### Methods

##### getElement()

```ts
protected getElement(selector): Element;
```

Defined in: [BaseFragment.ts:16](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L16)

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

Defined in: [BaseFragment.ts:20](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L20)

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

Defined in: [BaseFragment.ts:24](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L24)

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

Defined in: [BaseFragment.ts:28](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L28)

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

Defined in: [BaseFragment.ts:35](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L35)

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

Defined in: [BaseFragment.ts:39](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L39)

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

Defined in: [BaseFragment.ts:44](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L44)

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

Defined in: [BaseFragment.ts:52](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L52)

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

Defined in: [BaseFragment.ts:56](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L56)

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

Defined in: [BaseFragment.ts:65](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L65)

###### Returns

`Promise`\<`void`\>

## Type Aliases

### FragmentConstructor()\<T\>

```ts
type FragmentConstructor<T> = (container) => T;
```

Defined in: [BaseFragment.ts:11](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/BaseFragment.ts#L11)

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

## Functions

### getAllElements()

```ts
function getAllElements(selector, container): Element[];
```

Defined in: [queries.ts:3](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L3)

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

Defined in: [queries.ts:7](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L7)

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

Defined in: [queries.ts:16](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L16)

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

Defined in: [queries.ts:23](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L23)

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

Defined in: [queries.ts:33](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L33)

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

Defined in: [queries.ts:51](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L51)

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

Defined in: [queries.ts:58](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/queries.ts#L58)

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

***

### normalizeText()

```ts
function normalizeText(text?): string;
```

Defined in: [utils.ts:9](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/utils.ts#L9)

Нормализует заданный текст:
- преобразует `null` и `undefined` в пустую строку
- обрезает пустые символы по краям
- заменяет неразрывные пробелы `&nbsp;` на обычные

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text?` | `null` \| `string` | Строка, которую нужно преобразовать |

#### Returns

`string`

Нормализованная строка

***

### getText()

```ts
function getText(__namedParameters): string;
```

Defined in: [utils.ts:13](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/utils.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `Element` |

#### Returns

`string`

***

### compareString()

```ts
function compareString(input, str): boolean;
```

Defined in: [utils.ts:17](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/utils.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `undefined` \| `null` \| `string` |
| `str` | `string` \| `RegExp` |

#### Returns

`boolean`

***

### castElement()

```ts
function castElement<T>(ctr, el): T;
```

Defined in: [utils.ts:23](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/utils.ts#L23)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Element` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctr` | () => `T` |
| `el` | `Element` |

#### Returns

`T`

***

### elementIsInTheDocument()

```ts
function elementIsInTheDocument(e): boolean;
```

Defined in: [utils.ts:31](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/utils.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Element` |

#### Returns

`boolean`

## Ожидание появления элементов

### waitForElement()

```ts
function waitForElement(
   selector, 
   container, 
options?): Promise<Element>;
```

Defined in: [wait.ts:15](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/wait.ts#L15)

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

Defined in: [wait.ts:39](https://github.com/dima117/jsdom-fragments/blob/7a7afd61843b414ed019659ec1e018701f471ac7/src/wait.ts#L39)

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
