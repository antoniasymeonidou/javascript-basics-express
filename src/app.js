const express = require('express');
const stringsrouter = require('./router/stringsRouter');
const numbersrouter = require('./router/numbersRouter');

const app = express();

app.use(express.json());
app.use('/strings', stringsrouter);
app.use('/numbers', numbersrouter);

module.exports = app;
