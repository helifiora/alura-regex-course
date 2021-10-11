import { TypeMessage, Message } from './message';

export interface Observer {
    update(value: Message): void;
    listenTo: TypeMessage;
}