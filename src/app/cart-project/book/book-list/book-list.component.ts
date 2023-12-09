import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Book} from "../../cart/book";
import {Cart} from "../../cart/cart";
import {CommonModule} from "@angular/common";
import {BookPreviewModule} from "../book-preview/book-preview.component";
import {CartModule} from "../../cart/cart/cart.component";

/**
 * Last Step refactoring
 *
 * SCAM: Single Angular Component Module, which declares and exports a single component.
 * Delete the BookListModule from the AppModule declarations and exports.
 * Import Book Module that declares its components and exports the BookListComponent
 * Create the BookPreviewComponent and add it to the BookListComponent template, and @input Book as a property.
 */
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  @Input() bookList: Book[] = [
    new Book('Angular 16', 'John Doe'),
    new Book('Java 21', 'Jane Doe')
  ];

  constructor(private cart: Cart) {
  }

  addBook(book: Book) {
    this.cart.addBook(book);
  }

  ngOnInit(): void {
  }
}

// SCAM: Single Angular Component Module, which declares and exports a single component.

// create a ngModule for the BookListComponent
@NgModule({
  declarations: [BookListComponent],
  exports: [BookListComponent],
  imports: [
    BookPreviewModule,
    CommonModule,
    CartModule
  ],
  providers: [{provide: Cart}]
})
export class BookListModule {
}
