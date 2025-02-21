import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { InsuranceAgentService } from '../../../services/insurance-agent.service';
import { InsuranceContractService } from '../../../services/insurance-contract.service';
import { InsuranceTypeService } from '../../../services/insurance-type.service';
import { Branch } from '../../branches/branch.model';
import { InsuranceAgent } from '../../insurance-agents/insurance-agent.model';
import { InsuranceType } from '../../insurance-types/insurance-type.model';
import { InsuranceContract } from '../insurance-contract.model';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-insurance-contract-create',
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './insurance-contract-create.component.html'
})
export class InsuranceContractCreateComponent implements OnInit {
  insuranceContract: InsuranceContract = {
      contractNumber: '',
      contractDate: new Date(),
      insuranceAmount: 0,
      tariffRate: 0,
      branch: undefined,
      insuranceType: undefined,
      agent: undefined
  };
  branches: Branch[] = [];
  insuranceTypes: InsuranceType[] = [];
  insuranceAgents: InsuranceAgent[] = [];
  errorMessage: string = '';

  constructor(
      private insuranceContractService: InsuranceContractService,
      private branchService: BranchService,
      private insuranceTypeService: InsuranceTypeService,
      private insuranceAgentService: InsuranceAgentService,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.loadDependencies();
  }

  loadDependencies(): void {
      this.branchService.getAllBranches().subscribe(branches => {
          this.branches = branches;
      });
      this.insuranceTypeService.getAllInsuranceTypes().subscribe(insuranceTypes => {
          this.insuranceTypes = insuranceTypes;
      });
      this.insuranceAgentService.getAllInsuranceAgents().subscribe(insuranceAgents => {
          this.insuranceAgents = insuranceAgents;
      });
  }

  createInsuranceContract(): void {
      this.insuranceContractService.createInsuranceContract(this.insuranceContract).subscribe({
          next: (response) => {
              this.router.navigate(['/insurance-contracts']);
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to create Insurance Contract';
          }
      });
  }

  cancel(): void {
      this.router.navigate(['/insurance-contracts']);
  }
}
