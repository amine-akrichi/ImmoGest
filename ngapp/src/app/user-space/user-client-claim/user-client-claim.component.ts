import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ClaimService } from 'src/app/services/claim.service';
import { ClientService } from 'src/app/services/client.service';
import { AddClientClaimDialogComponent } from '../components/add-client-claim-dialog/add-client-claim-dialog.component';
import { UpdateClientClaimDialogComponent } from '../components/update-client-claim-dialog/update-client-claim-dialog.component';

@Component({
  selector: 'app-user-client-claim',
  templateUrl: './user-client-claim.component.html',
  styleUrls: ['./user-client-claim.component.css']
})
export class UserClientClaimComponent {
  clientId: any
  clientJsonString: any
  clientData: any
  client: any

  displayedColumns: string[] = ['date', 'type', 'details', 'response', 'resolved', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private clientService: ClientService,
    private _claimService: ClaimService) {

  }

  ngOnInit(): void {
    this.clientId = this.activatedRoute.snapshot.paramMap.get('id')
    this.clientJsonString = '{"_id":"' + this.clientId + '" }'
    this.clientData = JSON.parse(this.clientJsonString)

    this.clientService.listOneClient(this.clientData)
      .subscribe(
        res => {
          this.client = res
          this._claimService.listClientClaims(res)
            .subscribe(
              res => {
                console.log(res);
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              err => console.log(err)

            )
        },
        err => console.log(err)
      )

  }


  addClaim() {
    const dialogRef = this.dialog.open(AddClientClaimDialogComponent, { data: { clientId: this.clientId }, panelClass: 'dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
          this._claimService.addClaim(result)
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

  updateClaim(claim: any) {
    const dialogRef = this.dialog.open(UpdateClientClaimDialogComponent, { data: { claim: claim }, panelClass: 'dialog' })
    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
          this._claimService.updateClaim(result)
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

  deleteClaim(claim: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, { data: { type: 'la Réclamation' } , panelClass:'delete-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result?.confirmDelete) {
            console.log(result);
            this._claimService.deleteClaim(claim)
              .subscribe(
                res => {
                  console.log(res);
                  this.ngOnInit()
                },
                err=>console.log(err)
                
              )
          }
        }
    )
  }

  ngAfterViewInit() {
    this.paginator._intl.nextPageLabel = "Page suivante"
    this.paginator._intl.previousPageLabel = "Page dernière"
    this.paginator._intl.itemsPerPageLabel = "Réclamations pour page"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
