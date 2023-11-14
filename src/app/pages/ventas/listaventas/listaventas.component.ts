import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ventadto } from 'src/app/model/venta.dto';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-listaventas',
  templateUrl: './listaventas.component.html',
  styleUrls: ['./listaventas.component.scss'],
})
export class ListaventasComponent implements OnInit {
  listVentas: Ventadto[] = [];
  constructor(private router: Router, private ventasService: VentasService) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.ventasService.getVentas().subscribe((res) => {
      this.listVentas = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el medio de pago seleccionado?')) {
      this.ventasService.eliminarVenta(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
