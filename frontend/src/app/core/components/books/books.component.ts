import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookDto, CreateBookDto } from '../../models/book';
import { BookService } from '../../service/book.service';
import { BookInsertDialogComponent } from './insert-dialog/insert-dialog.component';
import { BookRemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['name', 'author', 'price', 'actions'];
  dataSource!: MatTableDataSource<BookDto>;
  totalProducts!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private bookService: BookService,
    private dialog: MatDialog,
  ) { }



  ngOnInit(): void {
    this.bookService.findAll().subscribe(
      {
        next: (books) => {
          this.dataSource = new MatTableDataSource(books);
          this.paginator.length = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.totalProducts = this.dataSource.data.length;
        },
        error: (e: any) => {
          console.error(e);
        }
      }
    );
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  showCreateDialog(): void {
    const dialogRef = this.dialog.open(BookInsertDialogComponent, { 
      width: '350px', 
      data: {} 
    });
    dialogRef.afterClosed().subscribe((book: CreateBookDto) => {
      if (book !== undefined) {
        book.imageName = "someimagepath";
        this.bookService.create(book).subscribe(() => {
          this.bookService.findAll().subscribe((books) => {
            this.dataSource = new MatTableDataSource(books);
            this.totalProducts = this.dataSource.data.length;
          });
        });
      }
    });
  }



  showRemoveDialog(book: BookDto): void {
    const dialogRef = this.dialog.open(BookRemoveDialogComponent, {
      data: [book.id, book.name, book.author, book.price, book.imageName],
    });
    dialogRef.afterClosed().subscribe((id) => {
      if (id !== undefined) {        
        this.bookService.delete(id).subscribe(() => {
          this.bookService.findAll().subscribe((books) => {            
            this.dataSource = new MatTableDataSource(books);
            this.totalProducts = this.dataSource.data.length;
          });
        });
        
      }
    });
  }
}
