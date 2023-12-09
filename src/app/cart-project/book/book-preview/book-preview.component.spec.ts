import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';
import {Book} from "../../cart/book";

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPreviewComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Without TestBed
describe('BookPreviewComponent without TestBed', () => {
  let component: BookPreviewComponent;
  let book: Book;

  beforeEach(() => {
    book = new Book('Angular 16', 'John Doe');
    component = new BookPreviewComponent();
    component.book = book;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book title', () => {
    expect(component.book.title).toEqual('Angular 16');
  });
});
