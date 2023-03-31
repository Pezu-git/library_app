
import axios from 'axios';
import { Router } from 'express';
import config from '../config';
import { container } from '../containers/container';
import { dbBooks } from '../lib/dbBooks';
import dbChats from '../lib/dbChats';
import { BookRepository } from '../repository/BooksRepository/BookRepository';
import * as fs from "fs"
import getCounter from '../lib/getCounter';
import { ChatsModel } from '../models/chats';



const router = Router()
const repo = container.get(BookRepository);
router.get('/:id', async (req, res) => {

    const book = await repo.getBook(req.params.id);
    res.json(book);
})

//Получить все книги
router.get("/", async (req, res) => {
    try {
        const books = await repo.getBooks();

        //Информация по просмотрам
        const response = await getCounter(books);

        res.render("books/index", {
            books: books,
            counter: response,
        });
    }
    catch (e) {
        console.log(e)
    }

});

//View Добавление книги
router.get("/create", (req, res) => {
    res.render("books/create");
});

//Получить книгу по id
router.get(`/:id`, async (req, res) => {
    const { id } = req.params;
    const book = await repo.getBook(id)
    const chat = await dbChats.getByRoom(id);
    const title = book.title;
    axios
        .get(config.COUNTER_URL + `incr/${title}`)
        .then(function (response) {
            const data = response.data;
            let cnt = 0;
            if (data.result === "OK") {
                cnt = data.count;
            }
            res.render("books/view", {
                book: book,
                cnt: cnt,
                chat: chat,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});

//Добавление книги
router.post("/create/", async (req, res) => {
    try {
        await repo.createBook(req)
        res.status(201);
        res.redirect(`/`);
    } catch (e) {
        res.status(500).json(e);
    }
});

//Страница изменения
router.get(`/update/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const book = await repo.getBook(id)
        res.render("books/update", {
            book: book,
        });
    }
    catch (e) {
        console.log(e)
    }
});

//Сохранение сообщения
router.post(`/chat/create`, async (req, res) => {
    const { room, sender, message } = req.body;
    console.log(req.body);
    const newChat = new ChatsModel({
        room,
        sender,
        message,
    });
    try {
        await newChat.save();
        res.status(201);
        res.redirect(`/`);
    } catch (e) {
        res.status(500).json(e);
    }
});

//Изменение данных книги
router.post(`/update/:id`, async (req, res) => {
    const { id } = req.params;

    await repo.updateBook(req);
    res.redirect(`/${id}`);
});

//Удалить книгу
router.post(`/delete/:id`, async (req, res) => {
    const { id } = req.params;
    const book = await repo.getBook(id)
    const cover = book.fileCover;
    const bookFile = book.fileBook;
    try {
        await repo.deleteBook(id, cover, bookFile);
        res.redirect(`/`);
    }
    catch (e) {
        console.log(e)
    }

});

export { router }