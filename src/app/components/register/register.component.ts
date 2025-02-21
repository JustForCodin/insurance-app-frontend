import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnDestroy {
  email = '';
  password = '';
  errorMessage: string = '';
  successMessage: string = '';
  authStatusSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.authStatusSubscription = this.authService.register(userData).subscribe({
      next: (response) => {
        this.errorMessage = '';
        this.successMessage = response.message || 'Registered successfully!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Registration error';
        this.successMessage = '';
      }
    });
  }


  ngOnDestroy(): void {
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
    }
  }
}