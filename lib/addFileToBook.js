const { book } = require('../book/book');

//Добавление файла книги в БД
const addFileToBook = (path, id) => {
  const idx = book.findIndex(el => el.id == id);
  if (idx !== -1) {
    book[idx].fileBook = path
  }
  else {
    res.status(404);
    res.json({ errcode: 404, errmessage: 'Page not found' })
  }
};

module.exports = addFileToBook