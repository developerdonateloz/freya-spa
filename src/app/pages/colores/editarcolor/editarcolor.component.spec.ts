import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcolorComponent } from './editarcolor.component';

describe('EditarcolorComponent', () => {
  let component: EditarcolorComponent;
  let fixture: ComponentFixture<EditarcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcolorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
