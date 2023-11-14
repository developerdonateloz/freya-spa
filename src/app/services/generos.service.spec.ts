import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GenerosService } from './generos.service';
import { Generodto } from '../model/genero.dto';

describe('GenerosService', () => {
  let generosService: GenerosService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenerosService],
    });
    generosService = TestBed.inject(GenerosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(generosService).toBeTruthy();
  });
  it('get all generos', (doneFn) => {
    // Arrange
    const mockData: Generodto[] = [
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
    generosService.getGeneros().subscribe((data) => {
      // Assert
      expect(data.length).toEqual(mockData.length);
      doneFn();
    });

    const url = `http://localhost:3000/generos`;
    const req = httpController.expectOne(url);
    req.flush(mockData);
    httpController.verify();
  });
});
