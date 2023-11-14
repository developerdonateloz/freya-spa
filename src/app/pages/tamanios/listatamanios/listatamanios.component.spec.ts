import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatamaniosComponent } from './listatamanios.component';

xdescribe('ListatamaniosComponent', () => {
  let component: ListatamaniosComponent;
  let fixture: ComponentFixture<ListatamaniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListatamaniosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListatamaniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
