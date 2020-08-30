import { TestBed } from '@angular/core/testing';

import { SharedservicebondsService } from './sharedservicebonds.service';

describe('SharedservicebondsService', () => {
  let service: SharedservicebondsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedservicebondsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
