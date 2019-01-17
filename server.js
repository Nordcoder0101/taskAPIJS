const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const MONGODB_URI = 'mongodb://localhost/restfulAPI';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(express.static(path.join(__dirname, './public/dist/public/')));
require('./routes/route')(app);

app.listen(8000, ()=> console.log('listening on port 8000'));
