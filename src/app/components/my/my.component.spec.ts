import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent } from './my.component';
import { FormsModule } from '@angular/forms';


describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the name property when the input is changed', () => {
    // Get the input element in class .name
    const input = fixture.nativeElement.querySelector(' .name input');

    // Set the input value
    input.value = 'test name';
    input.dispatchEvent(new Event('input'));

    // Trigger change detection
    fixture.detectChanges();

    // Check that the component's name property was updated
    expect(component.name).toEqual('test name');
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual('test name');
  });

});
