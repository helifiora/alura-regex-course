export type TypeMessage = new (...args: any) => any;

export abstract class Message {

    public readonly type: TypeMessage;

    constructor(type: TypeMessage) {
        this.type = type;
    }
}