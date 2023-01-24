const express = require('express');
const config = require('./config');
const loginRouter = require('./routes/login');
const booksRouter = require('./routes/books');
const uploadRouter = require('./routes/upload');
const fileDownload = require('./routes/download')
// const errorMiddleware = require('./middleware/errors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use('/books', express.static(__dirname + '/public'))

//auth
app.use('/login', loginRouter);

//books
app.use(config.API_URL, booksRouter);

//upload
app.use(config.API_URL, uploadRouter)

//download
app.use(config.API_URL, fileDownload);

// app.use(errorMiddleware);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
