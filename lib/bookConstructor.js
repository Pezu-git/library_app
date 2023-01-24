const { v4: uuid } = require('uuid');

module.exports.bookConstructor = (title, description, author, favorite, fileCover, fileName, fileBook, publishing, count) => {
  return {
    id: uuid(),
    title: title,
    description: description,
    author: author,
    publishing: publishing,
    count: count,
    favorite: favorite,
    fileCover: fileCover,
    fileName: fileName,
    fileBook: ''
  }
}