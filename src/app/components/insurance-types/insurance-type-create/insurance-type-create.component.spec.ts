import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeCreateComponent } from './insurance-type-create.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { InsuranceTypeService } from '../../../services/insurance-type.service';

describe('InsuranceTypeCreateComponent', () => {
  let component: InsuranceTypeCreateComponent;
  let fixture: ComponentFixture<InsuranceTypeCreateComponent>;
  let insuranceTypeServiceSpy: jasmine.SpyObj<InsuranceTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    insuranceTypeServiceSpy = jasmine.createSpyObj('InsuranceTypeService', ['createInsuranceType']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    insuranceTypeServiceSpy.createInsuranceType.and.returnValue(of({insuranceTypeName: 'TestType', agentPercentage: 0}));

    await TestBed.configureTestingModule({
      declarations: [ InsuranceTypeCreateComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: InsuranceTypeService, useValue: insuranceTypeServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Add Insurance Type');
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});
