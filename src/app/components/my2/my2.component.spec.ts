import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My2Component } from './my2.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Subject, throwError } from 'rxjs';

describe('My2Component', () => {
  let component: My2Component;
  let fixture: ComponentFixture<My2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My2Component ],
      imports: [FormsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(My2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the title when the button is clicked', () => {
    const title = 'Test Title';
    let emittedTitle: string = ''; // Initialize the emittedTitle variable

    // subscribe to the output and save the emitted value
    component.titleEmitter.subscribe(t => emittedTitle = t);

    // set the title and click the button
    component.title = title;
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    // check that the output emitted the correct value
    expect(emittedTitle).toBe(title);
  });

  it('should emit the title when emitTitle is called', () => {
    //  To test the `emitTitle` method, you can create a spy for the `emit` method of `titleEmitter`,
    // call the `emitTitle` method, and then check that the spy was called with the correct arguments. Here's how you can do it
    jest.spyOn(component.titleEmitter, 'emit');
    component.title = 'test title';
    component.emitTitle();
    expect(component.titleEmitter.emit).toHaveBeenCalledWith('test title');
  });

  // subscribing to the `titleEmitter`, setting the `title` property to `'test title'`,
  // calling the `emitTitle` method, and then checking that the emitted value and the `emitedTitle` property are both `'test title'`
  it('should update the emitedTitle property when the title is emitted', (done) => {
    component.title = 'test title';
    component.titleEmitter.subscribe((value) => {
      expect(value).toBe('test title');
      expect(component.emitedTitle).toBe('test title');
      done();
    });
    component.emitTitle();
  });

  it('should call emitTitle when the button is clicked', () => {
    jest.spyOn(component, 'emitTitle');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.emitTitle).toHaveBeenCalled();
  });

  it('should handle errors when the titleEmitter emits an error', () => {
    const errorSubject = new Subject<string>();
    component.titleEmitter = errorSubject.asObservable() as any;
    component.ngOnInit();
    errorSubject.error('Test error');
    expect(component.errorMessage).toBe('Test error');
  });
  
});
