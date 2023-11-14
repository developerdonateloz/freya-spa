import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacoloresComponent } from './listacolores.component';
import { ColoresService } from 'src/app/services/colores.service';

xdescribe('ListacoloresComponent', () => {
  let component: ListacoloresComponent;
  let fixture: ComponentFixture<ListacoloresComponent>;
  let coloresService: jasmine.SpyObj<ColoresService>;

  beforeEach(async () => {
    const coloresServiceSpy = jasmine.createSpyObj('ColoresService', [
      'getColors',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ListacoloresComponent],
      providers: [
        {
          provide: coloresService,
          useValue: coloresServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListacoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
