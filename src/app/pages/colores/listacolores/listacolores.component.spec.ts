import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacoloresComponent } from './listacolores.component';

describe('ListacoloresComponent', () => {
  let component: ListacoloresComponent;
  let fixture: ComponentFixture<ListacoloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacoloresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
