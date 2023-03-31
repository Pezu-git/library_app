import { IBook } from '../../interfaces/IBook';
import { dbBooks } from "../../lib/dbBooks";
import { injectable } from "inversify";
import { BooksModel } from '../../models/books';
import notEmpty from '../../lib/notEmpty';
import * as fs from 'fs';
interface Params {
    id?: string
}

interface Request {
    body: IBook,
    params: Params
}
@injectable()
export abstract class BookRepository {

    async createBook(req: Request) {
        const {
            title,
            description,
            author,
            favorite,
            fileCover,
            fileName,
            fileBook,
            publishing,
            count,
        } = req.body;
        const newBook = new BooksModel({
            title,
            author,
            description,
            publishing,
            count,
            favorite,
            fileCover,
            fileName,
            fileBook,
        });
        return await dbBooks.createBook(newBook);
    };
    async getBook(id: string) {
        return await dbBooks.getById(id)
    };
    async getBooks() {
        return await dbBooks.getAll()

    };
    async updateBook(req: Request) {
        const {
            title,
            description,
            author,
            favorite,
            fileName,
            publishing,
            count,
            fileCover,
            fileBook,
        } = req.body;
        const { id } = req.params;
        let cover = fileCover;
        let file = fileBook;
        if (fileCover === "") {
            const book = await dbBooks.getById(id);
            cover = book.fileCover;
        }
        if (fileBook === "") {
            const book = await dbBooks.getById(id);
            file = book.fileBook;
        }

        const data = {
            title: await notEmpty({ title: title }, id),
            description: await notEmpty({ description: description }, id),
            author: await notEmpty({ author: author }, id),
            favorite: await notEmpty({ favorite: favorite }, id),
            fileName: await notEmpty({ fileName: fileName }, id),
            publishing: await notEmpty({ publishing: publishing }, id),
            count: await notEmpty({ count: count }, id),
            fileCover: cover,
            fileBook: file,
        };
        await dbBooks.update(id, data)
    };
    async deleteBook(id: string, cover: string, bookFile: string) {
        if (cover !== "" && fs.existsSync(`public/img/${cover}`)) {
            fs.unlink(`public/img/${cover}`, (err) => {
                if (err) throw err;
                console.log("Deleted cover");
            });
        }
        if (bookFile !== "" && fs.existsSync(`public/img/${bookFile}`)) {
            fs.unlink(`public/files/${bookFile}`, (err) => {
                if (err) throw err;
                console.log("Deleted file");
            });
        }

        await dbBooks.delete(id);

    };
}