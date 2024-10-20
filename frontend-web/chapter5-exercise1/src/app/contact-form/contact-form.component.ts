import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formBuilder: FormBuilder = inject(FormBuilder)
  returnMessage: string = '';
  //contactForm!: FormGroup;

  contactForm: FormGroup = this.formBuilder.group({
    fullname : [null, Validators.required],
    email : [null, [Validators.required, Validators.email]],
    phone : [null, Validators.pattern('^[0-9]{10}$')],
    message : [null, Validators.minLength(10)]
  })

/*  ngOnInit() {
    this.contactForm = new FormGroup({
        fullname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required)
      })
  }*/

  onSubmit() {
    this.returnMessage = 'Submitted successfully';
  }
}
