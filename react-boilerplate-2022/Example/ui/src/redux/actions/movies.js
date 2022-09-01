import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk('movies/getPosts', async () => {
  const res = await fetch('http://localhost:80/api/movies/').then((data) => data.json());

  return res;
});

export const addMovie = createAsyncThunk('movies/addMovie', async (movie) => {
  try {
    const response = await fetch('http://localhost:80/api/movies/post', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    // You can choose to use the message attached to err or write a custom error
    return err;
  }
});
