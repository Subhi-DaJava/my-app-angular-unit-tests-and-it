import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { My6Service } from './my6.service';

describe('My6Service', () => {
  let service: My6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(My6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
