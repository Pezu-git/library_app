const express = require("express");
const config = require("./config");
const loginRouter = require("./routes/login");
const booksRouter = require("./routes/books");
const uploadRouter = require("./routes/upload");
const fileDownload = require("./routes/download");
const path = require("path");
const mongoose = require("mongoose");
// const errorMiddleware = require('./middleware/errors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, ".." + "/public")));
console.log(config.PORT);
//auth
app.use("/login", loginRouter);

//books
app.use(config.API_URL, booksRouter);

//upload
app.use(config.API_URL, uploadRouter);

//download
app.use(config.API_URL, fileDownload);

// app.use(errorMiddleware);
mongoose.set("strictQuery", true);

async function startServer(PORT, URL_DB) {
  try {
    await mongoose.connect(URL_DB);
    app.listen(PORT, () => {
      console.log(`Library listening port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

const URL_DB = config.URL_DB;
const PORT = config.PORT || 5000;

startServer(PORT, URL_DB);
