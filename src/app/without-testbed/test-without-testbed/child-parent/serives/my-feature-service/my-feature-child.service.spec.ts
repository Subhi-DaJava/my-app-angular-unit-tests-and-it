import { TestBed } from '@angular/core/testing';

import { MyFeatureChildService } from './my-feature-child.service';

describe('MyFeatureChildService', () => {
  let service: MyFeatureChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFeatureChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
