import { TestBed } from '@angular/core/testing';

import { MediospagoService } from './mediospago.service';

xdescribe('MediospagoService', () => {
  let service: MediospagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediospagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
