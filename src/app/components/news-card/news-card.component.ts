import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  standalone: true,
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) excerpt = '';
  @Input({ required: true }) image = '';
  @Input({ required: true }) link = '';
  @Input() category = '';
  @Input() dateLabel = '';
}
