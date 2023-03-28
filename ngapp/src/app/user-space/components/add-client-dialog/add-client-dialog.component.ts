import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';





@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.type = 'Client Visiteur'
    data.userId = JSON.parse(sessionStorage.getItem('loggedInUser')|| '{}')._id
  }
  
}
