import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'insurance-app-frontend';
  isCheckingAuth = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (response) => {
        this.isCheckingAuth = false;
        this.router.navigate(['/branches'])
      },
      error: (error) => {
        this.isCheckingAuth = false;
        this.router.navigate(['/login']);
      }
    });
  }
}