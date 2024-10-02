import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Pokemon} from "./pokemon";
import {PokemonItemComponent} from "./pokemon-item/pokemon-item.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, PokemonItemComponent, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  selectedPokemon: Pokemon | null = null;
  pokemons!: Pokemon[];

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  ngOnInit() {
    this.pokemons = [
      new Pokemon(1, "Bulbasaur", "grass", "1.png"),
      new Pokemon(2, "Ivysaur", "grass", "2.png"),
      new Pokemon(3, "Venusaur", "grass", "3.png"),
      new Pokemon(4, "Charmander", "fire", "4.png"),
      new Pokemon(5, "Charmeleon", "fire", "5.png"),
      new Pokemon(6, "Charizard", "fire", "6.png"),
      new Pokemon(7, "Squirtle", "water", "7.png"),
      new Pokemon(8, "Wartortle", "water", "8.png"),
      new Pokemon(9, "Blastoise", "water", "9.png")
    ];
  }
}
