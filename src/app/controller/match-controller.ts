import { Message, TypeMessage } from '@/message';
import { Observer } from '@/observer';
import { OccurrencesMessage } from '@/occurences-message';

export class MatchController implements Observer {
    public readonly listenTo: TypeMessage;
    private readonly input: HTMLInputElement;

    constructor(input: HTMLInputElement) {
        this.listenTo = OccurrencesMessage;
        this.input = input;
    }

    public update(value: OccurrencesMessage): void {
        const text = value.groups.join(' ||| ');
        this.input.value = text;
    }
}