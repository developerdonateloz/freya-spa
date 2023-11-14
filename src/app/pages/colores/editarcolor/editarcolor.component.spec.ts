import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcolorComponent } from './editarcolor.component';
import { ColoresService } from 'src/app/services/colores.service';
import { ActivatedRoute } from '@angular/router';

xdescribe('EditarcolorComponent', () => {
  let component: EditarcolorComponent;
  let fixture: ComponentFixture<EditarcolorComponent>;
  let coloresService: jasmine.SpyObj<ColoresService>;
  let activatedRouteService: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const coloresServiceSpy = jasmine.createSpyObj('ColoresService', [
      'actualizarColor',
      'getColor',
    ]);

    await TestBed.configureTestingModule({
      declarations: [EditarcolorComponent],
      providers: [
        {
          provide: ColoresService,
          useValue: coloresServiceSpy,
        },
        {
          provide: ColoresService,
          useValue: coloresServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
