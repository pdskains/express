const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.status(200).send('Testing');
});

app.get('/movies', (request, response) => {
  response.status(200).send('Netflix Interests');
});

app.get('/tvshows', (request, response) => {
  response.status(200).send('Book Interests');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
