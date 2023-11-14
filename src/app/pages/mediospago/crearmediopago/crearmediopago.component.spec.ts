import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmediopagoComponent } from './crearmediopago.component';

xdescribe('CrearmediopagoComponent', () => {
  let component: CrearmediopagoComponent;
  let fixture: ComponentFixture<CrearmediopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearmediopagoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearmediopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
