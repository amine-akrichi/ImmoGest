import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-claim-dialog',
  templateUrl: './add-client-claim-dialog.component.html',
  styleUrls: ['./add-client-claim-dialog.component.css']
})
export class AddClientClaimDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    data.resolved = false
  }
}
