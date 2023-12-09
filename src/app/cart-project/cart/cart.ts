import {Book} from "./book";
import {EventEmitter} from "@angular/core";

export class Cart {
  private books: Book[] = [];
  bookAdded = new EventEmitter<Book>();

  addBook(book: Book) {
    this.books = [...this.books, book];
    this.bookAdded.emit(book);
  }

  getBookList() {
    return this.books;
  }
}
