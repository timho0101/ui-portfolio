const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoute = require('./apiRoute');
const cors = require('cors');
const port = 4000;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// cors setup
app.use(cors());

// api routes
app.use('/api', apiRoute);

// start server
app.listen(port, ()=> {
  console.log('server start on port ' + port);
});
