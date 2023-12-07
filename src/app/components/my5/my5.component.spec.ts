import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My5Component } from './my5.component';
import { My5Service } from 'src/app/services/my5.service';
import { Observable, of } from 'rxjs';


describe('My5Component', () => {
  let component: My5Component;
  let fixture: ComponentFixture<My5Component>;
  let myService: My5Service;
  const mockData = {
    name: 'John',
    admin: true,
    id: 1
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [My5Service],
      declarations: [My5Component]

    })
      .compileComponents();

    fixture = TestBed.createComponent(My5Component);
    myService = TestBed.inject(My5Service);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service when the button is clicked', () => {
    // Spy on the service's method
    const spy = jest.spyOn(myService, 'getData').mockReturnValue(of([]));
    // Trigger the button click
    const button = fixture.debugElement.nativeElement.querySelector('.getData button');
    button.dispatchEvent(new Event('click'));

    // Check that the service's method was called
    expect(spy).toHaveBeenCalled();
  });

  it('should set the data property when the service returns data', () => {
    // Spy on the service's method
    const testData = mockData
    jest.spyOn(myService, 'getData').mockReturnValue(of(testData));

    // Trigger the button click
    const button = fixture.debugElement.nativeElement.querySelector('.getData button');
    button.dispatchEvent(new Event('click'));
    component.fetchData();
    // Check that the component's data property was set
    expect(component.data).toEqual(testData);
  });

  it('should set the errorMessage property when the service returns an error', () => {
    // Spy on the service's method
    const testError = { message: 'An error occurred' };
    jest.spyOn(myService, 'getData').mockReturnValue(new Observable(observer => {
      observer.error(testError);
    }));

    // Trigger the button click
    const button = fixture.debugElement.nativeElement.querySelector('.getData button');
    button.dispatchEvent(new Event('click'));
    component.fetchData();
    // Check that the component's errorMessage property was set
    expect(component.errorMessage).toEqual(testError.message);
  });
});
