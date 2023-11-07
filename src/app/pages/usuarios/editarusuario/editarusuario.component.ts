import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioActualizadodto, Usuariodto } from 'src/app/model/usuario.dto';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss'],
})
export class EditarusuarioComponent implements OnInit {
  id: number = 0;
  usuarioEdit: UsuarioActualizadodto = {
    id: 0,
    name: '',
    lastname: '',
    username: '',
    password: '',
    created: new Date(),
  };
  usuarioForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {}
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
    });
  }
  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.loadUsuario();
    });
  }
  loadUsuario(): void {
    this.usuariosService.getUsuario(this.id).subscribe((res) => {
      console.log(res);
      this.usuarioEdit.name = res.name;
      this.usuarioEdit.lastname = res.lastname;
      this.usuarioEdit.username = res.username;
      this.usuarioEdit.password = res.password;

      this.usuarioForm.patchValue({
        name: this.usuarioEdit.name,
      });
      this.usuarioForm.patchValue({
        lastname: this.usuarioEdit.lastname,
      });
      this.usuarioForm.patchValue({
        username: this.usuarioEdit.username,
      });
    });
  }
  guardar(event: Event): void {
    event.preventDefault();
    this.usuarioForm.markAllAsTouched();

    if (this.usuarioForm.invalid) {
      return;
    }

    this.usuarioEdit.name = this.usuarioForm.get('name')?.value ?? '';
    this.usuarioEdit.lastname = this.usuarioForm.get('lastname')?.value ?? '';
    this.usuarioEdit.username = this.usuarioForm.get('username')?.value ?? '';
    this.usuarioEdit.password = this.usuarioForm.get('password')?.value ?? '';

    console.log(this.usuarioEdit);
    this.usuariosService
      .actualizarUsuario(this.id, this.usuarioEdit)
      .subscribe((res) => {
        this.router.navigate(['/usuarios']);
      });
  }
}
