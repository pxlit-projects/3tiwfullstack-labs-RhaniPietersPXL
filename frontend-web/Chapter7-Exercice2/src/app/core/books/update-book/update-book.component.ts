import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Book} from "../../../shared/models/book.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  @Input() book!: Book;
  @Output() updateBook = new EventEmitter<Book>();

  fb: FormBuilder = inject(FormBuilder);
  bookForm: FormGroup;

  constructor() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  ngOnChanges() {
    // Populate the form with the book details if the book input changes
    if (this.book) {
      this.bookForm.patchValue({
        title: this.book.title,
        author: this.book.author,
        isbn: this.book.isbn,
        genre: this.book.genre,
      });
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const updatedBook: Book = { ...this.book, ...this.bookForm.value };
      this.updateBook.emit(updatedBook);
    }
  }
}
