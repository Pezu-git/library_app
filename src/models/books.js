const { Schema, model } = require("mongoose");

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
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: "",
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

module.exports = model("Books", booksShema);
