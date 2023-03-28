import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-appartement-dialog',
  templateUrl: './create-appartement-dialog.component.html',
  styleUrls: ['./create-appartement-dialog.component.css']
})
export class CreateAppartementDialogComponent {
  form!: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.parking=false
    data.cellier=false
  }
}
