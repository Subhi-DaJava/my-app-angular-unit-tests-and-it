import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My7Component } from './my7.component';

describe('My7Component', () => {
  let component: My7Component;
  let fixture: ComponentFixture<My7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My7Component);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call loadData on ngOnInit', () => {
    const spy = jest.spyOn(component, 'loadData');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should set the data property on loadData', () => {
    component.loadData();
    expect(component.data).toEqual('Data loaded');
  });

});
