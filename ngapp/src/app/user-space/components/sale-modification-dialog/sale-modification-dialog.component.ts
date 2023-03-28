import { Component, Inject , OnInit, ViewChild} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ModificationService } from 'src/app/services/modification.service';
import { AddModificationDialogComponent } from '../add-modification-dialog/add-modification-dialog.component';
import { UpdateModificationDialogComponent } from '../update-modification-dialog/update-modification-dialog.component';

@Component({
  selector: 'app-sale-modification-dialog',
  templateUrl: './sale-modification-dialog.component.html',
  styleUrls: ['./sale-modification-dialog.component.css']
})
export class SaleModificationDialogComponent implements OnInit {

  displayedColumns: string[] = ['date','price','modification','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _modificationService: ModificationService,private dialog: MatDialog){}
  ngOnInit(): void {
      this._modificationService.listSaleModifications(this.data.sale)
        .subscribe(
          res => {
            console.log(res)
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          err => console.log(err)
        )
  }







  addModification(){
    const dialogRef = this.dialog.open(AddModificationDialogComponent,{data:{saleId: this.data.sale._id},panelClass:'modification-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result =>{
          console.log(result);
          this._modificationService.addModification(result)
            .subscribe(
              res => {
                console.log(res);
                this.ngOnInit()
              },
              err => console.log(err)
            )
        }
      )
  }

  updateModification(modification: any){
    const dialogRef = this.dialog.open(UpdateModificationDialogComponent,{data:{modification: modification},panelClass: 'modification-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result =>{
          console.log(result);
          this._modificationService.updateModification(result)
            .subscribe(
              res => {
                console.log(res);
                this.ngOnInit()
              },
              err => console.log(err)
            )
        }
      )
  }


  deleteModification(modification: any){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, { data: { type: 'la Modification' }, panelClass: 'delete-dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result?.confirmDelete) {
            this._modificationService.deleteModification(modification)
              .subscribe(
                res => {
                  console.log(res);
                  this.ngOnInit()
                },
                err => console.log(err)

              )
          }
        }
      )
    
  }


  

  ngAfterViewInit() {
    this.paginator._intl.nextPageLabel="Page suivante"
    this.paginator._intl.previousPageLabel="Page dernière"
    this.paginator._intl.itemsPerPageLabel="Modifications pour page"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
