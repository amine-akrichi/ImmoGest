import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-client-claim-dialog',
  templateUrl: './update-client-claim-dialog.component.html',
  styleUrls: ['./update-client-claim-dialog.component.css']
})
export class UpdateClientClaimDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
