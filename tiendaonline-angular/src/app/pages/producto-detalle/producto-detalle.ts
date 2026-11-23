import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle implements OnInit {

  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id =
      Number(
        this.route.snapshot.paramMap.get('id')
      );

    console.log(
      'ID DETALLE:',
      id
    );

    this.productoService
      .obtenerPorId(id)
      .subscribe({

        next: (producto) => {

          console.log(
            'PRODUCTO DETALLE:',
            producto
          );

          this.producto = producto;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'Error al obtener producto',
            error
          );

        }

      });

  }

}