import {Component, Input} from "@angular/core";

@Component({
  selector: 'my-error-message',
  template: '<div data-testid="message-container">{{ message }}</div>',
  standalone: true
})

export class ErrorMessageComponent {
  @Input() message: string = 'Something went wrong!';
}


