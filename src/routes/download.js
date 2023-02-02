const router = require('express').Router();
const { book } = require('../book/book');

//Скачать файл книги
router.get('/:id/download', function (req, res) {
  const { id } = req.params;

  const idx = book.findIndex(el => el.id == id);
  if (idx !== -1) {
    const filePath = book[idx].fileBook;

    if (filePath !== '') {
      console.log(filePath)
      res.download(filePath, function (err) {
        if (err) throw err
      });
    }
    else {
      res.render('errors/error404', {
        title: 'Файл не найден'
      });
    }
  }
  else {
    res.status(404);
    res.render('errors/error404', {
      title: 'Страница не найдена'
    })

  }
});

module.exports = router;

