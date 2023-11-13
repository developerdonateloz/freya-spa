import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaventasComponent } from './listaventas.component';

describe('ListaventasComponent', () => {
  let component: ListaventasComponent;
  let fixture: ComponentFixture<ListaventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaventasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
