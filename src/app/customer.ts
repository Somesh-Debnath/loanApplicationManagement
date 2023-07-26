export class Customer{
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password:string,
        
    ){}
}

export class UserRole{
    constructor(
        public value:string,
    ){}
}
