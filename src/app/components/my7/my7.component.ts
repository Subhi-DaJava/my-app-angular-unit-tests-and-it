import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my7',
  templateUrl: './my7.component.html',
  styleUrls: ['./my7.component.css']
})
export class My7Component implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Load your data here
    this.data = 'Data loaded';
  }
}