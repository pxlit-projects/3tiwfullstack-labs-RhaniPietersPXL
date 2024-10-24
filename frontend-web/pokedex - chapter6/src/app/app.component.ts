import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Pokemon} from "./pokemon";
import {PokemonItemComponent} from "./pokemon-item/pokemon-item.component";
import {PokemonService} from "./services/pokemon.service";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, PokemonItemComponent, AddPokemonComponent, ProductComponent, OrderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pokemonService: PokemonService = inject(PokemonService);
  title = 'pokedex';
  selectedPokemon: Pokemon | null = null;
  pokemons!: Pokemon[];
  authService: AuthService = inject(AuthService);

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    localStorage.clear();
  }

  processAdd (pokemon: Pokemon): void {
    this.pokemonService.addPokemon(pokemon);
    this.pokemons = this.pokemonService.getPokemons();
  }

  getUserDetails() {
    return this.authService.getUserDetails();
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
