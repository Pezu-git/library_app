const { v4: uuid } = require('uuid');

module.exports.bookConstructor = (title, description, authors, favorite, fileCover, fileName, fileBook) => {
  return {
    id: uuid(),
    title: title,
    description: description,
    authors: authors,
    favorite: favorite,
    fileCover: fileCover,
    fileName: fileName,
    fileBook: fileBook
  }
}