import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  credentials={
    name:'',
    email:'',
    password:'',
  }
  constructor(private formBuilder: FormBuilder, private router:Router, private registerService:RegistrationService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required
        
        ],
      ],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    // if (this.registerForm.invalid) {
    //   alert("Invalid credentials");
    //   return;
    // }
    this.loading = true;
    this.credentials.email=this.registerForm.value.email;
    this.credentials.password=this.registerForm.value.password;
    if(this.credentials.name !== "Admin"){
      this.credentials.name="User"
    }

    this.registerService.doRegister(this.credentials).subscribe(
      (response:any)=>{
        console.log(response);
        
          alert("Registration successful");
        
      },
      (error)=>{
        console.log(error);
        alert("Something went wrong");
      }
    );
    console.log(this.registerForm.value);
    this.router.navigate(['/']);
  }
}
