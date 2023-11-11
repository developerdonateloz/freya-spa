import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MediopagoActualizadodto } from 'src/app/model/mediopago.dto';
import { MediospagoService } from 'src/app/services/mediospago.service';

@Component({
  selector: 'app-editarmediopago',
  templateUrl: './editarmediopago.component.html',
  styleUrls: ['./editarmediopago.component.scss'],
})
export class EditarmediopagoComponent implements OnInit {
  id: number = 0;
  mediopagoEdit: MediopagoActualizadodto = {
    id: 0,
    descripcion: '',
    nombre: '',
    estado: '',
  };
  mediopagoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediospagoService: MediospagoService
  ) {}
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
  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.loadMedioPago();
    });
  }
  loadMedioPago(): void {
    this.mediospagoService.getMediopago(this.id).subscribe((res) => {
      console.log(res);
      this.mediopagoEdit.nombre = res.nombre;
      this.mediopagoEdit.descripcion = res.descripcion;
      this.mediopagoEdit.estado = res.estado;

      this.mediopagoForm.patchValue({
        nombre: this.mediopagoEdit.nombre,
      });
      this.mediopagoForm.patchValue({
        descripcion: this.mediopagoEdit.descripcion,
      });
      this.mediopagoForm.patchValue({
        estado: this.mediopagoEdit.estado,
      });
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.mediopagoForm.markAllAsTouched();

    if (this.mediopagoForm.invalid) {
      return;
    }

    this.mediopagoEdit.nombre = this.mediopagoForm.get('nombre')?.value ?? '';
    this.mediopagoEdit.descripcion =
      this.mediopagoForm.get('descripcion')?.value ?? '';
    this.mediopagoEdit.estado = this.mediopagoForm.get('estado')?.value ?? '';

    this.mediospagoService
      .actualizarMediopago(this.id, this.mediopagoEdit)
      .subscribe((res) => {
        this.router.navigate(['/mediospago']);
      });
  }
}
