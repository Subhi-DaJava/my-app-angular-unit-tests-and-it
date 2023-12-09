import {Component, Input, NgModule} from '@angular/core';
import {Book} from "../../cart/book";
import {CommonModule} from "@angular/common";
import {CartModule} from "../../cart/cart/cart.component";

// Last Step refactoring
// SCAM: Single Angular Component Module, which declares and exports a single component.
// Delete the BookPreviewComponent from the AppModule declarations and exports.
@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent {
  // La propriété @Input() permet de passer des données d'un composant parent à un composant enfant.
  @Input() book!: Book;

}

@NgModule({
  declarations: [BookPreviewComponent],
  exports: [BookPreviewComponent],
  imports: [
    CommonModule,
    CartModule
  ]
})
export class BookPreviewModule {
}
