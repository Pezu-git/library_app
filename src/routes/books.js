const router = require("express").Router();
const { book } = require("../book/book");
const { bookConstructor } = require("../lib/bookConstructor");
const fs = require("fs");
const { notEmpty } = require("../lib/notEmpty");
const axios = require("axios");

//Получить все книги
router.get("/", async (req, res) => {
  //Информация по просмотрам
  const getCounter = async () => {
    let resArr = [];
    for (const item of book) {
      await axios
        .get(`http://cnt:8081/counter/${item.title}`)
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
  await res.render("books/index", {
    books: book,
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
  const idx = book.findIndex((el) => el.id === id);
  const title = book[idx].title;

  axios
    .get(`http://cnt:8081/counter/incr/${title}`)
    .then(function (response) {
      console.log(response.data);
      const data = response.data;
      let cnt = 0;
      if (data.result === "OK") {
        cnt = data.count;
      }
      if (idx !== -1) {
        res.render("books/view", {
          book: book[idx],
          cnt: cnt,
        });
      } else {
        res.status(404);
        res.render("errors/error404", {
          title: "Страница не найдена",
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

//Добавление книги
router.post("/create/", (req, res) => {
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
  const newBook = bookConstructor(
    title,
    description,
    author,
    favorite,
    fileCover,
    fileName,
    fileBook,
    publishing,
    count
  );

  book.push(newBook);
  res.status(201);

  res.redirect(`/books`);
});

//Страница изменения
router.get(`/update/:id`, (req, res) => {
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    res.render("books/update", {
      book: book[idx],
    });
  } else {
    res.status(404);
    res.render("errors/error404", {
      title: "Страница не найдена",
    });
  }
});

//Изменение данных книги
router.post(`/update/:id`, (req, res) => {
  const { title, description, author, favorite, fileName, publishing, count } =
    req.body;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id == id);

  if (idx !== -1) {
    book[idx] = {
      ...book[idx],
      title: notEmpty({ title: title }, idx),
      description: notEmpty({ description: description }, idx),
      author: notEmpty({ author: author }, idx),
      favorite: notEmpty({ favorite: favorite }, idx),
      fileName: notEmpty({ fileName: fileName }, idx),
      publishing: notEmpty({ publishing: publishing }, idx),
      count: notEmpty({ count: count }, idx),
    };
    res.redirect(`/books/${id}`);
  } else {
    res.status(404);
    res.render("errors/error404", {
      title: "Страница не найдена",
    });
  }
});

//Удалить книгу
router.post(`/delete/:id`, (req, res) => {
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id == id);

  if (idx !== -1) {
    console.log(book[idx]);
    const cover = book[idx].fileCover;
    fs.unlink(`public/${cover}`, (err) => {
      if (err) throw err;
      console.log("Deleted cover");
    });
    const bookFile = book[idx].fileBook;
    fs.unlink(bookFile, (err) => {
      if (err) throw err;
      console.log("Deleted file");
    });
    book.splice(idx, 1);
    res.redirect(`/books`);
  } else {
    res.status(404);
    res.render("errors/error404", {
      title: "Страница не найдена",
    });
  }
});

module.exports = router;
