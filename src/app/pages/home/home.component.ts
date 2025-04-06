import { Component, OnInit } from '@angular/core';
import { FeatureArticleComponent } from '../../components/feature-article/feature-article.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { featuredArticle, recentArticles } from '../../data/data-fake';

@Component({
  selector: 'app-home',
  imports: [
    FeatureArticleComponent,
    ArticleCardComponent,
    CategorySectionComponent,
    CommonModule,
    NewsletterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}
  featuredArticle = featuredArticle;
  recentArticles = recentArticles;
  ngOnInit(): void {}
}
