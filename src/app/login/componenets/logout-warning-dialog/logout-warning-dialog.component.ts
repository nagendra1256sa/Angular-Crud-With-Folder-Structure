import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationLoginCheck } from '../../Models/typeCheck';

@Component({
  selector: 'app-logout-warning-dialog',
  templateUrl: './logout-warning-dialog.component.html',
  styleUrls: ['./logout-warning-dialog.component.css'],
})
export class LogoutWarningDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationLoginCheck,
    private matDiaRef: MatDialogRef<LogoutWarningDialogComponent>
  ) {}
  noClick() {
    this.matDiaRef.close(false);
  }
  YesClick() {
    this.matDiaRef.close(true);
  }
  closeDialog() {
    this.matDiaRef.close(false);
  }
}
