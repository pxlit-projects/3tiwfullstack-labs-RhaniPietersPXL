import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  uitkomst: number | null = null;
  numberOne!: number;
  numberTo!: number;
  showResult: boolean = false;

  add() {
    this.uitkomst = Number(this.numberOne) + Number(this.numberTo);
    this.showResult = true;
  }
}
