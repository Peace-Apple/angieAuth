import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthenticationStatus();
  }

  login(credentials: any): Observable<any> {
    return this.http.post('/api/login', credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private checkAuthenticationStatus(): void {
    const token = this.getToken();
    this.isAuthenticatedSubject.next(!!token);
  }
}
