import { IBook } from "../../interfaces/Book";
import { dbBooks } from "../../lib/dbBooks";

// interface Request {
//     body: Book,
// }

export abstract class BookRepository {

    async createBook(book: any) {
        try {
            await book.save();
        } catch (e) {
            console.log(e)
        }

    };
    async getBook(id: string) {
        try {
            return await dbBooks.findById(id)
        } catch (e) {
            console.log(e)
        }
    };
    async getBooks() {
        try {
            return await dbBooks.getAll()
        } catch (e) {
            console.log(e)
        }
    };
    async updateBook(id: string, data: IBook) {
        try {
            await dbBooks.update(id, data)
        } catch (e) {
            console.log(e)
        }
    };
    async deleteBook(id: string) {
        try {
            await dbBooks.delete(id);
        }
        catch (e) {
            console.log(e)
        }

    };
}