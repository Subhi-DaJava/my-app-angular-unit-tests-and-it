import { Component } from '@angular/core';
import { My5Service } from 'src/app/services/my5.service';
@Component({
  selector: 'app-my5',
  templateUrl: './my5.component.html',
  styleUrls: ['./my5.component.css']
})
export class My5Component {

  data: any;
  errorMessage!: string;

  constructor(private my5Service: My5Service) { }

  fetchData() {
    this.my5Service.getData().subscribe( {
      next: value => {
        this.data = value;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }
}
