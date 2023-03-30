// const { Schema, model } = require("mongoose");
import { Schema, model } from 'mongoose'

const booksShema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        default: "",
    },
    data: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        require: true,
    },
    publishing: {
        type: String,
        require: "",
    },
    count: {
        type: String,
        require: "",
    },
    favorite: {
        type: String,
        require: "",
    },
    fileCover: {
        type: String,
        require: "",
    },
    fileName: {
        type: String,
        require: "",
    },
    fileBook: {
        type: String,
        require: "",
    },
});
export const BooksModel = model('Books', booksShema)
// module.exports = model("Books", booksShema);
