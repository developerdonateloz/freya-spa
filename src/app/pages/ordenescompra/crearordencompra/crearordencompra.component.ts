import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdenCompraNuevodto } from 'src/app/model/ordencompra.dto';
import { Proveedordto } from 'src/app/model/proveedor.dto';
import { OrdenescompraService } from 'src/app/services/ordenescompra.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-crearordencompra',
  templateUrl: './crearordencompra.component.html',
  styleUrls: ['./crearordencompra.component.scss'],
})
export class CrearordencompraComponent implements OnInit {
  ordencompraForm!: FormGroup;
  listProveedores: Proveedordto[] = [];

  constructor(
    private router: Router,
    private ordenescompraService: OrdenescompraService,
    private proveedoresService: ProveedoresService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.proveedoresService.getAllProveedores().subscribe({
      next: (res) => (this.listProveedores = res),
      error: (err) => console.log(err),
    });
  }
  buildForm(): void {
    this.ordencompraForm = new FormGroup({
      fecha: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      total: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      estado: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      proveedor: new FormControl('', [Validators.required]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.ordencompraForm.markAllAsTouched();

    if (this.ordencompraForm.invalid) {
      return;
    }

    const ordencompraNuevo: OrdenCompraNuevodto = {
      fecha: this.ordencompraForm.get('fecha')?.value ?? '',
      total: this.ordencompraForm.get('total')?.value ?? '',
      estado: this.ordencompraForm.get('estado')?.value ?? '',
      idproveedor: this.ordencompraForm.get('idproveedor')?.value ?? '',
      usuario: 'donaghyamachi@gmail.com',
    };

    this.ordenescompraService.createOrdenCompra(ordencompraNuevo).subscribe({
      next: () => this.router.navigate(['/mediospago']),
      error: (err) => console.log(err),
    });
  }
}
