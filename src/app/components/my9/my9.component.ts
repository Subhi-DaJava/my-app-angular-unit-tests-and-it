import { Component } from '@angular/core';

@Component({
  selector: 'app-my9',
  templateUrl: './my9.component.html',
  styleUrls: ['./my9.component.css']
})
export class My9Component {
  isLoading: boolean = false;
  color: string = 'rgb(255, 255, 255)';
  backgdColor: string = 'rgb(255, 255, 255)';
  textColor: string = 'rgb(0, 0, 0)';
  ngOnInit(): void {
  }

  loadData() {
    this.isLoading = true;
    this.backgdColor = 'rgb(128, 128, 128)';
    this.textColor = 'rgb(255, 255, 255)';
  }

  loadData2() {
    this.color = 'rgb(0, 0, 0)';
  }
}
