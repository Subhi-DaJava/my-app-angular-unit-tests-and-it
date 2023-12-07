import { TestBed } from '@angular/core/testing';

import { My5Service } from './my5.service';

describe('My5Service', () => {
  let service: My5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(My5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
