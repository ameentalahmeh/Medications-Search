const path = require('path');
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build','index.html'));
});

app.set('port', process.env.PORT || 3002);
module.exports = app;
