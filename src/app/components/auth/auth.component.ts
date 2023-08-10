import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  credentials = {
    email: '',
    password: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        // [Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        // Validators.minLength(8)
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
    this.credentials.email = this.loginForm.value.email;
    this.credentials.password = this.loginForm.value.password;

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
      (response: any) => {
        console.log(response);
        if (response && response.jwtToken) {
          alert('Login successful');
          localStorage.setItem('token', response.jwtToken);
          localStorage.setItem('email', response.username);
          this.router.navigate(['/']);
        } else {
          alert('Login failed');
        }
      },
      (error) => {
        console.log(error);
        alert('Invalid credentials');
      }
    );
    
    // this.loginService.findUserByEmail(this.credentials.email).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     if (response && response.jwtToken) {
    //       alert('Login successful');
    //       // Optionally, navigate to a protected route (e.g., '/protected') after successful login
    //       this.router.navigate(['/']);
    //     } else {
    //       alert('Login failed');
    //     }
    //   }
    // );

    console.log(this.loginForm.value);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }


}
