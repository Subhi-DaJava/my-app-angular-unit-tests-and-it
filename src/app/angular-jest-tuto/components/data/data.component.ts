import {Component, OnInit} from '@angular/core';
import {FakeService} from "../../services/fake.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  servieData: any;
  errorMessage: any;
  greeting: any;
  constructor(private fakeService: FakeService) {
  }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData() {
    this.fakeService.getDataPokemon().subscribe(  {
      next: data => {
        console.log('Data fetched:', data);
        this.servieData = data;
        // test branches
        this.setGreeting();
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.statusText;
      },
      complete: ()  => {
        console.log('Completed');
      }
    });
  }

  setGreeting() {
    if(this.servieData.time < 10) {
      this.greeting = 'Good Morning!';
    } else if(this.servieData.time < 20) {
      this.greeting = 'Have A Good Day!';
    } else {
      this.greeting = 'Good Evening!';
    }
  }

}
