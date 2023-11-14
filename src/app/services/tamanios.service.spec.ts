import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TamaniosService } from './tamanios.service';
import { Tamaniodto } from '../model/tamanio.dto';

describe('TamaniosService', () => {
  let tamaniosService: TamaniosService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TamaniosService],
    });
    tamaniosService = TestBed.inject(TamaniosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(tamaniosService).toBeTruthy();
  });
  it('get all tamanios', (doneFn) => {
    // Arrange
    const mockData: Tamaniodto[] = [
      {
        id: 1,
        descripcion: 'Masculino',
      },
      {
        id: 2,
        descripcion: 'Femenino',
      },
    ];
    // Act
    tamaniosService.getTamanios().subscribe((data) => {
      // Assert
      expect(data.length).toEqual(mockData.length);
      doneFn();
    });

    const url = `http://localhost:3000/tamanios`;
    const req = httpController.expectOne(url);
    req.flush(mockData);
    httpController.verify();
  });
});
