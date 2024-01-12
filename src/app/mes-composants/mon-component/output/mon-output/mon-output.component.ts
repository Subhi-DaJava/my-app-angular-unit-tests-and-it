import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mon-output',
  templateUrl: './mon-output.component.html',
  styleUrls: ['./mon-output.component.css']
})
export class MonOutputComponent {
  @Output() myEvent = new EventEmitter<string>();


  onButtonClick() {
    this.myEvent.emit('Hello world');
  }

}
