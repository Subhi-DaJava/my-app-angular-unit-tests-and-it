import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('compileProcess', () => {
    it('should throw an error', () => {
      expect(() => {
        component.compileProcess();
      }).toThrow('Error thrown by compileProcess()');
    });

    it('should throw an error with a specific message', () => {
      expect( () => component.compileProcess()).toThrow();
      expect( () => component.compileProcess()).toThrow(Error);
      expect( () => component.compileProcess()).toThrow('Error thrown by compileProcess()');
      expect( () => component.compileProcess()).toThrow(/Error thrown /);
    });
  });
});
