import { Component, OnInit } from '@angular/core';
import { MonService } from '../service/mon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {
  users!: any[];
  constructor(private service: MonService) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.service.getUsers().subscribe({
      next: (users: any[]) =>
      this.users = users,
      error: (err: any) => console.log(err)
    });  
  }
  
}
