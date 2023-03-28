import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _listUsersUrl = 'http://localhost:3000/api/user/listUsers'
  private _addUserUrl = 'http://localhost:3000/api/user/addUser'
  private _updateUserUrl = 'http://localhost:3000/api/user/updateUser'
  private _deleteUserUrl = 'http://localhost:3000/api/user/deleteUser'


  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<any>(this._listUsersUrl)
  }

  addUser(user:any){
    return this.http.post<any>(this._addUserUrl,user)
  }
  
  updateUser(user: any){
    return this.http.post<any>(this._updateUserUrl,user)
  }

  deleteUser(user: any){
    return this.http.post<any>(this._deleteUserUrl,user)
  }
}
