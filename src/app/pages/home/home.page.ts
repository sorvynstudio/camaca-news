import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FeaturedArticleComponent } from '../../components/featured-article/featured-article.component';
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { LatestCardsComponent } from '../../components/latest-cards/latest-cards.component';
import { NewsService, type NewsArticle } from '../../services/news.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FeaturedArticleComponent, NewsListComponent, LatestCardsComponent],
  templateUrl: './home.page.html',
})
export class HomePageComponent {
  private readonly newsService = inject(NewsService);

  protected readonly featured: NewsArticle = this.newsService.getFeatured();
  protected readonly latestNews: NewsArticle[] = this.newsService.getLatest().slice(0, 3);
  protected readonly asideNews: NewsArticle[] = this.newsService.getAside();
  protected readonly stackedNews: NewsArticle[] = this.newsService.getStack();
}
