import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAgentService } from '../../../services/insurance-agent.service';
import { InsuranceAgent } from '../insurance-agent.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-insurance-agent-list',
  imports: [NgFor],
  templateUrl: './insurance-agent-list.component.html',
  styleUrl: './insurance-agent-list.component.css'
})
export class InsuranceAgentListComponent implements OnInit {
  insuranceAgents: InsuranceAgent[] = [];
  displayedColumns: string[] = ['lastName', 'firstName', 'middleName', 'phoneNumber', 'branchName', 'actions'];

  constructor(private insuranceAgentService: InsuranceAgentService, private router: Router) { }

  ngOnInit(): void {
      this.loadInsuranceAgents();
  }

  loadInsuranceAgents(): void {
      this.insuranceAgentService.getAllInsuranceAgents().subscribe(agents => {
          this.insuranceAgents = agents;
      });
  }

  deleteInsuranceAgent(id: string | undefined): void {
    if (confirm('Delete Insurance Agent?')) {
        this.insuranceAgentService.deleteInsuranceAgent(String(id)).subscribe(() => {
          this.loadInsuranceAgents();
      });
    }
  }

  editInsuranceAgent(id: string | undefined): void {
    this.router.navigate(['/insurance-agents/edit', id]);
  }

  createInsuranceAgent(): void {
    this.router.navigate(['/insurance-agents/create']);
  }
}