import { TestBed } from '@angular/core/testing';
import { UserChildService } from './user-child.service';

describe('UserChildService', () => {
  let service: UserChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
