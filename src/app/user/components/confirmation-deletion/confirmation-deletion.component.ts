import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDeleteCheck } from '../../models/adpters';

@Component({
  selector: 'app-confirmation-deletion',
  templateUrl: './confirmation-deletion.component.html',
  styleUrls: ['./confirmation-deletion.component.scss'],
})
export class ConfirmationDeletionComponent {
  constructor(
    public matDialogRef: MatDialogRef<ConfirmationDeletionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDeleteCheck
  ) {}
  onNoClick() {
    this.matDialogRef.close(false);
  }
  onYesClick() {
    this.matDialogRef.close(true);
  }
}
