import {Component, NgModule, OnInit} from '@angular/core';
import {Book} from "../book";
import {Cart} from "../cart";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  books: Book[] = [];
  constructor(private cart: Cart) {
  }
  ngOnInit(): void {
    this.cart.bookAdded.subscribe((book: Book) => {
      this.books = [...this.books, book];
    });
  }
}

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  providers: [{provide: Cart}],
  imports: [
    CommonModule
  ]
})
export class CartModule {
}
