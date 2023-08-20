import { TestBed } from '@angular/core/testing';

import { PartenaireserviceService } from './partenaireservice.service';

describe('PartenaireserviceService', () => {
  let service: PartenaireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartenaireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
