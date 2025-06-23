import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  recoverEmail: string = '';
  errorMsg: string = '';
  recoverMsg: string = '';
  loginAttempts: number = 0;
  showRecoverPasswordSection: boolean = false;

  baseURL = environment.baseURL + '/usuario';

  constructor(private http: HttpClient) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMsg = 'Preencha e-mail e senha.';
      return;
    }

    const loginData = {
      email: this.email,
      senha: this.password,
    };

    this.http.post<any>(`${this.baseURL}/login`, loginData).subscribe({
      next: (res) => {
        const token = res.token;
        const usuario = res.usuario;

        if (!token || !usuario) {
          alert('Erro: Token ou dados do usuário não retornados.');
          return;
        }

        // Salvar no localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        alert('✅ Login efetuado com sucesso! ✅');
        window.location.href = '/usuario';
      },
      error: (err) => {
        console.error('Erro no login:', err);
        this.loginAttempts++;
        this.errorMsg = err?.error?.erro || 'E-mail ou senha inválidos.';
        alert(this.errorMsg);

        if (this.loginAttempts >= 1) {
          this.showRecoverPasswordSection = true;
        }
      },
    });
  }

  toggleRecoverPassword() {
    this.showRecoverPasswordSection = !this.showRecoverPasswordSection;
  }

  sendRecoverEmail() {
    if (this.recoverEmail.trim() === this.email.trim()) {
      this.recoverMsg = 'E-mail de recuperação de senha enviado com sucesso!';
    } else {
      this.recoverMsg = 'E-mail não encontrado.';
    }

    this.errorMsg = '';
    this.showRecoverPasswordSection = false;
  }
}
