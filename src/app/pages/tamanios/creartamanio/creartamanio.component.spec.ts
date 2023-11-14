import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartamanioComponent } from './creartamanio.component';

xdescribe('CreartamanioComponent', () => {
  let component: CreartamanioComponent;
  let fixture: ComponentFixture<CreartamanioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreartamanioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreartamanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
