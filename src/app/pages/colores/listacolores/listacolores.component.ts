import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colordto } from 'src/app/model/color.dto';
import { ColoresService } from 'src/app/services/colores.service';

@Component({
  selector: 'app-listacolores',
  templateUrl: './listacolores.component.html',
  styleUrls: ['./listacolores.component.scss'],
})
export class ListacoloresComponent implements OnInit {
  listColores: Colordto[] = [];
  constructor(private router: Router, private coloresService: ColoresService) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.coloresService.getColors().subscribe((res) => {
      this.listColores = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el color seleccionado?')) {
      this.coloresService.eliminarColor(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
