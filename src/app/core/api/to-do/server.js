const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoute = require('./apiRoute');
const port = 4000;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//cors
app.use(cors());

//routes
app.use('/api', apiRoute);

//listen
app.listen(port, () => {
  console.log('listening to port ' + port);
});
