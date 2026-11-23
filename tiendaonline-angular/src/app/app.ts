import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class App {

  usuario: any = null;

  constructor() {

    const usuarioGuardado =
      sessionStorage.getItem('usuario');

    if (usuarioGuardado) {

      this.usuario =
        JSON.parse(usuarioGuardado);

    }

  }

  cerrarSesion(): void {

    sessionStorage.removeItem('usuario');

    location.reload();

  }

}