import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class My6Service {

  constructor(private http: HttpClient) { }

  private url = 'http://example.com/api';

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.url, formData);
  }
}
