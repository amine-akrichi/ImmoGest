import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private _listUserClientsUrl = 'http://localhost:3000/api/client/listUserClients'
  private _listClientsUrl= 'http://localhost:3000/api/client/listClients'
  private _listOneClientUrl= 'http://localhost:3000/api/client/listOneClient'
  private _addClientUrl= 'http://localhost:3000/api/client/addClient'
  private _updateClientUrl='http://localhost:3000/api/client/updateClient'
  private _deleteClientUrl='http://localhost:3000/api/client/deleteClient'

  listClients(){
    return this.http.get<any>(this._listClientsUrl)
  }

  listOneClient(client: any){
    return this.http.post<any>(this._listOneClientUrl,client)
  }

  listUserClients(user: any){
    return this.http.post<any>(this._listUserClientsUrl,user)
  }

  addClient(client: any){
    return this.http.post(this._addClientUrl,client)
  }

  updateClient(client: any){
    return this.http.post<any>(this._updateClientUrl,client)
  }
  
  deleteClient(client: any){
    return this.http.post<any>(this._deleteClientUrl,client)
  }
}
