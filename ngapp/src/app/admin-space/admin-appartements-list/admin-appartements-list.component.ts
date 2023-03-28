import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { AppartementService } from 'src/app/services/appartement.service';
import { CreateAppartementDialogComponent } from '../components/create-appartement-dialog/create-appartement-dialog.component';
import { UpdateAppartementDialogComponent } from '../components/update-appartement-dialog/update-appartement-dialog.component';

export interface Appartement{
  number: String,
  etage: String,
  bloc: String,
  type: String,
  orientation: String,
  vue: String,
  surface: Number,
  parking: boolean ,
  cellier: boolean,
  price_m2:Number
}

@Component({
  selector: 'app-admin-appartements-list',
  templateUrl: './admin-appartements-list.component.html',
  styleUrls: ['./admin-appartements-list.component.css']
})
export class AdminAppartementsListComponent implements OnInit {

  constructor(public dialog: MatDialog , private _appartementService: AppartementService) {}
  newAppartement!:Appartement
  listAppartements:Appartement[] = []
  ngOnInit(): void {
    this._appartementService.listAppartements()
      .subscribe(
        res=>{
          console.log(res)
          this.listAppartements=res
        },
        err=>console.log(err) 
      )
  }


  addAppartement(){
    const dialogRef = this.dialog.open(CreateAppartementDialogComponent,{data:{},panelClass:'create-appartement-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result) {
            this._appartementService.addAppartement(result)
              .subscribe(
                res => {
                  console.log(res)
                  this.ngOnInit()
                },
                err => console.log(err)
              )
          }
        }
      )
  }

  updateAppartement(appartement: any){
    console.log(appartement);
    
    const dialogRef = this.dialog.open(UpdateAppartementDialogComponent,{data:{appartement: appartement},panelClass:'create-appartement-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result) {
            console.log(result);
            this._appartementService.updateAppartement(result)
              .subscribe(
                res => {
                  console.log(res)
                  this.ngOnInit()
                },
                err => console.log(err)
              )
          }
        }
      )
  }

  deleteAppartement(appartement: any){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent,{data:{type : 'l\'appartement',data: appartement.number },panelClass:'delete-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result?.confirmDelete) {
          console.log(result.confirmDelete)
          this._appartementService.deleteAppartement(appartement)
            .subscribe(
              res => {
                console.log(res)
                this.ngOnInit()
              },
              err => console.log(err)
              
            )
        }
      }
    )
    
  }

}

