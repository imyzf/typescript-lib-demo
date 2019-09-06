import Creator from '../../types/creator';

export default class Creator {
    private path: string;

    public constructor (options: Creator.CtorOptions) {
        this.path = options.path;
    }

    public init() {
        console.log(`create at ${this.path}`);
        // do something
    }
}
