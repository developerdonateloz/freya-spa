import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorActualizadodto } from 'src/app/model/color.dto';
import { ColoresService } from 'src/app/services/colores.service';

@Component({
  selector: 'app-editarcolor',
  templateUrl: './editarcolor.component.html',
  styleUrls: ['./editarcolor.component.scss'],
})
export class EditarcolorComponent implements OnInit {
  id: number = 0;
  ColorEdit: ColorActualizadodto = {
    id: 0,
    nombre: '',
  };
  colorForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ColorsService: ColoresService
  ) {}
  buildForm(): void {
    this.colorForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }
  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.loadColor();
    });
  }
  loadColor(): void {
    this.ColorsService.getColor(this.id).subscribe((res) => {
      console.log(res);
      this.ColorEdit.nombre = res.nombre;

      this.colorForm.patchValue({
        nombre: this.ColorEdit.nombre,
      });
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.colorForm.markAllAsTouched();

    if (this.colorForm.invalid) {
      return;
    }

    this.ColorEdit.nombre = this.colorForm.get('nombre')?.value ?? '';

    this.ColorsService.actualizarColor(this.id, this.ColorEdit).subscribe(
      (res) => {
        this.router.navigate(['/colores']);
      }
    );
  }
}
