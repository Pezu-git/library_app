const router = require('express').Router();
const { book } = require('../book/book');
const { bookConstructor } = require('../lib/bookConstructor');
const { notEmpty } = require('../lib/notEmpty');

//Получить все книги
router.get('/', (req, res) => {
  res.json(book);
});

//Получить книгу по id
router.get(`/:id`, (req, res) => {
  const { id } = req.params;
  const idx = book.findIndex(el => el.id === id);

  if (idx !== -1) {
    res.json(book[idx]);
  }
  else {
    res.status(404);
    res.json({ errcode: 404, errmessage: 'Page not found' });
  }
});

//Добавление книги
router.post('/', (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
  const newBook = bookConstructor(title, description, authors, favorite, fileCover, fileName, fileBook);
  book.push(newBook);
  res.status(201);
  res.json(newBook);
});

//Изменеие данных книги
router.put(`/:id`, (req, res) => {
  const { title, description, authors, favorite, fileName } = req.body;
  const { id } = req.params;
  const idx = book.findIndex(el => el.id == id);

  if (idx !== -1) {
    book[idx] = {
      ...book[idx],
      title: notEmpty({ title: title }, idx),
      description: notEmpty({ description: description }, idx),
      authors: notEmpty({ authors: authors }, idx),
      favorite: notEmpty({ favorite: favorite }, idx),
      fileName: notEmpty({ fileName: fileName }, idx)
    }
    res.json(book[idx]);
  }
  else {
    res.status(404);
    res.json({ errcode: 404, errmessage: 'Page not found' });
  }

});

//Удалить книгу
router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const idx = book.findIndex(el => el.id == id);

  if (idx !== -1) {
    book.splice(idx, 1);
    res.json('OK');
  }
  else {
    res.status(404);
    res.json({ errcode: 404, errmessage: 'Page not found' });
  }
});

module.exports = router;