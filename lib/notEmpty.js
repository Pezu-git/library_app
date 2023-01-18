const { book } = require('../book/book');

//Проверяет поля на undefined
module.exports.notEmpty = (field, idx) => {
  const key = Object.keys(field)[0];
  const value = field[`${key}`];
  const bookField = value ?? book[idx][`${key}`]
  return bookField
}