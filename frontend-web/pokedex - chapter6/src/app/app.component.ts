import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Pokemon} from "./pokemon";
import {PokemonItemComponent} from "./pokemon-item/pokemon-item.component";
import {PokemonServiceService} from "./services/pokemon-service.service";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, PokemonItemComponent, AddPokemonComponent, ProductComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pokemonService: PokemonServiceService = inject(PokemonServiceService);
  title = 'pokedex';
  selectedPokemon: Pokemon | null = null;
  pokemons!: Pokemon[];

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  processAdd (pokemon: Pokemon): void {
    this.pokemonService.addPokemon(pokemon);
    this.pokemons = this.pokemonService.getPokemons();
  }
}
