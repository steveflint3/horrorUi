import { produce } from 'immer';
import { initialState } from './counter';
import { setCount, clearCount } from '../actions/counter';
import reducer from './counter';

describe('Counter Reducer', () => {
  it('Should properly handle setCount action', () => {
    const expectedState = produce(initialState, (draft) => {
      draft.count = 1;
    });

    const nextState = reducer(initialState, setCount(1));
    expect(nextState).toEqual(expectedState);
  });
  it('Should properly handle clearCount action', () => {
    const expectedState = produce(initialState, (draft) => {
      draft.count = 0;
    });

    const nextState = reducer(initialState, clearCount());
  });
});
