import mongoose from 'mongoose';
// import characterSeed from '../seed/characterSeed';
import moviesSeed from '../seed/moviesSeed';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI);

  for (const movies of moviesSeed) {
    await movies.save();
  }
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
