import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  // La méthode range génère un tableau de nombres consécutifs de `start` à `end` - 1.
  // Par exemple, range(1, 5) renvoie le tableau [1, 2, 3, 4].
  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map(el=> el + start);
  }
}
