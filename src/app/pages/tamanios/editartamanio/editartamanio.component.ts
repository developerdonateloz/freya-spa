import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TamanioActualizadodto } from 'src/app/model/tamanio.dto';
import { TamaniosService } from 'src/app/services/tamanios.service';

@Component({
  selector: 'app-editartamanio',
  templateUrl: './editartamanio.component.html',
  styleUrls: ['./editartamanio.component.scss'],
})
export class EditartamanioComponent implements OnInit {
  id: number = 0;
  materialEdit: TamanioActualizadodto = {
    id: 0,
    descripcion: '',
  };
  materialForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tamaniosService: TamaniosService
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
    this.tamaniosService.getTamanio(this.id).subscribe((res) => {
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

    this.tamaniosService
      .actualizarTamanio(this.id, this.materialEdit)
      .subscribe((res) => {
        this.router.navigate(['/tamanios']);
      });
  }
}
