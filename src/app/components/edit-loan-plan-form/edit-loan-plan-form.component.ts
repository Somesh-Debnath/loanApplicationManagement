import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-loan-plan-form',
  templateUrl: './edit-loan-plan-form.component.html',
  styleUrls: ['./edit-loan-plan-form.component.css']
})
export class EditLoanPlanFormComponent {
  loanPlan: any = {}; // Object to store form values
  submitted = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const planId = this.route.snapshot.params['planId']; // Get the planId from route parameter
    // Fetch the existing loan plan details using planId (e.g., through a service or API call)
    // Assign the fetched details to the loanPlan object
    this.loanPlan = {
      planId: planId,
      planName: 'Existing Plan',
      validity: '12 months',
      // Other loan plan details...
    };
  }

  submitForm() {
    // Perform validation and update the loan plan details
    // Replace this with your own logic for validation and update
    this.submitted = true;
  }
}
