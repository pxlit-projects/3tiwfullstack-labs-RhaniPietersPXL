import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductFormComponent} from "./product-form/product-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chapter5-Exercise4';
}
