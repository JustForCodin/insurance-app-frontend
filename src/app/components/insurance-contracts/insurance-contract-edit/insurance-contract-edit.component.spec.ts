import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceContractEditComponent } from './insurance-contract-edit.component';

describe('InsuranceContractEditComponent', () => {
  let component: InsuranceContractEditComponent;
  let fixture: ComponentFixture<InsuranceContractEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceContractEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceContractEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
