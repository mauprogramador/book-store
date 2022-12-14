import { BookDto, CreateBookDto } from '../models/book';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const baseUrl: string = 'http://localhost:3000/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
    constructor(private http: HttpClient) {}


    public create(book: CreateBookDto): Observable<void> {
        return this.http.post<void>(baseUrl, book);
    }


    public findAll(): Observable<BookDto[]> {
        return this.http.get<BookDto[]>(baseUrl.concat('/list'));
    }


    public findOneById(id: string): Observable<BookDto> {
        return this.http.get<BookDto>(baseUrl.concat('/', id));
    }


    public delete(id: string): Observable<void> {
        return this.http.delete<void>(baseUrl.concat('/', id));
    }
}