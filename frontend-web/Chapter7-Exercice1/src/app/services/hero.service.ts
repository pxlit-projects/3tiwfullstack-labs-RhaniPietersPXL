import {inject, Injectable} from '@angular/core';
import {Filter} from "../models/filter.models";
import {Hero} from "../models/hero.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl: string = 'heroes.json';
  http: HttpClient = inject(HttpClient);

  constructor() {
  }

  //OPLETTEN MAPPEN!!!!
  getHeroes(): Observable<Hero[]> {
    return this.http.get<{ [key: string]: Hero }>(this.heroesUrl).pipe(
      map(response => Object.values(response))
    );
  }

  filterHeroes(filter: Filter): Observable<Hero[]> {
    return this.getHeroes().pipe( // Gebruik getHeroes() hier
      map(heroes => heroes.filter(hero => this.isHeroMatchingFilter(hero, filter))) // Filter de helden
    );
  }

  private isHeroMatchingFilter(hero: Hero, filter: Filter) {
    const matchesName = hero.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesRating = filter.rating !== null ? hero.difficulty === filter.rating : true;
    return matchesName && matchesRating;
  }
}
