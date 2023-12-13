import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';
import {first, of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any; // mock HttpClient

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(FakeService);
  // });

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn()
    }

    service = new FakeService(httpClientSpy);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataPokemons method', () => {

    const response = "Pokemon List";
    const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

    service.getDataPokemon().pipe(first()).subscribe((data: any) => {
      expect(data).toEqual(response);
    });

    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
    expect(httpClientSpy.get).toHaveReturnedTimes(1);
    expect(httpClientSpy.get).toHaveReturned();
  });

  it('should test getDataPokemons method with done Callback', (done) => {
    const response = "Pokemon List";
    const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

    service.getDataPokemon().subscribe(data => {
      expect(data).toEqual(response);
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
    expect(httpClientSpy.get).toHaveReturnedTimes(1);
    expect(httpClientSpy.get).toHaveReturned();
  });

  describe('handle error when getPokemonWithPipe', () => {
    it('should test getDataPokemonWithPipe', () => {

      const response = "Pokemon List with pipe";
      const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

      service.getDataPokemonWithPipe().pipe(first()).subscribe(
        {
          next: data => {
            expect(data).toEqual(response);
          },
          error: err => {
            console.log(err);
            expect(err).toEqual('Failed to fetch data');
          }
        }
      );

      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get).toHaveBeenCalledWith(url);
      expect(httpClientSpy.get).toHaveReturnedTimes(1);
      expect(httpClientSpy.get).toHaveReturned();
    });

    it('should test getDataPokemonWithPipe with asynchronous call with done',  (done) => {

      const response = "Pokemon List with pipe";
      const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

      service.getDataPokemonWithPipe().subscribe(
        {
          next: data => {
            expect(data).toEqual(response);
            done();
          },
          error: err => {
            console.log(err);
            expect(err).toEqual('Failed to fetch data');
          }
        }
      );

      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get).toHaveBeenCalledWith(url);
      expect(httpClientSpy.get).toHaveReturnedTimes(1);
      expect(httpClientSpy.get).toHaveReturned();
    });


    it('should test getDataPokemonWithPipe throw error', () => {

      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404,
        statusText: 'Not Found'
      })
      const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

      jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));

      service.getDataPokemonWithPipe().pipe(first()).subscribe(
        {
          next: data => {
            console.log(data);
          },
          error: err => {
            console.log(err);
            expect(err.message).toEqual(`server returned code ${errorResponse.status} with body "${errorResponse.error}"`);
            expect(err.message.error).toEqual('test 404 error');
            expect(err.message).toContain('test 404 error');
            expect(err.status).toEqual(404);
          }
        }
      );

      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get).toHaveBeenCalledWith(url);
      expect(httpClientSpy.get).toHaveReturnedTimes(1);
      expect(httpClientSpy.get).toHaveReturned();
    });

 //   it('should call handleError when getDataPokemonWithPipe fails, when handleError method is public', () => {
 //  const errorResponse = new HttpErrorResponse({
 //    error: 'test 404 error',
 //    status: 404,
 //    statusText: 'Not Found',
 //  });
 //  const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';
 //  jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));
 // const handleErrorSpy = jest.spyOn(service, 'handleError').mockImplementation(
 //    () => {
 //      return (error: HttpErrorResponse) => {
 //        console.error(error);
 //        const message = `server returned code ${error.status} with body "${error.error}"`;
 //        throw new Error(`operation failed: ${message}`);
 //      };
 //  });

  // service.getDataPokemonWithPipe().pipe(first()).subscribe(
  //   {
  //     next: data => {
  //       console.log(data);
  //     },
  //     error: err => {
  //       expect(handleErrorSpy).toHaveBeenCalledWith('Failed to fetch data');
  //     }
  //   }
  // );

//   expect(httpClientSpy.get).toHaveBeenCalled();
//   expect(httpClientSpy.get).toHaveBeenCalledWith(url);
//   expect(httpClientSpy.get).toHaveReturnedTimes(1);
//   expect(httpClientSpy.get).toHaveReturned();
// });

    it('should handle error when getDataPokemonWithPipe fails', (done) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });

  jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));

  service.getDataPokemonWithPipe().subscribe({
    next: () => done.fail('Expected to fail, but succeeded.'),
    error: (err) => {
      expect(err.message).toContain('Failed to fetch data');
      done();
    },
  });
});


    describe('should test postDataPokemon', () => {
      it('should test postDataPokemon', () => {

        const data = {
          name: 'Pikachu',
          type: 'Electric'
        };
        const response = {
          id: 1,
          name: 'Pikachu',
          type: 'Electric'
        };
        const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

        jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(response));

        service.postDataPokemonPost(data);

        expect(httpClientSpy.post).toHaveReturnedTimes(1);
        expect(httpClientSpy.post).toHaveBeenCalled();
        expect(httpClientSpy.post).toHaveReturned();
      });

      it('should return the response data after calling post method', () => {

          const data = {
            name: 'Pikachu',
            type: 'Electric'
          };
          const response = {
            id: 1,
            name: 'Pikachu',
            type: 'Electric'
          };
          const url = 'https://ng-pokemon-app-e2b6a.web.app/pokemons';

          jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(response));

          service.postDataPokemonPost(data).pipe(first()).subscribe(data => {
            expect(data).toEqual(response);
          });

          expect(httpClientSpy.post).toHaveReturnedTimes(1);
          expect(httpClientSpy.post).toHaveBeenCalled();
          expect(httpClientSpy.post).toHaveReturned();
      });
    });

  });
});
