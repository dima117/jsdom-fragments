import { normalizeText } from './utils';

describe('Вспомогательные функции', () => {
    describe('normalizeText', () => {
        test('преобразует `null` в пустую строку', () => {
            const result = normalizeText(null);

            expect(result).toBe('');
        });

        test('преобразует `undefined` в пустую строку', () => {
            const result = normalizeText(undefined);

            expect(result).toBe('');
        });

        test('заменяет неразрывные пробелы `&nbsp;` на обычные', () => {
            const result = normalizeText('основан в\u00A01982\u00A0году');

            expect(result).toBe('основан в 1982 году');
        });

        test('обрезает пустые символы по краям', () => {
            const result = normalizeText(' test 1\n\n\n');

            expect(result).toBe('test 1');
        });
    });
});
