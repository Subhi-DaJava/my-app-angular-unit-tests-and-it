import {Book} from "./book";
import {Cart} from "./cart";

/**
 * Created on 08/12/2023
 */
describe('Cart for book', () => {

  // it('should add book to cart', () => {
  //   const  result = 25 +25
  //   expect(result).toBe(50);
  // });

  // xit('should add book to cart', () => {
  //   throw new Error('Test not implemented yet');
  // });

  it('should add book to cart', () => {

    const cart = new Cart();

    const book1 = new Book('Angular Programming 16', 'John Doe');
    const book2 = new Book('Java Programming 21', 'Jose Pierre');

    cart.addBook(book1);
    cart.addBook(book2);

    const books = cart.getBookList();
    expect(books.length).toBe(2);
    expect(books).toEqual([book1, book2]);
  });

  it.todo('should add book to cart');
  it.todo('should remove book from cart');
  it.todo('should get total price of books in cart');

});
