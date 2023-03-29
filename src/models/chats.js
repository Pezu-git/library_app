const { Schema, model } = require("mongoose");

const chatsShema = new Schema({
  room: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Chats", chatsShema);
