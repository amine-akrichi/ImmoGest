import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  private _listSalePaymentsUrl = 'http://localhost:3000/api/payment/listSalePayments'
  private _listPaymentsUrl= 'http://localhost:3000/api/payment/listPayments'
  private _addPaymentUrl= 'http://localhost:3000/api/payment/addPayment'
  private _updatePaymentUrl='http://localhost:3000/api/payment/updatePayment'
  private _deletePaymentUrl='http://localhost:3000/api/payment/deletePayment'

  listPayment(){
    return this.http.get<any>(this._listPaymentsUrl)
  }

  listSalePayments(Sale: any){
    return this.http.post<any>(this._listSalePaymentsUrl,Sale)
  }

  addPayment(Payment: any){
    return this.http.post(this._addPaymentUrl,Payment)
  }

  updatePayment(Payment: any){
    return this.http.post<any>(this._updatePaymentUrl,Payment)
  }
  
  deletePayment(Payment: any){
    return this.http.post<any>(this._deletePaymentUrl,Payment)
  }
}
