import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }
  
  errorMessage:string="";

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')])
  })
  
  signUpForm(){
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe(
        (response)=>{
          if(response.message === "success")
          {
            localStorage.setItem("currentUser",response.token)
            this._auth.saveCurrentUserData();
            this._router.navigate(['/home']);
          }
          else
          {
            this.errorMessage=response.message;
          }
        }
      )
    } 
  }
}
