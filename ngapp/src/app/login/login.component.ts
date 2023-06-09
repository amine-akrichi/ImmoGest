import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  hide = true;
  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required ]) 
    }
  )
  constructor(private _auth: AuthService , private _router:Router , private _snackBar: MatSnackBar){}
  
  ngOnInit(){
    
  }

  isAdmin(){
    if (this._auth.isAdmin()) {
      this._router.navigate(['/Admin'])
    }
    else{
      this._router.navigate(['/User'])  
    }
  }

  onLogin(){
    
    if (!this.loginForm?.get('username')?.errors && !this.loginForm?.get('password')?.errors){
      this._auth.login(this.loginForm.value)
        .subscribe(
          res=>{
            console.log(res)
            sessionStorage.setItem("loggedInUser",JSON.stringify(res))
            this.isAdmin()
          },
          err=>{
            console.log(err)
            this._snackBar.open('Username ou mot de passe incorrect','ok',{duration: 2000,horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition})
          }
        )
    }    
  }
}
