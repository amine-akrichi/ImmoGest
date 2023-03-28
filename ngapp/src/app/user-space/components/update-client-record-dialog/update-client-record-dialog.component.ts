import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-client-record-dialog',
  templateUrl: './update-client-record-dialog.component.html',
  styleUrls: ['./update-client-record-dialog.component.css']
})
export class UpdateClientRecordDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
  
}
