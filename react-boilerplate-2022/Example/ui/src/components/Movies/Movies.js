import React from 'react';
import { getMovies, addMovie } from '../../redux/actions/movies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectMovies } from '../../redux/selectors/movies';

const Movies = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector(selectMovies);

  const [title, setTitle] = React.useState('');
  const [year, setYear] = React.useState('');

  return (
    <>
      <button onClick={() => dispatch(getMovies())}>Get Movies</button>

      <ul>
        {movies.map((p, i) => (
          <>
            <h1>Movie</h1>
            <li key={i}>{p.title}</li>
            <li key={i}>{p.year}</li>
          </>
        ))}
      </ul>
      <div>
        <input placeholder="enter title" onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="enter year" onChange={(e) => setYear(e.target.value)} />
        <button onClick={() => dispatch(addMovie({ title, year }))}>Add movie</button>
      </div>
    </>
  );
};

export default Movies;
