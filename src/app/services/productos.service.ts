import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoNuevodto, Productodto } from '../model/productodto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/productos`;
  }

  getProductos(): Observable<Productodto[]> {
    return this.http.get<Productodto[]>(`${this.urlBase}`);
  }
  createProducto(productoNuevo: ProductoNuevodto): Observable<Productodto> {
    return this.http.post<Productodto>(`${this.urlBase}/crear`, productoNuevo);
  }
}
