import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: String,
  release_date: String,
  overview: String,
});

const modelCall = mongoose.model('horrormovies', schema);
export default modelCall;
