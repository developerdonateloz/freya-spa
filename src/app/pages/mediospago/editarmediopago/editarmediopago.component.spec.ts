import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmediopagoComponent } from './editarmediopago.component';

xdescribe('EditarmediopagoComponent', () => {
  let component: EditarmediopagoComponent;
  let fixture: ComponentFixture<EditarmediopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarmediopagoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmediopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
