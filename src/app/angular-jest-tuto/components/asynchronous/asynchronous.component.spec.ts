import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;


  beforeEach(async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as timeOutResponse 'Time Out Response'`, () => {
    expect(component.timeOutResponse).toEqual('Time Out Response');
    component.checkTimeOutSetting();
    expect(component.timeOutResponse).not.toEqual('setting setTimOut after 1 second');
    //jest.advanceTimersByTime(1000);
    jest.runAllTimers();
    expect(component.timeOutResponse).toEqual('setting setTimOut after 1 second');
    expect(setTimeout).toHaveReturnedTimes(1);
  });


});
