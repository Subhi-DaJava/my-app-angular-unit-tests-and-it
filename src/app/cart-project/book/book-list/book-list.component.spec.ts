import {BookListComponent, BookListModule} from "./book-list.component";
import {Book} from "../../cart/book";
import {Cart} from "../../cart/cart";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {BookPreviewComponent} from "../book-preview/book-preview.component";


// TestBed va fournir toutes les couches bas niveau pour tester le composant
// décrire la suite de tests, test DOM and the view of the component, integration test or shallow test
describe('BookListComponent show the book list and a book to cart:  ', () => {

  let component: BookListComponent;
  let cart: Cart;
  let book1: Book;
  let book2: Book;
  let fixture: ComponentFixture<BookListComponent>

  function byDataRole(dataRole: string) {
    return By.css(`[data-role="${dataRole}"]`);
  }

  // configuration du TestBed avec le composant à tester, async & await pour attendre la fin du traitement pour pouvoir exécuter les tests
  beforeEach(async () => {
   await TestBed.configureTestingModule({
     // delete this declaration, and add imports after the @NgModule created for the BookListModule
      //declarations: [BookListComponent, BookPreviewComponent],
      imports: [BookListModule],
     // providers: [Cart]
    }).compileComponents();
  });

  // instanciation du composant à tester, récupération de la référence du composant
  beforeEach(() => {
    // TestBed.createComponent va créer un composant de test and return a ComponentFixture, a reference to the component
    // The `fixture` est un helper qui permet à la fois d'accéder à l'instance du composant (grâce à `.componentInstance`),
    // à son template (grâce à `.nativeElement`, ou `debugElement`) et `detectChanges` qui permet de déclencher la change détection, détruire le composant
    // ou déclencher le cycle de vie du composant.
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // la view est créée et le DOM est mis à jour
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
    //const titleElementList = fixture.debugElement.queryAll(By.css('[data-role="book-title"]'));
    const titleElementList = fixture.debugElement.queryAll(byDataRole('book-title'));

    // retourner le tableau de titre
    return titleElementList.map(element => element.nativeElement.textContent);
  }

  it('should creat component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the book list', () => {
    component.bookList = [book1, book2];

    // déclencher la change détection manuellement pour mettre à jour la vue, Angular n'a aucun moyen de savoir que le composant a changé (la propriété BookList a été changé)
    fixture.detectChanges();
    const titleList = getTitleList();

    expect(titleList).toContain('Angular 16');
    expect(titleList).toEqual(['Angular 16', 'Java 21']);
    expect(titleList.length).toBe(2);

    /*
    Pour éviter de coupler fortement les tests à la structure du DOM (h2, remplacé par h3),
    on peut rajouter un attribut (personalisé ou custom) sur le template qui servira pour les tests `data-role`="book-title"`,
    pour éviter d'impacter les tests si on change le type d'élément HTML dans le DOM

    const titleElementList = fixture.debugElement.queryAll(By.css('h2'));

    */

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

// décrire la suite de tests
describe('BookListComponent show the book list and add a book to cart with a bord side affect ', () => {

  let component: BookListComponent;
  let cart: Cart;
  let book1: Book;
  let book2: Book;

  beforeEach(
    () => {
      book1 = new Book('Angular 16', 'John Doe');
      book2 = new Book('Java 21', 'Jane Doe');

      cart = new Cart();
      component = new BookListComponent(cart);

    }
  );

  it('shows the list de book and add a book to cart', () => {

    component.bookList = [book1, book2];
    component.addBook(book1);

    expect(cart.getBookList()).toContain(book1);
    expect(cart.getBookList()).toEqual([book1]);

  });
});
