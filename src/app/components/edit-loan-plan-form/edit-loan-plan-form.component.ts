import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanPlan } from 'src/app/loanPlan';
import { EditloanplanService } from 'src/app/services/editloanplan.service';
import { LoanplanService } from 'src/app/services/loanplan.service';

@Component({
  selector: 'app-edit-loan-plan-form',
  templateUrl: './edit-loan-plan-form.component.html',
  styleUrls: ['./edit-loan-plan-form.component.css']
})
export class EditLoanPlanFormComponent implements OnInit {
  selectedView: string = 'customer'; // Default view is customer
  loanPlanArray: LoanPlan[] = [];
  loanPlanForm: FormGroup;
  planId: number;
  loanPlan: LoanPlan ;
  submitted: boolean = false;
  isManagerView: boolean = false; // Default user is not manager

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private editservice: EditloanplanService,
    private loanservice: LoanplanService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Extract the 'planId' from the URL parameter and convert it to a number
      this.planId = Number(params.get('planId'));
      
      // Fetch the loan plan by 'planId' from the service or API
      this.loanservice.getLoanPlanByPlanId(this.planId).subscribe((data: LoanPlan) => {
        this.loanPlan = data;
        console.log(this.loanPlan);
        // Populate the form fields with the fetched loan plan data
        this.loanPlanForm.patchValue({
          //planName: this.loanPlan.planName,
          //planValidity: this.loanPlan.planValidity,
          loanTypeId: this.loanPlan.loanTypeId,
          principalAmount: this.loanPlan.principalAmount,
          tenure: this.loanPlan.tenure
        });
      });
    });

    this.loanPlanForm = this.formBuilder.group({
      planName: ['', Validators.required],
      planValidity: ['', Validators.required]
    });
  }
  onSubmit() {
    
    this.loanPlan.planName = this.loanPlanForm.value.planName;
    this.loanPlan.planValidity = this.loanPlanForm.value.planValidity;
    this.editservice.editloanplans(this.loanPlan, this.planId).subscribe(
      (data) => {
        console.log(data);
        this.submitted = true;
        //and redirect to loan plan list page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/loan-plans']);
        }
          , 1000);
      },
      (error) => {
        const errorObj = JSON.parse(error.error);
        const errorMessage = errorObj.message;
        alert(errorMessage)
        console.log(error);
      }
    );

    console.log(this.loanPlanForm.value);
  }
}
