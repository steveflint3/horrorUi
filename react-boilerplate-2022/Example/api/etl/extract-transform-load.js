import fetch from 'node-fetch';
import { MongoClient } from 'mongodb';

var url = `mongodb://${process.env.MOVIE_API_USERNAME}:${process.env.MOVIE_API_PASSWORD}@${process.env.MOVIE_ETL_URI}`;

export const extract = async () => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=ecee8965df3010e0137f48bdebe10470&with_genres=27'
    );
    const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const movies = await res.json();

    transform(movies.results);
  } catch (err) {
    console.log(err.message); //can be console.error
  }
};

const transform = (movies) => {
  const cleanedMoviesArray = [];
  for (let i = 0; i < movies.length; i++) {
    const movieObject = {
      id: movies[i].id,
      title: movies[i].title,
      release_date: movies[i].release_date,
      overview: movies[i].overview,
    };

    cleanedMoviesArray.push(movieObject);
  }
  load(cleanedMoviesArray);
};

const load = (movies) => {
  MongoClient.connect(url, async function (err, db) {
    if (err) throw err;
    var dbo = db.db('movies');

    for (let i = 0; i < movies.length; i++) {
      const bulk = dbo.collection('horrorMovies').initializeUnorderedBulkOp();
      bulk
        .find({ id: movies[i].id })
        .upsert()
        .update({
          $setOnInsert: {
            id: movies[i].id,
            title: movies[i].title,
            release_date: movies[i].release_date,
            overview: movies[i].overview,
          },
        });
      await bulk.execute();
    }

    db.close();
  });
};

extract();
