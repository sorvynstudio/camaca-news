import { Injectable } from '@angular/core';

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  subtitle?: string;
  category: string;
  dateLabel: string;
  dateTime?: string;
  updatedAt?: string;
  author?: string;
  badge?: string;
  content: string[];
  facts?: string[];
  sections?: Array<'featured' | 'latest' | 'aside' | 'stack'>;
  featureBlock?: {
    image: string;
    title: string;
    body: string;
  };
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
      subtitle:
        'Trecho central será interditado por 15 dias; desvios sinalizados para carros e ônibus.',
      badge: 'Última hora',
      category: 'Cidade',
      author: 'Redação Camacã News',
      dateLabel: '26 nov 2025 - 08h00',
      dateTime: '2025-11-26T08:00:00',
      updatedAt: '26 nov 2025 - 09h15',
      sections: ['featured'],
      content: `
A prefeitura iniciou uma obra emergencial na avenida principal para corrigir pontos críticos de drenagem.

Durante o período de intervenção, parte das faixas ficará interditada, com desvios sinalizados para motoristas e linhas de ônibus.

A recomendação é sair mais cedo e seguir as rotas alternativas, principalmente nos horários de pico.

Engenheiros da secretaria afirmam que a intervenção resolve um problema antigo de acúmulo de água que já provocou danos ao asfalto em anos anteriores.

Comerciantes da região relataram queda no movimento durante as primeiras horas da obra, mas esperam recuperação após a conclusão da fase mais pesada.

O cronograma prevê conclusão em 15 dias, com acompanhamento diário de equipes de fiscalização e atualização das rotas de ônibus em tempo real pelos aplicativos locais.
`.trim().split('\n\n'),

      facts: [
        'Duração prevista: 15 dias',
        'Afeta três linhas de ônibus',
        'Investimento: R$ 1,2 milhão',
      ],

},
    {
      slug: 'evento-cultural',
      title: 'Evento cultural reúne artistas regionais no centro',
      excerpt:
        'Música, dança e gastronomia movimentaram a praça principal durante o fim de semana.',
      image: 'assets/images/viatura.png',
      category: 'Cultura',
      subtitle: 'Praça central recebeu apresentações e gastronomia em dois dias de programação.',
      dateLabel: '25 nov 2025',
      dateTime: '2025-11-25',
      updatedAt: '25 nov 2025 - 20h40',
      content: `
A praça central recebeu apresentações de bandas locais, grupos de dança e exposições de artistas independentes.

O evento também contou com feira gastronômica e ações de incentivo à leitura para crianças.

Organizadores avaliaram o público como acima do esperado, reforçando planos para próximas edições.
`.trim().split('\n\n'),
      sections: ['latest'],

      featureBlock: {
        image: 'assets/images/logo_camacan.png',
        title: 'Bastidores e atrações',
        body:
          'Veja fotos exclusivas dos artistas que se apresentaram na praça e os bastidores da montagem do palco principal.',
      },
    },
    {
      slug: 'promocoes-black-friday',
      title: 'Black Friday movimenta comércio local com descontos',
      excerpt: 'Lojas e mercados registraram aumento de fluxo com promoções e cupons.',
      image: 'assets/images/black.webp',
      category: 'Promoções',
      dateLabel: '24 nov 2025',
      dateTime: '2025-11-24',
      subtitle: 'Descontos progressivos e cupons digitais impulsionaram vendas do varejo local.',
      updatedAt: '24 nov 2025 - 18h00',
      sections: ['latest'],
      content: `
Comerciantes locais apostaram em descontos progressivos e prazos estendidos para pagamento.

Segundo a associação comercial, a movimentação superou a do ano passado, impulsionada por divulgação digital.

Especialistas alertam para atenção aos direitos do consumidor e cuidado com golpes online.
`.trim().split('\n\n'),

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
      subtitle: 'Mandados cumpridos em cinco endereços apreenderam materiais ilícitos.',
      content: `
Equipes da polícia civil e militar cumpriram mandados de busca em diferentes pontos do bairro.

Materiais ilícitos foram apreendidos e suspeitos conduzidos para depoimento na delegacia.

A operação faz parte de um calendário de ações coordenadas que seguirá até o fim do ano.
`.trim().split('\n\n'),
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
      subtitle: 'Defesa civil mantém equipes de plantão e orienta moradores em áreas de risco.',
      updatedAt: '27 nov 2025 - 06h45',
      sections: ['aside'],
      content: `
A defesa civil ativou plano preventivo para monitorar áreas de risco diante da previsão de chuva intensa.

Abrigos temporários foram preparados e equipes orientam moradores sobre rotas seguras.

O órgão recomenda evitar deslocamentos em pontos de alagamento e acionar o serviço em caso de emergência.

Meteorologistas apontam que os volumes previstos podem superar a média histórica do mês, exigindo atenção redobrada.

Equipes de limpeza intensificaram a retirada de lixo de bueiros para evitar entupimentos que ampliam pontos de alagamento.
`.trim().split('\n\n'),

},
    {
      slug: 'saude-vacinacao',
      title: 'Mutirão de vacinação contra gripe alcança 12 mil doses aplicadas',
      excerpt: 'Postos extras funcionam até 20h para atender público adulto e infantil.',
      image: 'assets/images/viatura3.png',
      category: 'Saúde',
      dateLabel: '26 nov 2025',
      dateTime: '2025-11-26',
      subtitle: 'Pontos de vacinação estendidos buscam ampliar a cobertura antes do pico de gripe.',
      updatedAt: '26 nov 2025 - 19h00',
      sections: ['aside'],
      content: `
A secretaria de saúde montou pontos de vacinação em escolas e praças para ampliar a cobertura.

Profissionais reforçam a necessidade da dose para reduzir casos graves antes do pico de doenças respiratórias.

A pasta informou que novas remessas serão distribuídas ainda nesta semana para evitar falta de doses.
`.trim().split('\n\n'),

},
    {
      slug: 'emprego-feira',
      title: 'Feira de empregos oferece 320 vagas em comércio e serviços',
      excerpt: 'Candidatos podem se inscrever online ou comparecer ao ginásio municipal até sexta.',
      image: 'assets/images/black.webp',
      category: 'Economia',
      dateLabel: '25 nov 2025',
      dateTime: '2025-11-25',
      subtitle: 'Processos seletivos no ginásio municipal incluem entrevistas rápidas e orientações.',
      updatedAt: '25 nov 2025 - 14h20',
      sections: ['aside'],
      content: `
Empresas do comércio e do setor de serviços abriram vagas imediatas e banco de talentos.

As entrevistas acontecem ao longo do dia, e candidatos são orientados a levar currículo impresso e documento de identidade.

A organização disponibilizou guichês de orientação para quem precisa de ajuda na elaboração do currículo.
`.trim().split('\n\n'),

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
      content: `
As obras serão executadas em fases para minimizar impacto no entorno, com previsão de entrega em 90 dias.

Novos brinquedos infantis, pista de caminhada e academia ao ar livre fazem parte do projeto.
`.trim().split('\n\n'),

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
      content: `
A organização recomenda chegar com antecedência para retirada de kits e alongamento guiado.

Haverá pontos de hidratação a cada 2km e equipe médica de prontidão.
`.trim().split('\n\n'),

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
      content: `
As oficinas integram o programa municipal de inclusão digital e seguem até o fim do mês.

Alunos recebem kit básico de eletrônica para exercícios práticos em sala.
`.trim().split('\n\n'),

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
      content: `
Espécies nativas foram priorizadas para ampliar a cobertura verde e reduzir ilhas de calor.

Moradores receberam orientação de manejo e cuidado inicial das mudas.
`.trim().split('\n\n'),

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
      content: `
A expansão integra o plano municipal de segurança urbana e deve cobrir 18 pontos estratégicos.

Imagens serão compartilhadas com as forças policiais e armazenadas conforme legislação vigente.
`.trim().split('\n\n'),

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
