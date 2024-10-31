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
  filterValues : Filter = { name: '', rating: null };

  @Output() filterChanged = new EventEmitter<{ name: string, rating: number | null }>();

  onSearchChange(event: any) {
    this.filterValues.name = event.target.value.toLowerCase();
    this.filterChanged.emit(this.filterValues);
  }

  onRatingChange(event: any) {
    const value = event.target.value;
    this.filterValues.rating = value ? parseInt(value) : null;
    this.filterChanged.emit(this.filterValues);
  }
}
