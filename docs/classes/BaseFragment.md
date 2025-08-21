[**jsdom-fragments**](../README.md)

***

[jsdom-fragments](../globals.md) / BaseFragment

# Class: BaseFragment

Defined in: [BaseFragment.ts:13](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L13)

## Constructors

### Constructor

> **new BaseFragment**(`container`): `BaseFragment`

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L14)

#### Parameters

##### container

`Element`

#### Returns

`BaseFragment`

## Properties

### container

> `protected` **container**: `Element`

Defined in: [BaseFragment.ts:14](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L14)

## Accessors

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [BaseFragment.ts:61](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L61)

##### Returns

`string`

## Methods

### click()

> **click**(): `Promise`\<`void`\>

Defined in: [BaseFragment.ts:65](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L65)

#### Returns

`Promise`\<`void`\>

***

### find()

> `protected` **find**\<`T`\>(`c`, `selector`): `undefined` \| `T`

Defined in: [BaseFragment.ts:44](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L44)

#### Type Parameters

##### T

`T` *extends* `BaseFragment`

#### Parameters

##### c

`FragmentConstructor`\<`T`\>

##### selector

`string`

#### Returns

`undefined` \| `T`

***

### findElement()

> `protected` **findElement**(`selector`): `undefined` \| `Element`

Defined in: [BaseFragment.ts:24](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L24)

#### Parameters

##### selector

`string`

#### Returns

`undefined` \| `Element`

***

### findTypedElement()

> `protected` **findTypedElement**\<`T`\>(`ctr`, `selector`): `undefined` \| `T`

Defined in: [BaseFragment.ts:28](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L28)

#### Type Parameters

##### T

`T` *extends* `Element`

#### Parameters

##### ctr

() => `T`

##### selector

`string`

#### Returns

`undefined` \| `T`

***

### get()

> `protected` **get**\<`T`\>(`c`, `selector`): `T`

Defined in: [BaseFragment.ts:39](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L39)

#### Type Parameters

##### T

`T` *extends* `BaseFragment`

#### Parameters

##### c

`FragmentConstructor`\<`T`\>

##### selector

`string`

#### Returns

`T`

***

### getAll()

> `protected` **getAll**\<`T`\>(`c`, `selector`): `T`[]

Defined in: [BaseFragment.ts:52](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L52)

#### Type Parameters

##### T

`T` *extends* `BaseFragment`

#### Parameters

##### c

`FragmentConstructor`\<`T`\>

##### selector

`string`

#### Returns

`T`[]

***

### getElement()

> `protected` **getElement**(`selector`): `Element`

Defined in: [BaseFragment.ts:16](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L16)

#### Parameters

##### selector

`string`

#### Returns

`Element`

***

### getTypedElement()

> `protected` **getTypedElement**\<`T`\>(`ctr`, `selector`): `T`

Defined in: [BaseFragment.ts:20](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L20)

#### Type Parameters

##### T

`T` *extends* `Element`

#### Parameters

##### ctr

() => `T`

##### selector

`string`

#### Returns

`T`

***

### has()

> `protected` **has**(`selector`): `boolean`

Defined in: [BaseFragment.ts:35](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L35)

#### Parameters

##### selector

`string`

#### Returns

`boolean`

***

### textFromSelector()

> `protected` **textFromSelector**(`selector`): `string`

Defined in: [BaseFragment.ts:56](https://github.com/dima117/jsdom-fragments/blob/e591ffac62a73316db93c2daac4edca949af6c57/src/BaseFragment.ts#L56)

#### Parameters

##### selector

`string`

#### Returns

`string`
