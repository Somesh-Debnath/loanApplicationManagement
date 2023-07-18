export class LoanPlan {
    constructor(
        
        public loanPlanName: string,
        public principalAmount: number,
        public tenure: number,
        public emi: number,
        public planValidity: string,
        public interestAmount?: number,
        public totalPayable?: number,
        public planId?: number,
        public loanTypeId?: number,
        public interestRate?: number,
        public planAddedOn?: string,
    ){}
}

export class interestRates{
    constructor(
        public id: number,
        public baseInterestRate: number,
        public loanType: string
    ){}
}