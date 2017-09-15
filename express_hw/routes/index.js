const router = require('express').Router();

const movies = require('./netflixOriginals');
const tvshows = require('./books');

router.get('/', (request, response) => {
  response.status(200).send('Welcome to things of interests.');
});

router.use('/netflixOriginals', netflixOriginals);
router.use('/books', books);

module.exports = router;
