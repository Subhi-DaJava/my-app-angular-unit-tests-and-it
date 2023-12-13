import {Component} from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent {
  timeOutResponse: string = 'Time Out Response';

  checkTimeOutSetting() {
    setTimeout(() => {
      console.log('Time Out Response by default');
      this.timeOutResponse = 'setting setTimOut after 1 second';
    }, 1000);
  }

}
