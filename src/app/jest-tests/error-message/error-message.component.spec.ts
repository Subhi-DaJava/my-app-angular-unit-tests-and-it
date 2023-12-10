import {ErrorMessageComponent} from "./error-message.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the error message by default', () => {
    //const messageContainer = fixture.nativeElement.querySelector('[data-testid="message-container"]');
    const messageContainer = fixture.debugElement.query(By.css('[data-testid="message-container"]'));
    expect(messageContainer.nativeElement.textContent).toBe('Something went wrong!');
  });

  it('should render the custom error message', () => {
    component.message = 'Custom error message!';
    fixture.detectChanges(); // trigger change input value and re-render component template
    const messageContainer = fixture.debugElement.query(By.css('[data-testid="message-container"]'));
    expect(messageContainer.nativeElement.textContent).toBe('Custom error message!');
  });

});
