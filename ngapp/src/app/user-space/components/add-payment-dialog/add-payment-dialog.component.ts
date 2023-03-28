import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payment-dialog',
  templateUrl: './add-payment-dialog.component.html',
  styleUrls: ['./add-payment-dialog.component.css']
})
export class AddPaymentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
