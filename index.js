const express = require('express');
const { v4: uuid } = require('uuid');
const { book } = require('./book/book');
const { bookConstructor } = require('./bookConstructor/bookConstructor')
const config = require('./config');


const app = express();
app.use(express.json());

//auth
app.post('/api/user/login', (req, res) => {

  res.status(201);
  res.json({ id: 1, mail: "test@mail.ru" });
});

//get all books
app.get(config.API_URL, (req, res) => {
  res.json(book);
});
app.get(`${config.API_URL}/:id`, (req, res) => {
  const { id } = req.params;
  const idx = book.findIndex(el => el.id === id);

  if (idx !== -1) {
    res.json(book[idx])
  }
  else {
    res.status(404);
    res.json('404 | страница не найдена')
  }

});


//create book
app.post(config.API_URL, (req, res) => {
  const { title, authors, favorite, fileCover, fileName } = req.body;
  const newBook = bookConstructor(title, authors, favorite, fileCover, fileName)
  book.push(newBook);

  res.status(201);
  res.json(newBook);
});

//book update
app.put(`${config.API_URL}/:id`, (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName } = req.body;
  const { id } = req.params;

  const idx = book.findIndex(el => el.id === id)

  if (idx !== -1) {
    book[idx] = {
      ...book[idx],
      title, description, authors, favorite, fileCover, fileName
    }

    res.json(book[idx])
  }
  else {
    req.status(404);
    req.json('404 | страница не найдена');
  }

});

//delete book
app.delete(`${config.API_URL}/:id`, (req, res) => {

  const { id } = req.params;
  const idx = book.findIndex(el => el.id === id);

  if (idx !== -1) {
    book.splice(idx, 1);
    req.json('OK');
  }
  else {
    req.status(404);
    req.json('404 | страница не найдена');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);