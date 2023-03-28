import { Component,EventEmitter,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ClientService } from 'src/app/services/client.service';
import { SaleService } from 'src/app/services/sale.service';
import { AddClientDialogComponent } from '../components/add-client-dialog/add-client-dialog.component';
import { ClientSellingAgreementComponent } from '../components/client-selling-agreement/client-selling-agreement.component';
import { UpdateClientDialogComponent } from '../components/update-client-dialog/update-client-dialog.component';



@Component({
  selector: 'app-user-clients-list',
  templateUrl: './user-clients-list.component.html',
  styleUrls: ['./user-clients-list.component.css']
})


export class UserClientsListComponent implements OnInit{
  
  clientList:any = []

  enteredSearchValue = ''

  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()


  constructor(private _clientService: ClientService, public dialog:MatDialog, private _saleService: SaleService){}



  ngOnInit(): void {
      this._clientService.listUserClients(JSON.parse(sessionStorage.getItem('loggedInUser')|| '{}'))
        .subscribe(
          res=>{
            console.log(res)
            this.clientList = res
          },
          err => console.log(err)
        )
  }

  

  addClient(){
    const dialogRef = this.dialog.open(AddClientDialogComponent,{height:'90vh',data:{},panelClass:'add-client-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this._clientService.addClient(result)
          .subscribe(
            res=>{
              console.log(res)
              this.ngOnInit()
            },
            err=>console.log(err)
          )
        }
      }
    )
  }

  updateClient(client: any){
    const dialogRef = this.dialog.open(UpdateClientDialogComponent,{height:'90vh',data:{client: client},panelClass:'add-client-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this._clientService.updateClient(result)
          .subscribe(
            res=>{
              console.log(res)
              this.ngOnInit()
            },
            err=>console.log(err)
          )
        }
      }
    )
  }


  deleteClient(client:any){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent,{data:{type : 'le client',data: client.lastname+' '+client.name },panelClass:'delete-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result?.confirmDelete) {
          console.log(result.confirmDelete)
          this._clientService.deleteClient(client)
            .subscribe(
              res => {
                console.log(res);
                this.ngOnInit()
              },
              err => console.log(err) 
            )
        }
      }
    )  
  }

  createSellingAgreement(client:any){
    const dialogRef = this.dialog.open(ClientSellingAgreementComponent,{data:{clientId: client._id},panelClass:'selling-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result.appartementNumber) {
          console.log(result);
          this._saleService.addSale(result)
            .subscribe(
              res =>{
                console.log(res);
                client.type = 'Client Acheteur'
                this._clientService.updateClient(client)
                  .subscribe(
                    res => console.log(res),
                    err => console.log(err)
                  )
                this.ngOnInit()
              },
              err => console.log(err)        
            )
        }
        
      }
    )
  }
}
