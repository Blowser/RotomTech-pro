import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario';
import { UsuarioRequest } from '../models/usuario-request';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl =
    'http://localhost:8080/usuarios';

  constructor(
    private http: HttpClient
  ) {}

  login(
    request: LoginRequest
  ): Observable<Usuario> {

    return this.http.post<Usuario>(
      `${this.apiUrl}/login`,
      request
    );

  }

  obtenerTodos(): Observable<Usuario[]> {

    return this.http.get<Usuario[]>(
      this.apiUrl
    );

  }

  obtenerPorId(
    id: number
  ): Observable<Usuario> {

    return this.http.get<Usuario>(
      `${this.apiUrl}/${id}`
    );

  }

  crear(
    usuario: UsuarioRequest
  ): Observable<Usuario> {

    return this.http.post<Usuario>(
      this.apiUrl,
      usuario
    );

  }

  actualizar(
    id: number,
    usuario: UsuarioRequest
  ): Observable<Usuario> {

    return this.http.put<Usuario>(
      `${this.apiUrl}/${id}`,
      usuario
    );

  }

  eliminar(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}