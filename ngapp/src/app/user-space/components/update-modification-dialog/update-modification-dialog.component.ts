import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-modification-dialog',
  templateUrl: './update-modification-dialog.component.html',
  styleUrls: ['./update-modification-dialog.component.css']
})
export class UpdateModificationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
