import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargeneroComponent } from './editargenero.component';

describe('EditargeneroComponent', () => {
  let component: EditargeneroComponent;
  let fixture: ComponentFixture<EditargeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditargeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditargeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
