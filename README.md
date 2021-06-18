# Ping Pong
Follow the steps given below in order to start the application
---

- Go to root directory and install node modules required for the frondend.

```
cd ping-pong

npm install
```
- Go to server directory and install node modules required for the backend.

```
cd /server

npm install
```

- Create .env file in the root directory with following content.
**Note:** You can use the postgres db as well.

```
APP_ENV=local
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=pingpong
DB_USERNAME=root
DB_PASSWORD=
CORS_ORIGIN=*
```

- Create the database in mysql having the name specified in .env file.
- Run the migration

```
npx sequelize-cli db:migrate
```

- Start the server

```
npm start server.js
```

- Following command will run the test cases at the backend

```
npm run test
```

- Run frontend application

```
cd ..
npm run start:dev
```

- Application will be available at following url.

```
http://localhost:8100
```

- Following is the api end point.

```
Host: http://localhost:3001
Path: /statistic/store
Method: POST
```
