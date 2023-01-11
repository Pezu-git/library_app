const express = require('express');
const { v4: uuid } = require('uuid');
const { book } = require('book');
const { bookConstructor } = require('./bookConstructor/bookConstructor')


const app = express();
app.use(express.json());

app.get('/api/todo', (req, res) => {
  res.json(book);
});
app.get('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  const idx = todo.findIndex(el => el.id === id);

  if (idx !== -1) {
    res.json(book[idx])
  }
  else {
    res.status(404);
    res.json('404 | страница не найдена')
  }

});

app.post('/api/todo', (req, res) => {
  const { title, authors, favorite, fileCover, fileName } = req.body;
  const newBook = bookConstructor(title, authors, favorite, fileCover, fileName)
  book.push(newBook);

  res.status(201);
  res.json(newBook);
});

app.put('/api/todo/:id', (req, res) => {
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
app.delete('/api/todo', (req, res) => {

  const { id } = req.params;
  const idx = book.findIndex(el => el.id === id);

  if (idx !== -1) {
    book.splice(idx, 1);
  }
  else {
    req.status(404);
    req.json('404 | страница не найдена');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);