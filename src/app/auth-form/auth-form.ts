import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() isLoginMode: boolean = true;
  @Output() formSubmit = new EventEmitter<any>();
  
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
