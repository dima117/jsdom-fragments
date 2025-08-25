[**jsdom-fragments**](README.md)

***

# jsdom-fragments

## Classes

### BaseFragment

Defined in: [BaseFragment.ts:13](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L13)

#### Constructors

##### Constructor

> **new BaseFragment**(`container`): [`BaseFragment`](#basefragment)

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L14)

###### Parameters

###### container

`Element`

###### Returns

[`BaseFragment`](#basefragment)

#### Properties

##### container

> `protected` **container**: `Element`

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L14)

#### Accessors

##### text

###### Get Signature

> **get** **text**(): `string`

Defined in: [BaseFragment.ts:61](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L61)

###### Returns

`string`

#### Methods

##### click()

> **click**(): `Promise`\<`void`\>

Defined in: [BaseFragment.ts:65](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L65)

###### Returns

`Promise`\<`void`\>

##### find()

> `protected` **find**\<`T`\>(`c`, `selector`): `undefined` \| `T`

Defined in: [BaseFragment.ts:44](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L44)

###### Type Parameters

###### T

`T` *extends* [`BaseFragment`](#basefragment)

###### Parameters

###### c

[`FragmentConstructor`](#fragmentconstructor)\<`T`\>

###### selector

`string`

###### Returns

`undefined` \| `T`

##### findElement()

> `protected` **findElement**(`selector`): `undefined` \| `Element`

Defined in: [BaseFragment.ts:24](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L24)

###### Parameters

###### selector

`string`

###### Returns

`undefined` \| `Element`

##### findTypedElement()

> `protected` **findTypedElement**\<`T`\>(`ctr`, `selector`): `undefined` \| `T`

Defined in: [BaseFragment.ts:28](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L28)

###### Type Parameters

###### T

`T` *extends* `Element`

###### Parameters

###### ctr

() => `T`

###### selector

`string`

###### Returns

`undefined` \| `T`

##### get()

> `protected` **get**\<`T`\>(`c`, `selector`): `T`

Defined in: [BaseFragment.ts:39](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L39)

###### Type Parameters

###### T

`T` *extends* [`BaseFragment`](#basefragment)

###### Parameters

###### c

[`FragmentConstructor`](#fragmentconstructor)\<`T`\>

###### selector

`string`

###### Returns

`T`

##### getAll()

> `protected` **getAll**\<`T`\>(`c`, `selector`): `T`[]

Defined in: [BaseFragment.ts:52](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L52)

###### Type Parameters

###### T

`T` *extends* [`BaseFragment`](#basefragment)

###### Parameters

###### c

[`FragmentConstructor`](#fragmentconstructor)\<`T`\>

###### selector

`string`

###### Returns

`T`[]

##### getElement()

> `protected` **getElement**(`selector`): `Element`

Defined in: [BaseFragment.ts:16](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L16)

###### Parameters

###### selector

`string`

###### Returns

`Element`

##### getTypedElement()

> `protected` **getTypedElement**\<`T`\>(`ctr`, `selector`): `T`

Defined in: [BaseFragment.ts:20](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L20)

###### Type Parameters

###### T

`T` *extends* `Element`

###### Parameters

###### ctr

() => `T`

###### selector

`string`

###### Returns

`T`

##### has()

> `protected` **has**(`selector`): `boolean`

Defined in: [BaseFragment.ts:35](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L35)

###### Parameters

###### selector

`string`

###### Returns

`boolean`

##### textFromSelector()

> `protected` **textFromSelector**(`selector`): `string`

Defined in: [BaseFragment.ts:56](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L56)

###### Parameters

###### selector

`string`

###### Returns

`string`

## Type Aliases

### FragmentConstructor()\<T\>

> **FragmentConstructor**\<`T`\> = (`container`) => `T`

Defined in: [BaseFragment.ts:11](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/BaseFragment.ts#L11)

#### Type Parameters

##### T

`T` *extends* [`BaseFragment`](#basefragment)

#### Parameters

##### container

`Element`

#### Returns

`T`

## Functions

### castElement()

> **castElement**\<`T`\>(`ctr`, `el`): `T`

Defined in: [utils.ts:15](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/utils.ts#L15)

#### Type Parameters

##### T

`T` *extends* `Element`

#### Parameters

##### ctr

() => `T`

##### el

`Element`

#### Returns

`T`

***

### compareString()

> **compareString**(`input`, `str`): `boolean`

Defined in: [utils.ts:9](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/utils.ts#L9)

#### Parameters

##### input

`undefined` | `null` | `string`

##### str

`string` | `RegExp`

#### Returns

`boolean`

***

### elementIsInTheDocument()

> **elementIsInTheDocument**(`e`): `boolean`

Defined in: [utils.ts:23](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/utils.ts#L23)

#### Parameters

##### e

`Element`

#### Returns

`boolean`

***

### findElement()

> **findElement**(`selector`, `container`, `text?`): `undefined` \| `Element`

Defined in: [queries.ts:33](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L33)

#### Parameters

##### selector

`string`

##### container

`Element`

##### text?

`string` | `RegExp`

#### Returns

`undefined` \| `Element`

***

### findElementGlobally()

> **findElementGlobally**(`selector`, `container`): `undefined` \| `Element`

Defined in: [queries.ts:51](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L51)

#### Parameters

##### selector

`string`

##### container

`Element` = `document.body`

#### Returns

`undefined` \| `Element`

***

### findTypedElement()

> **findTypedElement**\<`T`\>(`ctr`, `selector`, `container`): `undefined` \| `T`

Defined in: [queries.ts:58](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L58)

#### Type Parameters

##### T

`T` *extends* `Element`

#### Parameters

##### ctr

() => `T`

##### selector

`string`

##### container

`Element`

#### Returns

`undefined` \| `T`

***

### getAllElements()

> **getAllElements**(`selector`, `container`): `Element`[]

Defined in: [queries.ts:3](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L3)

#### Parameters

##### selector

`string`

##### container

`Element`

#### Returns

`Element`[]

***

### getElement()

> **getElement**(`selector`, `container`): `Element`

Defined in: [queries.ts:7](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L7)

#### Parameters

##### selector

`string`

##### container

`Element`

#### Returns

`Element`

***

### getElementGlobally()

> **getElementGlobally**(`selector`, `container`): `Element`

Defined in: [queries.ts:16](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L16)

#### Parameters

##### selector

`string`

##### container

`Element` = `document.body`

#### Returns

`Element`

***

### getText()

> **getText**(`__namedParameters`): `string`

Defined in: [utils.ts:5](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/utils.ts#L5)

#### Parameters

##### \_\_namedParameters

`Element`

#### Returns

`string`

***

### getTypedElement()

> **getTypedElement**\<`T`\>(`ctr`, `selector`, `container`): `T`

Defined in: [queries.ts:23](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/queries.ts#L23)

#### Type Parameters

##### T

`T` *extends* `Element`

#### Parameters

##### ctr

() => `T`

##### selector

`string`

##### container

`Element`

#### Returns

`T`

***

### normalizeText()

> **normalizeText**(`text?`): `string`

Defined in: [utils.ts:1](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/utils.ts#L1)

#### Parameters

##### text?

`null` | `string`

#### Returns

`string`

***

### waitForElement()

> **waitForElement**(`selector`, `container`): `Promise`\<`Element`\>

Defined in: [wait.ts:11](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/wait.ts#L11)

Дождаться появляния в заданном контейнере элемента, соответствующего заданному селектору

#### Parameters

##### selector

`string`

##### container

`Element` = `document.body`

#### Returns

`Promise`\<`Element`\>

Возвращает найденный элемент

***

### waitForFragment()

> **waitForFragment**\<`T`\>(`c`, `selector`): `Promise`\<`T`\>

Defined in: [wait.ts:18](https://github.com/dima117/jsdom-fragments/blob/aede349c0fa486db6d87169b278f2c666a7c00e4/src/wait.ts#L18)

#### Type Parameters

##### T

`T` *extends* [`BaseFragment`](#basefragment)

#### Parameters

##### c

(`container`) => `T`

##### selector

`string`

#### Returns

`Promise`\<`T`\>
