import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanplanService } from 'src/app/services/loanplan.service';


@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css']
})
export class LoanPlansComponent implements OnInit{
  selectedView: string = 'customer'; // Default view is customer
  loanPlans: any[];

  constructor(private router: Router, private service:LoanplanService) { }
  ngOnInit(): void {
    // Get all loan plans from loanplan service
    this.service.getLoanPlans().subscribe((data: any[])=>{
      this.loanPlans = data;
      console.log(this.loanPlans);
    });
  }

  editLoanPlan(planId: number) {
    // Redirect to edit loan plan form component with planId as route parameter
    this.router.navigate(['/edit-loan-plan', planId]);
  }
}
