import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from '../app/login/login'
import { Register } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [
    Login,
    RouterOutlet,
    Register
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angieAuth');
}
