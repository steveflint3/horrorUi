import { produce } from 'immer';

import { store } from '../store';

import * as selectors from './counter';

describe('Counter selectors', () => {
  it('Should return the count data', () => {
    const state = produce(store.getState(), (draft) => {
      draft.counter.count = 1;
    });

    expect(selectors.selectCount(state)).toEqual(state.counter.count);
  });
});
