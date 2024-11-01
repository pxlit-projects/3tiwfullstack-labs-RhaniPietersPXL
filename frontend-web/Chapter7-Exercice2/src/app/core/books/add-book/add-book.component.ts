import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Book} from "../../../shared/models/book.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  @Output() addBook = new EventEmitter<Book>();
  fb: FormBuilder = inject(FormBuilder);
  bookForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    isbn: ['', Validators.required],
    genre: ['', Validators.required],
  });

  onSubmit() {
    const newbook: Book = {...this.bookForm.value
    };
    this.addBook.emit(newbook);
  }
}
