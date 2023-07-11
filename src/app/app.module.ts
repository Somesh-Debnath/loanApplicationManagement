import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddLoanPlanFormComponent } from './components/add-loan-plan-form/add-loan-plan-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BankManagerLoginComponent } from './components/bank-manager-login/bank-manager-login.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { EditLoanPlanFormComponent } from './components/edit-loan-plan-form/edit-loan-plan-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoanPlansComponent } from './components/loan-plans/loan-plans.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLoanPlanFormComponent,
    LoanPlansComponent,
    EditLoanPlanFormComponent,
    NavbarComponent,
    BankManagerLoginComponent,
    CustomerLoginComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
