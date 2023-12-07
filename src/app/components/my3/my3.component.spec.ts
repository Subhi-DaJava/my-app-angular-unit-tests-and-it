import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My3Component } from './my3.component';

describe('My3Component', () => {
  let component: My3Component;
  let fixture: ComponentFixture<My3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the title in upper case when call getTitleInUpperCase method', () => {
    const title = 'My3Component';
    component.title = title;
    const result = component.getTitleInUpperCase();
    expect(result).toEqual('MY3COMPONENT');
    expect(result).toBe(title.toUpperCase());
  });

  it('should call getTitleInUpperCase method when click the button', () => {
    jest.spyOn(component, 'getTitleInUpperCase');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.getTitleInUpperCase).toHaveBeenCalled();
  });
});
