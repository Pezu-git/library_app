const router = require('express').Router();
const { book } = require('../book/book');
const fileMulter = require('../middleware/bookFile');
const coverMulter = require('../middleware/bookCover');
const addFileToBook = require('../lib/addFileToBook');
const addCoverToBook = require('../lib/addCoverToBook');

//Загрузить файл книги
router.post('/upload_file/:id',
  fileMulter.single('book_file'),
  (req, res) => {
    if (req.file) {
      const { id } = req.params;
      const { path } = req.file;
      const { originalname } = req.file
      console.log(req.file)
      addFileToBook(path, originalname, id)
      res.json({ result: "OK", fileName: originalname });
    }
    res.json();
  });

//Загрузить обложку книги 
router.post('/upload_cover/:id',
  coverMulter.single('book_cover'),
  (req, res) => {
    if (req.file) {
      const { id } = req.params;
      const { path } = req.file;
      const { originalname } = req.file
      addCoverToBook(path, id)
      res.json({ result: "OK", fileName: originalname });
    }
    res.json();
  });

module.exports = router