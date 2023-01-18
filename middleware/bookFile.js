const multer = require('multer');

//Файл книги
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/files')
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

module.exports = multer({ storage });
