import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  localStorageService = inject(LocalStorageService);

  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    this.checkAuthenticationStatus();
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        this.localStorageService.set('authToken', response.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  register(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, credentials).pipe(
      tap((response: any) => {
        console.log('Registration successful', response)
      })
    );
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`).pipe(
      tap((response: any) => {
        console.log('User------', response)
      })
    );
  }

  logout(): void {
    this.localStorageService.remove('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return this.localStorageService.get('authToken');
  }

  private checkAuthenticationStatus(): void {
    const token = this.getToken();
    this.isAuthenticatedSubject.next(!!token);
  }
}
