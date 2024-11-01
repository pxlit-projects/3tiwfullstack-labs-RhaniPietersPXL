import {Component, EventEmitter, Output} from '@angular/core';
import {Filter} from "../models/filter.models";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  filter : Filter = { name: '', rating: null };

  @Output() filterChanged = new EventEmitter<Filter>();

  onSearchChange(event: any) {
    this.filter.name = event.target.value.toLowerCase();
    this.filterChanged.emit(this.filter);
  }

  onRatingChange(event: any) {
    const value = event.target.value;
    this.filter.rating = value ? parseInt(value) : null;
    this.filterChanged.emit(this.filter);
  }
}
