import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.confirmDelete = false
  }

  onConfirmDelete(){
    this.data.confirmDelete = true
  }
}
