import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { SaleService } from 'src/app/services/sale.service';
import { ClientSellingAgreementComponent } from '../components/client-selling-agreement/client-selling-agreement.component';
import { SaleModificationDialogComponent } from '../components/sale-modification-dialog/sale-modification-dialog.component';
import { SalePaymentsDialogComponent } from '../components/sale-payments-dialog/sale-payments-dialog.component';

@Component({
  selector: 'app-user-client-purchases',
  templateUrl: './user-client-purchases.component.html',
  styleUrls: ['./user-client-purchases.component.css']
})
export class UserClientPurchasesComponent implements OnInit {

  clientId: any
  clientJsonString: any
  clientData: any
  client: any


  salesList: any = []


  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog, private clientService: ClientService, private _saleService: SaleService) { }

  ngOnInit(): void {
    this.clientId = this.activatedRoute.snapshot.paramMap.get('id')
    this.clientJsonString = '{"_id":"' + this.clientId + '" }'
    this.clientData = JSON.parse(this.clientJsonString)

    this.clientService.listOneClient(this.clientData)
      .subscribe(
        res => {
          this.client = res
          this._saleService.listClientSales(res)
            .subscribe(
              res => {
                console.log(res);
                this.salesList = res
              },
              err => console.log(err)

            )
        },
        err => console.log(err)
      )
  }

  addSale(){
    const dialogRef = this.dialog.open(ClientSellingAgreementComponent,{data:{clientId: this.clientData._id},panelClass:'selling-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result?.appartementNumber) {
          console.log(result);
          this._saleService.addSale(result)
            .subscribe(
              res =>{
                console.log(res);
                this.ngOnInit()
              },
              err => console.log(err)        
            )
        }
        
      }
    )
  }

  payments(sale: any){
    const dialogRef = this.dialog.open(SalePaymentsDialogComponent, {data:{sale: sale},panelClass: 'dialog',height:'80vh'})
  }

  modifications(sale: any){
    const dialogRef = this.dialog.open(SaleModificationDialogComponent, {data:{sale: sale},panelClass: 'dialog',height:'80vh',width:'75vw'})
  }
}
