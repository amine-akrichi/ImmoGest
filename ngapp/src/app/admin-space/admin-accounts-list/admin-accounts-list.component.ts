import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteConfirmationDialogComponent } from 'src/app/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { CreateUserDialogComponent } from '../components/create-user-dialog/create-user-dialog.component';
import { UpdateUserDialogComponent } from '../components/update-user-dialog/update-user-dialog.component';

@Component({
  selector: 'app-admin-accounts-list',
  templateUrl: './admin-accounts-list.component.html',
  styleUrls: ['./admin-accounts-list.component.css']
})

export class AdminAccountsListComponent implements OnInit{
    
  displayedColumns: string[] = ['id','email','username', 'password','action'];
  dataSource!: MatTableDataSource<any>;
  newUser:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService, public dialog: MatDialog){
    
  }

  ngOnInit(): void {
    this._userService.listUsers()
      .subscribe(
        res=> {
          console.log(res)
          this.dataSource = new MatTableDataSource(res)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err=> console.log(err)
      )
  }

  addUser(){
    const dialogRef = this.dialog.open(CreateUserDialogComponent,{panelClass:"user-dialog",data:{}})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result) {
            this._userService.addUser(result)
            .subscribe(
              res=>{
                console.log(res)
                this.ngOnInit()
              },
              err=>console.log(err),
            )
          }
        }
      )
  }

  updateUser(user:any){
    const dialogRef = this.dialog.open(UpdateUserDialogComponent,{panelClass:"user-dialog",data:{user: user}})
    dialogRef.afterClosed()
      .subscribe(
        result => {
          this._userService.updateUser(user)
            .subscribe(
              res=>{
                console.log(res)
                this.ngOnInit()
              },
              err=>console.log(err)
            )
        }
      )
  }

  deleteUser(user: any){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent,{data:{type : 'l\'utilisateur',data: user.username },panelClass:'delete-dialog'})
    dialogRef.afterClosed().subscribe(
      result => {
        if (result?.confirmDelete) {
          this._userService.deleteUser(user)
            .subscribe(
              res=>{
                console.log(res)
                this.ngOnInit()
              },
              err=>console.log(err)
            )
        }
      }
    )
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
