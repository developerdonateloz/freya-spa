import { TestBed } from '@angular/core/testing';

import { OrdenescompraService } from './ordenescompra.service';

describe('OrdenescompraService', () => {
  let service: OrdenescompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenescompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
