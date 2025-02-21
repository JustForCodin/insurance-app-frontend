import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeEditComponent } from './insurance-type-edit.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { InsuranceTypeService } from '../../../services/insurance-type.service';

describe('InsuranceTypeEditComponent', () => {
  let component: InsuranceTypeEditComponent;
  let fixture: ComponentFixture<InsuranceTypeEditComponent>;
  let insuranceTypeServiceSpy: jasmine.SpyObj<InsuranceTypeService>;
  let routerSpy: jasmine.SpyObj<Router>;
  const activatedRouteStub = {
    paramMap: of({ get: (param: string) => 'testId' })
  };

  beforeEach(async () => {
    insuranceTypeServiceSpy = jasmine.createSpyObj('InsuranceTypeService', ['getInsuranceTypeById', 'updateInsuranceType']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    insuranceTypeServiceSpy.getInsuranceTypeById.and.returnValue(of({ _id: 'testId', insuranceTypeName: 'Test Type', agentPercentage: 0 }));
    insuranceTypeServiceSpy.updateInsuranceType.and.returnValue(of({_id: 'testId', insuranceTypeName: 'TestType1', agentPercentage: 0.5}));

    await TestBed.configureTestingModule({
      declarations: [ InsuranceTypeEditComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: InsuranceTypeService, useValue: insuranceTypeServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Edit Insurance Type');
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should call getInsuranceTypeById on initialization', () => {
    expect(insuranceTypeServiceSpy.getInsuranceTypeById).toHaveBeenCalledWith('testId');
  });
});
