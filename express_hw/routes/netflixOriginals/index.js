const router = require('express').Router();

const netflixOriginals = [
  {
    id: 1,
    title: 'Bojack Horseman',
    genre: 'Comedy',
    rating: 'TV-MA',
    keywords: ['animation', 'series', 'dark comedy'],
  },
  {
    id: 2,
    title: 'The Killing',
    genre: 'Mystery',
    rating: 'TV-MA',
    keywords: ['murder', 'suspense', 'detective'],
  },
  {
    id: 3,
    title: 'Outlander',
    genre: 'Romance',
    rating: 'TV-MA',
    keywords: ['time travel', 'highlander', 'sci-fi romance'],
  }
];

router.get('/', (request, response) => {
  const netflixArray = (request.query.sort === 'genre') ? sortByGenre(netflixOriginals) : netflixOriginals;
  response.status(200).json(netflixArray);
});

router.get('/', (request, response) => {
  response.status(200).json(netflixOriginals);
});

router.get('/:id', (request, response) => {
  let netflix;
  for(let i = 0; i < netflixOriginals.length; i++) {
    if (request.params.id.toString() === netflixOriginals[i].id.toString()) {
      netflix = netflixOriginals[i];
    }
  }

  response.status(200).json(netflix);
});

router.post('/', (request, response) => {
  const netflixId = request.body.id;
  netflixOriginals.push(request.body);
  const netflix = getOriginal(netflixOriginals, netflixId);
  response.status(200).json(netflix);
});

router.put('/:id', (request, response) => {
  const netflix = updateOriginal(netflixOriginals, request.body, request.params.id);
  response.status(200).json(netflix);
});

function getOriginal (array, id) {
  let netflix;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      netflix = array[i];
    }
  }
  return netflix;
}

function updateOriginal (array, newOriginal, id) {
  let netflix;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      array[i].title = newOriginal.title;
      array[i].genre = newOriginal.genre;
      array[i].rating = newOriginal.rating;
      array[i].keywords = newOriginal.keywords;

      netflix = array[i];
    }
  }
  return netflix;
}

function sortByGenre (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray.sort((a, b) => {
    if (a.genre.toUpperCase() < b.genre.toUpperCase()) {
      return -1;
    }
    if (a.genre.toUpperCase() > b.genre.toUpperCase()) {
      return 1;
    }
    return 0;
  });
}

module.exports = router;
