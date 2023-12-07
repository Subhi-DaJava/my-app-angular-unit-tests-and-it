import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My8Component } from './my8.component';

describe('My8Component', () => {
  let component: My8Component;
  let fixture: ComponentFixture<My8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for the `isLoading` property', () => {
    // Check that the component's `isLoading` property has the correct value
    expect(component.isLoading).toBe(false);
  });

  it('should update the `isLoading` property when the `loadData` method is called', () => {
    // Call the `loadData` method
    component.loadData();

    // Check that the component's `isLoading` property was updated
    expect(component.isLoading).toBe(true);
  });

});
