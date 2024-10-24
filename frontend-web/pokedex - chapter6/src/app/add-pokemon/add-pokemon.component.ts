import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Pokemon} from "../pokemon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PokemonServiceService} from "../pokemon-service.service";

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent {
  @Output() addPokemon = new EventEmitter<Pokemon>();
  pokemonService: PokemonServiceService = inject(PokemonServiceService);

  fb: FormBuilder = inject(FormBuilder);
  pokemonForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    type: ['', Validators.required],
  });

  onSubmit() {
    const newPokemon: Pokemon = {
      ...this.pokemonForm.value
    };
    newPokemon.id = this.pokemonService.getPokemons().length + 1;
    newPokemon.icon = `${newPokemon.id}.png`;
    this.addPokemon.emit(newPokemon);
  }
}
