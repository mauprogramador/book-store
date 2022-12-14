import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class BookRemoveDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BookRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [string, string, string, number, string][],
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeUser(): void {
    this.dialogRef.close(this.data[0]);
  }
}
