import { TestBed } from '@angular/core/testing';

import { MobileDetectionService } from './mobile-detection.service';

describe('MobileDetectionService', () => {
  let service: MobileDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
