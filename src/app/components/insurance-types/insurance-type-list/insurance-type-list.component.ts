import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceTypeService } from '../../../services/insurance-type.service';
import { InsuranceType } from '../insurance-type.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-insurance-type-list',
  imports: [NgFor],
  templateUrl: './insurance-type-list.component.html',
  styleUrl: './insurance-type-list.component.css'
})
export class InsuranceTypeListComponent implements OnInit {
  insuranceTypes: InsuranceType[] = [];
  displayedColumns: string[] = ['insuranceTypeName', 'agentPercentage', 'actions'];

  constructor(private insuranceTypeService: InsuranceTypeService, private router: Router) { }

  ngOnInit(): void {
      this.loadInsuranceTypes();
  }

  loadInsuranceTypes(): void {
      this.insuranceTypeService.getAllInsuranceTypes().subscribe(insuranceTypes => {
          this.insuranceTypes = insuranceTypes;
      });
  }

  deleteInsuranceType(id: string | undefined): void {
      if (confirm('Delete Insurance Type?')) {
          this.insuranceTypeService.deleteInsuranceType(String(id)).subscribe(() => {
              this.loadInsuranceTypes();
          });
      }
  }

  editInsuranceType(id: string | undefined): void {
      this.router.navigate(['/insurance-types/edit', id]);
  }

  createInsuranceType(): void {
      this.router.navigate(['/insurance-types/create']);
  }
}
