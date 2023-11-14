import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreargeneroComponent } from './creargenero.component';

xdescribe('CreargeneroComponent', () => {
  let component: CreargeneroComponent;
  let fixture: ComponentFixture<CreargeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreargeneroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreargeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
