import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamediospagoComponent } from './listamediospago.component';

xdescribe('ListamediospagoComponent', () => {
  let component: ListamediospagoComponent;
  let fixture: ComponentFixture<ListamediospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListamediospagoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListamediospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
