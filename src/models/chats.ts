import { IChat } from './../interfaces/IChat';
import { Schema, model } from 'mongoose'

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

export const ChatsModel = model<IChat>('Chats', chatsShema)
