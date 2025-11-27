import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';
import { NewsListComponent, type NewsItem } from './components/news-list/news-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeaturedArticleComponent, NewsListComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly featured = {
    title: 'Obra na avenida principal altera trânsito e exige atenção de motoristas',
    excerpt:
      'Intervenção emergencial muda temporariamente o fluxo de veículos e cria rotas alternativas para quem passa pelo centro da cidade.',
    image: 'assets/images/viatura.png',
    badge: 'Última hora',
    category: 'Cidade',
    author: 'Redação Camacã News',
    dateLabel: '26 nov 2025 - 08h00',
    dateTime: '2025-11-26T08:00:00',
    link: '/noticias/obra-avenida-principal-camaca',
  };

  protected readonly latestNews: NewsItem[] = [
    {
      title: 'Evento cultural reúne artistas regionais no centro',
      excerpt:
        'Música, dança e gastronomia movimentaram a praça principal durante o fim de semana.',
      image: 'assets/images/viatura.png',
      link: '/noticias/evento-cultural',
      category: 'Cultura',
      dateLabel: '25 nov 2025',
    },
    {
      title: 'Black Friday movimenta comércio local com descontos',
      excerpt: 'Lojas e mercados registraram aumento de fluxo com promoções e cupons.',
      image: 'assets/images/promocoes.jpg',
      link: '/noticias/promocoes-black-friday',
      category: 'Promoções',
      dateLabel: '24 nov 2025',
    },
    {
      title: 'Operação conjunta apreende materiais ilícitos no bairro X',
      excerpt:
        'A ação integrada das forças de segurança teve foco no combate ao tráfico na região.',
      image: 'assets/images/policial.jpg',
      link: '/noticias/operacao-policial',
      category: 'Policial',
      dateLabel: '23 nov 2025',
    },
  ];
}
