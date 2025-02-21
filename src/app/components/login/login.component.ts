import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  email = '';
  password = '';
  errorMessage: string = '';
  authStatusSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authStatusSubscription = this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Успішний логін', response);
        this.errorMessage = '';
        this.router.navigate(['/branches']);
      },
      error: (error) => {
        console.error('Помилка логіну', error);
        this.errorMessage = error.error.message || 'Помилка логіну';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
    }
  }
}