const router = require("express").Router();
const fs = require("fs");
const { notEmpty } = require("../lib/notEmpty");
const axios = require("axios");
const BooksModel = require("../models/books");
const ChatsModel = require("../models/chats");
const dbBooks = require("../lib/dbBooks");
const dbChats = require("../lib/dbChats");
const { fillDB } = require("../book/book");
const config = require("../config");

//Начальное заполнение БД
router.get("/fillDB", (req, res) => {
  fillDB.forEach(async (item) => {
    const newBook = new BooksModel(item);
    try {
      await newBook.save();
    } catch (e) {
      res.status(500).json(e);
    }
  });
  res.redirect(`/books`);
});

//Получить все книги
router.get("/", async (req, res) => {
  const books = await dbBooks.getAll();

  //Информация по просмотрам
  const getCounter = async () => {
    let resArr = [];
    for (const item of books) {
      await axios
        .get(config.COUNTER_URL + `${item.title}`)
        .then(function (response) {
          resArr.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return resArr;
  };
  const response = await getCounter();

  res.render("books/index", {
    books: books,
    counter: response,
  });
});
//View Добавление книги
router.get("/create", (req, res) => {
  res.render("books/create");
});

//Получить книгу по id
router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const book = await dbBooks.getById(id);
  const chat = await dbChats.getByRoom(id);
  console.log(chat);
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
  const {
    title,
    description,
    author,
    favorite,
    fileCover,
    fileName,
    fileBook,
    publishing,
    count,
  } = req.body;
  const newBook = new BooksModel({
    title,
    author,
    description,
    publishing,
    count,
    favorite,
    fileCover,
    fileName,
    fileBook,
  });
  try {
    await newBook.save();
    res.status(201);
    res.redirect(`/`);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Страница изменения
router.get(`/update/:id`, async (req, res) => {
  const { id } = req.params;
  const book = await dbBooks.getById(id);
  res.render("books/update", {
    book: book,
  });
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
  const {
    title,
    description,
    author,
    favorite,
    fileName,
    publishing,
    count,
    fileCover,
    fileBook,
  } = req.body;
  const { id } = req.params;
  let cover = fileCover;
  let file = fileBook;
  if (fileCover === "") {
    const book = await dbBooks.getById(id);
    cover = book.fileCover;
  }
  if (fileBook === "") {
    const book = await dbBooks.getById(id);
    file = book.fileBook;
  }

  const data = {
    title: await notEmpty({ title: title }, id),
    description: await notEmpty({ description: description }, id),
    author: await notEmpty({ author: author }, id),
    favorite: await notEmpty({ favorite: favorite }, id),
    fileName: await notEmpty({ fileName: fileName }, id),
    publishing: await notEmpty({ publishing: publishing }, id),
    count: await notEmpty({ count: count }, id),
    fileCover: cover,
    fileBook: file,
  };

  await dbBooks.update(id, data);
  res.redirect(`/${id}`);
});

//Удалить книгу
router.post(`/delete/:id`, async (req, res) => {
  const { id } = req.params;
  const book = await dbBooks.getById(id);
  const cover = book.fileCover;
  const bookFile = book.fileBook;
  if (cover !== "" && fs.existsSync(`public/img/${cover}`)) {
    fs.unlink(`public/img/${cover}`, (err) => {
      if (err) throw err;
      console.log("Deleted cover");
    });
  }
  if (bookFile !== "" && fs.existsSync(`public/img/${bookFile}`)) {
    fs.unlink(`public/files/${bookFile}`, (err) => {
      if (err) throw err;
      console.log("Deleted file");
    });
  }
  await dbBooks.delete(id);
  res.redirect(`/`);
});

module.exports = router;
