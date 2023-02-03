use books;

### Запрос(ы) для вставки данных минимум о двух книгах в коллекцию books

    try {db.books.insertMany([
        {title: "book1",description: "book about mongoDB",authors: "unknown"},
        {title: "book2", description: "book about node js", authors: "no-name"}
    ])} catch (e) {
        console.log(e);
        }

### Запрос для поиска полей документов коллекции books по полю title

    db.books.find({ "title": "book2" })

    {title: "book2", description: "book about node js", authors: "no-name"}

### Запрос для редактирования полей: description и authors коллекции books по \_id записи

    db.books.updateOne({title : "book1"}, {$set: {description : "About Mongo v1", authors: "I`am"}})

    {title: "book1", description: "About Mongo v1", authors: "I`am"}
