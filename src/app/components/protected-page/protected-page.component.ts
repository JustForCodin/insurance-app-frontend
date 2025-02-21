import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-protected-page',
  imports: [NgIf],
  templateUrl: './protected-page.component.html'
})
export class ProtectedPageComponent {

  constructor(public authService: AuthService, private router: Router) { }

  logout(): void {
      this.authService.logout().subscribe(() => {
          this.router.navigate(['/login']);
      });
  }
}