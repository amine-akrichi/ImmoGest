import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  constructor(private http: HttpClient) { }

  private _listAppartementsUrl= 'http://localhost:3000/api/appartement/listAppartements'
  private _addAppartementUrl= 'http://localhost:3000/api/appartement/addAppartement'
  private _updateAppartementUrl='http://localhost:3000/api/appartement/updateAppartement'
  private _deleteAppartementUrl='http://localhost:3000/api/appartement/deleteAppartement'

  listAppartements(){
    return this.http.get<any>(this._listAppartementsUrl)
  }

  addAppartement(appartement: any){
    return this.http.post<any>(this._addAppartementUrl,appartement)
  }

  updateAppartement(appartement: any){
    return this.http.post<any>(this._updateAppartementUrl,appartement)
  }
  
  deleteAppartement(appartement: any){
    return this.http.post<any>(this._deleteAppartementUrl,appartement)
  }

}
