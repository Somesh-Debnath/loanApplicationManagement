import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer = new Customer(0, "", "", "");

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
