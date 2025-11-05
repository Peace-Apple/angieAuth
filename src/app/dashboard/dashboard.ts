import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe({
      next: (response) => {
        console.log('Users here----->', response)
      },
      error: (error) => {
        console.log('Error: ', error)
      }
    })
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
