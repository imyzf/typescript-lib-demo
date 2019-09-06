declare namespace Base {
    interface PlainObject {
        [key: string]: any;
    }

    type AnyFunction = (...args: any[]) => any;
}

export default Base;
