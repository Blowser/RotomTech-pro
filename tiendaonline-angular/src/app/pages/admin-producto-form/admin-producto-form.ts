import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  ProductoService
} from '../../services/producto';

import {
  Producto
} from '../../models/producto';

@Component({
  selector: 'app-admin-producto-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-producto-form.html',
  styleUrl: './admin-producto-form.css'
})
export class AdminProductoForm
implements OnInit {

  modoEdicion = false;

  productoId = 0;

  producto: Producto = {

    id: 0,

    nombre: '',

    marca: '',

    descripcion: '',

    categoria: '',

    subcategoria: '',

    precio: 0,

    descuento: 0,

    stock: 0,

    urlImagen: ''

  };

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (id) {

      this.modoEdicion = true;

      this.productoId = Number(id);

      this.productoService
        .obtenerPorId(this.productoId)
        .subscribe({

          next: (producto) => {

            this.producto = producto;

          },

          error: (error) => {

            console.error(error);

          }

        });

    }

  }

  guardar(): void {

    if (this.modoEdicion) {

      this.productoService
        .actualizar(
          this.productoId,
          this.producto
        )
        .subscribe({

          next: () => {

            alert(
              'Producto actualizado correctamente'
            );

            this.router.navigate([
              '/admin/productos'
            ]);

          },

          error: (error) => {

            console.error(
              'Error al actualizar:',
              error
            );

          }

        });

    }

    else {

      this.productoService
        .crear(this.producto)
        .subscribe({

          next: () => {

            alert(
              'Producto creado correctamente'
            );

            this.router.navigate([
              '/admin/productos'
            ]);

          },

          error: (error) => {

            console.error(
              'Error al crear producto:',
              error
            );

          }

        });

    }

  }

}