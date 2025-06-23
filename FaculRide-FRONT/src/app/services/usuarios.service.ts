import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Configura a URL base dinâmica
const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000/api'
  : 'https://projeto-faculride.onrender.com/api';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiAuth = `${baseURL}/auth`;
  private apiUsuario = `${baseURL}/usuario`;

  constructor(private http: HttpClient) {}

  // Login
  login(dados: { email: string; senha: string }): Observable<any> {
    return this.http.post<any>(`${this.apiAuth}/login`, dados).pipe(
      tap((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('usuario', JSON.stringify(res.usuario));
        }
      })
    );
  }

  // Listar usuários
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUsuario);
  }

  // Buscar usuário por ID
  getUsuarioPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUsuario}/${id}`);
  }

  // Deletar usuário
  deletarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUsuario}/${id}`);
  }
}
