import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book';
import { Observable } from 'rxjs';
import { Book } from '../../models/Book';
import { Page } from '../../models/Page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  page = 0;
  size = 10;
  totalPages = 1;
  totalElements = 0;

  genreFilter = '';
  authorFilter = '';

  loading = false;
  error = '';
  style: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.error = '';

    let obs: Observable<Page<Book>>;

    if (this.genreFilter) {
      obs = this.bookService.listBooksByGenre(this.genreFilter, this.page, this.size);
    } else if (this.authorFilter) {
      obs = this.bookService.listBooksByAuthor(this.authorFilter, this.page, this.size);
    } else {
      obs = this.bookService.listBooks(this.page, this.size);
    }

    obs.subscribe({
      next: (data: Page<Book>) => {
        this.books = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error?.message || 'Erro ao carregar livros';
        this.loading = false;
      }
    });
  }

  onGenreChange(value: string) {
    this.genreFilter = value;
    this.authorFilter = '';
    this.page = 0;
    this.loadBooks();
  }

  onAuthorChange(value: string) {
    this.authorFilter = value;
    this.genreFilter = '';
    this.page = 0;
    this.loadBooks();
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.page = page;
      this.loadBooks();
    }
  }
}
