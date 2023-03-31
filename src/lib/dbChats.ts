const ChatsModel = require("../models/chats");

const dbChats = {
    getAll: async () => {
        try {
            return await ChatsModel.find().select("-__v");
            // res.json(todo);
        } catch (e) {
            return e;
        }
    },

    getById: async (id: string) => {
        try {

            return await ChatsModel.findById(id).select("-__v");
        } catch (e) {
            return e;
        }
    },
    getByRoom: async (room: string) => {
        try {
            return await ChatsModel.find({ room: room }).select("-__v");
        } catch (e) {
            return e;
        }
    },

    update: async (id: string, data: any) => {
        console.log(data);
        try {
            await ChatsModel.findByIdAndUpdate(id, data);
            // res.redirect(`/api/todo/${id}`);
            console.log("OK");
        } catch (e) {
            return e;
        }
    },

    delete: async (id: string) => {
        try {
            await ChatsModel.deleteOne({ _id: id });
            console.log("OK");
        } catch (e) {
            return e;
        }
    },
};

export default dbChats
