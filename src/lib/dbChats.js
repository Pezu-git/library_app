const ChatsModel = require("../models/chats");

const dbChats = {
  getAll: async () => {
    try {
      const chats = await ChatsModel.find().select("-__v");
      return chats;
      // res.json(todo);
    } catch (e) {
      return e;
    }
  },

  getById: async (id) => {
    try {
      const chat = await ChatsModel.findById(id).select("-__v");
      return chat;
    } catch (e) {
      return e;
    }
  },
  getByRoom: async (room) => {
    try {
      const chat = await ChatsModel.find({ room: room }).select("-__v");
      return chat;
    } catch (e) {
      return e;
    }
  },

  update: async (id, data) => {
    console.log(data);
    try {
      await ChatsModel.findByIdAndUpdate(id, data);
      // res.redirect(`/api/todo/${id}`);
      console.log("OK");
    } catch (e) {
      return e;
    }
  },

  delete: async (id) => {
    try {
      await ChatsModel.deleteOne({ _id: id });
      console.log("OK");
    } catch (e) {
      return e;
    }
  },
};

module.exports = dbChats;
