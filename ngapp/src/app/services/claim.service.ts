import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  private _listClientClaimsUrl = 'http://localhost:3000/api/claim/listClientClaims'
  private _listClaimsUrl= 'http://localhost:3000/api/claim/listClaims'
  private _addClaimUrl= 'http://localhost:3000/api/claim/addClaim'
  private _updateClaimUrl='http://localhost:3000/api/claim/updateClaim'
  private _deleteClaimUrl='http://localhost:3000/api/claim/deleteClaim'

  listClaims(){
    return this.http.get<any>(this._listClaimsUrl)
  }

  listClientClaims(client: any){
    return this.http.post<any>(this._listClientClaimsUrl,client)
  }

  addClaim(Claim: any){
    return this.http.post(this._addClaimUrl,Claim)
  }

  updateClaim(Claim: any){
    return this.http.post<any>(this._updateClaimUrl,Claim)
  }
  
  deleteClaim(Claim: any){
    return this.http.post<any>(this._deleteClaimUrl,Claim)
  }
}
