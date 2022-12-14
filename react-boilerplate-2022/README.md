### Start Project

To .bash_profile, or wherever you store your environment variables, add...
`export MOVIE_API_URI="mongodb://localhost:27031/movies"`
`export MOVIE_API_USERNAME="movieUser"`
`export MOVIE_API_PASSWORD="movieUserPassword"`
`export MOVIE_ETL_URI="localhost:27031/movies"`
`export MOVIE_UI_URI="localhost:80"`

Source file with environment variables in it

Start UI, API, and DB for development: navigate to Example/Docker
run command `docker compose up`

ETL: navigate to Example/api/etl
run command `node extract-transform-load`

Schedule ETL: navigate to Example/api/etl
run command `node schedule-extract-transform-load`
The job is set to run every sunday at 4pm

Start UI in docker production: Navigate to Example/Docker/Docker/DockerUiProd
run command to build image `docker build -f ./Dockerfile ../../ui -t test`
run command to run container with nginx `docker run -p 3080:80 test`
