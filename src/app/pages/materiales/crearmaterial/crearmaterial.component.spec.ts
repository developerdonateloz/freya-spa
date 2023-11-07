import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmaterialComponent } from './crearmaterial.component';

describe('CrearmaterialComponent', () => {
  let component: CrearmaterialComponent;
  let fixture: ComponentFixture<CrearmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
