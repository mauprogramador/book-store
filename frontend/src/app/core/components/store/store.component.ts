import { Component, OnInit } from '@angular/core';
import { BookDto } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books!: BookDto[];

  constructor(
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.bookService.findAll().subscribe(
      {
        next: (books) => {
          this.books = books;
        },
        error: (e: any) => {
          console.error(e);
        }
      }
    );
  }

}
