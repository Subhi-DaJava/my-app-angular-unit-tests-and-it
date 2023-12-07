import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { My6Component } from './my6.component';
import { My6Service } from 'src/app/services/my6.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('My6Component', () => {
  let component: My6Component;
  let fixture: ComponentFixture<My6Component>;
  let service: My6Service;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My6Component ],
      providers: [My6Service],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My6Component);
    component = fixture.componentInstance;
    service = TestBed.inject(My6Service);
    httpMock = TestBed.inject(HttpTestingController);
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a POST request when the form is submitted', () => {
  
    // Set the form values
    const formData = { name: 'John', email: 'john@example.com' };
   // Spy on the service's method
    const spy = jest.spyOn(service, 'submitForm');
    component.form.setValue(formData);
    // Trigger the form submission
    component.onSubmit();

    // Check that the service's method was called
    expect(spy).toHaveBeenCalled();

    // Check that the HTTP request was made with the correct method and URL
    const req = httpMock.expectOne(`http://example.com/api`);
    expect(req.request.method).toEqual('POST');

    // Check that the HTTP request had the correct body
    expect(req.request.body).toEqual({
      name: 'John', email: 'john@example.com'
    });
    
    // Send a response
    req.flush({ message: 'Form submitted successfully' });

    // Check that the component's message property was updated
    expect(component.message).toEqual({"message": "Form submitted successfully"});

    // Verify that there are no outstanding requests
    httpMock.verify();
  });

  it('should set errorMessages when an error occurs', () => {
    // Arrange: Create an error response
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, 
      statusText: 'Not Found'
    });

    // Arrange: Spy on the service's method to return an error
    jest.spyOn(service, 'submitForm').mockReturnValue(throwError(() => errorResponse));

    // Arrange: Set the form values
    component.form.setValue({ name: 'John', email: 'john@example.com' });

    // Act: Trigger the form submission
    component.onSubmit();

    // Assert: Check that the component's errorMessages property was set
    expect(component.errorMessages).toBe('Http failure response for (unknown url): 404 Not Found');
  });

  it('should log error to console when an error occurs', () => {
    // Arrange: Create an error response
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, 
      statusText: 'Not Found'
    });

    // Arrange: Spy on the service's method to return an error
    jest.spyOn(service, 'submitForm').mockReturnValue(throwError(() => errorResponse));

    // Arrange: Spy on console.log
    const logSpy = jest.spyOn(console, 'log');

    // Arrange: Set the form values
    component.form.setValue({ name: 'John', email: 'john@example.com' });

    // Act: Trigger the form submission
    component.onSubmit();

    // Assert: Check that console.log was called with the error
    expect(logSpy).toHaveBeenCalledWith(errorResponse);
  });
});
