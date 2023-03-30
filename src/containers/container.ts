import { Container } from "inversify";
import { BookRepository } from "../repository/BooksRepository/BookRepository";


const container = new Container();
container.bind(BookRepository).toSelf();


export { container }
