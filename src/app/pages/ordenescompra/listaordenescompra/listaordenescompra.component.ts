import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompradto } from 'src/app/model/ordencompra.dto';
import { OrdenescompraService } from 'src/app/services/ordenescompra.service';

@Component({
  selector: 'app-listaordenescompra',
  templateUrl: './listaordenescompra.component.html',
  styleUrls: ['./listaordenescompra.component.scss'],
})
export class ListaordenescompraComponent implements OnInit {
  listOrdenesCompra: OrdenCompradto[] = [];
  constructor(
    private router: Router,
    private ordenescompraService: OrdenescompraService
  ) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.ordenescompraService.getOrdenesCompras().subscribe((res) => {
      this.listOrdenesCompra = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar la orden de compra seleccionada?')) {
      this.ordenescompraService.eliminarOrdenCompra(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
