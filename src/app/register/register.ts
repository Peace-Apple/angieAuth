import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCredentials } from '../userInterface';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
authService = inject(AuthService);
private router = inject(Router);

private nextId = 1;

  credentials: UserCredentials = {
    userId: this.nextId++,
    emailId: '',
    fullName: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.credentials).pipe().subscribe((res) => {
      this.router.navigateByUrl('/login');
    })
  }
}
