import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logindto } from 'src/app/model/login.dto';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  keyLogin: string = 'login';
  loginValido: boolean = false;
  loginForm!: FormGroup;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.loginForm = new FormGroup({
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
  login(event: Event): void {
    event.preventDefault();
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    const usuarioNuevo: Logindto = {
      username: this.loginForm.get('username')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? '',
    };

    this.loginValido = this.authService.loginValido(usuarioNuevo);
    if (this.loginValido) {
      localStorage.setItem(this.keyLogin, usuarioNuevo.username);
      this.router.navigate(['']);
    }
  }
}
