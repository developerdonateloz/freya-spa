import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearordencompraComponent } from './crearordencompra.component';

describe('CrearordencompraComponent', () => {
  let component: CrearordencompraComponent;
  let fixture: ComponentFixture<CrearordencompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearordencompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearordencompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
