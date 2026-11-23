import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  categoriaSeleccionada = 'SEGURIDAD';

  subcategoriaSeleccionada = '';

  productos: Producto[] = [];

  productosFiltrados: Producto[] = [];

  subcategorias: Record<string, string[]> = {

    SEGURIDAD: [
      'CAMARAS',
      'CAJAS_FUERTES'
    ],

    ALMACENAMIENTO: [
      'PENDRIVES',
      'TARJETAS_SD'
    ],

    HOGAR_INTELIGENTE: [
      'SENSORES',
      'PURIFICADORES',
      'IOT'
    ],

    ELECTRODOMESTICOS: [
      'COCINA',
      'BAÑO',
      'JARDIN'
    ]

  };

  constructor(
    private productoService: ProductoService
  ) {

    this.productoService
    .obtenerTodos()
    .subscribe((data: Producto[]) => {

      console.log('PRODUCTOS:', data);

      console.log(
        'ID PRODUCTO:',
        data[0].id
      );

      this.productos = data;

    });

  }

  seleccionarCategoria(
    categoria: string
  ): void {

    this.categoriaSeleccionada = categoria;

    this.subcategoriaSeleccionada = '';

    this.productosFiltrados = [];

  }

  seleccionarSubcategoria(
    subcategoria: string
  ): void {

    this.subcategoriaSeleccionada = subcategoria;

    this.productosFiltrados = this.productos.filter(
      (producto: Producto) =>
        producto.subcategoria === subcategoria
    );

  }

  obtenerSubcategorias(): string[] {

    return (
      this.subcategorias[
        this.categoriaSeleccionada
      ] || []
    );

  }

}