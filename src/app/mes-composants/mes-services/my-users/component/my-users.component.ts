import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users.service';
import { User } from '../users-interface/user.interface';

@Component({
  selector: 'app-my-users',
  templateUrl: './my-users.component.html',
  styleUrls: ['./my-users.component.css']
})
export class MyUsersComponent implements OnInit {
  
  users$: Observable<User[]> = this.usersService.users$;
  
  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getAll().subscribe();
  }

}
