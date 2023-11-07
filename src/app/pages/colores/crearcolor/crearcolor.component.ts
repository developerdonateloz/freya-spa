import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorNuevodto } from 'src/app/model/color.dto';
import { ColoresService } from 'src/app/services/colores.service';

@Component({
  selector: 'app-crearcolor',
  templateUrl: './crearcolor.component.html',
  styleUrls: ['./crearcolor.component.scss'],
})
export class CrearcolorComponent implements OnInit {
  colorForm!: FormGroup;
  constructor(private router: Router, private coloresService: ColoresService) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.colorForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.colorForm.markAllAsTouched();

    if (this.colorForm.invalid) {
      return;
    }

    const ColorNuevo: ColorNuevodto = {
      nombre: this.colorForm.get('nombre')?.value ?? '',
    };

    this.coloresService.createColor(ColorNuevo).subscribe(
      (res) => {
        console.log(ColorNuevo);
        this.router.navigate(['/colores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
