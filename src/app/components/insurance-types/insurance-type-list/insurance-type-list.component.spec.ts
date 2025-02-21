import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeListComponent } from './insurance-type-list.component';
import { of } from 'rxjs';
import { InsuranceTypeService } from '../../../services/insurance-type.service';

describe('InsuranceTypeListComponent', () => {
  let component: InsuranceTypeListComponent;
  let fixture: ComponentFixture<InsuranceTypeListComponent>;
  let insuranceTypeServiceSpy: jasmine.SpyObj<InsuranceTypeService>;

  beforeEach(async () => {
    insuranceTypeServiceSpy = jasmine.createSpyObj('InsuranceTypeService', ['getAllInsuranceTypes', 'deleteInsuranceType']);
    insuranceTypeServiceSpy.getAllInsuranceTypes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ InsuranceTypeListComponent ],
      providers: [
        { provide: InsuranceTypeService, useValue: insuranceTypeServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('All Insurance Types');
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should call getAllInsuranceTypes on initialization', () => {
    expect(insuranceTypeServiceSpy.getAllInsuranceTypes).toHaveBeenCalled();
  });
});
