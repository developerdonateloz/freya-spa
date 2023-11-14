import { TestBed } from '@angular/core/testing';

import { TiposproductoService } from './tiposproducto.service';

xdescribe('TiposproductoService', () => {
  let service: TiposproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
