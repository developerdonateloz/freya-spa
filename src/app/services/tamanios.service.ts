import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TamanioActualizadodto,
  TamanioNuevodto,
  Tamaniodto,
} from '../model/tamanio.dto';

@Injectable({
  providedIn: 'root',
})
export class TamaniosService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/ramanios/`;
  }

  createTamanio(TamanioNuevo: TamanioNuevodto): Observable<TamanioNuevodto> {
    return this.http.post<TamanioNuevodto>(
      `${this.urlBase}crear`,
      TamanioNuevo
    );
  }
  actualizarTamanio(
    id: number,
    usuarioActualizado: TamanioActualizadodto
  ): Observable<Tamaniodto> {
    return this.http.put<Tamaniodto>(
      `${this.urlBase}${id}`,
      usuarioActualizado
    );
  }
  getTamanio(id: number): Observable<Tamaniodto> {
    return this.http.get<Tamaniodto>(`${this.urlBase}${id}`);
  }
  getTamanios(): Observable<Tamaniodto[]> {
    return this.http.get<Tamaniodto[]>(`${this.urlBase}`);
  }
  eliminarTamanio(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}${id}`);
  }
}
