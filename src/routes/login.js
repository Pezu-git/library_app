var router = require("express").Router();

//Авторизация
router.post("/", (req, res) => {
  res.status(201);
  res.json({ id: 1, mail: "test@mail.ru" });
});

module.exports = router;
