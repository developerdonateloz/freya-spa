import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediopagoNuevodto } from 'src/app/model/mediopago.dto';
import { MediospagoService } from 'src/app/services/mediospago.service';

@Component({
  selector: 'app-crearmediopago',
  templateUrl: './crearmediopago.component.html',
  styleUrls: ['./crearmediopago.component.scss'],
})
export class CrearmediopagoComponent implements OnInit {
  mediopagoForm!: FormGroup;
  constructor(
    private router: Router,
    private mediospagoService: MediospagoService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.mediopagoForm = new FormGroup({
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
    this.mediopagoForm.markAllAsTouched();

    if (this.mediopagoForm.invalid) {
      return;
    }

    const mediopagoNuevo: MediopagoNuevodto = {
      descripcion: this.mediopagoForm.get('descripcion')?.value ?? '',
      nombre: this.mediopagoForm.get('nombre')?.value ?? '',
      estado: this.mediopagoForm.get('estado')?.value ?? '',
    };

    this.mediospagoService.createMediopago(mediopagoNuevo).subscribe({
      next: () => this.router.navigate(['/mediospago']),
      error: (err) => console.log(err),
    });
  }
}
