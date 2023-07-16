import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanPlan } from 'src/app/loanPlan';
import { LoanplanService } from 'src/app/services/loanplan.service';


@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css']
})
export class LoanPlansComponent implements OnInit{
  selectedView: string = 'customer'; // Default view is customer
  loanPlans: LoanPlan[] = [];
  isManagerView: boolean = false; // Default user is not manager
  constructor(private router: Router, private service:LoanplanService) { }
  ngOnInit(): void {
    // Get all loan plans from loanplan service
    this.service.getLoanPlans().subscribe((data: LoanPlan[])=>{
      this.loanPlans = data;
      console.log(this.loanPlans);
    });
  }

  editLoanPlan(planId: number) {
    // Redirect to edit loan plan form component with planId as route parameter
    this.router.navigate(['/edit-loan-plan', planId]);
  }
}
