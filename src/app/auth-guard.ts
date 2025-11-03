import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.getToken()) { // Method to check if a token exists and is valid
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
