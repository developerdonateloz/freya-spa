import { Component, OnInit } from '@angular/core';
import { Generodto } from 'src/app/model/genero.dto';
import { GenerosService } from 'src/app/services/generos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listageneros',
  templateUrl: './listageneros.component.html',
  styleUrls: ['./listageneros.component.scss'],
})
export class ListagenerosComponent implements OnInit {
  listGeneros: Generodto[] = [];
  constructor(private router: Router, private generosService: GenerosService) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.generosService.getGeneros().subscribe((res) => {
      this.listGeneros = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el género seleccionado?')) {
      this.generosService.eliminarGenero(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
