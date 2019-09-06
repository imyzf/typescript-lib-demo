import Lib from '../src';

test('demo test', () => {
    const lib = new Lib({ path: 'project', dest: 'dist' });
    expect(lib).toBeInstanceOf(Lib);
    expect(lib).toHaveProperty('create');
    expect(lib.create).toBeInstanceOf(Function);
});
