const { book } = require("../book/book");

//Добавление файла обложки в БД
const addCoverToBook = (path, id) => {
  const idx = book.findIndex((el) => el.id == id);
  if (idx !== -1) {
    book[idx].fileCover = path.replace("public", "");
  } else {
    res.status(404);
    res.json({ errcode: 404, errmessage: "Page not found" });
  }
};

module.exports = addCoverToBook;