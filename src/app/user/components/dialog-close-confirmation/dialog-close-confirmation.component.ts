import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogCloseCheck } from '../../models/adpters';

@Component({
  selector: 'app-dialog-close-confirmation',
  templateUrl: './dialog-close-confirmation.component.html',
  styleUrls: ['./dialog-close-confirmation.component.css'],
})
export class DialogCloseConfirmationComponent {
  constructor(
    private dialogClose: MatDialogRef<DialogCloseConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogCloseCheck
  ) {}
  onClickNo() {
    this.dialogClose.close(false);
  }
  onClickYes() {
    this.dialogClose.close(true);
  }
}
