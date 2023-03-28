import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { PaymentService } from 'src/app/services/payment.service';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { UpdatePaymentDialogComponent } from '../update-payment-dialog/update-payment-dialog.component';

@Component({
  selector: 'app-sale-payments-dialog',
  templateUrl: './sale-payments-dialog.component.html',
  styleUrls: ['./sale-payments-dialog.component.css']
})
export class SalePaymentsDialogComponent implements OnInit {

  displayedColumns: string[] = ['number', 'price', 'state', 'title', 'date', 'mode', '%', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _paymentService: PaymentService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this._paymentService.listSalePayments(this.data.sale)
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

  addPayment() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, { data: { saleId: this.data.sale._id }, panelClass: 'payment-dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
          this._paymentService.addPayment(result)
            .subscribe(
              res => {
                console.log(res)
                this.ngOnInit()
              },
              err => console.log(err)

            )
          this.ngOnInit
        }

      )
  }

  updatePayment(payment: any) {
    const dialogRef = this.dialog.open(UpdatePaymentDialogComponent, { data: { payment: payment }, panelClass: 'payment-dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
          this._paymentService.updatePayment(result)
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


  deletePayment(payment: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, { data: { type: 'le Paiement' }, panelClass: 'delete-dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result?.confirmDelete) {
            this._paymentService.deletePayment(payment)
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
    this.paginator._intl.nextPageLabel = "Page suivante"
    this.paginator._intl.previousPageLabel = "Page dernière"
    this.paginator._intl.itemsPerPageLabel = "Paiements pour page"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
