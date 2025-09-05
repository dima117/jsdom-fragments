import events from '@testing-library/user-event';
import {
    getAllElements,
    findElement,
    getElement,
    getTypedElement,
    findTypedElement,
} from './queries';
import { getText } from './utils';

/**
 * Тип функции-конструктора фрагмента (экземпляра класса, унаследованного от {@link BaseFragment})
 * @typeParam T - Конкретный тип фрагмента
 * @param container Корневой элемент создаваемого фрагмента
 * @returns Возвращает фрагмент заданного типа, созданный на основе заданного корневого элемента
 * @category API фрагментов страниц
 */
export type FragmentConstructor<T extends BaseFragment> = new (container: Element) => T;

/**
 * Базовый класс для фрагментов страниц. Предоставляет публичный API для базовых действий над элементами страниц (например, получение текста или клик по элементу), а также API для унаследованных классов, расширяющих поведение BaseFragment
 * @category API фрагментов страниц
 */
export class BaseFragment {
    /**
     * Создает экземпляр фрагмента
     * @param container Корневой элемент создаваемого фрагмента
     */
    constructor(protected container: Element) {}

    /**
     * Получить вложенный элемент
     * @param selector Селектор для поиска элемента
     * @returns Возвращает найденный элемент, а если не найден, генерирует ошибку
     */
    protected getElement(selector: string): Element {
        return getElement(selector, this.container);
    }

    /**
     * Получить вложенный элемент заданного типа
     * @typeParam T - Конкретный тип элемента
     * @param ctr Конструктор элемента конкретного типа
     * @param selector Селектор для поиска элемента
     * @returns Если найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Иначе будет сгенерирована ошибка
     */
    protected getTypedElement<T extends Element>(ctr: new () => T, selector: string): T {
        return getTypedElement(ctr, selector, this.container);
    }

    /**
     * Найти опциональный вложенный элемент. Если элемент не найден, то возвращает `undefined`
     * @param selector Селектор для поиска элемента
     * @returns Возвращает найденный элемент, либо `undefined`, если элемент не найден
     */
    protected findElement(selector: string): Element | undefined {
        return findElement(selector, this.container);
    }

    /**
     * Найти опциональный вложенный элемент заданного типа. Если элемент не найден, то вернуть `undefined`
     * @typeParam T Конкретный тип элемента
     * @param ctr Конструктор элемента конкретного типа
     * @param selector Селектор для поиска элемента
     * @returns Если в контейнере найден элемент, соответствующий селектору, и он заданного типа, то будет возвращен этот элемент. Если элемент не найден, то будет возвращен `undefined`. Если найденный элемент относится к другому типу, то будет сгенерирована ошибка
     */
    protected findTypedElement<T extends Element>(
        ctr: new () => T,
        selector: string
    ): T | undefined {
        return findTypedElement(ctr, selector, this.container);
    }

    /**
     * Проверить, существует ли вложенный элемент, соответствующий заданному селектору
     * @param selector Селектор для поиска элемента
     * @returns Возвращает `true`, если заданный вложенный элемент существует, иначе — `false`
     */
    protected has(selector: string): boolean {
        return Boolean(this.findElement(selector));
    }

    /**
     * Получить фрагмент заданного типа для существующего вложенного элемента
     * @typeParam T - Конкретный тип фрагмента
     * @param ctr Конструктор фрагмента конкретного типа
     * @param selector Селектор для поиска вложенного элемента
     * @returns Если вложенный элемент был найден, то возвращает фрагмент заданного типа, корневым элементом которого является найденный элемент. Если элемент не найден, то будет сгенерирована ошибка
     * @example
     * class FormFragment extends BaseFragment {
     *     submit(): ButtonFragment {
     *         return this.get(ButtonFragment, '.submit');
     *     }
     * }
     */
    protected get<T extends BaseFragment>(ctr: FragmentConstructor<T>, selector: string): T {
        const el = this.getElement(selector);
        return new ctr(el);
    }

    /**
     * Получить фрагмент заданного типа для опционального вложенного элемента. Если заданный элемент не найден, то будет возвращен `undefined` 
     * @typeParam T - Конкретный тип фрагмента
     * @param ctr Конструктор фрагмента конкретного типа
     * @param selector Селектор для поиска вложенного элемента
     * @returns Если вложенный элемент был найден, то возвращает фрагмент заданного типа, корневым элементом которого является найденный элемент. Если элемент не найден, то возвращает `undefined`
     * @example
     * class ListItemFragment extends BaseFragment {
     *     edit(): ButtonFragment | undefined {
     *         return this.find(ButtonFragment, '.edit');
     *     }
     * }
     */
    protected find<T extends BaseFragment>(
        ctr: FragmentConstructor<T>,
        selector: string
    ): T | undefined {
        const el = this.findElement(selector);
        return el && new ctr(el);
    }

    /**
     * Получить фрагменты заданного типа для всех элементов, соответствующих заданному селектору
     * @typeParam T - Конкретный тип фрагмента
     * @param ctr Конструктор фрагмента конкретного типа
     * @param selector Селектор для поиска вложенных элементов
     * @returns Возвращает массив фрагментов заданного типа для всех найденных элементов
     * @example
     * class TableFragment extends BaseFragment {
     *     rows(): TableRowFragment[] {
     *         return this.getAll(TableRowFragment, '.row');
     *     }
     * }
     */
    protected getAll<T extends BaseFragment>(ctr: FragmentConstructor<T>, selector: string): T[] {
        return getAllElements(selector, this.container).map((el) => new ctr(el));
    }

    /**
     * Получить текст вложенного элемента
     * @param selector Селектор для поиска вложенного элемента
     * @returns Возвращает текст, нормализованный с помощью {@link normalizeText}
     * @example
     * class MyPageFragment extends BaseFragment {
     *     title(): string {
     *         return this.textFromSelector('.page-title');
     *     }
     * }
     */
    protected textFromSelector(selector: string): string {
        const element = this.getElement(selector);
        return getText(element);
    }

    /**
     * Получить текст из контейнера текущего фрагмента, нормализованный с помощью {@link normalizeText}
     * @remarks Это свойство является открытым (public) и автоматически доступно во всех классах, унаследованных от {@link BaseFragment}
     */
    public get text() {
        return getText(this.container);
    }

    /**
     * Кликнуть по контейнеру текущего фрагмента
     * @returns Метод `click` является асинхронным и возвращает `Promise`, который будет решен после выполнения действия (клика по контейнеру)
     * @remarks Это свойство является открытым (public) и автоматически доступно во всех классах, унаследованных от {@link BaseFragment}
     */
    public click(): Promise<void> {
        return events.click(this.container);
    }
}
