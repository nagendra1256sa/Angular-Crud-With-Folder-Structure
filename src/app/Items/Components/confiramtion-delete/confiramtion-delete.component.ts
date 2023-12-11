import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  ConfirmationDeleteCheck } from '../../Models/adpater';

@Component({
  selector: 'app-confiramtion-delete',
  templateUrl: './confiramtion-delete.component.html',
  styleUrls: ['./confiramtion-delete.component.css']
})
export class ConfiramtionDeleteComponent {
      constructor(private matDiaRef:MatDialogRef<ConfiramtionDeleteComponent>,@Inject(MAT_DIALOG_DATA) public data:ConfirmationDeleteCheck){}
      noClick()
      {
        this.matDiaRef.close(false);
      }
      YesClick()
      {
        this.matDiaRef.close(true);
      }
}
