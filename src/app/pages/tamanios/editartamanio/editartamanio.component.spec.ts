import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartamanioComponent } from './editartamanio.component';

describe('EditartamanioComponent', () => {
  let component: EditartamanioComponent;
  let fixture: ComponentFixture<EditartamanioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditartamanioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditartamanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
