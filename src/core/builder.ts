import Builder from '../../types/builder';

export default class Builder {
    private dest: string;

    public constructor (options: Builder.CtorOptions) {
        this.dest = options.dest;
    }

    public start() {
        console.log(`build to ${this.dest}`);
        // do something
    }
}
