import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my8',
  templateUrl: './my8.component.html',
  styleUrls: ['./my8.component.css']
})
export class My8Component implements OnInit {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.isLoading = true;
    // Load your data here
  }

}
