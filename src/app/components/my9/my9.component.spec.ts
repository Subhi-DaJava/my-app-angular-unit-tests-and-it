import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { My9Component } from './my9.component';
import { By } from '@angular/platform-browser';

describe('My9Component', () => {
  let component: My9Component;
  let fixture: ComponentFixture<My9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My9Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(My9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('background should have correct color', () => {
    let customColor = 'rgb(0, 0, 0)';
    component.color = customColor;
    fixture.detectChanges();
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('.colored-div')).nativeElement;
    expect(colorEl.style.backgroundColor).toBe(customColor);
  });

  it('should have the correct default styles', () => {
    // Get the component's element
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.divBack')).nativeElement;
    let divBackgroundColor = 'rgb(255, 255, 255)';
    // Check that the component's element has the correct default styles
    expect(element.style.backgroundColor).toBe(divBackgroundColor);
    expect(element.style.color).toBe('rgb(0, 0, 0)');
  });


  it('should update styles when the `isLoading` property changes', () => {
    // Set the component's `isLoading` property
    //component.isLoading = true;
    // Get the component's element

    jest.spyOn(component, 'loadData');
  
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const componentEl = fixture.debugElement.query(By.css('.divBack')).nativeElement;
    expect(component.loadData).toHaveBeenCalled();
    // Check that the component's element has the correct updated styles
    expect(componentEl.style.backgroundColor).toBe('rgb(128, 128, 128)');
    expect(componentEl.style.color).toBe('rgb(255, 255, 255)');
  });

  it('should have the correct default styles', () => {
    // Get the component's element
    const element = fixture.debugElement.query(By.css('.divBack')).nativeElement

    // Check that the component's element has the correct default styles
    expect(element.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(element.style.color).toBe('rgb(0, 0, 0)');
  });

  // it('should update styles when the `isLoading` property changes', () => {
  //   // Set the component's `isLoading` property
  //   component.isLoading = true;
  //   fixture.detectChanges();

  //   // Get the component's element
  //   const element = fixture.nativeElement;

  //   // Check that the component's element has the correct updated styles
  //   expect(getComputedStyle(element).backgroundColor).toBe('rgb(128, 128, 128)');
  //   expect(getComputedStyle(element).color).toBe('rgb(255, 255, 255)');
  // });
});
