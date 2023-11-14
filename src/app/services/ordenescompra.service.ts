import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OrdenCompraActualizadodto,
  OrdenCompraNuevodto,
  OrdenCompradto,
} from '../model/ordencompra.dto';

@Injectable({
  providedIn: 'root',
})
export class OrdenescompraService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/ordenescompra`;
  }

  createOrdenCompra(
    usuarioNuevo: OrdenCompraNuevodto
  ): Observable<OrdenCompraNuevodto> {
    return this.http.post<OrdenCompraNuevodto>(
      `${this.urlBase}/crear`,
      usuarioNuevo
    );
  }
  actualizarOrdenCompra(
    id: number,
    usuarioActualizado: OrdenCompraActualizadodto
  ): Observable<OrdenCompradto> {
    return this.http.put<OrdenCompradto>(
      `${this.urlBase}/${id}`,
      usuarioActualizado
    );
  }
  getOrdenCompra(id: number): Observable<OrdenCompradto> {
    return this.http.get<OrdenCompradto>(`${this.urlBase}/${id}`);
  }
  getOrdenesCompras(): Observable<OrdenCompradto[]> {
    return this.http.get<OrdenCompradto[]>(`${this.urlBase}`);
  }
  eliminarOrdenCompra(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}/${id}`);
  }
}
