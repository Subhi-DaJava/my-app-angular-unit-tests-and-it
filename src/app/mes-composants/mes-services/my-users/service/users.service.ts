import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../users-interface/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$ = new BehaviorSubject([] as User[]);

  readonly url: string = 'https://jsonplaceholder.typicode.com/users';

  readonly users$: Observable<User[]> = this._users$.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        tap((users: User[]) => {
          this._users$.next(users);
        })
      );
  }
}
