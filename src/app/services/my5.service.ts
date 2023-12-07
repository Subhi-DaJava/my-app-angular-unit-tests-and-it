import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class My5Service {

  getData(): Observable<any> {
    // Assume this method fetches data from an API or another source
    return of([{name: 'John', admin: true, id: 1}]);
  }
}
