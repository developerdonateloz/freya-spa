import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneroNuevodto } from 'src/app/model/genero.dto';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-creargenero',
  templateUrl: './creargenero.component.html',
  styleUrls: ['./creargenero.component.scss'],
})
export class CreargeneroComponent implements OnInit {
  generoForm!: FormGroup;
  constructor(private router: Router, private generosService: GenerosService) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.generoForm = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.generoForm.markAllAsTouched();

    if (this.generoForm.invalid) {
      return;
    }

    const generoNuevo: GeneroNuevodto = {
      descripcion: this.generoForm.get('descripcion')?.value ?? '',
    };

    this.generosService.createGenero(generoNuevo).subscribe(
      (res) => {
        this.router.navigate(['/generos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
