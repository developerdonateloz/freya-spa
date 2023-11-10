import { Component, OnInit } from '@angular/core';
import { Usuariodto } from 'src/app/model/usuario.dto';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss'],
})
export class ListausuariosComponent implements OnInit {
  listUsuarios: Usuariodto[] = [];
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.usuariosService.getUsuarios().subscribe((res) => {
      this.listUsuarios = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el usuario seleccionado?')) {
      this.usuariosService.eliminarUsuario(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
