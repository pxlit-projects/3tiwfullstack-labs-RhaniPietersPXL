import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CalculatorComponent} from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username : string = '';
  title = 'chapter4-exercise1';

  submit() {
    if(this.username !== ''){
      this.username = '';
    }
  }
}
