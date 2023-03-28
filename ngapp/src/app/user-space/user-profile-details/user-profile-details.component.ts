import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit{
  hide=true;
  loggedInUser:any
  users:any=[]
  constructor(private _userService: UserService){}

  ngOnInit(){
    this.loggedInUser=JSON.parse(sessionStorage.getItem('loggedInUser')|| '{}')
    console.log(this.loggedInUser);
    this._userService.listUsers()
      .subscribe(
        res=>this.users=res,
        err=>console.log(err)
      ) 
  }

  updateUser(user:any){
    this._userService.updateUser(user)
    .subscribe(
      res=>{
        console.log(res)
        sessionStorage.setItem('loggedInUser',JSON.stringify(res))
      },
      err=>console.log(err)
    )
  }
}
