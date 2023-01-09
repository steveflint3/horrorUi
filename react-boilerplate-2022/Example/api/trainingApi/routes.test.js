import request from './util/supertest.js';
import movies from './models/movies';

describe('/api', () => {
  describe('GET /movies', () => {
    // get all movies
    it('Should return success', async () => {
      const { statusCode } = await request.get('/api/movies');
      expect(statusCode).toBe(200);
    });
    // get all movies not found
    it('Should return not found with message', async () => {
      const getAllMovies = async () => await request.get('/api/movies');
      const mockFind = jest.spyOn(movies, 'find'); // spy on find method of GET object
      mockFind.mockRejectedValue(new Error('Failed to retrieve posts')); // mock it throws an Error object
      const res = await getAllMovies();

      expect(res.status).toBe(404);
      expect(res.body.message).toEqual('Failed to find movies!');
    });
  });
  describe('POST /movies', () => {
    // post a movie
    it('should save the movie in database', async () => {
      const movieBody = {
        title: 'title',
        release_date: 'release_date',
        overview: 'overview',
      };
      const { statusCode } = await request.post('/api/movies/post').send(movieBody);
      expect(statusCode).toBe(200);
    });
    // post a movie bad request
    it('Should return bad request with message', async () => {
      const errorMovieBody = {
        title: 17,
        release_date: ['release_date'],
      };
      const res = await request.post('/api/movies/post').send(errorMovieBody);
      expect(res.status).toBe(400);
      expect(res.body.message).toEqual('Failed to post movie!');
    });
  });
});
