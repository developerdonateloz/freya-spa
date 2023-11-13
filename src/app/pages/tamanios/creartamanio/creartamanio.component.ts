import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TamanioNuevodto } from 'src/app/model/tamanio.dto';
import { TamaniosService } from 'src/app/services/tamanios.service';

@Component({
  selector: 'app-creartamanio',
  templateUrl: './creartamanio.component.html',
  styleUrls: ['./creartamanio.component.scss'],
})
export class CreartamanioComponent implements OnInit {
  tamanioForm!: FormGroup;
  constructor(
    private router: Router,
    private tamaniosService: TamaniosService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.tamanioForm = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.tamanioForm.markAllAsTouched();

    if (this.tamanioForm.invalid) {
      return;
    }

    const tamanioNuevo: TamanioNuevodto = {
      descripcion: this.tamanioForm.get('descripcion')?.value ?? '',
    };

    this.tamaniosService.createTamanio(tamanioNuevo).subscribe({
      next: (res) => this.router.navigate(['/tamanios']),
      error: (err) => console.log(err),
    });
  }
}
