export const normalizeText = (text?: string | null): string => {
    return text === null || text === undefined ? '' : text.replace(/\u00a0/g, ' ').trim();
};

export const getText = ({ textContent }: Element): string => {
    return normalizeText(textContent);
};

export const compareString = (input: string | undefined | null, str: string | RegExp): boolean => {
    input = normalizeText(input);

    return typeof str === 'string' ? input === str : str.test(input);
};

export const castElement = <T extends Element>(ctr: new () => T, el: Element): T => {
    if (el instanceof ctr) {
        return el as T;
    }

    throw new Error(`element is ${el} but ${ctr} expected`);
};

export const elementIsInTheDocument = (e: Element) =>
    e.ownerDocument === e.getRootNode({ composed: true });
