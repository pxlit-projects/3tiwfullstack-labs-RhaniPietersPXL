import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../../shared/models/book.model";

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: Book;
  @Output() deleteBook = new EventEmitter<number>();
  @Output() updateBook = new EventEmitter<number>();

  onDelete() {
    this.deleteBook.emit(this.book._id);
  }

  onUpdate() {
    this.updateBook.emit(this.book._id);
  }
}
