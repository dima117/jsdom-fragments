import events from '@testing-library/user-event';
import {
    getAllElements,
    findElement,
    getElement,
    getTypedElement,
    findTypedElement,
} from './queries';
import { getText } from './utils';

export type FragmentConstructor<T extends BaseFragment> = new (container: Element) => T;

export class BaseFragment {
    constructor(protected container: Element) {}

    protected getElement(selector: string): Element {
        return getElement(selector, this.container);
    }

    protected getTypedElement<T extends Element>(ctr: new () => T, selector: string): T {
        return getTypedElement(ctr, selector, this.container);
    }

    protected findElement(selector: string): Element | undefined {
        return findElement(selector, this.container);
    }

    protected findTypedElement<T extends Element>(
        ctr: new () => T,
        selector: string
    ): T | undefined {
        return findTypedElement(ctr, selector, this.container);
    }

    protected has(selector: string): boolean {
        return Boolean(this.findElement(selector));
    }

    protected get<T extends BaseFragment>(c: FragmentConstructor<T>, selector: string): T {
        const el = selector ? this.getElement(selector) : this.container;
        return new c(el);
    }

    protected find<T extends BaseFragment>(
        c: FragmentConstructor<T>,
        selector: string
    ): T | undefined {
        const el = selector ? this.findElement(selector) : this.container;
        return el && new c(el);
    }

    protected getAll<T extends BaseFragment>(c: FragmentConstructor<T>, selector: string): T[] {
        return getAllElements(selector, this.container).map((el) => new c(el));
    }

    protected textFromSelector(selector: string): string {
        const element = this.getElement(selector);
        return getText(element);
    }

    get text() {
        return getText(this.container);
    }

    click(): Promise<void> {
        return events.click(this.container);
    }
}
