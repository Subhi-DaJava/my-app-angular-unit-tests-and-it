import { ComponentFixture, TestBed } from '@angular/core/testing';

import {BooklistShallowComponent, BooklistShallowModule} from './booklist-shallow.component';
import {Cart} from "../../cart/cart";
import {Book} from "../../cart/book";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('BooklistShallowComponent', () => {
  let component: BooklistShallowComponent;
  let fixture: ComponentFixture<BooklistShallowComponent>;
  let cart: Cart;
  let book1: Book;
  let book2: Book;

  function byDataRole(dataRole: string) {
    return By.css(`[data-role="${dataRole}"]`);
  }

  // instanciation du composant à tester, récupération de la référence du composant
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // same logic as for the BookListModule
     // declarations: [ BooklistShallowComponent ],
      imports: [BooklistShallowModule],
      // pour éviter cette erreur qui est liée au fait qu'Angular ne trouve pas le composant BookPreviewComponent, ne sait pas `binder` la propriété book,
      // getTitleList continue à chercher le titre de Book dans le DOM, parce que le Book Title est dans le BooKPreview composant.
      // au lieu de chercher le titre dans le DOM, vérifier qu'on passe bien les bonnes propriétés Book au composant BookPreview
      // modifier le function `getTitleList` et renommer `titleElementList` en `bookPreviewList`
      schemas: [NO_ERRORS_SCHEMA],
      providers: [Cart]
    })
    .compileComponents();
    // TestBed.createComponent va créer un composant de test and return a ComponentFixture, a reference to the component
    // The `fixture` est un helper qui permet à la fois d'accéder à l'instance du composant (grâce à `.componentInstance`),
    // à son template (grâce à `.nativeElement`, ou `debugElement`) et `detectChanges` qui permet de déclencher la change détection, détruire le composant
    // ou déclencher le cycle de vie du composant.
    fixture = TestBed.createComponent(BooklistShallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(
    () => {
      book1 = new Book('Angular 16', 'John Doe');
      book2 = new Book('Java 21', 'Jane Doe');
      // Le TestBed, l'injection de dépendance Angular fonctionne, on n'a plus besoin d'instancier les services manuellement
      // Les services vont être injectés dans le constructeur du composant dans BookListComponent par Angular
      cart = TestBed.inject(Cart);

    }
  );

  function getTitleList() {
    //Pour récupérer les éléments, qu'on utilise une propriété spéciale de `fixture` qui est le debugElement qui permet d'accéder au DOM
    // chercher ces élements par predicate, via un sélecteur CSS, avec l'objet `By` qui est fourni par Angular
    //const titleElementList = fixture.debugElement.queryAll(By.css('[data-role="app-book-preview"]'));
    const bookPreviewList = fixture.debugElement.queryAll(byDataRole('app-book-preview'));

    // retourner le tableau de titre
    return bookPreviewList.map(element => element.properties['book'].title);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the list de book and add a book to cart', () => {

    component.bookList = [book1, book2];

    component.addBook(book1);

    expect(cart.getBookList()).toContain(book1);
    expect(cart.getBookList()).toEqual([book1]);

  });

  it('should add(buy) a book with a click on the button, and this book is added to cart', () => {
    component.bookList = [book1, book2];
    fixture.detectChanges();
    // Récupérer la list de boutonBuy, parce que c'est un selector `queryAll`
    const  buttonList= fixture.debugElement.queryAll(byDataRole('buy-button'));
    // déclencher le click sur le bouton, deux façons de faire
    //1. buttonList[0].nativeElement.click();
    //2. déclencher n'importe quel événement grâce à la méthode `triggerEventHandler` du `debugElement`,
    // passer le nom de l'événement et un objet qui représente l'objet de l'événement que le Listener va recevoir, pas besoin d'appeler le composant `addBook` méthode
    buttonList[0].triggerEventHandler('click', {});

    expect(cart.getBookList()).toContain(book1);
    expect(cart.getBookList()).toEqual([book1]);
  });

});
