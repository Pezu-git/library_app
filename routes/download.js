const router = require('express').Router();
const { book } = require('../book/book');

//Скачать файл книги
router.get('/:id/download', function (req, res) {
  const { id } = req.params;
  const idx = book.findIndex(el => el.id == id);
  if (idx !== -1) {
    const filePath = book[idx].fileBook;
    if (filePath !== '') {
      res.download(filePath, function (err) {
        if (err) throw err
      });
    }
    else {
      res.status(404);
      res.json({ errcode: 404, errMessage: 'Image not found' })
    }
  }
  else {
    res.status(404);
    res.json({ errcode: 404, errMessage: 'Page not found' })
  }
});

module.exports = router;

