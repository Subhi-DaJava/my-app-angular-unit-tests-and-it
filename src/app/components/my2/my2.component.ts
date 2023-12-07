import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my2',
  templateUrl: './my2.component.html',
  styleUrls: ['./my2.component.css']
})
export class My2Component implements OnInit {

  @Output() titleEmitter = new EventEmitter<string>();
  title: string = 'Initial Title';
  emitedTitle: string = "";
  errorMessage!: string;

  ngOnInit(): void {
    this.titleEmitter.subscribe({
      next: (t: string) => {
        this.emitedTitle = t;
      },
      error: (err: string) => {
        this.errorMessage = err;
      }
    });
  }

  emitTitle() {
    this.titleEmitter.emit(this.title);
  }


}
