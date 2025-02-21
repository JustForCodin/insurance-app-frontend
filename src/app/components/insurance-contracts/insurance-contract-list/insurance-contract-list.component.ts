import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceContractService } from '../../../services/insurance-contract.service';
import { InsuranceContract } from '../insurance-contract.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-insurance-contract-list',
  imports: [NgFor, CommonModule],
  templateUrl: './insurance-contract-list.component.html',
  styleUrl: './insurance-contract-list.component.css'
})
export class InsuranceContractListComponent implements OnInit {
  insuranceContracts: InsuranceContract[] = [];
  displayedColumns: string[] = [
    'contractNumber', 
    'contractDate', 
    'insuranceAmount', 
    'tariffRate', 
    'branchName', 
    'insuranceTypeName', 
    'agentName', 
    'actions'
  ];

  constructor(private insuranceContractService: InsuranceContractService, private router: Router) { }

  ngOnInit(): void {
      this.loadInsuranceContracts();
  }

  loadInsuranceContracts(): void {
      this.insuranceContractService.getAllInsuranceContracts().subscribe(contracts => {
          this.insuranceContracts = contracts;
      });
  }

  deleteInsuranceContract(id: string | undefined): void {
      if (confirm('Delete Insurance Contract?')) {
          this.insuranceContractService.deleteInsuranceContract(String(id)).subscribe(() => {
              this.loadInsuranceContracts();
          });
      }
  }

  editInsuranceContract(id: string | undefined): void {
      this.router.navigate(['/insurance-contracts/edit', id]);
  }

  createInsuranceContract(): void {
      this.router.navigate(['/insurance-contracts/create']);
  }
}
