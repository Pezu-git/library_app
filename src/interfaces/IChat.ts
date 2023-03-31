import { Document } from "mongoose";

export interface IChat extends Document {
    room: string;
    sender: string;
    message: string;
}
