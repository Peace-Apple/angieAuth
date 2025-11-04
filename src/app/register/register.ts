import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { AuthForm } from '../auth-form/auth-form';

@Component({
  selector: 'app-register',
  imports: [
    AuthForm
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  authService = inject(AuthService);
  private router = inject(Router);
  private nextId = 1;

  handleRegister(formData: any) {
    formData.userId = this.nextId++;
    this.authService.register(formData).pipe().subscribe((res) => {
      this.router.navigateByUrl('/login');
    })
  }
}
