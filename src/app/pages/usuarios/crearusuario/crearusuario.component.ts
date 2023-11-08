import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioNuevodto } from 'src/app/model/usuario.dto';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.scss'],
})
export class CrearusuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.usuarioForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.usuarioForm.markAllAsTouched();

    if (this.usuarioForm.invalid) {
      return;
    }

    const usuarioNuevo: UsuarioNuevodto = {
      name: this.usuarioForm.get('name')?.value ?? '',
      lastname: this.usuarioForm.get('lastname')?.value ?? '',
      username: this.usuarioForm.get('username')?.value ?? '',
      password: this.usuarioForm.get('password')?.value ?? '',
    };

    this.usuariosService.createUsuario(usuarioNuevo).subscribe(
      (res) => {
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
