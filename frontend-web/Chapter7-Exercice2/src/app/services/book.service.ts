import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "../shared/models/book.model";
import {Filter} from "../shared/models/filter.models";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl: string = 'https://books.d-ries.be/api/book';
  http: HttpClient = inject(HttpClient);

  constructor() {
  }

  getBooks() {
    return this.http.get<{ [key: string]: Book }>(this.booksUrl).pipe(
      map(response => Object.values(response))
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.booksUrl}/${bookId}`);
  }
  filterBooks(filter: Filter): Observable<Book[]> {
    return this.getBooks().pipe(
      map(books => books.filter(book => this.isBookMatchingFilter(book, filter)))
    );
  }

  private isBookMatchingFilter(book: Book, filter: Filter) {
    const title = book.title?.toLowerCase() || '';
    return title.includes(filter.title.toLowerCase());
  }

  updateBook(updatedBook: Book) {
    return this.http.put<void>(`${this.booksUrl}/${updatedBook._id}`, updatedBook);
  }
}
