import { TestBed } from '@angular/core/testing';

import { SharedserviceequityService } from './sharedserviceequity.service';

describe('SharedserviceequityService', () => {
  let service: SharedserviceequityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedserviceequityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
