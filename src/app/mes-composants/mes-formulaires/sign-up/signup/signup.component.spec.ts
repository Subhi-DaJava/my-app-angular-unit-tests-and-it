import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#signupForm should be invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('#email field should be valid', () => {
    let email = component.signupForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.hasError('required')).toBeTruthy();
    expect(email.hasError('email')).toBeFalsy();

    email.setValue('test');
    expect(email.hasError('required')).toBeFalsy();
    expect(email.hasError('email')).toBeTruthy();

    email.setValue('test@gmail.com');
    expect(email.hasError('email')).toBeFalsy();
    expect(email.valid).toBeTruthy();

  });
});
