import { My2Component } from './components/my2/my2.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { My3Component } from './components/my3/my3.component';
import { My4Component } from './components/my4/my4.component';
import { My5Component } from './components/my5/my5.component';
import { My6Component } from './components/my6/my6.component';
import { HttpClientModule } from '@angular/common/http';
import { My7Component } from './components/my7/my7.component';
import { My8Component } from './components/my8/my8.component';
import { My9Component } from './components/my9/my9.component';
import { HomeComponent } from './without-testbed/home/home.component';
import { HomeTestbedComponent } from './without-testbed/home-testbed/home-testbed.component';
import { MyFeatureComponent } from './without-testbed/test-without-testbed/my-features/my-feature/my-feature.component';
import {BookListComponent, BookListModule} from "./cart-project/book/book-list/book-list.component";
import {BooklistShallowComponent} from "./cart-project/book/booklist-shallow/booklist-shallow.component";
import {Cart} from "./cart-project/cart/cart";
import {BookPreviewComponent} from "./cart-project/book/book-preview/book-preview.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyComponent,
        My2Component,
        My3Component,
        My4Component,
        My5Component,
        My6Component,
        My7Component,
        My8Component,
        My9Component,
        HomeComponent,
        HomeTestbedComponent,
        MyFeatureComponent
      ],
      imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BookListModule],
      providers: [{provide: Cart}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const my = TestBed.createComponent(MyComponent);
    const my2 = TestBed.createComponent(My2Component);
    const app = fixture.componentInstance;
    const myapp = my.componentInstance;
    const my2app = my2.componentInstance;
    expect(app).toBeTruthy();
    expect(myapp).toBeTruthy();
    expect(my2app).toBeTruthy();
  });

  it(`should have as title 'my-app-jest-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app-jest-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('my-app-jest-test app is running!');
  });
});
