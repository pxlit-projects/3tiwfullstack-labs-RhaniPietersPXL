import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {SearchComponent} from "./search/search.component";
import {Filter} from "./models/filter.models";
import {HeroService} from "./services/hero.service";
import {Hero} from "./models/hero.model";
import {AsyncPipe} from "@angular/common";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, SearchComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Chapter7-Exercice1';
  heroService: HeroService = inject(HeroService);
  filteredData$: Observable<Hero[]> = EMPTY;

  ngOnInit(): void {
    this.fetchData();
  }

  handleFilter(filter: Filter) {
    this.filteredData$ = this.heroService.filterHeroes(filter);
  }

  fetchData() {
    this.filteredData$ = this.heroService.getHeroes();
  }
}
