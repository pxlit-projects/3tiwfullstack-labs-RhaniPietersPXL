import {Component, inject, OnInit} from '@angular/core';
import {FilterComponent} from "../filter/filter.component";
import {BookItemComponent} from "../book-item/book-item.component";
import {AddBookComponent} from "../add-book/add-book.component";
import {AsyncPipe} from "@angular/common";
import {EMPTY, Observable} from "rxjs";
import {Book} from "../../../shared/models/book.model";
import {BookService} from "../../../services/book.service";
import {Filter} from "../../../shared/models/filter.models";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FilterComponent, BookItemComponent, AddBookComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  bookService: BookService = inject(BookService);
  filteredData$: Observable<Book[]> = EMPTY;

  ngOnInit(): void {
    this.fetchData();
  }

  handleFilter(filter: Filter) {
    this.filteredData$ = this.bookService.filterBooks(filter);
  }

  processAdd(book: Book) {
    this.bookService.addBook(book).subscribe({
      next: () => {
        this.fetchData();
      }
    });
  }

  private fetchData() {
    this.filteredData$ = this.bookService.getBooks();
  }
}
