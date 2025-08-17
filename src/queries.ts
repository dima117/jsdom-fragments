import { castElement, compareString } from './utils';

export const getAllElements = (selector: string, container: Element): Element[] => {
    return Array.from(container.querySelectorAll(selector));
};

export const getElement = (selector: string, container: Element): Element => {
    const el = container.querySelector(selector);
    if (el === null) {
        throw new Error(`element not found: ${selector}`);
    }

    return el;
};

export const getElementGlobally = (
    selector: string,
    container: Element = document.body
): Element => {
    return getElement(selector, container);
};

export const getTypedElement = <T extends Element>(
    ctr: new () => T,
    selector: string,
    container: Element
): T => {
    const el = getElement(selector, container);

    return castElement(ctr, el);
};

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

export function findElementGlobally(
    selector: string,
    container: Element = document.body
): Element | undefined {
    return findElement(selector, container);
}

export const findTypedElement = <T extends Element>(
    ctr: new () => T,
    selector: string,
    container: Element
): T | undefined => {
    const el = findElement(selector, container);

    return el && castElement(ctr, el);
};
