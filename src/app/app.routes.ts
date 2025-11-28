import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page';
import { NewsDetailPageComponent } from './pages/news-detail/news-detail.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'noticias/:slug',
    component: NewsDetailPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
