import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modification-dialog',
  templateUrl: './add-modification-dialog.component.html',
  styleUrls: ['./add-modification-dialog.component.css']
})
export class AddModificationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
