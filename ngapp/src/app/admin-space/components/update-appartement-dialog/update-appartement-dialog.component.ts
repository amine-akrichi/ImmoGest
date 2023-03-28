import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-appartement-dialog',
  templateUrl: './update-appartement-dialog.component.html',
  styleUrls: ['./update-appartement-dialog.component.css']
})
export class UpdateAppartementDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
