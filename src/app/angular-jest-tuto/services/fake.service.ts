import { Injectable } from '@angular/core';
import {catchError, Observable, tap} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  getDataPokemon(): Observable<any> {
    const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';
    return this.http.get<any>(url);
  }

  getDataPokemonWithPipe(): Observable<any> {
    const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';
    return this.http.get<any>(url).pipe(
      tap((data: any) =>  {
        console.log('Data fetched:', data)
      }),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  postDataPokemonPost(data: any): Observable<any> {
    const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(data, url, httpOptions);
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message = `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    }
  }

}
