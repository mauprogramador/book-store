import { LayoutsModule } from './../layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BookInsertDialogComponent } from './books/insert-dialog/insert-dialog.component';
import { BookRemoveDialogComponent } from './books/remove-dialog/remove-dialog.component';
import { StoreComponent } from './store/store.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    LoginComponent,
    BooksComponent,
    BookInsertDialogComponent,
    BookRemoveDialogComponent,
    StoreComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    LayoutsModule,
  ]
})
export class ComponentsModule { }
