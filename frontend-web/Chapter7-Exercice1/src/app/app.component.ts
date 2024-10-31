import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {SearchComponent} from "./search/search.component";
import {Filter} from "./models/filter.models";
import {HeroService} from "./services/hero.service";
import {Hero} from "./models/hero.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'Chapter7-Exercice1';
  heroService: HeroService = inject(HeroService);
  filteredData!: Hero[];

  ngOnInit(): void {
    this.fetchData();
    }

  handleFilter(filter: Filter) {
    this.heroService.filterHeroes(filter).subscribe({
      next: heroes => this.filteredData = heroes
    });
  }

  private fetchData() {
    this.heroService.getHeroes().subscribe({next: heroes => this.filteredData = heroes});
  }
}
