import { MongoMemoryServer } from 'mongodb-memory-server';

const globalSetup = async () => {
  const instance = await MongoMemoryServer.create();
  global.MONGO_INSTANCE = instance;
  process.env.MONGO_TEST_URI = instance.getUri();
};

export default globalSetup;
