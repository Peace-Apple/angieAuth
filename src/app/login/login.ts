import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCredentials } from '../userInterface';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authService = inject(AuthService);

  credentials: UserCredentials = {
    emailId: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.credentials).pipe().subscribe((res) => {
      console.log('Looged In----->', res)
    })
  }
}
