import { Injectable } from '@angular/core';
import {Pokemon} from "../pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  private _pokemons: Pokemon[] = [
    new Pokemon(1, "Bulbasaur", "grass", "1.png"),
    new Pokemon(2, "Ivysaur", "grass", "2.png"),
    new Pokemon(3, "Venusaur", "grass", "3.png"),
    new Pokemon(4, "Charmander", "fire", "4.png"),
    new Pokemon(5, "Charmeleon", "fire", "5.png"),
    new Pokemon(6, "Charizard", "fire", "6.png"),
    new Pokemon(7, "Squirtle", "water", "7.png"),
  ];

  getPokemons(): Pokemon[] {
    return this._pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this._pokemons.push(pokemon);
  }
}
