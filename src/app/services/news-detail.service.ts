import { Injectable, inject } from '@angular/core';
import { NewsService, type NewsArticle } from './news.service';

@Injectable({ providedIn: 'root' })
<<<<<<< ours
<<<<<<< ours
export class NewsDetailService extends NewsService {
  getBySlug(slug: string) {
    return this.findBySlug(slug);
  }
<<<<<<< ours

  getFeatured() {
    return super.getFeatured();
  }

  getLatest() {
    return super.getLatest();
  }

  getAside() {
    return super.getAside();
  }

  getStack() {
    return super.getStack();
  }

  getAll() {
    return super.getAll();
=======
=======
>>>>>>> theirs
export class NewsDetailService {
  private readonly newsService = inject(NewsService);

  getBySlug(slug: string): NewsArticle | undefined {
    return this.newsService.findBySlug(slug);
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
  }
=======
>>>>>>> theirs
}
