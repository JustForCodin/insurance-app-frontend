import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceContractListComponent } from './insurance-contract-list.component';

describe('InsuranceContractListComponent', () => {
  let component: InsuranceContractListComponent;
  let fixture: ComponentFixture<InsuranceContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceContractListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
