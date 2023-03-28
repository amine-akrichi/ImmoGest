import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(private http: HttpClient) { }

  private _listSaleModificationsUrl = 'http://localhost:3000/api/modification/listSaleModifications'
  private _listModificationsUrl= 'http://localhost:3000/api/modification/listModifications'
  private _addModificationUrl= 'http://localhost:3000/api/modification/addModification'
  private _updateModificationUrl='http://localhost:3000/api/modification/updateModification'
  private _deleteModificationUrl='http://localhost:3000/api/modification/deleteModification'

  listModification(){
    return this.http.get<any>(this._listModificationsUrl)
  }

  listSaleModifications(Sale: any){
    return this.http.post<any>(this._listSaleModificationsUrl,Sale)
  }

  addModification(Modification: any){
    return this.http.post(this._addModificationUrl,Modification)
  }

  updateModification(Modification: any){
    return this.http.post<any>(this._updateModificationUrl,Modification)
  }
  
  deleteModification(Modification: any){
    return this.http.post<any>(this._deleteModificationUrl,Modification)
  }
}
