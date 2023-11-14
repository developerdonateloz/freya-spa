import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';
import { Usuariodto } from '../model/usuario.dto';

describe('UsuariosService', () => {
  let usuariosService: UsuariosService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuariosService],
    });
    usuariosService = TestBed.inject(UsuariosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(usuariosService).toBeTruthy();
  });
  it('get all usuarios', (doneFn) => {
    // Arrange
    const mockData: Usuariodto[] = [
      {
        id: 1,
        name: 'Oliver',
        lastname: 'Atom',
        username: 'oliveruser',
        password: 'abcdef',
      },
      {
        id: 2,
        name: 'Tom',
        lastname: 'Misaki',
        username: 'tomuser',
        password: '12345',
      },
    ];
    // Act
    usuariosService.getUsuarios().subscribe((data) => {
      // Assert
      expect(data.length).toEqual(mockData.length);
      doneFn();
    });

    const url = `http://localhost:3000/usuarios`;
    const req = httpController.expectOne(url);
    req.flush(mockData);
    httpController.verify();
  });
});
