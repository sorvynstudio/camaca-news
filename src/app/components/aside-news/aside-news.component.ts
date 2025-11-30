import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NewsListComponent } from '../news-list/news-list.component';
import { NewsService, type NewsArticle } from '../../services/news.service';

@Component({
  selector: 'app-aside-news',
  standalone: true,
  imports: [CommonModule, NewsListComponent],
  template: `
    <div class="section-header">
      <h3>Destaques rápidos</h3>
    </div>
    <app-news-list [items]="asideNews" />
  `,
})
export class AsideNewsComponent {
  private readonly newsService = inject(NewsService);

  protected readonly asideNews: NewsArticle[] = this.newsService.getAside();
}