import mongoose from 'mongoose';

import app from './index.js';

const pWord = 'Gwankut656?';

// mongo connection
mongoose
  .connect('mongodb://mongo:2717/movies', {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));
mongoose.connection.once('connected', () => console.log('\x1b[36mmovie app connected to mongo\x1b[0m'));
mongoose.connection.on('error', (err) => console.log(err));

const port = 8081;
app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});
