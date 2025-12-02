import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsDetailService, type NewsDetailArticle } from '../../services/news-detail.service';

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detail.page.html',
  styleUrl: './news-detail.page.css',
})
export class NewsDetailPageComponent {
  protected article?: NewsDetailArticle;

  private readonly route = inject(ActivatedRoute);
  private readonly newsDetailService = inject(NewsDetailService);

  protected paragraphs(value?: string[] | string): string[] {
    if (Array.isArray(value)) {
      return value;
    }

    return value ? value.split(/\n\s*\n/) : [];
  }

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.article = this.newsDetailService.getBySlug(slug);
    });
  }
}
