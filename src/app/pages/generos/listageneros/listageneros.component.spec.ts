import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagenerosComponent } from './listageneros.component';

describe('ListagenerosComponent', () => {
  let component: ListagenerosComponent;
  let fixture: ComponentFixture<ListagenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
