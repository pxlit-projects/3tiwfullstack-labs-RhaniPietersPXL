import {Component, EventEmitter, inject, Input, OnInit, Output, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() formGroup!: FormGroup ;
  @Output() notify:EventEmitter<any> = new EventEmitter<any>();

  submit() {
    if (this.formGroup.valid) {
      this.notify.emit(this.formGroup.value);
    } else {
      alert('Details form is not valid!');
    }
  }
}
