import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Service } from '../../dataProviders/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfiramtionDialogCloseComponent } from '../confiramtion-dialog-close/confiramtion-dialog-close.component';

export interface EditDetailsType {
  id: number;
  Sku: string;
  Name: string;
  DisplayName: string;
  BasePrice: string;
  SellingPrice: string;
  Description: string;
}

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.scss'],
})
export class EditAddComponent implements OnInit {
  public data!: EditDetailsType;
  public ItemForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _ItemService: Service,
    private _ActiveRoute: ActivatedRoute,
    private _NRouter: Router,
    private matDialog: MatDialog // private _dialogRef:MatDialogRef<EditAddComponent>, // @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.ItemForm = this._fb.group({
      Sku: new FormControl('', [Validators.required, this.noSpaceValidator()]),
      Name: new FormControl('', [
        Validators.required,
        this.noSpaceValidator(),
        this.noNumbersValidator(),
        this.noSpecialChValidator(),
      ]),
      DisplayName: new FormControl('', [
        Validators.required,
        this.noSpaceValidator(),
      ]),
      SellingPrice: new FormControl('', [
        Validators.required,
        Validators.max(1000),
        Validators.min(100),
      ]),
      BasePrice: new FormControl('', [
        Validators.required,
        Validators.max(1000),
        Validators.min(100),
      ]),
      Description: new FormControl('', []),
    });
  }
  noSpaceValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      // const required=this.ItemForm?.get('Sku')?.errors?.['required'] as boolean;
      const hasSpace = /^\s/.test(control.value);
      return hasSpace ? { noSpaces: true } : null;
    };
  }
  noNumbersValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumbers = /\d/.test(control.value);
      return hasNumbers ? { noNumbers: true } : null;
    };
  }
  noSpecialChValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpecialCh = /[^\w\s]/.test(control.value);
      return hasSpecialCh ? { noSpecial: true } : null;
    };
  }
  ngOnInit(): void {
    const ItemId = this._ActiveRoute.snapshot.paramMap.get('id');
    const id = ItemId ? parseInt(ItemId) : NaN;
    if (id) {
      this._ItemService.getItemListById(id).subscribe({
        next: (res) => {
          this.data = res;
          if (this.data) {
            this.ItemForm.get('Sku')?.setValue(this.data.Sku),
              this.ItemForm.get('Name')?.setValue(this.data.Name);
            this.ItemForm.get('DisplayName')?.setValue(this.data.DisplayName);
            this.ItemForm.get('SellingPrice')?.setValue(this.data.SellingPrice);
            this.ItemForm.get('BasePrice')?.setValue(this.data.BasePrice);
            this.ItemForm.get('Description')?.setValue(this.data.Description);
          }
        },
        error: () => {
          alert('Not Found');
          this._NRouter.navigate(['dashboard/items']);
        },
      });
    }
  }
  onSubmit() {
    if (this.data) {
      if (this.ItemForm.valid) {
        this._ItemService
          .UpdateItem(this.ItemForm.value, this.data.id)
          .subscribe({
            next: () => {
              // this._dialogRef.close(true);
              this._NRouter.navigate(['/dashboard/items']);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      }
    } else {
      if (this.ItemForm.valid) {
        this._ItemService.addItem(this.ItemForm.value).subscribe({
          next: () => {
            alert('data is added');
            // this._dialogRef.close(true);
            this._NRouter.navigate(['/dashboard/items']);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
  // addNumber() {
  //   const control = new FormControl('', Validators.required);
  //   (this.ItemForm.get('phoneNumbers') as FormArray).push(control);
  // }
  // get addPNumber() {
  //   return (this.ItemForm.get('phoneNumbers') as FormArray).value;
  // }
  // remove(index: number) {
  //   const myArray = this.ItemForm.get('phoneNumbers') as FormArray;
  //   if (myArray && myArray.length > index) {
  //     myArray.removeAt(index);
  //   }
  // }
  // disableCancel() {
  //   return this.addPNumber.length === 1 ;
  // }
  checkDirty() {
    return this.data && this.ItemForm.dirty;
  }
  closeDialog() {
    if (this.ItemForm.dirty) {
      const dialog = this.matDialog.open(ConfiramtionDialogCloseComponent, {
        data: {
          title: 'Confirmaton close dialog',
          message: 'Are sure to discard the changes',
        },
      });
      dialog.afterClosed().subscribe((result) => {
        if (result) {
          this._NRouter.navigate(['/dashboard/items']);
        }
      });
    } else {
      this._NRouter.navigate(['/dashboard/items']);
    }
  }
}
