import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from "@angular/router";
import { AuthForm } from '../auth-form/auth-form';

@Component({
  selector: 'app-login',
  imports: [
    AuthForm
],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authService = inject(AuthService);
  private router = inject(Router);

  handleLogin(formData: any) {
    this.authService.login(formData).pipe().subscribe((res) => {
      this.router.navigateByUrl('/dashboard');
    })
  }
}
