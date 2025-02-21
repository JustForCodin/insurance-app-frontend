import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../../services/branch.service';
import { InsuranceAgentService } from '../../../services/insurance-agent.service';
import { InsuranceContractService } from '../../../services/insurance-contract.service';
import { InsuranceTypeService } from '../../../services/insurance-type.service';
import { Branch } from '../../branches/branch.model';
import { InsuranceAgent } from '../../insurance-agents/insurance-agent.model';
import { InsuranceType } from '../../insurance-types/insurance-type.model';
import { InsuranceContract } from '../insurance-contract.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-insurance-contract-edit',
  imports: [FormsModule, NgIf],
  templateUrl: './insurance-contract-edit.component.html'
})
export class InsuranceContractEditComponent implements OnInit {
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
  insuranceContractId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private insuranceContractService: InsuranceContractService,
      private branchService: BranchService,
      private insuranceTypeService: InsuranceTypeService,
      private insuranceAgentService: InsuranceAgentService 
  ) { }

  ngOnInit(): void {
      this.insuranceContractId = this.route.snapshot.paramMap.get('id');
      if (this.insuranceContractId) {
          this.loadInsuranceContractDetails(this.insuranceContractId);
          this.loadDependencies(); // Load branches, insurance types, agents for dropdowns
      }
  }

  loadInsuranceContractDetails(id: string): void {
      this.insuranceContractService.getInsuranceContractById(id).subscribe({
          next: (data) => {
              this.insuranceContract = data;
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to load Contract details';
          }
      });
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


  updateInsuranceContract(): void {
      if (this.insuranceContractId) {
          this.insuranceContractService.updateInsuranceContract(this.insuranceContractId, this.insuranceContract).subscribe({
              next: (response) => {
                  this.router.navigate(['/insurance-contracts']);
              },
              error: (error) => {
                  this.errorMessage = error.message || 'Failed to update Insurance Contract';
              }
          });
      }
  }

  cancel(): void {
      this.router.navigate(['/insurance-contracts']);
  }
}
