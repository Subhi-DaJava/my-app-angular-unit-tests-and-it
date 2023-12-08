import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOneComponent } from './demo-one.component';

describe('DemoOneComponent, test units and integration: ', () => {
  let component: DemoOneComponent;
  let fixture: ComponentFixture<DemoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'angular-jest-demo-one'`, () => {
    expect(component.title).toEqual('angular-jest-demo-one');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-jest-demo-one app is running!');
  });
});
// generate one test suit without TestBed
describe('DemoOneComponent, test units', () => {
  let component: DemoOneComponent;
  beforeEach(async () => {
    component = new DemoOneComponent();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-jest-demo-one'`, () => {
    expect(component.title).toEqual('angular-jest-demo-one');
  });

});
