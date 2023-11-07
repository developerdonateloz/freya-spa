import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MediopagoActualizadodto,
  MediopagoNuevodto,
  Mediopagodto,
} from '../model/mediopago.dto';

@Injectable({
  providedIn: 'root',
})
export class MediospagoService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/mediospago/`;
  }

  createMediopago(
    MediopagoNuevo: MediopagoNuevodto
  ): Observable<MediopagoNuevodto> {
    return this.http.post<MediopagoNuevodto>(
      `${this.urlBase}crear`,
      MediopagoNuevo
    );
  }
  actualizarMediopago(
    id: number,
    usuarioActualizado: MediopagoActualizadodto
  ): Observable<Mediopagodto> {
    return this.http.put<Mediopagodto>(
      `${this.urlBase}${id}`,
      usuarioActualizado
    );
  }
  getMediopago(id: number): Observable<Mediopagodto> {
    return this.http.get<Mediopagodto>(`${this.urlBase}${id}`);
  }
  getMediospago(): Observable<Mediopagodto[]> {
    return this.http.get<Mediopagodto[]>(`${this.urlBase}`);
  }
  eliminarMediopago(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}${id}`);
  }
}
