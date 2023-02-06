const multer = require("multer");

//Обложка книги
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/img");
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

module.exports = multer({ storage });
