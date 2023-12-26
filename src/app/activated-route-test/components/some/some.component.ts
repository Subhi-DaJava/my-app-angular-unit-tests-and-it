import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrls: ['./some.component.css']
    })
export class SomeComponent implements OnInit {
  
    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe( params => {
        switch(params['type']) { //  switch(params.type) {
          case 'Hello':
            console.log('Say Hello');
            break;
          case 'Bye':
            console.log('Say Bye');
            break;
          default:
            break;
        }
      });
    }
}  