import { TestBed } from '@angular/core/testing';

import { MyFeatureService } from './my-feature.service';

describe('MyFeatureService', () => {
  let service: MyFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
