import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialActualizadodto } from 'src/app/model/material.dto';
import { MaterialesService } from 'src/app/services/materiales.service';

@Component({
  selector: 'app-editarmaterial',
  templateUrl: './editarmaterial.component.html',
  styleUrls: ['./editarmaterial.component.scss'],
})
export class EditarmaterialComponent implements OnInit {
  id: number = 0;
  materialEdit: MaterialActualizadodto = {
    id: 0,
    descripcion: '',
  };
  materialForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materialesService: MaterialesService
  ) {}
  buildForm(): void {
    this.materialForm = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.loadMaterial();
    });
  }
  loadMaterial(): void {
    this.materialesService.getMaterial(this.id).subscribe((res) => {
      console.log(res);
      this.materialEdit.descripcion = res.descripcion;

      this.materialForm.patchValue({
        descripcion: this.materialEdit.descripcion,
      });
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.materialForm.markAllAsTouched();

    if (this.materialForm.invalid) {
      return;
    }

    this.materialEdit.descripcion =
      this.materialForm.get('descripcion')?.value ?? '';

    this.materialesService
      .actualizarMaterial(this.id, this.materialEdit)
      .subscribe((res) => {
        this.router.navigate(['/materiales']);
      });
  }
}
