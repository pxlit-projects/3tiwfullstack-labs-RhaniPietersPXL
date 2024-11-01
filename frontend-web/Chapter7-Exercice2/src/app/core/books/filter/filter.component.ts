import {Component, EventEmitter, Output} from '@angular/core';
import {Filter} from "../../../shared/models/filter.models";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filter: Filter = {title: ''};

  @Output() filterChanged = new EventEmitter<Filter>();

  onSearchChange(event: any) {
    this.filter.title = event.target.value.toLowerCase();
    this.filterChanged.emit(this.filter);
  }
}
