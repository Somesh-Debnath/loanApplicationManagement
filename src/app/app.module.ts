import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddLoanPlanFormComponent } from './components/add-loan-plan-form/add-loan-plan-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EditLoanPlanFormComponent } from './components/edit-loan-plan-form/edit-loan-plan-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoanPlansComponent } from './components/loan-plans/loan-plans.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './auth/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    AddLoanPlanFormComponent,
    LoanPlansComponent,
    EditLoanPlanFormComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
