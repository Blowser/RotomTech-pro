import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { UsuarioService } from '../../services/usuario';
import { LoginRequest } from '../../models/login-request';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  correo = '';

  password = '';

  mensajeError = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  iniciarSesion(): void {

    const request: LoginRequest = {

      correo: this.correo,

      password: this.password

    };

    this.usuarioService
      .login(request)
      .subscribe({

        next: (usuario: Usuario) => {

          sessionStorage.setItem(
            'usuario',
            JSON.stringify(usuario)
          );

          console.log(
            'Login exitoso',
            usuario
          );

          location.href = '/';

        },

        error: () => {

          this.mensajeError =
            'Correo o contraseña incorrectos';

        }

      });

  }

}