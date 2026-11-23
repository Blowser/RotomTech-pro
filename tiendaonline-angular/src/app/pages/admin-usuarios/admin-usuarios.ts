import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  UsuarioService
} from '../../services/usuario';

import {
  Usuario
} from '../../models/usuario';


//PARA VOLVER AL PANEL DE ADMIN
import {
  RouterLink
} from '@angular/router';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './admin-usuarios.html',
  styleUrl: './admin-usuarios.css'
})
export class AdminUsuarios
implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.usuarioService
      .obtenerTodos()
      .subscribe({

        next: (usuarios) => {

          console.log(
            'USUARIOS:',
            usuarios
          );

          this.usuarios = usuarios;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Error al obtener usuarios:',
            error
          );

        }

      });

  }

}