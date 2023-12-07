import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My4Component } from './my4.component';
import { By } from '@angular/platform-browser';

describe('My4Component', () => {
  let component: My4Component;
  let fixture: ComponentFixture<My4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it select the `h1` element in the `DOM` using the Angular testing utility `query()` method and 
  // the `By.css()` method. Then it compares the `textContent` of the element with the title.
  it('should display the title in a h1 element', () => {
    const title = 'Test Title';
    component.title = title;
    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element.textContent).toBe(title);
  });

});
