export class LoanPlan {
    constructor(
        public planId: number,
        public loanPlanName: string,
        public principalAmount: number,
        public interestRate: number,
        public tenure: number,
        public emi: number,
        public totalAmount: number,
        public planValidity: string,
        public planAddedOn: string,
        public interestAmount: number,
        public totalPayable: number
    ){}
}