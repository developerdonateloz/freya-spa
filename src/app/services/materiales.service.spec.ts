import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MaterialesService } from './materiales.service';
import { Materialdto } from '../model/material.dto';

describe('MaterialesService', () => {
  let materialesService: MaterialesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MaterialesService],
    });
    materialesService = TestBed.inject(MaterialesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(materialesService).toBeTruthy();
  });
  it('get all materiales', (doneFn) => {
    // Arrange
    const mockData: Materialdto[] = [
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
    materialesService.getMaterials().subscribe((data) => {
      // Assert
      expect(data.length).toEqual(mockData.length);
      doneFn();
    });

    const url = `http://localhost:3000/materiales`;
    const req = httpController.expectOne(url);
    req.flush(mockData);
    httpController.verify();
  });
});
