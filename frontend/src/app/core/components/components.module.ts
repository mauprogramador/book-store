import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BookInsertDialogComponent } from './books/insert-dialog/insert-dialog.component';
import { BookRemoveDialogComponent } from './books/remove-dialog/remove-dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    BooksComponent,
    BookInsertDialogComponent,
    BookRemoveDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class ComponentsModule { }
