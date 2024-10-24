import {Component, Input} from '@angular/core';
import {Pokemon} from "../pokemon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pokemonitem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;
  @Input() isSelected!: boolean;

  getColors(){
    return {
      'grass': this.pokemon.type === 'grass',
      'fire': this.pokemon.type === 'fire',
      'water': this.pokemon.type === 'water',
      'selected': this.isSelected
    };
  }
}
