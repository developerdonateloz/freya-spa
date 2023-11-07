import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcolorComponent } from './crearcolor.component';

describe('CrearcolorComponent', () => {
  let component: CrearcolorComponent;
  let fixture: ComponentFixture<CrearcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearcolorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
