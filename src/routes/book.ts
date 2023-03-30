
import { Router } from 'express';
import { container } from '../containers/container';
import { BookRepository } from '../repository/BooksRepository/BookRepository';


const router = Router()

router.get('/:id', async (req, res) => {
    const repo = container.get(BookRepository);
    const book = await repo.getBook(req.params.id);
    res.json(book);
})

export { router }