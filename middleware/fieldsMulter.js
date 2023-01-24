const multer = require('multer');

//Файл книги
const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === 'book_cover') {
      cb(null, 'public/files')
    }
    if (file.fieldname === 'book_file') {
      cb(null, 'public/img')
    }
  },
  filename(req, file, cb) {
    if (file.fieldname === 'book_cover') {
      cb(null, `${file.originalname}`)
    }
    if (file.fieldname === 'book_file') {
      cb(null, `${file.originalname}`)
    }

  }
})

module.exports = multer({ storage });