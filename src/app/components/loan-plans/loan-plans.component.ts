import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoanPlan } from 'src/app/loanPlan';
import { LoanplanService } from 'src/app/services/loanplan.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css']
})
export class LoanPlansComponent implements OnInit{
  selectedView: string = 'customer'; // Default view is customer
  loanPlans: LoanPlan[] = [];
  isLoggedIn$: Observable<boolean>; 
  isManagerView$: Observable<boolean>;
  constructor(private router: Router, private service:LoanplanService, private loginService:LoginService) { }
  ngOnInit(): void {
    // Get all loan plans from loanplan service
    this.service.getLoanPlans().subscribe((data: LoanPlan[])=>{
      this.loanPlans = data;
      console.log(this.loanPlans);
    });
    this.isLoggedIn$ = this.loginService.isLoggedIn();
    this.isManagerView$ = this.loginService.isManagerView();
  }

  editLoanPlan(planId: number) {
    // Redirect to edit loan plan form component with planId as route parameter
    this.router.navigate(['/edit-loan-plan', planId]);
  }
}
