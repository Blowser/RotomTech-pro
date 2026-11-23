import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { UsuarioService } from '../../services/usuario';
import { UsuarioRequest } from '../../models/usuario-request';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre = '';

  correo = '';

  password = '';

  confirmarPassword = '';

  mensajeError = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  registrarse(): void {

    this.mensajeError = '';

    if (this.password !== this.confirmarPassword) {

      this.mensajeError =
        'Las contraseñas no coinciden';

      return;

    }

    const request: UsuarioRequest = {

      nombre: this.nombre,

      correo: this.correo,

      password: this.password,

      rol: 'USUARIO'

    };

    this.usuarioService
      .crear(request)
      .subscribe({

        next: () => {

          alert(
            'Usuario registrado correctamente'
          );

          this.router.navigate(['/login']);

        },

        error: () => {

          this.mensajeError =
            'No fue posible registrar el usuario';

        }

      });

  }

}