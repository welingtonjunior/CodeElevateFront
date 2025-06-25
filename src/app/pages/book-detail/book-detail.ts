import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../../services/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss'
})
export class BookDetailComponent {
 book: any| null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'ID inválido';
      this.loading = false;
      return;
    }

    this.bookService.getBook(id).subscribe({
      next: (data) => {
        this.book = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Livro não encontrado';
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
