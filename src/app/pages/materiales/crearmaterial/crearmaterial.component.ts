import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialNuevodto } from 'src/app/model/material.dto';
import { MaterialesService } from 'src/app/services/materiales.service';

@Component({
  selector: 'app-crearmaterial',
  templateUrl: './crearmaterial.component.html',
  styleUrls: ['./crearmaterial.component.scss'],
})
export class CrearmaterialComponent implements OnInit {
  materialForm!: FormGroup;
  constructor(
    private router: Router,
    private materialesService: MaterialesService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.materialForm = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.materialForm.markAllAsTouched();

    if (this.materialForm.invalid) {
      return;
    }

    const materialNuevo: MaterialNuevodto = {
      descripcion: this.materialForm.get('descripcion')?.value ?? '',
    };

    this.materialesService.createMaterial(materialNuevo).subscribe(
      (res) => {
        this.router.navigate(['/materiales']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
