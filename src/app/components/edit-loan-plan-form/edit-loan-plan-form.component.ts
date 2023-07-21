import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanPlan } from 'src/app/loanPlan';
import { LoanplanService } from 'src/app/services/loanplan.service';

@Component({
  selector: 'app-edit-loan-plan-form',
  templateUrl: './edit-loan-plan-form.component.html',
  styleUrls: ['./edit-loan-plan-form.component.css']
})
export class EditLoanPlanFormComponent implements OnInit {
  selectedView: string = 'customer'; // Default view is customer
  loanPlan: LoanPlan[] = [];
  isManagerView: boolean = false; // Default user is not manager
  constructor(private router: Router, private service:LoanplanService) { }
  ngOnInit(): void {
    // Get all loan plans from loanplan service
    this.service.getLoanPlans().subscribe((data: LoanPlan[])=>{
      this.loanPlan = data;
      console.log(this.loanPlan);
    });
  }

  editLoanPlan(planId: number) {
    // Redirect to edit loan plan form component with planId as route parameter
    this.router.navigate(['/edit-loan-plan', planId]);
  }
  }


