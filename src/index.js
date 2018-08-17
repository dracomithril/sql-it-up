const express = require('express');
const database = require('./database');

const app = express();
const db = database.initialize();

app.get('*', (req, res) => {
  res.send('Hi!');
});

app.listen(3000, () => { console.log('server started.'); });
