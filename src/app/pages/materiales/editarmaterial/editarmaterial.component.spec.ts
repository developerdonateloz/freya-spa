import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmaterialComponent } from './editarmaterial.component';

xdescribe('EditarmaterialComponent', () => {
  let component: EditarmaterialComponent;
  let fixture: ComponentFixture<EditarmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarmaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
