import { assignValid } from '../../src/common/assign-valid';

describe('assignValid', () => {
  it('should assign the incoming value when it is not null', () => {
    expect(assignValid(1)).toEqual(1);

    expect(assignValid('')).toEqual('');
    expect(assignValid('a')).toEqual('a');

    expect(assignValid(true)).toEqual(true);
    expect(assignValid(false)).toEqual(false);

    expect(assignValid([])).toEqual([]);
    expect(assignValid([1, 2])).toEqual([1, 2]);

    expect(assignValid({})).toEqual({});
    expect(assignValid({ id: 1 })).toEqual({ id: 1 });
  });

  it('should not return a value when the argument is not valid', () => {
    expect(assignValid(null)).toEqual(void 0);
  });
});
