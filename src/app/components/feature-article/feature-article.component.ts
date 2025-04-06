import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-article',
  templateUrl: './feature-article.component.html',
  styleUrls: ['./feature-article.component.css'],
})
export class FeatureArticleComponent {
  @Input() featureArticle!: {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
  };
}
