import combineClasses, {isBoolClass, isToggleClass} from './combineClasses';

describe('combineClasses', () => {
  it('Should return the proper class string with strings only', () => {
    let out = combineClasses('test1', 'test2');
    expect(out).toEqual('test1 test2');

    out = combineClasses('test1', 'test2', 'test3', 'test4');
    expect(out).toEqual('test1 test2 test3 test4');
  });

  it('Should return proper class string when passed object', () => {
    const out = combineClasses(
      {
        test1: true,
        test2: true,
        test3: false,
      },
      {
        test4: true,
      },
      {
        test5: false,
      }
    );

    expect(out).toEqual('test1 test2 test4');
  });

  it('Should return proper class when passed a toggle object', () => {
    let out = combineClasses({
      false: 'falseClass',
      true: 'trueClass',
      value: true,
    });

    expect(out).toEqual('trueClass');

    out = combineClasses({
      false: 'falseClass',
      true: 'trueClass',
      value: false,
    });

    expect(out).toEqual('falseClass');
  });

  it('Should return proper class when passed a default object', () => {
    let d = {
      default: 'test4',
      options: {
        test1: false,
        test2: false,
        test3: true,
      },
    };

    let out = combineClasses(d);

    expect(out).toEqual('test3');

    d = {
      default: 'test4',
      options: {
        test1: false,
        test2: false,
        test3: false,
      },
    };

    out = combineClasses(d);

    expect(out).toEqual('test4');

    const dv = {
      default: 'test4',
      options: {
        test1: false,
        test2: false,
        test3: false,
      },
      use: false,
    };

    out = combineClasses(dv);

    expect(out).toEqual('');
  });

  it('Should return proper classes when passed any valid type', () => {
    const out = combineClasses(
      undefined,
      'class1',
      'class2',
      {
        class3: true,
        class4: false,
      },
      {
        class5: false,
      },
      {
        class6: true,
      },
      {
        false: 'class7',
        true: 'class8',
        value: false,
      }
    );

    expect(out).toEqual('class1 class2 class3 class6 class7');
  });

  it('Should properly check if var is a IBoolClass', () => {
    const bool = {
      else: false,
      something: true,
    };
    const toggle = {
      false: 'two',
      true: 'one',
      value: true,
    };

    const badBool = {
      bad: 'noABool',
      else: false,
      something: true,
    };

    expect(isBoolClass(bool)).toEqual(true);
    expect(isBoolClass('something')).toEqual(false);
    expect(isBoolClass(toggle)).toEqual(false);

    // @ts-ignore
    expect(isBoolClass(badBool)).toEqual(false);
    // @ts-ignore
    expect(isBoolClass(1)).toEqual(false);
  });

  it('Should properly check if var is a IToggleClass', () => {
    const bool = {
      else: false,
      something: true,
    };
    const toggle = {
      false: 'two',
      true: 'one',
      value: true,
    };

    expect(isToggleClass(bool)).toEqual(false);
    expect(isToggleClass('something')).toEqual(false);
    expect(isToggleClass(toggle)).toEqual(true);
  });

  it('Should throw an error', () => {
    expect(() => {
      // @ts-ignore
      combineClasses(1);
    }).toThrowError('CombineClasses type is not supported. Check your arguments');
  });
});
