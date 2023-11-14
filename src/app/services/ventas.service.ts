import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  VentaActualizadodto,
  VentaNuevodto,
  Ventadto,
} from '../model/venta.dto';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/ventas`;
  }

  createVenta(usuarioNuevo: VentaNuevodto): Observable<VentaNuevodto> {
    return this.http.post<VentaNuevodto>(`${this.urlBase}/crear`, usuarioNuevo);
  }
  actualizarVenta(
    id: number,
    usuarioActualizado: VentaActualizadodto
  ): Observable<Ventadto> {
    return this.http.put<Ventadto>(`${this.urlBase}/${id}`, usuarioActualizado);
  }
  getVenta(id: number): Observable<Ventadto> {
    return this.http.get<Ventadto>(`${this.urlBase}/${id}`);
  }
  getVentas(): Observable<Ventadto[]> {
    return this.http.get<Ventadto[]>(`${this.urlBase}`);
  }
  eliminarVenta(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}/${id}`);
  }
}
