import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-client-dialog',
  templateUrl: './update-client-dialog.component.html',
  styleUrls: ['./update-client-dialog.component.css']
})
export class UpdateClientDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }
}
