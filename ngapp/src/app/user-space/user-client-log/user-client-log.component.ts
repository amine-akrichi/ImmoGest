
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ClientService } from 'src/app/services/client.service';
import { JournalService } from 'src/app/services/journal.service';
import { AddClientRecordDialogComponent } from '../components/add-client-record-dialog/add-client-record-dialog.component';
import { UpdateClientRecordDialogComponent } from '../components/update-client-record-dialog/update-client-record-dialog.component';


@Component({
  selector: 'app-user-client-log',
  templateUrl: './user-client-log.component.html',
  styleUrls: ['./user-client-log.component.css']
})
export class UserClientLogComponent implements OnInit {

  clientId:any
  clientJsonString:any
  clientData:any
  client: any

  displayedColumns: string[] = ['date', 'type', 'title','content','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog ,private clientService: ClientService,private journalService: JournalService){}

  ngOnInit(): void {
    this.clientId = this.activatedRoute.snapshot.paramMap.get('id')
    this.clientJsonString = '{"_id":"'+this.clientId+'" }'
    this.clientData = JSON.parse(this.clientJsonString)

    this.clientService.listOneClient(this.clientData)
      .subscribe(
        res=>{
          this.client = res
          this.journalService.listClientJournals(res)
            .subscribe(
              res=>{
                console.log(res);
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              err=>console.log(err)
              
            )
        },
        err=>console.log(err)
      )
    
  }


  addRecord(){
    const dialogRef = this.dialog.open(AddClientRecordDialogComponent,{data:{clientId : this.clientId},panelClass:'add-log-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result) {
            this.journalService.addJournal(result)
              .subscribe(
                res=>{
                  console.log(res);
                  this.ngOnInit()
                },
                err => console.log(err)
                
              )
          }
        }
      )
  }

  updateRecord(journal: any){
    const dialogRef = this.dialog.open(UpdateClientRecordDialogComponent,{data:{journal : journal},panelClass:'add-log-dialog'})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result) {
            this.journalService.updateJournal(result)
              .subscribe(
                res=>{
                  console.log(res);
                  this.ngOnInit()
                },
                err => console.log(err)
                
              )
          }
        }
      )
  }

  deleteRecord(journal: any){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent,{minWidth:'25%',data:{type : 'l\'enregistrement' },panelClass:'delete-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result?.confirmDelete) {
          console.log(result.confirmDelete)
          this.journalService.deleteJournal(journal)
            .subscribe(
              res =>{ 
                console.log(res)
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
    this.paginator._intl.itemsPerPageLabel="Enregistrements pour page"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
