db = db.getSiblingDB('movies');

db.createUser({
  user: 'movieUser',
  pwd: 'movieUserPassword',
  roles: [
    {
      role: 'readWrite',
      db: 'movies',
    },
  ],
});
