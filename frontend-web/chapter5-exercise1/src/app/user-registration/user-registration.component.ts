import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  fullName: string = '';
  eMail: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}
