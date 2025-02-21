import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { InsuranceAgentService } from '../../../services/insurance-agent.service';
import { Branch } from '../../branches/branch.model';
import { InsuranceAgent } from '../insurance-agent.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insurance-agent-create',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './insurance-agent-create.component.html',
})
export class InsuranceAgentCreateComponent implements OnInit {
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

  constructor(
      private insuranceAgentService: InsuranceAgentService,
      private branchService: BranchService,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.loadBranches(); // Load branches for dropdown on component initialization
  }

  loadBranches(): void {
      this.branchService.getAllBranches().subscribe(branches => {
          this.branches = branches;
      });
  }

  createInsuranceAgent(): void {
      this.insuranceAgentService.createInsuranceAgent(this.insuranceAgent).subscribe({
          next: (response) => {
              this.router.navigate(['/insurance-agents']);
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to create Insurance Agent.';
          }
      });
  }

  cancel(): void {
      this.router.navigate(['/insurance-agents']);
  }
}
