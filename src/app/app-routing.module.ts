import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanPlanFormComponent } from './components/add-loan-plan-form/add-loan-plan-form.component';
import { BankManagerLoginComponent } from './components/bank-manager-login/bank-manager-login.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { EditLoanPlanFormComponent } from './components/edit-loan-plan-form/edit-loan-plan-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoanPlansComponent } from './components/loan-plans/loan-plans.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'bank-manager-login', component: BankManagerLoginComponent},
  { path: 'add-loan-plan', component: AddLoanPlanFormComponent},
  { path: 'edit-loan-plan/:id', component: EditLoanPlanFormComponent},
  { path: 'loan-plans', component: LoanPlansComponent},
  { path: 'register' , component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
