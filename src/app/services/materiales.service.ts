import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MaterialActualizadodto,
  MaterialNuevodto,
  Materialdto,
} from '../model/material.dto';

@Injectable({
  providedIn: 'root',
})
export class MaterialesService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/materiales/`;
  }

  createMaterial(
    MaterialNuevo: MaterialNuevodto
  ): Observable<MaterialNuevodto> {
    return this.http.post<MaterialNuevodto>(
      `${this.urlBase}crear`,
      MaterialNuevo
    );
  }
  actualizarMaterial(
    id: number,
    usuarioActualizado: MaterialActualizadodto
  ): Observable<Materialdto> {
    return this.http.put<Materialdto>(
      `${this.urlBase}${id}`,
      usuarioActualizado
    );
  }
  getMaterial(id: number): Observable<Materialdto> {
    return this.http.get<Materialdto>(`${this.urlBase}${id}`);
  }
  getMaterials(): Observable<Materialdto[]> {
    return this.http.get<Materialdto[]>(`${this.urlBase}`);
  }
  eliminarMaterial(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}${id}`);
  }
}
