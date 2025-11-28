import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService, type NewsArticle } from '../../services/news.service';

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detail.page.html',
  styleUrl: './news-detail.page.css',
})
export class NewsDetailPageComponent {
  protected article?: NewsArticle;

  private readonly route = inject(ActivatedRoute);
  private readonly newsService = inject(NewsService);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.article = this.newsService.findBySlug(slug);
    });
  }
}
