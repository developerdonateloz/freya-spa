import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaordenescompraComponent } from './listaordenescompra.component';

describe('ListaordenescompraComponent', () => {
  let component: ListaordenescompraComponent;
  let fixture: ComponentFixture<ListaordenescompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaordenescompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaordenescompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
