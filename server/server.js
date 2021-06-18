const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var dotenv = require('dotenv');
const app = express();

dotenv.config();

// Set CORS
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse body params and attache them to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require('./app/models');
db.sequelize.sync();

// route
app.get('/', (req, res) => {
  res.json({
    'message': 'No route matches [GET] /'
  });
});

// front routes
require('./app/routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
