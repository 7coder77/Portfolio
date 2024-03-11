import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '@app/shared/common-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '@app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  showLogin=true;
  hide: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    public router:Router,
    public commonService:CommonServiceService,
    private _snackBar: MatSnackBar,
    private authService:AuthService,
  ) { }
  goPublic(){
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  onSubmit() {
    this.showLogin=false;
    if (this.loginForm.valid) {
      this.commonService.postApi('https://fastapi-app-hf22.onrender.com/Auth_user',this.loginForm.value).subscribe((res)=>{
        console.log(res)
        this.authService.login(this.loginForm.value.email,this.loginForm.value.username)
        this.router.navigate(['/admin/home']);
      },
      (err)=>{
        this.showLogin=true;
        this._snackBar.open("Wrong Username Or Password", 'close');
      })
    }
  }

}
