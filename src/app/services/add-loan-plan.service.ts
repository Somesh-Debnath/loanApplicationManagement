import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanPlan } from '../loanPlan';

@Injectable({
  providedIn: 'root'
})
export class AddLoanPlanService {

  constructor(private http:HttpClient) { }

  public addLoanPlan(loanPlan:LoanPlan){
    return this.http.post("http://localhost:9093/api/loanplan",loanPlan,{responseType:'text' as 'json'});
  }

  public editLoanPlan(loanPlan:LoanPlan){
    return this.http.put("http://localhost:9093/loanplan",loanPlan,{responseType:'text' as 'json'});
  }

  getInterestRates() {
    return this.http.get('http://localhost:9093/api/interestrates');
  }
}
