import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from '../../dataProviders/service.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDeletionComponent } from '../confirmation-deletion/confirmation-deletion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  public errors: string|undefined;
  public loading=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'Name',
    'LastName',
    'DOB',
    'PhoneNumber',
    'Actions',
  ];
  constructor(
    private _router: Router,
    private _userService: UserService,
    public translate: TranslateService,
    private matDialog: MatDialog,
    private snackBar:MatSnackBar
  ) {
  }
  ngOnInit(): void {
    this.getUserData();
    // this._router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     if (this._Aroute.snapshot.routeConfig?.path === 'users') {
    //       this.getUserData();
    //     }
    //   });
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openAddForm() {
    this._router.navigate(['/main/dashboard/users/add']);
  }
  editFormOpen(id: number) {
    this._router.navigate([`/main/dashboard/users/edit/${id}`]);
  }
  getUserData() {
    this.loading=true;
    this._userService.getUserList().subscribe({
      next: (val) => {
        if (val.responseData?.length !==0 && val.success) {
          this.dataSource = new MatTableDataSource(val.responseData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else if(val.message){
              this.snackBar.open(val.message,'OK',{
                duration:3000
              })
        }
        else{
           this.errors="There is no data in user table"     
        }
        this.loading=false;
      },
      error:(err)=>{
        console.log(err);
        this.errors = "404 Not found";
        this.loading=false;
      },
    });
  }
  deleteUser(id: number) {
    const dialogRef = this.matDialog.open(ConfirmationDeletionComponent, {
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure to want delete this user',
      },
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._userService.deleteUser(id).subscribe({
          next: () => {
            alert('User successfully deleted');
            this.getUserData();
          },
        });
      }
    });
  }
  userDetails(id: number) {
    this._router.navigate([`/main/dashboard/users/card/${id}`]);
  }
}
