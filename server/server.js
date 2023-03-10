const express = require('express');
const app = express();
const path = require('path');
const PORT = 3400;
const apiRouter = require('./routes/api');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter, (req, res) => {
  return res.status(200).send(res.locals.colors);
});

app.get('*', (req, res) => {
  return res.status(400).send('This page does not exist. Try again!');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(`${PORT}`, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
