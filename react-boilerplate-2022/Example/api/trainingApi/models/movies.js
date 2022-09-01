// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: String,
  year: String,
});

const modelCall = mongoose.model('movies', schema, 'movies');
export default modelCall;
