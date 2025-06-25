import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/Page';
import { Book } from '../models/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BASE = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listBooks(page: number, size: number): Observable<Page<Book>> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<Book>>(`${this.API_BASE}/books`, { params });
  }

  listBooksByGenre(genre: string, page: number, size: number): Observable<Page<Book>> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<Book>>(`${this.API_BASE}/books/genre/${genre}`, { params });
  }

  listBooksByAuthor(author: string, page: number, size: number): Observable<Page<Book>> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<Book>>(`${this.API_BASE}/books/author/${author}`, { params });
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API_BASE}/books/${id}`);
  }
}
