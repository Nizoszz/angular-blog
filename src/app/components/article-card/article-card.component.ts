import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  @Input() article!: {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
  };
}
