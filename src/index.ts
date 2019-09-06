import Lib from '../types/lib';
import Builder from './core/builder';
import Creator from './core/creator';

export default class Lib {
    private creator: Creator;
    private builder: Builder;

    public constructor (options: Lib.CtorOptions) {
        const { path, dest } = options;
        this.creator = new Creator({ path });
        this.builder = new Builder({ dest });
    }

    public create() {
        this.creator.init();
    }

    public build() {
        this.builder.start();
    }
}
