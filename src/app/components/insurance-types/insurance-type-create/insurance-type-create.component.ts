import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceTypeService } from '../../../services/insurance-type.service';
import { InsuranceType } from '../insurance-type.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-insurance-type-create',
  imports: [FormsModule, NgIf],
  templateUrl: './insurance-type-create.component.html'
})
export class InsuranceTypeCreateComponent {
  insuranceType: InsuranceType = {
      insuranceTypeName: '',
      agentPercentage: 0
  };
  errorMessage: string = '';

  constructor(private insuranceTypeService: InsuranceTypeService, private router: Router) { }

  createInsuranceType(): void {
      this.insuranceTypeService.createInsuranceType(this.insuranceType).subscribe({
          next: (response) => {
              this.router.navigate(['/insurance-types']);
          },
          error: (error) => {
              this.errorMessage = error.message || 'Failed to create Insurance Type';
          }
      });
  }

  cancel(): void {
      this.router.navigate(['/insurance-types']);
  }
}
