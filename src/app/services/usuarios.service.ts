import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UsuarioActualizadodto,
  UsuarioNuevodto,
  Usuariodto,
} from '../model/usuario.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = `http://localhost:3000/usuarios`;
  }

  createUsuario(usuarioNuevo: UsuarioNuevodto): Observable<UsuarioNuevodto> {
    return this.http.post<UsuarioNuevodto>(
      `${this.urlBase}/crear`,
      usuarioNuevo
    );
  }
  actualizarUsuario(
    id: number,
    usuarioActualizado: UsuarioActualizadodto
  ): Observable<Usuariodto> {
    return this.http.put<Usuariodto>(
      `${this.urlBase}/${id}`,
      usuarioActualizado
    );
  }
  getUsuario(id: number): Observable<Usuariodto> {
    return this.http.get<Usuariodto>(`${this.urlBase}/${id}`);
  }
  getUsuarios(): Observable<Usuariodto[]> {
    return this.http.get<Usuariodto[]>(`${this.urlBase}`);
  }
  eliminarUsuario(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBase}/${id}`);
  }
}
