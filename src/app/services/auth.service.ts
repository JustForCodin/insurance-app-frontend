import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

interface LoginResponse {
    message: string;
    user: { email: string, id: string };
}

interface RegisterResponse {
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:5000/auth';
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    isAuthenticatedUser = this.isAuthenticatedSubject.asObservable();

    constructor(private http: HttpClient) {
        this.checkCurrentUser();
    }

    login(credentials: any): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
            tap(() => {
                this.isAuthenticatedSubject.next(true);
            })
        );
    }

    logout(): Observable<any> {
        return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
            tap(() => {
                this.isAuthenticatedSubject.next(false);
            })
        );
    }

    getCurrentUser(): Observable<any> {
        return this.http.get(`${this.apiUrl}/current-user`);
    }

    checkCurrentUser(): void {
        this.getCurrentUser().subscribe({
            next: (response) => {
                this.isAuthenticatedSubject.next(true);
            },
            error: (error) => {
                this.isAuthenticatedSubject.next(false);
            }
        });
    }

    isAuthenticated(): boolean {
        return this.isAuthenticatedSubject.value; 
    }

    register(userData: any): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, userData);
    }
}