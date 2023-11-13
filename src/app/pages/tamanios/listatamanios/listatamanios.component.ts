import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tamaniodto } from 'src/app/model/tamanio.dto';
import { TamaniosService } from 'src/app/services/tamanios.service';

@Component({
  selector: 'app-listatamanios',
  templateUrl: './listatamanios.component.html',
  styleUrls: ['./listatamanios.component.scss'],
})
export class ListatamaniosComponent implements OnInit {
  listTamanios: Tamaniodto[] = [];
  constructor(
    private router: Router,
    private tamaniosService: TamaniosService
  ) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.tamaniosService.getTamanios().subscribe((res) => {
      this.listTamanios = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el tamaño seleccionado?')) {
      this.tamaniosService.eliminarTamanio(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
