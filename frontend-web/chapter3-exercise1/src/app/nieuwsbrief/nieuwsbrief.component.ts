import { Component } from '@angular/core';

@Component({
  selector: 'app-nieuwsbrief',
  standalone: true,
  imports: [],
  templateUrl: './nieuwsbrief.component.html',
  styleUrl: './nieuwsbrief.component.css'
})
export class NieuwsbriefComponent {
  email : string = '';

  submit(givenEmail: string) {
    this.email = '';

  }
}
