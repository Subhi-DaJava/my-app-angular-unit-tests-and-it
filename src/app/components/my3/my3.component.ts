import { Component } from '@angular/core';

@Component({
  selector: 'app-my3',
  templateUrl: './my3.component.html',
  styleUrls: ['./my3.component.css']
})
export class My3Component {
  title: string = 'My3Component';

  getTitleInUpperCase(): string {
    this.title = this.title.toUpperCase();
    console.log(this.title);
    return this.title;
  }
}
