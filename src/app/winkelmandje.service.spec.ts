import { TestBed } from '@angular/core/testing';

import { WinkelmandjeService } from './winkelmandje.service';

describe('WinkelmandjeService', () => {
  let service: WinkelmandjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinkelmandjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
