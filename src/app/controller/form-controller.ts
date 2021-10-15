import { FindOccurrences } from '@/find-occurrences';
import { Message } from '@/message';
import { Observer } from '@/observer';
import { OccurrencesMessage } from '@/occurences-message';
import { Subject } from '@/subject';

interface FormControllerInput {
    form: HTMLFormElement;
    target: HTMLInputElement;
    pattern: HTMLInputElement;
}

export class FormController implements Subject {

    private readonly observers: Set<Observer>;
    private readonly fieldForm: HTMLFormElement;
    private readonly fieldTarget: HTMLInputElement;
    private readonly fieldPattern: HTMLInputElement;

    constructor(input: FormControllerInput) {
        this.fieldForm = input.form;
        this.fieldTarget = input.target;
        this.fieldPattern = input.pattern;
        this.observers = new Set();
    }

    public listenSubmit(): void {
        this.fieldForm.addEventListener('submit', event => {
            event.preventDefault();
            const findOccurrences = new FindOccurrences({ groups: true });
            const result = findOccurrences.execute(this.fieldPattern.value, this.fieldTarget.value);
            this.notify(new OccurrencesMessage(result.indexes, this.fieldTarget.value, result.groups));
        })
    }

    public attach(observer: Observer): void {
        if (this.observers.has(observer)) {
            console.log('Observer already exist');
            return;
        }

        this.observers.add(observer);
    }

    public detach(observer: Observer): void {
        if (this.observers.has(observer)) {
            this.observers.delete(observer);
        }
    }

    public notify(value: Message): void {
        for (const observer of this.observers) {
            if (observer.listenTo === value.type) {
                observer.update(value);
            }
        }
    }
}