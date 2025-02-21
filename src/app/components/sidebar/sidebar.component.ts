import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) { }

  navigateToBranches(): void {
    this.router.navigate(['/branches']);
  }

  navigateToInsuranceTypes(): void {
    this.router.navigate(['/insurance-types']);
  }

  navigateToInsuranceAgents(): void {
    this.router.navigate(['/insurance-agents']);
  }

  navigateToInsuranceContracts(): void {
    this.router.navigate(['/insurance-contracts']);
  }
}
