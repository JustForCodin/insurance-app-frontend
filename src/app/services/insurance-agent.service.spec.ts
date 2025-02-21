import { TestBed } from '@angular/core/testing';

import { InsuranceAgentService } from './insurance-agent.service';

describe('InsuranceAgentService', () => {
  let service: InsuranceAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
