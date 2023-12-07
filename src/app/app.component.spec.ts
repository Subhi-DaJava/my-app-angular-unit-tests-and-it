import { My2Component } from './components/my2/my2.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { FormsModule } from '@angular/forms';
import { My3Component } from './components/my3/my3.component';
import { My4Component } from './components/my4/my4.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyComponent,
        My2Component,
        My3Component,
        My4Component
      ],
      imports: [FormsModule]
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
