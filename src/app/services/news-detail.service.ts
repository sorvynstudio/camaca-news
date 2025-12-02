import { Injectable, inject } from '@angular/core';
import { NewsService, type NewsArticle } from './news.service';

export type NewsDetailArticle = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  image: string;
  category: string;
  author?: string;
  badge?: string;
  dateLabel: string;
  dateTime?: string;
  updatedAt?: string;
  content: string[];
  content2?: string[];
  featureBlock?: {
    image: string;
    title: string;
    body: string;
  };
};

@Injectable({ providedIn: 'root' })
export class NewsDetailService {
  private readonly newsService = inject(NewsService);
  private readonly details: NewsDetailArticle[] = [
    {
      slug: 'obra-avenida-principal-camaca',
      title: 'Obra na avenida principal altera trânsito e exige atenção de motoristas',
      subtitle: 'Trecho central fechado por 15 dias; rotas alternativas liberadas',
      excerpt:
        'Intervenção emergencial muda temporariamente o fluxo de veículos e cria rotas alternativas para quem passa pelo centro da cidade.',
      image: 'assets/images/assessoria-de-obras.jpg',
      category: 'Cidade',
      author: 'Redação Camacã News',
      badge: 'Última hora',
      dateLabel: '26 nov 2025 - 08h00',
      dateTime: '2025-11-26T08:00:00',
      updatedAt: '26 nov 2025 - 09h15',
      content: `
A prefeitura iniciou uma obra emergencial na avenida principal para corrigir pontos críticos de drenagem.

Durante o período de intervenção, parte das faixas ficará interditada, com desvios sinalizados para motoristas e linhas de ônibus.

A recomendação é sair mais cedo e seguir as rotas alternativas, principalmente nos horários de pico.

Engenheiros destacam que a drenagem resolve um problema antigo de acúmulo de água.

Comerciantes relatam queda no fluxo, mas esperam recuperação após o fim da intervenção.
`.trim().split('\n\n'),
      content2:`
      Equipes municipais também anunciam rodízio de circulação e campanha educativa para informar motoristas.
      Nos próximos dias haverão fiscalizações extras em horários de pico para garantir fluidez no trânsito.
`.trim().split('\n\n'),
      featureBlock: {
        image: 'assets/images/logo_camacan.png',
        title: 'Bastidores da operação',
        body: 'Equipes técnicas monitoram o avanço e liberam faixas à medida que concluem cada trecho.',
      },
    },
    {
      slug: 'evento-cultural',
      title: 'Evento cultural reúne artistas regionais no centro',
      subtitle: 'Programação com música, dança e gastronomia',
      excerpt:
        'Música, dança e gastronomia movimentaram a praça principal durante o fim de semana.',
      image: 'assets/images/viatura.png',
      category: 'Cultura',
      author: 'Redação Camacã News',
      badge: 'Cultura',
      dateLabel: '25 nov 2025',
      dateTime: '2025-11-25',
      content: `
A praça recebeu apresentações de bandas locais e grupos de dança ao longo dos dois dias.
 A feira gastronômica atraiu moradores com comidas típicas e bebidas artesanais. 
 A organização preparou espaços de leitura e oficinas para crianças.
`.trim().split('\n\n'),
      
      featureBlock: {
        image: 'assets/images/logo_camacan.png',
        title: 'Bastidores e curiosidades',
        body: 'Palcos montados em tempo recorde; voluntários coordenaram logística e bastidores digitais.',
      },
    },
    {
      slug: 'promocoes-black-friday',
      title: 'Black Friday movimenta comércio local com descontos',
      subtitle: 'Comerciantes reforçam proteção ao consumidor',
      excerpt: 'Lojas e mercados registraram aumento de fluxo com promoções e cupons.',
      image: 'assets/images/black.webp',
      category: 'Promoções',
      author: 'Redação Camacã News',
      dateLabel: '24 nov 2025',
      dateTime: '2025-11-24',
      content: `
Comerciantes apostaram em descontos progressivos e prazos estendidos.

A associação comercial organizou uma central de dúvidas para orientar sobre direitos.

Cupons digitais e embalagens sustentáveis foram destaque na comunicação.
`.trim().split('\n\n'),
      featureBlock: {
        image: 'assets/images/logo_camacan.png',
        title: 'Dicas para aproveitar o desconto',
        body: 'Salve prints das ofertas, prefira estabelecimentos com selo e confira a garantia antes da compra.',
      },
    },
    {
      slug: 'plantao-chuva',
      title: 'Alerta de chuva forte mobiliza defesa civil para o fim de semana',
      subtitle: 'Equipes e pontos de apoio prontos em bairros de risco',
      excerpt:
        'Equipes de prontidão e pontos de apoio preparados em bairros com risco de alagamento.',
      image: 'assets/images/assessoria-de-obras.jpg',
      category: 'Clima',
      author: 'Defesa Civil',
      dateLabel: '27 nov 2025',
      dateTime: '2025-11-27',
      content: `
Plano preventivo monitora áreas com histórico de alagamento.

Abrigos temporários e rotas seguras foram mapeados.

Equipes de limpeza retiraram lixo dos bueiros para evitar entupimentos.
`.trim().split('\n\n'),
      featureBlock: {
        image: 'assets/images/logo_camacan.png',
        title: 'Serviços em alerta',
        body: 'Voluntários acompanham evacuações e divulgam dicas em tempo real nas redes da defesa civil.',
      },
    },
    
  ];

  getBySlug(slug: string): NewsDetailArticle | undefined {
    const detail = this.details.find((article) => article.slug === slug);
    if (detail) {
      return detail;
    }
    const fallback = this.newsService.findBySlug(slug);
    return fallback ? this.toDetailArticle(fallback) : undefined;
  }

  getAll(): NewsDetailArticle[] {
    return [...this.details];
  }

  private toDetailArticle(article: NewsArticle): NewsDetailArticle {
    return {
      ...article,
      content: article.content,
    };
  }
}
