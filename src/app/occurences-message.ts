import { Message } from './message';

export class OccurrencesMessage extends Message {
    public readonly occurrences: [number, number][];
    public readonly text: string;
    public readonly groups: string[];

    constructor(occurrences: [number, number][], text: string, groups: string[]) {
        super(OccurrencesMessage);
        this.occurrences = occurrences;
        this.text = text;
        this.groups = groups;
    }
}