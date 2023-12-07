import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { My6Service } from 'src/app/services/my6.service';

@Component({
  selector: 'app-my6',
  templateUrl: './my6.component.html',
  styleUrls: ['./my6.component.css']
})
export class My6Component {
  form: FormGroup;
  errorMessages!: string;
  message!: string;
  
  constructor(
    private fb: FormBuilder,
    private my6Service: My6Service) {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.my6Service.submitForm(this.form.value).subscribe({
        next: (response: any) => {
          this.message = response;
          console.log(response);
        },
        error: (error: any) => {
          this.errorMessages = error.message;
          console.log(error);
        }
      });
    }
  }
}
