const router = require("express").Router();
const dbBooks = require("../lib/dbBooks");
const fs = require("fs");

//Скачать файл книги
router.get("/:id/download", async function (req, res) {
  const { id } = req.params;
  const book = await dbBooks.getById(id);

  const filePath = `public/files/${book.fileBook}`;
  if (filePath !== "" && fs.existsSync(filePath)) {
    res.download(filePath, function (err) {
      res.render("errors/error404", {
        title: "Файл не найден",
      });
    });
  } else {
    res.render("errors/error404", {
      title: "Файл не найден",
    });
  }
});

module.exports = router;
