import { Component, inject, OnInit } from '@angular/core';
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
export class Login implements OnInit {
  authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // Redirect if already logged in
    if (this.authService.isLoggedIn()) {
    this.router.navigate(['/dashboard']);
    }
  }

  handleLogin(formData: any) {
    this.authService.login(formData).pipe().subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        console.log('Error: ', error)
      }
    })
  }
}
