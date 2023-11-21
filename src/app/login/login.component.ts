import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formSubmitted = false;
  loginForm!: FormGroup;
  username: any;
  password: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private LeadsListService: LeadsListService) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })

  }
  get form() {
    return this.loginForm.controls;
  }

  checkLogin() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const params = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
        device_id: 'fgdg'
      }
      console.log(params)
      this.LeadsListService.userLogin(params)
      .subscribe({
        next: (result:any) => {
          localStorage.setItem('userId', result?.data?.id)
          localStorage.setItem('token', result?.data?.token)
          this.router.navigateByUrl('/dashboard');
        },
        error: error => {
          if(error.error){ 
            this.errorMessage = error.error?.detail?.detail
          }
        }
    });
    }
  }

  resetPassword() {
    this.loginForm.controls['password'].reset()
  }
}
