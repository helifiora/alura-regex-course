import { TypeMessage } from '@/message';
import { Observer } from '@/observer';
import { OccurrencesMessage } from '@/occurences-message';
import { StringUtils } from '@/utils/string-utils';

export class HighlightController implements Observer {

    private readonly input: HTMLDivElement;
    public readonly listenTo: TypeMessage;

    constructor(input: HTMLDivElement) {
        this.input = input;
        this.listenTo = OccurrencesMessage;
    }

    public update(value: OccurrencesMessage): void {
        const highlightedText = this.applyHighlightToText(value.text, value.occurrences);
        this.input.innerHTML = highlightedText;
    }

    private applyHighlightToText(text: string, positions: [number, number][]): string {
        let first = 0;
        let value = positions.reduce((s, c) => {
            const [begin, end] = c;
            const withoutHighlight = this.noHighlight(StringUtils.escape(text.substring(first, begin)));
            const withHighlight = this.highlight(StringUtils.escape(text.substring(begin, end)));
            first = end;
            return s + withoutHighlight + withHighlight;
        }, '');

        if (text.length - first > 0) {
            value += this.noHighlight(StringUtils.escape(text.substring(first, text.length)));
        }

        return value;
    }

    private noHighlight(substring: string): string {
        return `<span>${substring}</span>`
    }

    private highlight(substring: string): string {
        return `<span class="highlighted">${substring}</span>`
    }
}