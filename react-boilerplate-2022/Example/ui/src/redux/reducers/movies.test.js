import { produce } from 'immer';
import { initialState } from './movies';
import { getMovies, addMovie } from '../actions/movies';
import reducer from './movies';

describe('Movies Reducer', () => {
  const error = 'Fake Error';
  const exampleMovie = {
    title: 'title',
    release_date: 'release_date',
    overview: 'overview',
  };
  describe('getMovies', () => {
    it('Should properly handle pending action', () => {
      const getMoviesRequest = { ...initialState.getMoviesRequest, fetching: true };

      const expectedState = produce(initialState, (draft) => {
        draft.getMoviesRequest = getMoviesRequest;
      });

      const nextState = reducer(initialState, getMovies.pending);
      expect(nextState).toEqual(expectedState);
    });

    it('Should properly handle fulfilled action', () => {
      const getMoviesRequest = { ...initialState.getMoviesRequest, success: true };

      const expectedState = produce(initialState, (draft) => {
        draft.getMoviesRequest = getMoviesRequest;
        draft.movies = [exampleMovie];
      });

      const nextState = reducer(initialState, getMovies.fulfilled([exampleMovie], '', ''));
      expect(nextState).toEqual(expectedState);
    });
    it('Should properly handle rejected action', () => {
      const getMoviesRequest = { ...initialState.getMoviesRequest, error };

      const expectedState = produce(initialState, (draft) => {
        draft.getMoviesRequest = getMoviesRequest;
      });

      const nextState = reducer(initialState, getMovies.rejected(new Error(error), '', ''));
      expect(nextState).toEqual(expectedState);
    });
  });

  describe('addMovie', () => {
    it('Should properly handle pending action', () => {
      const addMovieRequest = { ...initialState.addMovieRequest, fetching: true };

      const expectedState = produce(initialState, (draft) => {
        draft.addMovieRequest = addMovieRequest;
      });

      const nextState = reducer(initialState, addMovie.pending);
      expect(nextState).toEqual(expectedState);
    });
    it('Should properly handle fulfilled action', () => {
      const addMovieRequest = { ...initialState.addMovieRequest, success: true };

      const expectedState = produce(initialState, (draft) => {
        draft.addMovieRequest = addMovieRequest;
        draft.movies = [exampleMovie];
      });

      const nextState = reducer(initialState, addMovie.fulfilled(exampleMovie, '', exampleMovie));
      expect(nextState).toEqual(expectedState);
    });
    it('Should properly handle rejected action', () => {
      const addMovieRequest = { ...initialState.addMovieRequest, error };

      const expectedState = produce(initialState, (draft) => {
        draft.addMovieRequest = addMovieRequest;
      });

      const nextState = reducer(initialState, addMovie.rejected(new Error(error), '', exampleMovie));
      expect(nextState).toEqual(expectedState);
    });
  });
});
