import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() city = 'Camacã';
  @Input() condition = 'Sol com pancadas de chuva';
  @Input() temperature = '27';
  @Input() minTemperature = '22';
  @Input() maxTemperature = '30';
  @Input() forecast: Array<{ label: string; icon: string; temp: string }> = [
    { label: 'Hoje', icon: '☀️', temp: '27°/22°' },
    { label: 'Amanhã', icon: '⛅', temp: '28°/23°' },
    { label: 'Depois', icon: '🌧️', temp: '25°/21°' },
  ];
}
