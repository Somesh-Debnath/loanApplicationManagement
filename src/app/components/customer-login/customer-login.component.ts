import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  credentials={
    email:'',
    password:''
  }
  constructor(private formBuilder: FormBuilder, private loginService:LoginService, private router:Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(8)
        ],
      ],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    // if (this.loginForm.invalid) {
    //   alert("Invalid credentials");
    //   return;
    // }
    this.loading = true;
    this.credentials.email=this.loginForm.value.email;
    this.credentials.password=this.loginForm.value.password;

    // this.registerService.doRegister(this.credentials).subscribe(
    //   (response:any)=>{
    //     console.log(response);
    //     if(response.status==200){
    //       alert("Registration successful");
    //     }
    //   },
    //   (error)=>{
    //     console.log(error);
    //     alert("Something went wrong");
    //   }
    // )

    this.loginService.doLogin(this.credentials).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status==200){
          alert("Login successful");
          this.loginService.loginUser(response.token);
        }
      },
      (error)=>{
        console.log(error);
        alert("Something went wrong");
      }
    )

    console.log(this.loginForm.value);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
