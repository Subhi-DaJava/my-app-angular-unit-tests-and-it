import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PaginationComponent} from "./pagination.component";
import {By} from "@angular/platform-browser";
import {first} from "rxjs";
import {PageService} from "../../pagination-service/page.service";

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let mockPageService= {
    range:() => [1, 2, 3, 4, 5]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [{provide: PageService, useValue: mockPageService}] // mock instead of real service or implementation
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    TestBed.inject(PageService);

    component = fixture.componentInstance;
    component.total = 100;
    component.limit = 20;
    component.currentPage = 1;

    fixture.detectChanges();
  });

  it('should return an array of numbers from 1 to 5 when ngOnInit method is called with a correct numbers', () => {
    const rangeSpy = jest.spyOn(mockPageService, 'range');
    component.ngOnInit();
    expect(rangeSpy).toHaveBeenCalledWith(1, component.pagesCount + 1);
    expect(component.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 pages', () => {
    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]'));

    expect(pageContainers.length).toBe(5);
    expect(component.pagesCount).toBe(5)
    /*
    pageContainers.at(0)?.nativeElement.textContent
    utilise le chaînage optionnel. Cela signifie que si pageContainers.at(0) est null ou undefined,
    alors undefined sera retourné au lieu de lancer une erreur en essayant d'accéder à nativeElement.
     */
    expect(pageContainers.at(0)?.nativeElement.textContent).toEqual(' 1 ');
  });

  it('should emit a clicked page and equals to 1, first page', () => {
    let clickedPage: number | undefined;

    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]'));

    // trigger once to subscribe to the event (output)
    /*
    Ceci s'abonne à l'événement pageChangeEvent du composant.
    L'opérateur pipe(first()) garantit que l'abonnement ne se produit qu'une seule fois.
    Lorsque l'événement est déclenché, la fonction de rappel est appelée avec le numéro de la page
    qui a été cliquée, et ce numéro est stocké dans la variable clickedPage.
     */
    component.pageChangeEvent.pipe(first()).subscribe((page: number) => {
      clickedPage = page;
    });

    pageContainers.at(0)?.triggerEventHandler('click', {});

    expect(clickedPage).toEqual(1);
  });

  it('should call lifecycle hook ngOnInit', () => {
    jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should return an empty array or the pagesCount equal to zero', () => {
    component.total = 0;
    component.limit = 1;
    component.currentPage = 0;
    // Forcer le recalcul des pages
    component.ngOnInit();

    fixture.detectChanges();

    const pageContainers = fixture.debugElement.queryAll(By.css('[data-testid="page-container"]'));
    expect(component.pagesCount).toBe(0);
    expect(pageContainers.length).toBe(0);
    expect(component.pagesCount).toBe(0);
  });

});
