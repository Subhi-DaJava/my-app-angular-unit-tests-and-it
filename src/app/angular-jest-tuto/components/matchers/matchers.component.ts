import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent {

  compileProcess() {
    throw new Error('Error thrown by compileProcess()');
  }

}
