import {Component, Input} from '@angular/core';
import {Article} from "./article";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.css'
})
export class ArticleComponentComponent {
  @Input() articles!: Article[];

  showDetails(article: Article): void {
    alert(`Item description: ${article.naam} - Sale Price: ${article.verkoopprijs} - Purchase Price: ${article.aankoopprijs}`);
  }
}
