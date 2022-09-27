import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  try {
    const res = await fetch('http://localhost:80/api/movies/');
    const data = await res.json();

    return data;
  } catch (err) {
    // You can choose to use the message attached to err or write a custom error
    return err;
  }
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
    return err;
  }
});
