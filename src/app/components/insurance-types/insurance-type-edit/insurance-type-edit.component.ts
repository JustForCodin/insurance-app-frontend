import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceTypeService } from '../../../services/insurance-type.service';
import { InsuranceType } from '../insurance-type.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-insurance-type-edit',
  imports: [FormsModule, NgIf],
  templateUrl: './insurance-type-edit.component.html'
})
export class InsuranceTypeEditComponent implements OnInit {
  insuranceType: InsuranceType = {
      insuranceTypeName: '',
      agentPercentage: 0
  };
  errorMessage: string = '';
  insuranceTypeId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private insuranceTypeService: InsuranceTypeService
  ) { }

  ngOnInit(): void {
      this.insuranceTypeId = this.route.snapshot.paramMap.get('id');
      if (this.insuranceTypeId) {
          this.loadInsuranceTypeDetails(this.insuranceTypeId);
      }
  }

  loadInsuranceTypeDetails(id: string): void {
      this.insuranceTypeService.getInsuranceTypeById(id).subscribe({
          next: (data) => {
              this.insuranceType = data;
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to load Insurance Type Date';
          }
      });
  }

  updateInsuranceType(): void {
      if (this.insuranceTypeId) {
          this.insuranceTypeService.updateInsuranceType(this.insuranceTypeId, this.insuranceType).subscribe({
              next: (response) => {
                  this.router.navigate(['/insurance-types']);
              },
              error: (error) => {
                  this.errorMessage = error.message || 'Failed to update Insurance Type';
              }
          });
      }
  }

  cancel(): void {
      this.router.navigate(['/insurance-types']);
  }
}
