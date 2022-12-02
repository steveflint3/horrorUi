### Start Project

Start UI, API, and DB: navigate to Example/Docker
run command `docker compose up`

UI: navigate to Example/ui
run command `npm start`

ETL: navigate to Example/api/etl
run command `node extract-transform-load`

Schedule ETL: navigate to Example/api/etl
run command `node schedule-extract-transform-load`
The job is set to run every sunday at 4pm

To view mongo shell `mongosh --port 27031`
