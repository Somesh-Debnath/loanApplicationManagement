import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanPlan } from '../loanPlan';

@Injectable({
  providedIn: 'root'
})
export class EditloanplanService {

  constructor(private http:HttpClient) { }
    editloanplans(loanPlan:LoanPlan){
      return this.http.put("http://localhost:9093/api/loanplan/{loanPlanId}",loanPlan,{responseType:'text' as 'json'});
    }
  }

