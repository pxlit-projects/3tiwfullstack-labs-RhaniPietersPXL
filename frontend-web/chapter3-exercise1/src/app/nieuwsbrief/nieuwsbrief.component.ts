import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nieuwsbrief',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './nieuwsbrief.component.html',
  styleUrl: './nieuwsbrief.component.css'
})
export class NieuwsbriefComponent {
  email: string = '';
  submittedEmail: string = '';

  submit() {
    this.submittedEmail = this.email;
  }
}
