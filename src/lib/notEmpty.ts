// const { book } = require('../book/book');
// const dbBooks = require("../lib/dbBooks");
import { container } from "../containers/container";
import { BookRepository } from "../repository/BooksRepository/BookRepository";
const repo = container.get(BookRepository);
//Проверяет поля на undefined
const notEmpty = async (field: Object, idx: string) => {
    const book = await repo.getBook(idx)
    const key = Object.keys(field)[0];
    const value = field[key as keyof Object];
    const bookField = value ?? book[key as keyof Object];
    return bookField;
};

export default notEmpty;
