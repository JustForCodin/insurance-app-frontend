import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAgentListComponent } from './insurance-agent-list.component';

describe('InsuranceAgentListComponent', () => {
  let component: InsuranceAgentListComponent;
  let fixture: ComponentFixture<InsuranceAgentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceAgentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
