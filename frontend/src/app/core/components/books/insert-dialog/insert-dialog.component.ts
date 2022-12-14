import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { CreateBookDto } from 'src/app/core/models/book';

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class BookInsertDialogComponent {
  bookForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<BookInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateBookDto,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendDialogData(): void {   
    this.dialogRef.close(this.bookForm.value);   
  }
}