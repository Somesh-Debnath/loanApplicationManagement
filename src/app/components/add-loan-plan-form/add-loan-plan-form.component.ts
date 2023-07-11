import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanPlan } from 'src/app/loanPlan';
import { AddLoanPlanService } from 'src/app/services/add-loan-plan.service';

@Component({
  selector: 'app-add-loan-plan-form',
  templateUrl: './add-loan-plan-form.component.html',
  styleUrls: ['./add-loan-plan-form.component.css']
})
export class AddLoanPlanFormComponent implements OnInit {
  loanPlanForm: FormGroup;
  submitted = false;
  loanPlan:LoanPlan;

  constructor(private formBuilder: FormBuilder, private service:AddLoanPlanService) { }

  ngOnInit() {

    this.loanPlanForm = this.formBuilder.group({
      planType: ['', Validators.required],
      tenure: [1, Validators.required],
      interestRate: [0, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loanPlanForm.invalid) {
      return;
    }

    // Perform calculations based on the form values
    const tenure = this.loanPlanForm.value.tenure;
    const interestRate = this.loanPlanForm.value.interestRate;

    this.service.addLoanPlan(this.loanPlan).subscribe(data=>{
      console.log(data);
    });
    
  }
}
