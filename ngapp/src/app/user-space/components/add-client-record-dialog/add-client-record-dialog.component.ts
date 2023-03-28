import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-record-dialog',
  templateUrl: './add-client-record-dialog.component.html',
  styleUrls: ['./add-client-record-dialog.component.css']
})
export class AddClientRecordDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
}
