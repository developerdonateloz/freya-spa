import { TestBed } from '@angular/core/testing';

import { TiposproductoService } from './tiposproducto.service';

describe('TiposproductoService', () => {
  let service: TiposproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
