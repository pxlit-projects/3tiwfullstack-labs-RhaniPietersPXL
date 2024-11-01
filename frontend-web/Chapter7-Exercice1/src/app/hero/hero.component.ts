import {Component, Input} from '@angular/core';
import {Hero} from "../models/hero.model";
import {StarPipe} from "../star.pipe";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    StarPipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() hero!: Hero;
}
