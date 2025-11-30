import { Injectable } from '@angular/core';

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  dateLabel: string;
  dateTime?: string;
  author?: string;
  badge?: string;
  content: string[];
  sections?: Array<'featured' | 'latest' | 'aside' | 'stack'>;
};

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly articles: NewsArticle[] = [
    {
      slug: 'obra-avenida-principal-camaca',
      title: 'Obra na avenida principal altera trânsito e exige atenção de motoristas',
      excerpt:
        'Intervenção emergencial muda temporariamente o fluxo de veículos e cria rotas alternativas para quem passa pelo centro da cidade.',
      image: 'assets/images/assessoria-de-obras.jpg',
      badge: 'Última hora',
      category: 'Cidade',
      author: 'Redação Camacã News',
      dateLabel: '26 nov 2025 - 08h00',
      dateTime: '2025-11-26T08:00:00',
      sections: ['featured'],
      content: [
        'A prefeitura iniciou uma obra emergencial na avenida principal para corrigir pontos críticos de drenagem.',
        'Durante o período de intervenção, parte das faixas ficará interditada, com desvios sinalizados para motoristas e linhas de ônibus.',
        'A recomendação é sair mais cedo e seguir as rotas alternativas, principalmente nos horários de pico.',
      ],
    },
    {
      slug: 'evento-cultural',
      title: 'Evento cultural reúne artistas regionais no centro',
      excerpt:
        'Música, dança e gastronomia movimentaram a praça principal durante o fim de semana.',
      image: 'assets/images/viatura.png',
      category: 'Cultura',
      dateLabel: '25 nov 2025',
      dateTime: '2025-11-25',
      content: [
        'A praça central recebeu apresentações de bandas locais, grupos de dança e exposições de artistas independentes.',
        'O evento também contou com feira gastronômica e ações de incentivo à leitura para crianças.',
        'Organizadores avaliaram o público como acima do esperado, reforçando planos para próximas edições.',
      ],
      sections: ['latest'],
    },
    {
      slug: 'promocoes-black-friday',
      title: 'Black Friday movimenta comércio local com descontos',
      excerpt: 'Lojas e mercados registraram aumento de fluxo com promoções e cupons.',
      image: 'assets/images/black.webp',
      category: 'Promoções',
      dateLabel: '24 nov 2025',
      dateTime: '2025-11-24',
      sections: ['latest'],
      content: [
        'Comerciantes locais apostaram em descontos progressivos e prazos estendidos para pagamento.',
        'Segundo a associação comercial, a movimentação superou a do ano passado, impulsionada por divulgação digital.',
        'Especialistas alertam para atenção aos direitos do consumidor e cuidado com golpes online.',
      ],
    },
    {
      slug: 'operacao-policial',
      title: 'Operação conjunta apreende materiais ilícitos no bairro X',
      excerpt:
        'A ação integrada das forças de segurança teve foco no combate ao tráfico na região.',
      image: 'assets/images/viatura3.png',
      category: 'Policial',
      dateLabel: '23 nov 2025',
      dateTime: '2025-11-23',
      content: [
        'Equipes da polícia civil e militar cumpriram mandados de busca em diferentes pontos do bairro.',
        'Materiais ilícitos foram apreendidos e suspeitos conduzidos para depoimento na delegacia.',
        'A operação faz parte de um calendário de ações coordenadas que seguirá até o fim do ano.',
      ],
      sections: ['latest'],
    },
    {
      slug: 'plantao-chuva',
      title: 'Alerta de chuva forte mobiliza defesa civil para o fim de semana',
      excerpt:
        'Equipes de prontidão e pontos de apoio preparados em bairros com risco de alagamento.',
      image: 'assets/images/assessoria-de-obras.jpg',
      category: 'Clima',
      dateLabel: '27 nov 2025',
      dateTime: '2025-11-27',
      sections: ['aside'],
      content: [
        'A defesa civil ativou plano preventivo para monitorar áreas de risco diante da previsão de chuva intensa.',
        'Abrigos temporários foram preparados e equipes orientam moradores sobre rotas seguras.',
        'O órgão recomenda evitar deslocamentos em pontos de alagamento e acionar o serviço em caso de emergência.',
      ],
    },
    {
      slug: 'saude-vacinacao',
      title: 'Mutirão de vacinação contra gripe alcança 12 mil doses aplicadas',
      excerpt: 'Postos extras funcionam até 20h para atender público adulto e infantil.',
      image: 'assets/images/viatura3.png',
      category: 'Saúde',
      dateLabel: '26 nov 2025',
      dateTime: '2025-11-26',
      sections: ['aside'],
      content: [
        'A secretaria de saúde montou pontos de vacinação em escolas e praças para ampliar a cobertura.',
  
      ],
    },
    {
      slug: 'emprego-feira',
      title: 'Feira de empregos oferece 320 vagas em comércio e serviços',
      excerpt: 'Candidatos podem se inscrever online ou comparecer ao ginásio municipal até sexta.',
      image: 'assets/images/black.webp',
      category: 'Economia',
      dateLabel: '25 nov 2025',
      dateTime: '2025-11-25',
      sections: ['aside'],
      content: [
        'Empresas do comércio e do setor de serviços abriram vagas imediatas e banco de talentos.',

      ],
    },
    {
      slug: 'prefeitura-reforma-pracas',
      title: 'Prefeitura inicia reforma de três praças com novos equipamentos',
      excerpt: 'Projeto prevê áreas de lazer, academia ao ar livre e iluminação em LED.',
      image: 'assets/images/assessoria-de-obras.jpg',
      category: 'Cidade',
      dateLabel: '22 nov 2025',
      dateTime: '2025-11-22',
      sections: ['stack'],
      content: [
        'As obras serão executadas em fases para minimizar impacto no entorno, com previsão de entrega em 90 dias.',
        'Novos brinquedos infantis, pista de caminhada e academia ao ar livre fazem parte do projeto.',
      ],
    },
    {
      slug: 'esporte-corrida-rua',
      title: 'Corrida de rua deve reunir mais de 2 mil atletas no centro',
      excerpt: 'Percursos de 5km e 10km terão largada às 7h; inscrições encerram na sexta.',
      image: 'assets/images/viatura3.png',
      category: 'Esportes',
      dateLabel: '21 nov 2025',
      dateTime: '2025-11-21',
      sections: ['stack'],
      content: [
        'A organização recomenda chegar com antecedência para retirada de kits e alongamento guiado.',
        'Haverá pontos de hidratação a cada 2km e equipe médica de prontidão.',
      ],
    },
    {
      slug: 'educacao-oficinas',
      title: 'Oficinas de tecnologia atendem 400 alunos da rede municipal',
      excerpt: 'Cursos de robótica e programação acontecem em laboratório itinerante.',
      image: 'assets/images/black.webp',
      category: 'Educação',
      dateLabel: '20 nov 2025',
      dateTime: '2025-11-20',
      sections: ['stack'],
      content: [
        'As oficinas integram o programa municipal de inclusão digital e seguem até o fim do mês.',
        'Alunos recebem kit básico de eletrônica para exercícios práticos em sala.',
      ],
    },
    {
      slug: 'meio-ambiente-mudas',
      title: 'Mutirão de mudas planta 1.500 árvores em bairros da cidade',
      excerpt: 'Ação conta com voluntários e apoio de escolas locais.',
      image: 'assets/images/assessoria-de-obras.jpg',
      category: 'Meio ambiente',
      dateLabel: '19 nov 2025',
      dateTime: '2025-11-19',
      sections: ['stack'],
      content: [
        'Espécies nativas foram priorizadas para ampliar a cobertura verde e reduzir ilhas de calor.',
        'Moradores receberam orientação de manejo e cuidado inicial das mudas.',
      ],
    },
    {
      slug: 'seguranca-monitoramento',
      title: 'Centro de monitoramento amplia câmeras em pontos de ônibus',
      excerpt: 'Novos equipamentos terão reconhecimento de placas e suporte 24h.',
      image: 'assets/images/viatura.png',
      category: 'Segurança',
      dateLabel: '18 nov 2025',
      dateTime: '2025-11-18',
      sections: ['stack'],
      content: [
        'A expansão integra o plano municipal de segurança urbana e deve cobrir 18 pontos estratégicos.',
        'Imagens serão compartilhadas com as forças policiais e armazenadas conforme legislação vigente.',
      ],
    },
  ];

  getFeatured(): NewsArticle {
    return this.articles.find((article) => article.sections?.includes('featured')) ?? this.articles[0];
  }

  getLatest(): NewsArticle[] {
    return this.articles.filter((article) => article.sections?.includes('latest'));
  }

  getAll(): NewsArticle[] {
    return this.articles;
  }

  getAside(): NewsArticle[] {
    return this.articles.filter((article) => article.sections?.includes('aside'));
  }

  getStack(): NewsArticle[] {
    return this.articles.filter((article) => article.sections?.includes('stack'));
  }

  findBySlug(slug: string): NewsArticle | undefined {
    return this.articles.find((article) => article.slug === slug);
  }
}
