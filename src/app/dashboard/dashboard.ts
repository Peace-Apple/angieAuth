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
  profile = {
    fullName: '',
    email: ''
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.getUser().subscribe({
      next: (response) => {
        console.log('Users here----->', response)
        this.profile.fullName = response.data.fullName;
        this.profile.email = response.data.email;
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
