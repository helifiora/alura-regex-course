interface Options {
    pattern: RegExp;
}

interface Output {
    indexes: [number, number][]
}

export class FindOccurrences {

    private readonly pattern: RegExp;

    constructor(options: Options) {
        this.pattern = options.pattern;
    }

    public execute(value: string): Output {
        const output: Output = { indexes: [] }
        let result: RegExpExecArray | null = null
        while (result = this.pattern.exec(value)) {
            const firstIndex = result.index;
            const lastIndex = this.pattern.lastIndex;
            output.indexes.push([firstIndex, lastIndex]);
        }

        return output
    }
}