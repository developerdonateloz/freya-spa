import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materialdto } from 'src/app/model/material.dto';
import { MaterialesService } from 'src/app/services/materiales.service';

@Component({
  selector: 'app-listamateriales',
  templateUrl: './listamateriales.component.html',
  styleUrls: ['./listamateriales.component.scss'],
})
export class ListamaterialesComponent implements OnInit {
  listMateriales: Materialdto[] = [];
  constructor(
    private router: Router,
    private materialesService: MaterialesService
  ) {}

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void {
    this.materialesService.getMaterials().subscribe((res) => {
      this.listMateriales = res;
    });
  }
  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar el material seleccionado?')) {
      this.materialesService.eliminarMaterial(id).subscribe((res) => {
        console.log(res);
        this.cargarLista();
      });
    }
  }
}
