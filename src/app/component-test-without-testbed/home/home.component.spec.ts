import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  // without using Angular Test Bed
  let component: HomeComponent;
  // Create a fake TranslateService object with a mock translate method, here we are going to make a reference to keep translateService mock
  let translateMock: ReturnType<jest.Mock>;

  beforeEach(() => {
    // Create a fake TranslateService object with a mock translate method, 
    // in the beforeEach method, we are going to mock the translate service because we don't want to use the test service class internal methods
    translateMock = {
      // mock translate method  with jest.fn() method, this is simply how we mock the functions using jest.
      translate: jest.fn(() => {
        return 'translated Words'
      })
    };
    // Create a HomeComponent instance with the mock translate service, we are creating a component using a new keyword. We have to pass the dependency instance in the constructor.
    component = new HomeComponent(translateMock);
    jest.spyOn(component, 'ngOnInit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate words', () => {
    expect(component.translateWords('words')).toEqual('translated Words');
    expect(translateMock.translate).toHaveBeenCalledWith('This is a paragraph');
    expect(translateMock.translate).toHaveBeenCalledTimes(1);
  });
  it('should call ngOnInit', () => {
    component.ngOnInit(); // Triggers ngOnInit
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.translatedParagraph).toEqual('translated Words');
  });
});

