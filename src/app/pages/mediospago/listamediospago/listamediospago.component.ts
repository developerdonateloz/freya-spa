import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mediopagodto } from 'src/app/model/mediopago.dto';
import { MediospagoService } from 'src/app/services/mediospago.service';

@Component({
  selector: 'app-listamediospago',
  templateUrl: './listamediospago.component.html',
  styleUrls: ['./listamediospago.component.scss'],
})
export class ListamediospagoComponent implements OnInit {
  listMediosPago: Mediopagodto[] = [];
  constructor(
    private router: Router,
    private mediospagoService: MediospagoService
  ) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.mediospagoService.getMediospago().subscribe((res) => {
      this.listMediosPago = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el medio de pago seleccionado?')) {
      this.mediospagoService.eliminarMediopago(id).subscribe((res) => {
        this.cargarLista();
      });
    }
  }
}
