import { waitFor, waitForOptions } from '@testing-library/dom';
import { getElement } from './queries';
import { BaseFragment, FragmentConstructor } from './BaseFragment';

/**
 * Дождаться появляния заданного DOM элемента. Внутри используется хелпер [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library, который в течение заданного времени с заданным интервалом проверяет выполнение условия (наличие заданного элемента). Если элемент не появится в течение заданного времени, то будет сгенерировано исключение.
 * @param selector Селектор, задающий нужный элемент
 * @param container Контейнер, в котором производить поиска элемента. Значение по умолчанию `document.body`
 * @param options Параметры ожидания — аналогичны параметрам хелпера [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library
 * @returns Асинхронно возвращает найденный элемент
 * @example
 * const button: Element = await waitForElement('.SaveButton')
 * @category Ожидание появления элементов
 */
export const waitForElement = async (
    selector: string,
    container: Element = document.body,
    options?: waitForOptions,
): Promise<Element> => {
    return await waitFor(() => getElement(selector, container), options);
};

/**
 * Дождаться появляния DOM элемента и создать на его основе фрагмент базового типа. Работает аналогично {@link waitForElement}.
 * @typeParam T - Тип фрагмента, который нужно создать
 * @param ctr Конструктор фрагмента заданного типа
 * @param selector Селектор, задающий нужный элемент
 * @param container Контейнер, в котором производить поиска элемента. Значение по умолчанию `document.body`
 * @param options Параметры ожидания — аналогичны параметрам метода [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) из библиотеки Testing Library
 * @returns Асинхронно возвращает созданный фрагмент
 * @example
 * class ButtonFragment extends BaseFragment {
 *    // ...
 * }
 * 
 * const button: ButtonFragment = await waitForFragment(ButtonFragment, '.SaveButton')
 * @category Ожидание появления элементов
 */
export const waitForFragment = async <T extends BaseFragment>(
    ctr: FragmentConstructor<T>,
    selector: string,
    container: Element = document.body,
    options?: waitForOptions,
): Promise<T> => {
    const el = await waitForElement(selector, container, options);
    return new ctr(el);
};
