import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('demoModal') demoModal: ElementRef;
  @ViewChild('closeButton') closeButton: ElementRef;  

  constructor(private formBuilder: FormBuilder, private service: AddLoanPlanService, private renderer: Renderer2) { }

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
    this.submitted = true;
    // Perform calculations based on the form values
    const principalAmount = this.loanPlanForm.value.principalAmount;
    const tenure = this.loanPlanForm.value.tenure;
    const selectedLoanType = this.loanPlanForm.value.loanType;

    // Get the selected interest rate from the interestRates array
    const selectedInterestRate = this.interestRates.find(
      (rate) => rate.id === selectedLoanType
    );
    console.log(selectedInterestRate);

    // Calculate the interest rate based on the loan type and tenure
    //const baseInterestRate = selectedInterestRate.baseInterestRate;

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
      loanPlanName: this.loanPlanForm.value.planName,
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
      console.log(data);
    });

    // Assign the calculated values to the loanPlan object after submission
    loanPlan.totalPayable = totalPayable;
    loanPlan.emi = emi;

    // Update the loanPlan property of the component to display the values in the template
    this.loanPlan = loanPlan;
    this.openModal();
  }

  openModal() {
    const modalElement = this.demoModal.nativeElement;
    this.renderer.setStyle(modalElement, 'display', 'block');
    this.renderer.addClass(modalElement, 'show');
  }
  closeModal() {
    const modalElement = this.demoModal.nativeElement;
    this.renderer.setStyle(modalElement, 'display', 'none');
    this.renderer.removeClass(modalElement, 'show');
  }
  
}
