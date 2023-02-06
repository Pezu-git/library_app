const router = require("express").Router();
const dbBooks = require("../lib/dbBooks");

//Скачать файл книги
router.get("/:id/download", async function (req, res) {
  const { id } = req.params;
  const book = await dbBooks.getById(id);

  const filePath = `public/files/${book.fileBook}`;
  console.log(filePath);
  if (filePath !== "") {
    console.log(filePath);
    res.download(filePath, function (err) {
      if (err) throw err;
    });
  } else {
    res.render("errors/error404", {
      title: "Файл не найден",
    });
  }
});

module.exports = router;
