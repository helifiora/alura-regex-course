import { Message } from './message';
import { Observer } from './observer';

export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(value: Message): void;
}