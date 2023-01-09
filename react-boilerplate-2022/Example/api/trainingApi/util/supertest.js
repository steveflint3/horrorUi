import app from '../index.js';
import { agent as supertest } from 'supertest';

const request = supertest(app);

export default request;
