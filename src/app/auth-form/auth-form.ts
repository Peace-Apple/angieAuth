import { Component, input, output, booleanAttribute } from '@angular/core';
import { UserCredentials } from '../userInterface';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  isLoginMode = input(true, { transform: booleanAttribute });
  formSubmit = output<any>();
  
  submitted = false;
  
  credentials: UserCredentials = {
    emailId: '',
    fullName: '',
    password: ''
  };

  onSubmit(form: any) {
    this.submitted = true;
    this.formSubmit.emit(form.value);
  }
}
