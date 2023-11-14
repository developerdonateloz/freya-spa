import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedordto } from '../model/proveedor.dto';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/ordenescompra`;
  }

  getAllProveedores(): Observable<Proveedordto[]> {
    return this.http.get<Proveedordto[]>(`${this.urlBase}`);
  }
}
