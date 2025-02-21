import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAgentEditComponent } from './insurance-agent-edit.component';

describe('InsuranceAgentEditComponent', () => {
  let component: InsuranceAgentEditComponent;
  let fixture: ComponentFixture<InsuranceAgentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceAgentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAgentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
