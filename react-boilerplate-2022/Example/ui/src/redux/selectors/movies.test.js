import { produce } from 'immer';

import { store } from '../store';

import * as selectors from './movies';

import { useAppSelector } from '../hooks';

describe('Movie selectors', () => {
  it('Should return add movie request status', () => {
    const state = produce(store.getState(), (draft) => {
      draft.movies.addMovieRequest.error = 'test';
    });

    expect(selectors.selectAddMovieRequest(state)).toEqual(state.movies.addMovieRequest);
  });
  it('Should return movies data', () => {
    const state = produce(store.getState(), (draft) => {
      draft.movies.movies = [];
    });

    expect(selectors.selectMovies(state)).toEqual(state.movies.movies);
  });
});
