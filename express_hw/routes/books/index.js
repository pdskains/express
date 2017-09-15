const router = require('express').Router();

const books = [
  {
    id: 1,
    title: 'Mr.Norrell & Johnathan Strange',
    genre: 'Sci-fi',
    author: 'Susanna Clark',
    keywords: ['magic', 'british', 'mystery'],
  },
  {
    id: 2,
    title: 'Outlander',
    genre: 'Roamance',
    author: 'Diana Gabaldon',
    keywords: ['time travel', 'highlander', 'sci-fi romance'],
  },
  {
    id: 3,
    title: 'American Gods',
    genre: 'Fantasy',
    author: 'Neil Gaimon',
    keywords: ['fantasy', 'mythos', 'americana'],
  }
];

router.get('/', (request, response) => {
  const booksArray = (request.query.sort === 'genre') ? sortByGenre(books) : books;
  response.status(200).json(booksArray);
});

router.get('/', (request, response) => {
  response.status(200).json(books);
});

router.get('/:id', (request, response) => {
  let book;
  for(let i = 0; i < books.length; i++) {
    if (request.params.id.toString() === books[i].id.toString()) {
      book = books[i];
    }
  }

  response.status(200).json(book);
});

router.post('/', (request, response) => {
  const bookId = request.body.id;
  books.push(request.body);
  const book = getBook(books, bookId);
  response.status(200).json(book);
});

router.put('/:id', (request, response) => {
  const book = updateBook(books, request.body, request.params.id);
  response.status(200).json(book);
});

function getBook (array, id) {
  let book;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      book = array[i];
    }
  }
  return book;
}

function updateBook (array, newBook, id) {
  let book;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      array[i].title = newBook.title;
      array[i].genre = newBook.genre;
      array[i].rating = newBook.author;
      array[i].keywords = newBook.keywords;

      book = array[i];
    }
  }
  return book;
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
