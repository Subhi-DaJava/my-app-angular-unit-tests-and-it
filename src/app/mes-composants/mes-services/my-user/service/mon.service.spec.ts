import { TestBed } from '@angular/core/testing';

import { MonService } from './mon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MonService', () => {
  let service: MonService;
  let httpMock: HttpTestingController
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonService],

    });
    service = TestBed.inject(MonService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should maMethode return "Hello world"', () => {
    expect(service.maMethode()).toEqual('Hello world');
  });
});
