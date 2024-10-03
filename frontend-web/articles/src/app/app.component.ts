import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Article} from "./article-component/article";
import {ArticleComponentComponent} from "./article-component/article-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'articles';
  articles!: Article[];

  ngOnInit(): void {
    this.articles = [
      new Article(1, 'Tandenborstel', 1.5, 3.24, 'tandenborstel.png'),
      new Article(2, 'Handdoek', 2.5, 4.75, 'handdoek.png'),
      new Article(3, 'Washandje', 0.4, 1.2, 'washandje.png'),
      new Article(4, 'Keukenrol', 1.75, 0.65, 'keukenrol.png'),
    ];
  }
}
