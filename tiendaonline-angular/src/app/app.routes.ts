import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { Admin } from './pages/admin/admin';
import { AdminUsuarios } from './pages/admin-usuarios/admin-usuarios';
import { AdminProductos } from './pages/admin-productos/admin-productos';
import { AdminProductoForm } from './pages/admin-producto-form/admin-producto-form';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'productos',
    component: Productos
  },

  {
    path: 'login',
    component: Login
  },

  {
  path: 'registro',
  component: Registro
  },
  
  {
  path: 'productos/:id',
  component: ProductoDetalle
  },
  {
  path: 'admin',
  component: Admin
  },

  {
  path: 'admin/usuarios',
  component: AdminUsuarios
  },

  {
  path: 'admin/productos',
  component: AdminProductos
  },

  //CRUD DE PRODUCTOS

  {
  path: 'admin/productos/nuevo',
  component: AdminProductoForm
  },

  {
  path: 'admin/productos/editar/:id',
  component: AdminProductoForm
  }
  
];