// import { Observable } from "rxjs";

// export class ActivatedRouteMock {
//     queryParams = new Observable( observer => {
//       const urlParams = {
//         type: 'Hello'
//       }
      
//       observer.next(urlParams);
//       observer.complete();
//     });
//   }
import { BehaviorSubject } from 'rxjs';

export class ActivatedRouteMock {
    private _queryParams = new BehaviorSubject({ type: 'Hello' });
    queryParams = this._queryParams.asObservable();

    setParams(params: any) {
        this._queryParams.next(params);
    }
}