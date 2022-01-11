// listar todos os livros
import * as GETBooks from '../requests/GETBooks.request';

describe('Get Books', () => {
    it('listar todos os livros', () => {
        GETBooks.allBooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})