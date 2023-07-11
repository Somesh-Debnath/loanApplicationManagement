import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-manager-login',
  templateUrl: './bank-manager-login.component.html',
  styleUrls: ['./bank-manager-login.component.css']
})
export class BankManagerLoginComponent {
  username: string;
  password: string;

  login() {
    // Add your login logic for bank managers here
    console.log('Bank Manager Login');
  }
}
