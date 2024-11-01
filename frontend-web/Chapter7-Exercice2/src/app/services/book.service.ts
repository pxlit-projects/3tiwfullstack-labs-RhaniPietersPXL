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

  addBook(book: Book) {
    return this.http.post<Book>(this.booksUrl, book);
  }

  filterBooks(filter: Filter): Observable<Book[]> {
    return this.getBooks().pipe(
      map(books => books.filter(hero => this.isBookMatchingFilter(hero, filter)))
    );
  }

  private isBookMatchingFilter(book: Book, filter: Filter) {
    return book.title.toLowerCase().includes(filter.title.toLowerCase());
  }


}
