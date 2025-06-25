import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BookDetailComponent } from './pages/book-detail/book-detail';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'books/:id', component: BookDetailComponent },
{ path: '**', redirectTo: '' }
];
