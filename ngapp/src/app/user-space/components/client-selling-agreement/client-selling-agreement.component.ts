import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppartementService } from 'src/app/services/appartement.service';

@Component({
  selector: 'app-client-selling-agreement',
  templateUrl: './client-selling-agreement.component.html',
  styleUrls: ['./client-selling-agreement.component.css']
})
export class ClientSellingAgreementComponent implements OnInit{
  appartementList:any = []
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _appartementService: AppartementService , 
    private dialogRef: MatDialogRef<ClientSellingAgreementComponent>){
    
  }
  ngOnInit(): void {
    this._appartementService.listAppartements()
      .subscribe(
        res => {
          this.appartementList = res
          console.log(this.appartementList);
        },
        err => console.log(err)
      )
  }

  closeDialog(){
    this.data.extrasPrice = 0
    this.data.discountedPrice = this.data.initialPrice-this.data.discount
    this.data.totalPrice = (this.data.initialPrice-this.data.discount) + this.data.cellierPrice+ this.data.parkingPrice
    this.dialogRef.close(this.data)
  }

}
