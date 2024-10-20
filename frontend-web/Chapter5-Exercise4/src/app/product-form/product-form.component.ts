import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductDetailsComponent} from "../product-details/product-details.component";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ProductDetailsComponent, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  formBuilder : FormBuilder = inject(FormBuilder);

  mainForm : FormGroup = this.formBuilder.group({
    details : this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', Validators.required]
    })
  });

  get details(): FormGroup {
    return this.mainForm.get('details') as FormGroup;
  }

  OnSubmit() {
    alert(JSON.stringify(this.mainForm.value));
  }

  catchNotification($event: any): void {
    this.OnSubmit();
  }
}
