import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

export type NewsItem = {
  title: string;
  excerpt: string;
  image: string;
  link: string;
  category?: string;
  dateLabel?: string;
};

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgFor, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input({ required: true }) items: NewsItem[] = [];

  protected trackItem = (_: number, item: NewsItem) => item.link;
}
