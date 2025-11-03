import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCredentials } from '../userInterface';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
authService = inject(AuthService);

  credentials: UserCredentials = {
    userId: 1,
    emailId: '',
    fullName: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.credentials).pipe().subscribe((res) => {
      console.log('response----->', res)
    })
  }
}
