import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { InsuranceAgentService } from '../../../services/insurance-agent.service';
import { Branch } from '../../branches/branch.model';
import { InsuranceAgent } from '../insurance-agent.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insurance-agent-edit',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './insurance-agent-edit.component.html',
})
export class InsuranceAgentEditComponent implements OnInit {
  insuranceAgent: InsuranceAgent = {
      lastName: '',
      firstName: '',
      middleName: '',
      address: '',
      phoneNumber: '',
      branch: undefined
  };
  branches: Branch[] = [];
  errorMessage: string = '';
  insuranceAgentId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private insuranceAgentService: InsuranceAgentService,
      private branchService: BranchService
  ) { }

  ngOnInit(): void {
      this.insuranceAgentId = this.route.snapshot.paramMap.get('id');
      if (this.insuranceAgentId) {
          this.loadInsuranceAgentDetails(this.insuranceAgentId);
          this.loadBranches(); // Load branches for dropdown in edit mode
      }
  }

  loadInsuranceAgentDetails(id: string): void {
      this.insuranceAgentService.getInsuranceAgentById(id).subscribe({
          next: (data) => {
              this.insuranceAgent = data;
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to load Insurance Agent details';
          }
      });
  }

  loadBranches(): void {
      this.branchService.getAllBranches().subscribe(branches => {
          this.branches = branches;
      });
  }

  updateInsuranceAgent(): void {
      if (this.insuranceAgentId) {
          this.insuranceAgentService.updateInsuranceAgent(this.insuranceAgentId, this.insuranceAgent).subscribe({
              next: (response) => {
                  this.router.navigate(['/insurance-agents']);
              },
              error: (error) => {
                  this.errorMessage = error.message || 'Failed to update Insurance Agent';
              }
          });
      }
  }

  cancel(): void {
      this.router.navigate(['/insurance-agents']);
  }
}
