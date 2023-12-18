import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Service } from '../../dataProviders/service.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfiramtionDeleteComponent } from '../confiramtion-delete/confiramtion-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  displayedColumns: string[] = ['Sku', 'Name', 'SellingPrice', 'action'];
  dataSource!: MatTableDataSource<any>;
  public ItemsError?: string;
  public filterLanguages!: string[];
  public loading=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _matDialog: MatDialog,
    private _ItemService: Service,
    private _ItemRouter: Router,
    public snackBar:MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getItemList();
    // this._ItemRouter.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     if (this._ItemActivateRouter.snapshot.routeConfig?.path === 'items') {
    //       this.getItemList();
    //     }
    //   });
  }
  getItemList(): void {
    this.loading=true;
    this._ItemService.getItemList().subscribe({
      next: (res) => {
        if (res.responseData?.length !==0 && res.success) {
          this.dataSource = new MatTableDataSource(res.responseData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        } else if(res.message) {
            this.snackBar.open(res.message,'OK',{
              duration:3000
            })
        }
        else{
          this.ItemsError="There is no data in items table"
        }
        this.loading=false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteItemDetails(id: number) {
    const dialog = this._matDialog.open(ConfiramtionDeleteComponent, {
      data: {
        title: 'Confirmation fro delete',
        message: 'Are you sure want to delete this item',
      },
    });
    dialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._ItemService.deleteItem(id).subscribe({
          next: () => {
            this.snackBar.open('Item successfully deleted','OK',{
              horizontalPosition:'center',
              verticalPosition:"top",
              duration:3000
            })
            this.getItemList();
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
  openEditForm(id: number) {
    // const dialogRef=this._matDialog.open(EditAddComponent,{
    //   data,
    // })
    // dialogRef.afterClosed().subscribe({
    //   next:(val)=>
    //   {
    //     if(val)
    //     {
    //       this.getEmployeeList();
    //     }
    //   }
    // })
    this._ItemRouter.navigate([`main/dashboard/items/edit/${id}`]);
  }
  openCardDialog(id: number) {
    this._ItemRouter.navigate([`main/dashboard/items/card/${id}`]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditForm() {
    // const dialogRef=this._matDialog.open(EditAddComponent)
    // dialogRef.afterClosed().subscribe({
    //   next:(val)=>
    //   {
    //     if(val)
    //     {
    //       this.getEmployeeList();
    //     }
    //   }
    // })
    this._ItemRouter.navigate(['main/dashboard/items/add']);
  }
}
