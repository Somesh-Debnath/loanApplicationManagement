import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanplanService {

  constructor(private http:HttpClient) { }

  getLoanPlans() {
    return this.http.get('http://localhost:9093/api/loanplans');
  }

  getLoanPlanByPlanId(loanPlanId: number) {
    return this.http.get('http://localhost:9093/api/loanplans/' + loanPlanId);
  }

}
