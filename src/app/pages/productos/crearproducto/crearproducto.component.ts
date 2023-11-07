import { Component, OnInit } from '@angular/core';
import { ProductoNuevodto } from 'src/app/model/productodto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.scss'],
})
export class CrearproductoComponent implements OnInit {
  productoNuevo: ProductoNuevodto = { nombre: '', precio: 0 };

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {}
  onSave() {
    this.productoNuevo.nombre = 'first';
    this.productoNuevo.precio = 200;

    this.productosService.createProducto(this.productoNuevo);
  }
}
