const BooksModel = require("../models/books");

const dbBooks = {
  getAll: async () => {
    try {
      const books = await BooksModel.find().select("-__v");
      return books;
      // res.json(todo);
    } catch (e) {
      return e;
    }
  },

  getById: async (id) => {
    try {
      const book = await BooksModel.findById(id).select("-__v");
      return book;
    } catch (e) {
      return e;
    }
  },

  update: async (id, data) => {
    console.log(data);
    try {
      await BooksModel.findByIdAndUpdate(id, data);
      // res.redirect(`/api/todo/${id}`);
      console.log("OK");
    } catch (e) {
      return e;
    }
  },

  delete: async (id) => {
    try {
      await BooksModel.deleteOne({ _id: id });
      console.log("OK");
    } catch (e) {
      return e;
    }
  },
};

module.exports = dbBooks;
