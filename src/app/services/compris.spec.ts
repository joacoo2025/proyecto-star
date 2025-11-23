import { TestBed } from '@angular/core/testing';

import { Compris } from './compris';

describe('Compra', () => {
  let service: Compris;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Compris);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});