import { Message } from './message';

export class OccurrencesMessage extends Message {
    public readonly occurrences: [number, number][];
    public readonly text: string;

    constructor(occurrences: [number, number][], text: string) {
        super(OccurrencesMessage);
        this.occurrences = occurrences;
        this.text = text;
    }
}