import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAgentCreateComponent } from './insurance-agent-create.component';

describe('InsuranceAgentCreateComponent', () => {
  let component: InsuranceAgentCreateComponent;
  let fixture: ComponentFixture<InsuranceAgentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceAgentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAgentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
