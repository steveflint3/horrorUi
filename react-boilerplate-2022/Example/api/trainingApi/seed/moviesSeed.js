import movies from '../models/movies.js';

const moviesSeed = [
  new movies({
    title: 'The Title',
    release_date: 'The Release Date',
    overview: 'The Overview',
  }),
];

export default moviesSeed;
