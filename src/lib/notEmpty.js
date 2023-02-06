// const { book } = require('../book/book');
const dbBooks = require("../lib/dbBooks");

//Проверяет поля на undefined
module.exports.notEmpty = async (field, idx) => {
  const book = await dbBooks.getById(idx);
  const key = Object.keys(field)[0];
  const value = field[`${key}`];
  const bookField = value ?? book[`${key}`];
  return bookField;
};
