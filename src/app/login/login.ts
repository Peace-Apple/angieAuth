import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginCredentials } from './loginInterface';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  credentials: LoginCredentials = {
    email: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('I am logged in---->', this.credentials)
  }
}
