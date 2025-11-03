import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  authService = inject(AuthService);
  private router = inject(Router);
  
 logout() {
    this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
