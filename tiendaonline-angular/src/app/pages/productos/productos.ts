import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  ProductoService
} from '../../services/producto';

import {
  Producto
} from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      const subcategoria = params['subcategoria'];

      this.productoService.obtenerTodos()
        .subscribe((data: Producto[]) => {

          if (subcategoria) {

            this.productos = data.filter(
              (producto: Producto) =>
                producto.subcategoria === subcategoria
            );

          } else {

            this.productos = data;

          }

          console.log('SUBCATEGORIA:', subcategoria);
          console.log('PRODUCTOS:', this.productos);

          this.cd.detectChanges();

        });

    });

  }

}