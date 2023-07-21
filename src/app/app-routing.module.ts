import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanPlanFormComponent } from './components/add-loan-plan-form/add-loan-plan-form.component';

import { EditLoanPlanFormComponent } from './components/edit-loan-plan-form/edit-loan-plan-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoanPlansComponent } from './components/loan-plans/loan-plans.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './auth/AuthGuard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthComponent},
  { path: 'add-loan-plan', component: AddLoanPlanFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-loan-plan', component: EditLoanPlanFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-loan-plan/:id', component: EditLoanPlanFormComponent, canActivate: [AuthGuard]},
  { path: 'loan-plans', component: LoanPlansComponent, canActivate: [AuthGuard] },
  { path: 'register' , component:RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
