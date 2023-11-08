import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroActualizadodto } from 'src/app/model/genero.dto';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-editargenero',
  templateUrl: './editargenero.component.html',
  styleUrls: ['./editargenero.component.scss'],
})
export class EditargeneroComponent implements OnInit {
  id: number = 0;
  generoEdit: GeneroActualizadodto = {
    id: 0,
    descripcion: '',
  };
  generoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private generosService: GenerosService
  ) {}
  buildForm(): void {
    this.generoForm = new FormGroup({
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
      this.loadGenero();
    });
  }
  loadGenero(): void {
    this.generosService.getGenero(this.id).subscribe((res) => {
      this.generoEdit.descripcion = res.descripcion;

      this.generoForm.patchValue({
        descripcion: this.generoEdit.descripcion,
      });
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.generoForm.markAllAsTouched();

    if (this.generoForm.invalid) {
      return;
    }

    this.generoEdit.descripcion =
      this.generoForm.get('descripcion')?.value ?? '';

    this.generosService
      .actualizarGenero(this.id, this.generoEdit)
      .subscribe((res) => {
        this.router.navigate(['/generos']);
      });
  }
}
