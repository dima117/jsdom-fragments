import { castElement, compareString } from './utils';

/**
 * Получить все элементы, соответствующие заданному селектору
 * @param selector Селектор для поиска элементов
 * @param container Контейнер (родительский элемент), внутри которого нужно выполнить поиск
 * @returns Возвращает массив найденных элементов. Если элементы не найдены, вернет пустой массив
 * @category Поиск элементов на странице
 */
export const getAllElements = (selector: string, container: Element): Element[] => {
    return Array.from(container.querySelectorAll(selector));
};

/**
 * Получить элемент, соответствующий заданному селектору. Если элемент не найден, то будет ошибка
 * @param selector Селектор для поиска элемента
 * @param container Контейнер (родительский элемент), внутри которого нужно выполнить поиск
 * @returns Возвращает найденный элемент, а если не найден, генерирует ошибку
 * @category Поиск элементов на странице
 */
export const getElement = (selector: string, container: Element): Element => {
    const el = container.querySelector(selector);
    if (el === null) {
        throw new Error(`element not found: ${selector}`);
    }

    return el;
};

/**
 * Получить элемент, соответствующий заданному селектору. Работает аналогично функции {@link getElement} с контейнером `document.body`
 * @param selector Селектор для поиска элемента
 * @returns Возвращает найденный элемент, а если не найден, генерирует ошибку
 * @category Поиск элементов на странице
 */
export const getElementGlobally = (selector: string): Element => {
    return getElement(selector, document.body);
};

/**
 * Получить элемент заданного типа. Если элемент не найден в заданном контейнере или он не относится к заданному типу, то будет сгенерирована ошибка
 * @typeParam T - Конкретный тип элемента
 * @param ctr Конструктор элемента конкретного типа
 * @param selector Селектор для поиска элемента
 * @param container Контейнер (родительский элемент), внутри которого нужно выполнить поиск
 * @returns Если в заданном контейнере найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Иначе будет сгенерирована ошибка
 * @example
 * const input: HTMLInputElement = getTypedElement(HTMLInputElement, '.my-input');
 * console.log(input.value)
 * @category Поиск элементов на странице
 */
export const getTypedElement = <T extends Element>(
    ctr: new () => T,
    selector: string,
    container: Element
): T => {
    const el = getElement(selector, container);

    return castElement(ctr, el);
};

/**
 * Найти опциональный элемент внутри заданного контейнера. Если элемент не найден, то вернуть `undefined`
 * @param selector Селектор для поиска элемента
 * @param container Контейнер (родительский элемент), внутри которого нужно выполнить поиск
 * @param text Строка или Regexp для фильтрации по тексту элемента
 * @returns Возвращает найденный элемент, либо `undefined`, если элемент не найден
 * @category Поиск элементов на странице
 */
export function findElement(
    selector: string,
    container: Element,
    text?: string | RegExp
): Element | undefined {
    const elements = getAllElements(selector, container);

    if (elements.length) {
        if (text) {
            return elements.find((el) => compareString(el.textContent, text));
        }

        return elements[0];
    }

    return undefined;
}

/**
 * Найти опциональный элемент на странице. Если элемент не найден, то вернуть `undefined`
 * @param selector Селектор для поиска элемента
 * @param text Строка или Regexp для фильтрации по тексту элемента
 * @returns Возвращает найденный элемент, либо `undefined`, если элемент не найден
 * @category Поиск элементов на странице
 */
export function findElementGlobally(selector: string, text?: string | RegExp): Element | undefined {
    return findElement(selector, document.body, text);
}

/**
 * Найти опциональный элемент заданного типа. Если элемент не найден, то вернуть `undefined`
 * @typeParam T Конкретный тип элемента
 * @param ctr Конструктор элемента конкретного типа
 * @param selector Селектор для поиска элемента
 * @param container Контейнер (родительский элемент), внутри которого нужно выполнить поиск
 * @returns Если в заданном контейнере найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Если элемент не найден, то будет возвращен `undefined`. Если найденный элемент относится к другому типу, то будет сгенерирована ошибка
 * @example
 * const input: HTMLInputElement = findTypedElement(HTMLInputElement, '.my-optional-input');
 * if (input) {
 *   console.log(input.value)
 * }
 * @category Поиск элементов на странице
 */
export const findTypedElement = <T extends Element>(
    ctr: new () => T,
    selector: string,
    container: Element
): T | undefined => {
    const el = findElement(selector, container);

    return el && castElement(ctr, el);
};
