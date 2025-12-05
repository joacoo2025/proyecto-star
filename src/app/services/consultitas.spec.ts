import { TestBed } from '@angular/core/testing';

import { Consultitas } from './consultitas';

describe('Consultitas', () => {
  let service: Consultitas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consultitas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
