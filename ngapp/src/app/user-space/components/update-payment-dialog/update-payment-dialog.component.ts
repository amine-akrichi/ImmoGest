import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-payment-dialog',
  templateUrl: './update-payment-dialog.component.html',
  styleUrls: ['./update-payment-dialog.component.css']
})
export class UpdatePaymentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
