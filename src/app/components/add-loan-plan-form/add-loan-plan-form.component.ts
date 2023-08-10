
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanPlan, interestRates } from 'src/app/loanPlan';
import { AddLoanPlanService } from 'src/app/services/add-loan-plan.service';

@Component({
  selector: 'app-add-loan-plan-form',
  templateUrl: './add-loan-plan-form.component.html',
  styleUrls: ['./add-loan-plan-form.component.css'],
})

export class AddLoanPlanFormComponent implements OnInit {
  loanPlanForm: FormGroup;
  submitted = false;
  loanPlan: LoanPlan;
  interestRates: interestRates[];
  isModalOpen: boolean = false;

  constructor(private formBuilder: FormBuilder, 
    private service: AddLoanPlanService, 
    private renderer: Renderer2,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getInterestRates().subscribe((data) => {
      this.interestRates = data as [];
      console.log(this.interestRates);
    });

    this.loanPlanForm = this.formBuilder.group({
      planName: ['', Validators.required],
      principalAmount: ['', Validators.required],
      tenure: ['', Validators.required],
      planValidity: ['', Validators.required],
      loanType: ['', Validators.required],
      interestRate: ['', Validators.required],
    });
  }

  onSubmit() {
    
    // Perform calculations based on the form values
    const principalAmount = this.loanPlanForm.value.principalAmount;
    const tenure = this.loanPlanForm.value.tenure;
    const selectedLoanType = this.loanPlanForm.value.loanType;

    // Get the selected interest rate from the interestRates array
    const selectedInterestRate = this.interestRates.find(
      (rate) => rate.id === selectedLoanType
    );
    console.log(selectedInterestRate);
    let interestRateIncrement = 0;
    if (principalAmount >= 500000 && principalAmount <= 2000000) {
      if (tenure >= 5 && tenure <= 20) {
        interestRateIncrement = 0.2;
      }
    } else if (principalAmount >= 500000 && principalAmount <= 10000000) {
      if (tenure >= 5 && tenure <= 30) {
        interestRateIncrement = 0.3;
      }
    } else if (principalAmount >= 500000 && principalAmount <= 3000000) {
      if (tenure >= 5 && tenure <= 15) {
        interestRateIncrement = 0.25;
      }
    } else if (principalAmount >= 500000 && principalAmount <= 3000000) {
      if (tenure >= 5 && tenure <= 10) {
        interestRateIncrement = 0.25;
      }
    }

    const interestRate = 10 + interestRateIncrement * (tenure - 1);
    const interestAmount = principalAmount * (interestRate / 100);
    // Calculate the total payable amount
    const totalPayable =
      principalAmount + principalAmount * (interestRate / 100);

    // Calculate the EMI amount
    const emi = totalPayable / tenure;

    // Create a LoanPlan object with the calculated values
    const loanPlan: LoanPlan = {
      planName: this.loanPlanForm.value.planName,
      principalAmount: principalAmount,
      tenure: tenure,
      planValidity: this.loanPlanForm.value.planValidity,
      emi: emi,
      loanTypeId: Number(selectedLoanType),
      interestAmount: interestAmount,
    };

    console.log(loanPlan);

    // Call the service to add the loan plan
    this.service.addLoanPlan(loanPlan).subscribe((data) => {
      this.submitted = true;
      alert('Loan plan added successfully');
      this.router.navigate(['loan-plans']);
      console.log(data);
    },
    (error) => {
      alert('Error occured while adding the loan plan');
      console.log(error);
    });
    // Assign the calculated values to the loanPlan object after submission
    loanPlan.totalPayable = totalPayable;
    loanPlan.emi = emi;

    // Update the loanPlan property of the component to display the values in the template
    this.loanPlan = loanPlan;
  
  }
  openModal() {
    this.router.navigate(['modal']);
  }
  closeModal() {
    this.isModalOpen = false;
  }

  
}
