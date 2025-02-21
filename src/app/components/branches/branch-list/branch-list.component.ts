import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { Router } from '@angular/router';
import { Branch } from '../branch.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-branch-list',
  imports: [NgFor],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css'
})
export class BranchListComponent implements OnInit {
  branches: Branch[] = [];
  displayedColumns: string[] = ['branchName', 'address', 'phoneNumber', 'actions'];

  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
      this.loadBranches();
  }

  loadBranches(): void {
      this.branchService.getAllBranches().subscribe(branches => {
          this.branches = branches;
      });
  }

  deleteBranch(id: string | undefined): void {
      if (confirm('Delete this branch?')) {
          this.branchService.deleteBranch(String(id)).subscribe(() => {
              this.loadBranches(); // update branches list after delete
          });
      }
  }

  editBranch(id: string | undefined): void {
      this.router.navigate(['/branches/edit', id]);
  }

  createBranch(): void {
      this.router.navigate(['/branches/create']); 
  }
}
