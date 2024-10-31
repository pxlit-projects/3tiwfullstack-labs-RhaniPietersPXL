import {inject, Injectable} from '@angular/core';
import {Filter} from "../models/filter.models";
import {Hero} from "../models/hero.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl: string = 'heroes.json';
  http: HttpClient = inject(HttpClient);

  constructor() {
  }

  getHeroes() {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  filterHeroes(filter: Filter) {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      map((heroes: Hero[]) => heroes.filter(hero => this.isHeroMatchingFilter(hero, filter)))
    );
  }

  private isHeroMatchingFilter(hero: Hero, filter: Filter) {
    const matchesName = hero.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesRating = hero.difficulty === filter.rating;
    return matchesName && matchesRating
  }
}
