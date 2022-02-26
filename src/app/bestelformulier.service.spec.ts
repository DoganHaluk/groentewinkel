import { TestBed } from '@angular/core/testing';

import { BestelformulierService } from './bestelformulier.service';

describe('BestelformulierService', () => {
  let service: BestelformulierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestelformulierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
