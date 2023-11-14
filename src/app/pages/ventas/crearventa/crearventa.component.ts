import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-crearventa',
  templateUrl: './crearventa.component.html',
  styleUrls: ['./crearventa.component.scss'],
})
export class CrearventaComponent implements OnInit {
  ventaForm!: FormGroup;
  constructor(private router: Router, private ventasService: VentasService) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.ventaForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      estado: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.ventaForm.markAllAsTouched();

    if (this.ventaForm.invalid) {
      return;
    }

    // const mediopagoNuevo: MediopagoNuevodto = {
    //   descripcion: this.ventaForm.get('descripcion')?.value ?? '',
    //   nombre: this.ventaForm.get('nombre')?.value ?? '',
    //   estado: this.ventaForm.get('estado')?.value ?? '',
    // };

    // this.ventasService.createVenta(mediopagoNuevo).subscribe({
    //   next: () => this.router.navigate(['/mediospago']),
    //   error: (err) => console.log(err),
    // });
  }
}
