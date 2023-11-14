import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GeneroActualizadodto,
  GeneroNuevodto,
  Generodto,
} from '../model/genero.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/generos`;
  }

  createGenero(generoNuevo: GeneroNuevodto): Observable<GeneroNuevodto> {
    return this.http.post<GeneroNuevodto>(`${this.urlBase}/crear`, generoNuevo);
  }
  actualizarGenero(
    id: number,
    usuarioActualizado: GeneroActualizadodto
  ): Observable<Generodto> {
    return this.http.put<Generodto>(
      `${this.urlBase}/actualizar/${id}`,
      usuarioActualizado
    );
  }
  getGenero(id: number): Observable<Generodto> {
    return this.http.get<Generodto>(`${this.urlBase}/${id}`);
  }
  getGeneros(): Observable<Generodto[]> {
    return this.http.get<Generodto[]>(`${this.urlBase}`);
  }
  eliminarGenero(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}/${id}`);
  }
}
