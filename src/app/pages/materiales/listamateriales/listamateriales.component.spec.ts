import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamaterialesComponent } from './listamateriales.component';

xdescribe('ListamaterialesComponent', () => {
  let component: ListamaterialesComponent;
  let fixture: ComponentFixture<ListamaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListamaterialesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListamaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
