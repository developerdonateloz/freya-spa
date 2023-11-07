import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ColorActualizadodto,
  ColorNuevodto,
  Colordto,
} from '../model/color.dto';

@Injectable({
  providedIn: 'root',
})
export class ColoresService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/`;
  }

  createColor(ColorNuevo: ColorNuevodto): Observable<ColorNuevodto> {
    return this.http.post<ColorNuevodto>(
      `${this.urlBase}colores/crear`,
      ColorNuevo
    );
  }
  actualizarColor(
    id: number,
    usuarioActualizado: ColorActualizadodto
  ): Observable<Colordto> {
    return this.http.put<Colordto>(
      `${this.urlBase}colores/actualizar/${id}`,
      usuarioActualizado
    );
  }
  getColor(id: number): Observable<Colordto> {
    return this.http.get<Colordto>(`${this.urlBase}colores/${id}`);
  }
  getColors(): Observable<Colordto[]> {
    return this.http.get<Colordto[]>(`${this.urlBase}colores`);
  }
  eliminarColor(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}colores/${id}`);
  }
}
