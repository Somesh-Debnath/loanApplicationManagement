export class LoanPlan {
    constructor(
        
        public loanPlanName: string,
        public principalAmount: number,
        public interestRate: number,
        public tenure: number,
        public emi: number,
        public planValidity: string,
        public planAddedOn: string,
        public interestAmount: number,
        public totalPayable: number,
        public planId?: number,
    ){}
}

export class interestRates{
    constructor(
        public id: number,
        public baseInterestRate: number,
        public loanType: string
    ){}
}