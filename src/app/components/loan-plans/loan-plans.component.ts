import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoanPlan } from 'src/app/loanPlan';
import { LoanplanService } from 'src/app/services/loanplan.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css'],
})
export class LoanPlansComponent implements OnInit {
  selectedView: string = 'customer'; // Default view is customer
  loanPlans: LoanPlan[] = [];
  isLoggedIn$: Observable<boolean>;
  isManagerView$: Observable<boolean>;
  isUserAdmin = false;
  constructor(
    private router: Router,
    private service: LoanplanService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    // Get all loan plans from loanplan service
    this.service.getLoanPlans().subscribe((data: LoanPlan[]) => {
      this.loanPlans = data;
      console.log(this.loanPlans);
    });
    this.isLoggedIn$ = this.loginService.isLoggedIn();
    this.isManagerView$ = this.checkIfManagerView();
    this.isManagerView$.subscribe((isAdmin) => {
      this.isUserAdmin = isAdmin;
      console.log('isUserAdmin: ', this.isUserAdmin);
    });
  }

  private checkIfManagerView(): Observable<boolean> {
    return this.loginService
      .findUserByEmail(localStorage.getItem('email'))
      .pipe(
        map((data: any) => {
          console.log('data.roles[0]: ', data.roles[0]);
          return data.roles[0].name === 'Admin' ? true : false;
        })
      );
  }

  editLoanPlan(planId: number) {
    // Redirect to edit loan plan form component with planId as route parameter
    if (this.isUserAdmin) {
      this.router.navigate(['/edit-loan-plan', planId]);
    } else {
      alert('You are not authorized to perform this action');
    }
  }
}
