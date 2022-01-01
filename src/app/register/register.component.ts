import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  
  errorMessage:string="";

  registerForm:FormGroup = new FormGroup({

    first_name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)] ),
    last_name: new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]),
    age: new FormControl(null,[Validators.required , Validators.min(12) , Validators.max(130)])
    
  })


  signUpForm(){
    if(this.registerForm.valid){
      this._auth.register(this.registerForm.value).subscribe(
        (response)=>{
          if(response.message === "success")
          { this._router.navigate(['/login'])}
          else
          {this.errorMessage=response.message;}
        }
      )
    }
  }


}
