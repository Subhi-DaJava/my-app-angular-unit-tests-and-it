import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Book} from "../../cart/book";
import {Cart} from "../../cart/cart";
import {CommonModule} from "@angular/common";
import {BookPreviewModule} from "../book-preview/book-preview.component";
// SCAM: Single Angular Component Module, which declares and exports a single component.
// create a ngModule for the BookListComponent
@Component({
  selector: 'app-booklist-shallow',
  templateUrl: './booklist-shallow.component.html',
  styleUrls: ['./booklist-shallow.component.css']
})
export class BooklistShallowComponent implements OnInit{
  @Input() bookList!: Book[]
  constructor(private cart: Cart) {
  }
  addBook(book: Book) {
    this.cart.addBook(book);
  }
  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [BooklistShallowComponent],
  exports: [BooklistShallowComponent],
  providers: [{provide: Cart}],
  imports: [
    BookPreviewModule,
    CommonModule
  ]
})
export class BooklistShallowModule {
}
