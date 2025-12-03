import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  readonly weather$;
  private readonly themeMap = [
    {
      matcher: /chuva|tempestade|tormenta|aguaceiro/,
      gradient: 'linear-gradient(160deg, #0f172a, #1f2937)',
    },
    {
      matcher: /nublado|encoberto|névoa|nuvem|bruma/,
      gradient: 'linear-gradient(160deg, #334155, #475569)',
    },
    {
      matcher: /sol|limpo|claro|ensolarado/,
      gradient: 'linear-gradient(160deg, #facc15, #f97316)',
    },
    {
      matcher: /neve|geada|gelo/,
      gradient: 'linear-gradient(160deg, #0ea5e9, #38bdf8)',
    },
    {
      matcher: /trovoada|trovão|relâmpago|raio/,
      gradient: 'linear-gradient(160deg, #1e3a8a, #9333ea)',
    },
  ];

  constructor(private readonly weatherService: WeatherService) {
    this.weather$ = this.weatherService.weather$;
  }

  themeFor(condition: string): string {
    const normalized = (condition ?? '').toLowerCase();
    const match = this.themeMap.find((item) => item.matcher.test(normalized));
    return match?.gradient ?? 'linear-gradient(160deg, #1e3a8a, #2563eb)';
  }
}
