import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-featured-article',
  standalone: true,
  imports: [NgIf],
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.css'
})
export class FeaturedArticleComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) excerpt = '';
  @Input({ required: true }) image = '';
  @Input() category = '';
  @Input() badge = '';
  @Input() author = '';
  @Input() dateLabel = '';
  @Input() dateTime = '';
  @Input() link = '#';
}
