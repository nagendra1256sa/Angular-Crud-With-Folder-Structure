import { publishFacade } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogCloseCheck } from '../../Models/adpater';

@Component({
  selector: 'app-confiramtion-dialog-close',
  templateUrl: './confiramtion-dialog-close.component.html',
  styleUrls: ['./confiramtion-dialog-close.component.css'],
})
export class ConfiramtionDialogCloseComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogCloseCheck,
    private matDialogRef: MatDialogRef<ConfiramtionDialogCloseComponent>
  ) {}
  onClickNo() {
    this.matDialogRef.close(false);
  }
  onClickYes() {
    this.matDialogRef.close(true);
  }
}
