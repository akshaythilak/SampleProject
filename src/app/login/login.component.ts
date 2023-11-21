import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formSubmitted = false;
  loginForm!: FormGroup;
  emailAddress: any;
  password: any;

  constructor(private fb: FormBuilder,private router: Router){}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() { 
    this.loginForm = this.fb.group({
      emailAddress: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
   
  }
  get form() {
    return this.loginForm.controls;
  }

  checkLogin(){
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const params = {
        emailAddress: this.loginForm.controls['emailAddress'].value,
        password: this.loginForm.controls['password'].value,
      }
      console.log(params)
      this.router.navigateByUrl('/dashboard');
    }
  }

  resetPassword() {
    this.loginForm.controls['password'].reset()
  }
}
