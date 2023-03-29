

export interface IBook extends Document {
    id: string;
    title: string;
    description: string;
    author: string;
    favorite: string;
    fileCover: string;
    fileName?: string;
    fileBook?: string;
    publishing: string
    count: string;
}
