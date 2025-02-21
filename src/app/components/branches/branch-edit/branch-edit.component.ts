import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { Branch } from '../branch.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-branch-edit',
  imports: [FormsModule, NgIf],
  templateUrl: './branch-edit.component.html',
})
export class BranchEditComponent implements OnInit {
  branch: Branch = {
      branchName: '',
      address: '',
      phoneNumber: ''
  };
  errorMessage: string = '';
  branchId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private branchService: BranchService
  ) { }

  ngOnInit(): void {
      this.branchId = this.route.snapshot.paramMap.get('id');
      if (this.branchId) {
          this.loadBranchDetails(this.branchId);
      }
  }

  loadBranchDetails(id: string): void {
      this.branchService.getBranchById(id).subscribe({
          next: (data) => {
              this.branch = data;
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to load Branch data.';
          }
      });
  }

  updateBranch(): void {
      if (this.branchId) {
          this.branchService.updateBranch(this.branchId, this.branch).subscribe({
              next: (response) => {
                  this.router.navigate(['/branches']); // Redirect to branch list after update
              },
              error: (error) => {
                  this.errorMessage = error.message || 'Failed to update Branch';
              }
          });
      }
  }

  cancel(): void {
      this.router.navigate(['/branches']); // Go back to branch list
  }
}
