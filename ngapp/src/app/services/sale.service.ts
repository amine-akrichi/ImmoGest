import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  private _listClientSalesUrl = 'http://localhost:3000/api/sale/listClientSales'
  private _listSalesUrl= 'http://localhost:3000/api/sale/listSales'
  private _addSaleUrl= 'http://localhost:3000/api/sale/addSale'
  private _updateSaleUrl='http://localhost:3000/api/sale/updateSale'
  private _deleteSaleUrl='http://localhost:3000/api/sale/deleteSale'

  listSale(){
    return this.http.get<any>(this._listSalesUrl)
  }

  listClientSales(client: any){
    return this.http.post<any>(this._listClientSalesUrl,client)
  }

  addSale(sale: any){
    return this.http.post(this._addSaleUrl,sale)
  }

  updateSale(sale: any){
    return this.http.post<any>(this._updateSaleUrl,sale)
  }
  
  deleteSale(sale: any){
    return this.http.post<any>(this._deleteSaleUrl,sale)
  }
}
