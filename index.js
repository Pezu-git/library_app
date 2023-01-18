const express = require('express');
const config = require('./config');
const loginRouter = require('./routes/login');
const booksRouter = require('./routes/books');
const uploadRouter = require('./routes/upload');
const fileDownload = require('./routes/download')
const app = express();
app.use(express.json());

app.use('/public', express.static(__dirname + '/public'))

//auth
app.use('/login', loginRouter);

//books
app.use(config.API_URL, booksRouter);

//upload
app.use(config.API_URL, uploadRouter)

//download
app.use(config.API_URL, fileDownload);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
