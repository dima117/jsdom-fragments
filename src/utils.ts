
/**
 * Нормализует заданный текст:
 * - преобразует `null` и `undefined` в пустую строку
 * - обрезает пустые символы по краям
 * - заменяет неразрывные пробелы `&nbsp;` на обычные
 * @param text Строка, которую нужно преобразовать
 * @returns Нормализованная строка
 * @category Вспомогательные функции
 */
export const normalizeText = (text: string | null | undefined): string => {
    return text === null || text === undefined ? '' : text.replace(/\u00a0/g, ' ').trim();
};

/**
 * Возвращает нормализованный текст элемента
 * @param el Элемент, текст которого нужно получить 
 * @returns Текст элемента из поля `textContent`, нормализованный с помощью {@link normalizeText}
 * @category Вспомогательные функции
 */
export const getText = ({ textContent }: Element): string => {
    return normalizeText(textContent);
};

/**
 * Сравнивает строку с другой строкой или регулярным выражением, предварительно нормализовав её с помощью {@link normalizeText}
 * @param input Строка для сравнения
 * @param expected Ожидаемая строка или регулярное выражение
 * @returns Возвращает `true`, если нормализованная исходная строка равна ожидаемой строке или соответствует заданному регулярному выражению, иначе — `false`
 * @category Вспомогательные функции
 */
export const compareString = (input: string | null | undefined, expected: string | RegExp): boolean => {
    input = normalizeText(input);

    return typeof expected === 'string' ? input === expected : expected.test(input);
};

/**
 * Приводит элемент типа `Element` к заданному конкретному типу
 * @typeParam T - Конкретный тип элемента
 * @param ctr Конструктор элемента конкретного типа
 * @param el Элемент страницы
 * @returns Если элемент является элементом заданного типа, то приводит его тип к заданному, иначе генерирует ошибку
 * @example
 * const el: Element = getElement('.my-input');
 * const input: HTMLInputElement = castElement(HTMLInputElement, el);
 * console.log(input.value)
 * @category Вспомогательные функции
 */
export const castElement = <T extends Element>(ctr: new () => T, el: Element): T => {
    if (el instanceof ctr) {
        return el as T;
    }

    throw new Error(`element is ${el} but ${ctr} expected`);
};

/**
 * Проверяет, находится ли заданный элемент в документе
 * @param el Элемент, который нужно проверить
 * @returns Возвращает `true`, если элемент находится внутри документа
 * @remarks
 * Логика работы аналогична методу [toBeInTheDocument](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinthedocument) из библиотеки [@testing-library/jest-dom](https://npmjs.com/package/@testing-library/jest-dom)
 * 
 * 
 * @category Вспомогательные функции
 */
export const elementIsInTheDocument = (el: Element) =>
    el.ownerDocument === el.getRootNode({ composed: true });
