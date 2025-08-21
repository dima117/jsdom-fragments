import { waitFor } from '@testing-library/dom';
import { getElement } from './queries';
import { BaseFragment } from './BaseFragment';

/**
 * Дождаться появляния в заданном контейнере элемента, соответствующего заданному селектору
 * @param selector
 * @param container 
 * @returns Возвращает найденный элемент
 */
export const waitForElement = async (
    selector: string,
    container: Element = document.body
): Promise<Element> => {
    return await waitFor(() => getElement(selector, container));
};

export const waitForFragment = async <T extends BaseFragment>(
    c: new (container: Element) => T,
    selector: string
): Promise<T> => {
    const el = await waitForElement(selector);
    return new c(el);
};
