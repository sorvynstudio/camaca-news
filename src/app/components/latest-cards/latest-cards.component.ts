import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { type NewsArticle } from '../../services/news.service';

@Component({
  selector: 'app-latest-cards',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './latest-cards.component.html',
  styleUrl: './latest-cards.component.css',
})
export class LatestCardsComponent {
  @Input({ required: true }) items: NewsArticle[] = [];

  protected trackItem = (_: number, item: NewsArticle) => item.slug;
}
