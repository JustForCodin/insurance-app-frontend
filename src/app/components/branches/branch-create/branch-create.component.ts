import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { Branch } from '../branch.model';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-branch-create',
  imports: [NgIf, FormsModule],
  templateUrl: './branch-create.component.html'
})
export class BranchCreateComponent {
  branch: Branch = {
      branchName: '',
      address: '',
      phoneNumber: ''
  };
  errorMessage: string = '';

  constructor(private branchService: BranchService, private router: Router) { }

  createBranch(): void {
      this.branchService.createBranch(this.branch).subscribe({
          next: (response) => {
              this.router.navigate(['/branches']); // Redirect to branch list after creation
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to create Branch';
          }
      });
  }

  cancel(): void {
      this.router.navigate(['/branches']); // Go back to branch list
  }
}
