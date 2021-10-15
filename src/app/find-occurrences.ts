interface Options {
    groups?: boolean;
}

interface Output {
    indexes: [number, number][];
    groups: string[];
}

export class FindOccurrences {


    constructor(options: Options) {
    }

    public execute(pattern: string, value: string): Output {
        const regex = new RegExp(pattern, 'g');
        const output: Output = { indexes: [], groups: [] };
        let result: RegExpExecArray | null = null
        while (result = regex.exec(value)) {
            const firstIndex = result.index;
            const lastIndex = regex.lastIndex;
            output.indexes.push([firstIndex, lastIndex]);
            output.groups?.push(result.join(' ||| '));
        }

        return output
    }
}