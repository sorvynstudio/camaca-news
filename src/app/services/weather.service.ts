import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

export interface WeatherForecast {
  label: string;
  icon: string;
  temp: string;
}

export interface WeatherSummary {
  city: string;
  condition: string;
  temperature: string;
  minTemperature: string;
  maxTemperature: string;
  forecast: WeatherForecast[];
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly apiKey = '34b1a00936a1f6bd5d636876ae8ac6e5';
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5';
  private readonly defaultCoords = { lat: -23.5505, lon: -46.6333 }; // São Paulo, SP
  private readonly fallbackCity = 'São Paulo';
  private readonly weatherSubject = new BehaviorSubject<WeatherSummary | null>(null);
  readonly weather$ = this.weatherSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    this.load();
  }

  private async load() {
    try {
      const coords = await this.getCurrentPosition();
      await this.fetchWeather(coords.latitude, coords.longitude);
    } catch {
      await this.fetchWeather(this.defaultCoords.lat, this.defaultCoords.lon, this.fallbackCity);
    }
  }

  private getCurrentPosition(): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject(new Error('Geolocation not supported'));
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        reject,
        { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 }
      );
    });
  }

  private async fetchWeather(lat: number, lon: number, cityOverride?: string) {
    const current = await firstValueFrom(
      this.http.get(`${this.baseUrl}/weather`, {
        params: {
          lat: String(lat),
          lon: String(lon),
          units: 'metric',
          lang: 'pt_br',
          appid: this.apiKey,
        },
      })
    );
    const forecast = await firstValueFrom(
      this.http.get(`${this.baseUrl}/forecast`, {
        params: {
          lat: String(lat),
          lon: String(lon),
          units: 'metric',
          lang: 'pt_br',
          cnt: '3',
          appid: this.apiKey,
        },
      })
    );

    const summary: WeatherSummary = {
      city: cityOverride ?? this.extractCityName((current as any).name) ?? this.fallbackCity,
      condition: (current as any).weather?.[0]?.description ?? 'Informações indisponíveis',
      temperature: Math.round((current as any).main?.temp ?? 0).toString(),
      minTemperature: Math.round((current as any).main?.temp_min ?? 0).toString(),
      maxTemperature: Math.round((current as any).main?.temp_max ?? 0).toString(),
      forecast: ((forecast as any).list ?? []).map((entry: any, idx: number) => ({
        label: idx === 0 ? 'Hoje' : idx === 1 ? 'Amanhã' : 'Depois',
        icon: this.mapIcon(entry.weather?.[0]?.icon),
        temp: `${Math.round(entry.main.temp)}°`,
      })),
    };

    this.weatherSubject.next(summary);
  }

  private extractCityName(raw?: string): string | null {
    const normalized = (raw ?? '').trim();
    if (!normalized) {
      return null;
    }
    const fragments = normalized
      .split(/[-,]/)
      .map((part) => part.trim())
      .filter(Boolean);

    const candidate = fragments.pop() ?? fragments[0];
    if (!candidate) {
      return null;
    }

    const rejectPattern = /(bairro|centro|região|regiao|zona|setor|condomínio)/i;
    if (rejectPattern.test(candidate)) {
      return null;
    }

    return candidate;
  }

  private mapIcon(icon?: string): string {
    if (!icon) {
      return '☁️';
    }
    const map: Record<string, string> = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌦️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️',
    };
    return map[icon] ?? '☁️';
  }
}
