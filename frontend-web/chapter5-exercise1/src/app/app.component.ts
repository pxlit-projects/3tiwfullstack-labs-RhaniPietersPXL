import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {SkillsFormComponent} from "./skills-form/skills-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactFormComponent, UserRegistrationComponent, SkillsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chapter5-exercise1';
}
