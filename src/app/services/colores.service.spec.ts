import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ColoresService } from './colores.service';
import { Colordto } from '../model/color.dto';

describe('ColoresService', () => {
  let coloresService: ColoresService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColoresService],
    });

    coloresService = TestBed.inject(ColoresService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(coloresService).toBeTruthy();
  });
  it('get all colors', (doneFn) => {
    // Arrange
    const mockData: Colordto[] = [
      {
        id: 1,
        nombre: 'Amarillo',
      },
      {
        id: 2,
        nombre: 'Azul',
      },
    ];
    // Act
    coloresService.getColors().subscribe((data) => {
      // Assert
      expect(data.length).toEqual(mockData.length);
      doneFn();
    });

    const url = `http://localhost:3000/colores`;
    const req = httpController.expectOne(url);
    req.flush(mockData);
    httpController.verify();
  });
});
