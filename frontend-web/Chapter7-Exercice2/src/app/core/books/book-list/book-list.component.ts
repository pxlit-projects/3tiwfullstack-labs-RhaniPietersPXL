import {Component, inject, OnInit} from '@angular/core';
import {FilterComponent} from "../filter/filter.component";
import {BookItemComponent} from "../book-item/book-item.component";
import {AddBookComponent} from "../add-book/add-book.component";
import {AsyncPipe} from "@angular/common";
import {EMPTY, firstValueFrom, Observable} from "rxjs";
import {Book} from "../../../shared/models/book.model";
import {BookService} from "../../../services/book.service";
import {Filter} from "../../../shared/models/filter.models";
import {UpdateBookComponent} from "../update-book/update-book.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FilterComponent, BookItemComponent, AddBookComponent, AsyncPipe, UpdateBookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  bookService: BookService = inject(BookService);
  filteredData$: Observable<Book[]> = EMPTY;
  showAddBookForm: boolean = false;
  showUpdateBookForm: boolean = false;
  currentBook!: Book;

  ngOnInit(): void {
    this.fetchData();
  }

  handleFilter(filter: Filter) {
    this.filteredData$ = this.bookService.filterBooks(filter);
  }

  handleUpdateBook(updatedBook: Book) {
    this.bookService.updateBook(updatedBook).subscribe(() => {
      this.fetchData();
      this.showUpdateBookForm = false;
    });
  }

  async processAdd(book: Book) {
    await firstValueFrom(this.bookService.addBook(book));
    this.fetchData();
    this.toggleAddBookForm();

  }
  async processDelete(bookId: number) {
    await firstValueFrom(this.bookService.deleteBook(bookId));
    this.fetchData();
  }

  processUpdate(book: Book) {
    this.currentBook = book;
    this.showUpdateBookForm = true;
  }
  private fetchData() {
    this.filteredData$ = this.bookService.getBooks();
  }

  toggleAddBookForm() {
    this.showAddBookForm = !this.showAddBookForm;
  }
}
