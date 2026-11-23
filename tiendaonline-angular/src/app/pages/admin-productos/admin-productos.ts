import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterLink
} from '@angular/router';

import {
  ProductoService
} from '../../services/producto';

import {
  Producto
} from '../../models/producto';

@Component({
  selector: 'app-admin-productos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css'
})
export class AdminProductos
implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.productoService
      .obtenerTodos()
      .subscribe({

        next: (productos) => {

          console.log(
            'PRODUCTOS ADMIN:',
            productos
          );

          this.productos = productos;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Error al obtener productos:',
            error
          );

        }

      });

  }

  eliminar(
    id: number
  ): void {

    const confirmar = confirm(
      '¿Deseas eliminar este producto?'
    );

    if (!confirmar) {
      return;
    }

    this.productoService
      .eliminar(id)
      .subscribe({

        next: () => {

          this.productos =
            this.productos.filter(
              p => p.id !== id
            );

            this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(error);

        }

      });

  }

}