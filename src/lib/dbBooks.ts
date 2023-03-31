import { IBook } from '../interfaces/IBook';
import { BooksModel } from './../models/books';

const dbBooks = {
    createBook: async (newBook: IBook) => {
        try {
            await newBook.save();
        } catch (e) {

        }
    },

    getAll: async (): Promise<IBook[]> => {
        // try {
        return await BooksModel.find().select("-__v");
        // res.json(todo);
        // } catch (e) {
        //     return (e as Error).message;
        // }
    },

    getById: async (id: string): Promise<IBook> => {

        return await BooksModel.findById(id).select("-__v");

    },

    update: async (id: string, data: Object): Promise<void> => {

        await BooksModel.findByIdAndUpdate(id, data);

    },

    delete: async (id: string): Promise<void> => {
        await BooksModel.deleteOne({ _id: id });

    },
};

export { dbBooks }
