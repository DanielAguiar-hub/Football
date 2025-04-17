// Definição dos tipos para as dicas profissionais

// Tipo para representar uma dica profissional
export interface ProTip {
  id: string;
  title: string;
  content: string;
  author: Author;
  category: ProTipCategory;
  level: PlayerLevel[];
  tags: string[];
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  views: number;
  relatedExercises?: RelatedExercise[];
  relatedVideos?: RelatedVideo[];
  relatedArticles?: RelatedArticle[];
  isFeatured: boolean;
}

// Tipo para representar o autor de uma dica
export interface Author {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  credentials: string[];
  socialMedia?: SocialMedia;
}

// Tipo para representar as redes sociais de um autor
export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
}

// Tipo para representar um exercício relacionado
export interface RelatedExercise {
  id: string;
  title: string;
  type: string;
  description: string;
  url: string;
}

// Tipo para representar um vídeo relacionado
export interface RelatedVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number; // em segundos
}

// Tipo para representar um artigo relacionado
export interface RelatedArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishDate: Date;
}

// Categorias de dicas profissionais
export enum ProTipCategory {
  TECHNICAL = 'technical',           // técnica
  TACTICAL = 'tactical',             // tática
  PHYSICAL = 'physical',             // física
  MENTAL = 'mental',                 // mental
  NUTRITION = 'nutrition',           // nutrição
  RECOVERY = 'recovery',             // recuperação
  EQUIPMENT = 'equipment',           // equipamento
  TRAINING_METHOD = 'training_method' // método de treino
}

// Níveis de jogador
export enum PlayerLevel {
  BEGINNER = 'beginner',             // iniciante
  INTERMEDIATE = 'intermediate',     // intermediário
  ADVANCED = 'advanced',             // avançado
  ALL = 'all'                        // todos os níveis
}

// Banco de dados de autores
export const authors: Author[] = [
  {
    id: 'author-001',
    name: 'Ricardo Oliveira',
    title: 'Ex-jogador profissional e treinador de base',
    avatar: '/images/authors/ricardo.jpg',
    bio: 'Ricardo Oliveira jogou profissionalmente por 15 anos, atuando como ponta esquerda em clubes do Brasil e Portugal. Após se aposentar, dedicou-se ao treinamento de jovens jogadores, com foco especial em desenvolvimento técnico para atacantes.',
    credentials: [
      'Ex-jogador profissional (1995-2010)',
      'Licença A de treinador CBF',
      'Especialista em desenvolvimento de atacantes',
      'Coordenador de categorias de base (2012-2020)'
    ],
    socialMedia: {
      instagram: '@ricardo.treinador',
      youtube: 'RicardoTreinadorOficial',
      website: 'www.ricardooliveira.com.br'
    }
  },
  {
    id: 'author-002',
    name: 'Dra. Patrícia Santos',
    title: 'Fisioterapeuta esportiva e especialista em reabilitação',
    avatar: '/images/authors/patricia.jpg',
    bio: 'Patrícia Santos é fisioterapeuta especializada em medicina esportiva, com mais de 15 anos de experiência trabalhando com atletas de elite. Seu foco principal é a prevenção e reabilitação de lesões no joelho e tornozelo, além de desenvolver programas de treinamento adaptados para atletas em recuperação.',
    credentials: [
      'Doutorado em Fisioterapia Esportiva',
      'Especialista em Reabilitação de Lesões Esportivas',
      'Ex-fisioterapeuta de clube da Série A (2010-2018)',
      'Professora universitária de Biomecânica'
    ],
    socialMedia: {
      instagram: '@dra.patricia.fisio',
      website: 'www.patriciarehab.com.br'
    }
  },
  {
    id: 'author-003',
    name: 'Prof. Carlos Mendes',
    title: 'Preparador físico e especialista em treinamento em espaços reduzidos',
    avatar: '/images/authors/carlos.jpg',
    bio: 'Carlos Mendes é especialista em metodologias de treinamento adaptadas para espaços não-convencionais. Desenvolveu diversos programas de treinamento para atletas que não têm acesso a estruturas completas, focando em maximizar o desenvolvimento técnico e físico em ambientes limitados.',
    credentials: [
      'Mestrado em Ciências do Esporte',
      'Especialista em Periodização do Treinamento',
      'Criador do método "Espaço Mínimo, Resultado Máximo"',
      'Consultor de programas sociais de futebol em comunidades'
    ],
    socialMedia: {
      instagram: '@prof.carlosmendes',
      youtube: 'TreinamentoEspacoReduzido',
      twitter: '@carlosmendesprof'
    }
  }
];

// Banco de dados de dicas profissionais
export const proTips: ProTip[] = [
  {
    id: 'protip-001',
    title: 'Técnicas avançadas de drible para espaços reduzidos',
    content: `# Técnicas avançadas de drible para espaços reduzidos

Como ponta esquerda, sua capacidade de driblar em espaços apertados pode ser o diferencial entre criar uma oportunidade de gol ou perder a posse de bola. Após treinar centenas de jogadores em diferentes condições, desenvolvi algumas técnicas específicas para aprimorar dribles em espaços muito limitados.

## O princípio da economia de movimento

O segredo para driblar em espaços pequenos está na **economia de movimento**. Muitos jogadores falham porque tentam executar os mesmos dribles que fariam em um campo aberto. Em um espaço de 5x3m ou menor, cada centímetro conta.

Recomendo focar em três tipos específicos de dribles:

### 1. Dribles de proteção com o corpo

Utilize seu corpo como barreira entre o defensor e a bola. Mesmo em espaço reduzido, você pode:
- Manter o pé mais distante do defensor em contato com a bola
- Usar o braço (sem empurrar) para criar distância
- Girar o tronco para proteger a bola enquanto muda de direção

Este tipo de drible não requer muito espaço e é extremamente eficaz para manter a posse.

### 2. Dribles de mudança de ritmo

A mudança de ritmo é devastadora em espaços pequenos:
- Conduza lentamente, como se estivesse sem opções
- Faça uma mudança súbita de direção com aceleração explosiva
- Use a sola do pé para paradas bruscas seguidas de arranques

O contraste entre lento e rápido confunde o defensor, mesmo quando ele sabe o que você vai fazer.

### 3. Micro-dribles com a sola

Desenvolva sensibilidade com a sola do pé:
- Pratique rolar a bola em diferentes direções sem levantar a sola
- Combine pequenos toques laterais com a sola seguidos de aceleração
- Use a sola para "colar" a bola no pé em espaços congestionados

## Adaptação para jogadores com problemas no joelho

Se você tem dores no joelho, como mencionou, recomendo:
- Reduzir a amplitude dos movimentos de corte
- Focar mais nos dribles de proteção e menos nos de explosão
- Trabalhar a força dos músculos estabilizadores do joelho
- Usar a técnica de "drible sentado" (onde o centro de gravidade é mais baixo)

## Progressão de treinamento recomendada

Para um jogador de nível intermediário, sugiro esta progressão:

**Semana 1-2:** Foco em dribles estacionários, trabalhando apenas a técnica sem deslocamento.

**Semana 3-4:** Adicione pequenos deslocamentos (1-2 metros) após cada drible.

**Semana 5-6:** Combine 2-3 tipos diferentes de dribles em sequência.

**Semana 7-8:** Adicione um obstáculo fixo (cone) que representa um defensor.

**Semana 9-10:** Se possível, treine com um parceiro que oferece resistência passiva.

Lembre-se: em espaços reduzidos, a precisão é mais importante que a velocidade. Domine o movimento lentamente antes de aumentar o ritmo.`,
    author: authors.find(author => author.id === 'author-001'),
    category: ProTipCategory.TECHNICAL,
    level: [PlayerLevel.INTERMEDIATE, PlayerLevel.ADVANCED],
    tags: ['dribles', 'espaço reduzido', 'ponta esquerda', 'técnica', 'proteção de bola'],
    createdAt: new Date('2025-03-15T10:30:00Z'),
    likes: 156,
    views: 2347,
    relatedExercises: [
      {
        id: 'rel-ex-001',
        title: 'Pedalada em Espaço Reduzido',
        type: 'Técnico',
        description: 'Exercício para aperfeiçoar a pedalada em um espaço muito pequeno.',
        url: '/exercises/technical/drib-001'
      },
      {
        id: 'rel-ex-002',
        title: 'Drible do Corte em Zigue-Zague',
        type: 'Técnico',
        description: 'Exercício para aperfeiçoar o drible de corte em espaço limitado.',
        url: '/exercises/technical/drib-002'
      }
    ],
    relatedVideos: [
      {
        id: 'rel-vid-001',
        title: 'Masterclass: Dribles em Espaço Reduzido',
        description: 'Demonstração detalhada das técnicas mencionadas no artigo.',
        thumbnailUrl: '/images/videos/dribles-espaco-reduzido-thumb.jpg',
        videoUrl: '/videos/dribles-espaco-reduzido.mp4',
        duration: 845 // 14:05
      }
    ],
    isFeatured: true
  },
  {
    id: 'protip-002',
    title: 'Protegendo seu joelho: guia completo para jogadores de futebol',
    content: `# Protegendo seu joelho: guia completo para jogadores de futebol

Como fisioterapeuta que trabalhou com centenas de jogadores de futebol, do amador ao profissional, posso afirmar com certeza: a saúde do seu joelho é fundamental para sua longevidade no esporte. Neste guia, vou compartilhar estratégias específicas para proteger seus joelhos, especialmente se você já sente algum desconforto.

## Entendendo a dor no joelho do jogador de futebol

Antes de tudo, é importante entender que existem diferentes tipos de dor no joelho, e cada uma pode indicar um problema específico:

- **Dor na parte frontal**: Geralmente relacionada à articulação patelofemoral, comum em jogadores que fazem muitas mudanças de direção.
- **Dor lateral**: Pode indicar problemas no ligamento colateral lateral ou na banda iliotibial.
- **Dor medial**: Frequentemente associada ao ligamento colateral medial ou problemas meniscais.
- **Dor posterior**: Pode estar relacionada aos tendões dos isquiotibiais ou problemas na cartilagem.

Se você sente dor ocasional no joelho após treinos intensos, como mencionou, isso pode indicar um desequilíbrio muscular ou sobrecarga articular.

## Estratégias preventivas essenciais

### 1. Fortalecimento muscular direcionado

O joelho é protegido principalmente pelos músculos ao seu redor. Foque em:

- **Quadríceps**: Essencial para estabilização da patela e absorção de impacto.
- **Isquiotibiais**: Previnem o estresse excessivo no LCA durante desacelerações.
- **Glúteos**: Fundamentais para alinhamento do joelho durante movimentos laterais.
- **Core**: Um core forte reduz a carga nas extremidades inferiores.

Para jogadores com espaço limitado, recomendo exercícios isométricos como:
- Agachamento isométrico na parede (60-90° de flexão)
- Ponte de glúteos com variações
- Prancha frontal e lateral para core

### 2. Técnica de movimento correta

Muitas lesões ocorrem devido à biomecânica inadequada:

- **Aterrissagens**: Sempre aterrissar com os joelhos ligeiramente flexionados, nunca travados.
- **Mudanças de direção**: Evitar torção do joelho quando o pé está fixo no chão.
- **Desacelerações**: Distribuir o impacto entre quadril, joelho e tornozelo.

Para pontas esquerdas, que fazem muitas mudanças de direção, é crucial desenvolver uma técnica que distribua a força pelo corpo todo, não apenas no joelho.

### 3. Gerenciamento de carga de treino

A progressão adequada é fundamental:

- **Volume**: Aumente gradualmente o tempo de treino (não mais que 10% por semana).
- **Intensidade**: Alterne entre dias de alta e baixa intensidade.
- **Recuperação**: Garanta pelo menos 48 horas de recuperação após treinos intensos para o mesmo grupo muscular.

## Adaptações específicas para seu caso

Considerando que você:
- Treina em espaço de 5x3m
- É ponta esquerda de nível intermediário
- Sente dor ocasional no joelho
- Foca em dribles e condução

Recomendo estas adaptações específicas:

1. **Reduza o impacto**: Treine em superfícies mais macias quando possível.
2. **Modifique dribles**: Prefira dribles que não exijam torção excessiva do joelho.
3. **Aquecimento direcionado**: Dedique 5-10 minutos para aquecer especificamente os músculos ao redor do joelho.
4. **Recuperação ativa**: Após o treino, faça 5 minutos de movimentos leves e alongamentos suaves.
5. **Progressão inteligente**: Comece com 70% da intensidade que você normalmente usaria e aumente gradualmente.

## Sinais de alerta

Procure ajuda médica se:
- A dor persistir por mais de 3 dias
- Houver inchaço significativo
- Sentir instabilidade ou falseio no joelho
- Ouvir estalos acompanhados de dor
- A dor for aguda durante movimentos específicos

## Conclusão

Seu joelho é uma articulação complexa e vital para o futebol. Com fortalecimento adequado, técnica correta e gerenciamento inteligente da carga de treino, você pode minimizar desconfortos e prolongar sua carreira esportiva, mesmo treinando em espaços reduzidos.

Lembre-se: prevenção é sempre melhor (e mais barata) que tratamento!`,
    author: authors.find(author => author.id === 'author-002'),
    category: ProTipCategory.PHYSICAL,
    level: [PlayerLevel.ALL],
    tags: ['joelho', 'prevenção', 'lesão', 'fortalecimento', 'adaptação'],
    createdAt: new Date('2025-03-22T14:45:00Z'),
    likes: 203,
    views: 3128,
    relatedExercises: [
      {
        id: 'rel-ex-003',
        title: 'Exercícios Isométricos para Força e Estabilidade',
        type: 'Físico',
        description: 'Série de exercícios isométricos que desenvolvem força sem impacto nas articulações.',
        url: '/exercises/physical/str-002'
      }
    ],
    relatedArticles: [
      {
        id: 'rel-art-001',
        title: 'Nutrição para saúde articular em atletas',
        description: 'Artigo sobre alimentos que ajudam na recuperação e proteção das articulações.',
        url: 'https://www.revistacienciadoesporte.com.br/nutricao-articular',
        source: 'Revista Ciência do Esporte',
        publishDate: new Date('2024-11-10')
      }
    ],
    isFeatured: true
  },
  {
    id: 'protip-003',
    title: 'Maximizando resultados em espaços mínimos: metodologia completa',
    content: `# Maximizando resultados em espaços mínimos: metodologia completa

Após anos desenvolvendo metodologias de treinamento para atletas em comunidades com infraestrutura limitada, criei o sistema "Espaço Mínimo, Resultado Máximo" (EMRM). Esta abordagem permite que jogadores desenvolvam habilidades de alto nível mesmo em espaços extremamente reduzidos, como o seu quintal de 5x3m.

## Princípios fundamentais do método EMRM

### 1. Densidade técnica sobre volume físico

Em espaços pequenos, o foco deve ser na **densidade técnica** - a quantidade de gestos técnicos de qualidade por unidade de tempo. Um jogador em espaço reduzido pode executar 3-4 vezes mais toques na bola em 10 minutos do que em um campo tradicional.

Recomendação: Estruture treinos de 10-15 minutos com alta densidade técnica, seguidos de pequenos intervalos, em vez de sessões longas e contínuas.

### 2. Transferência contextual

Cada exercício deve ter **transferência contextual** para situações reais de jogo. Não basta repetir movimentos; é preciso simular contextos de tomada de decisão.

Exemplo prático: Em vez de apenas conduzir a bola entre cones, adicione "gatilhos" que exigem decisões (ex: se o cone é azul, faça um corte; se é vermelho, faça uma pedalada).

### 3. Periodização vertical

A **periodização vertical** significa trabalhar múltiplas capacidades simultaneamente, em vez da abordagem tradicional de blocos. Em espaços pequenos, isso é não só possível como necessário.

Estrutura recomendada para seu caso:
- **Fase 1 (5 min)**: Aquecimento técnico + ativação neuromuscular
- **Fase 2 (15 min)**: Trabalho técnico principal (dribles/condução)
- **Fase 3 (15 min)**: Componente físico integrado (força/agilidade)
- **Fase 4 (15 min)**: Componente tático-cognitivo
- **Fase 5 (10 min)**: Componente mental + recuperação

## Aplicação prática para seu perfil específico

Considerando que você:
- É um jogador de nível intermediário
- Atua como ponta esquerda
- Tem espaço de 5x3m
- Possui equipamento limitado
- Foca em dribles e condução
- Tem preocupações com o joelho

Aqui está um exemplo de sessão de treino seguindo a metodologia EMRM:

### Fase 1: Aquecimento técnico integrado (5 min)
- Toque de bola variado (pés, coxas) em movimento lento
- Mobilidade articular dinâmica com bola
- Ativação dos músculos estabilizadores do joelho

### Fase 2: Desenvolvimento técnico principal (15 min)
- Circuito de 3 estações com 3 tipos diferentes de dribles
- 45 segundos por estação, 15 segundos de transição
- 3 séries completas
- Foco: qualidade de execução sobre velocidade

### Fase 3: Componente físico integrado (15 min)
- Exercícios isométricos para força (30s trabalho/30s descanso)
- Integração de movimentos técnicos entre os exercícios de força
- Adaptação para proteção do joelho: redução da amplitude e impacto

### Fase 4: Componente tático-cognitivo (15 min)
- Simulação de situações de jogo com tomada de decisão
- Reação a estímulos visuais ou sonoros
- Integração de conceitos posicionais específicos para ponta esquerda

### Fase 5: Componente mental e recuperação (10 min)
- Visualização dirigida de situações de jogo
- Técnicas de respiração para recuperação
- Alongamento específico para cadeia posterior e quadríceps

## Progressão e periodização semanal

Para resultados ótimos, estruture sua semana assim:

**Segunda**: Sessão completa (foco técnico)
**Terça**: Descanso ativo ou apenas Fase 1+5
**Quarta**: Sessão completa (foco físico)
**Quinta**: Descanso ativo ou apenas Fase 1+5
**Sexta**: Sessão completa (foco tático-cognitivo)
**Sábado**: Sessão reduzida (apenas Fases 1+2+5)
**Domingo**: Descanso completo

## Monitoramento e ajustes

O método EMRM exige monitoramento constante. Recomendo:

1. Manter um diário de treino simples
2. Avaliar a qualidade do movimento, não apenas a quantidade
3. Monitorar sinais de fadiga ou dor no joelho
4. Ajustar a intensidade baseado na recuperação percebida

## Conclusão

O espaço limitado não é uma limitação, mas uma oportunidade para treinos mais densos e específicos. Com a metodologia EMRM, você pode desenvolver habilidades de alto nível mesmo em um quintal de 5x3m.

Lembre-se: grandes jogadores não são feitos em grandes espaços, mas através de grande dedicação, independente do espaço disponível.`,
    author: authors.find(author => author.id === 'author-003'),
    category: ProTipCategory.TRAINING_METHOD,
    level: [PlayerLevel.BEGINNER, PlayerLevel.INTERMEDIATE, PlayerLevel.ADVANCED],
    tags: ['metodologia', 'espaço reduzido', 'treino completo', 'periodização', 'adaptação'],
    createdAt: new Date('2025-04-05T09:15:00Z'),
    likes: 178,
    views: 2654,
    relatedExercises: [
      {
        id: 'rel-ex-004',
        title: 'Circuito de Resistência com Bola',
        type: 'Físico',
        description: 'Circuito que combina elementos técnicos com condicionamento físico.',
        url: '/exercises/physical/res-002'
      },
      {
        id: 'rel-ex-005',
        title: 'Simulação de Tomada de Decisão',
        type: 'Mental',
        description: 'Exercício que simula situações de jogo que exigem tomadas de decisão rápidas.',
        url: '/exercises/mental/dec-001'
      }
    ],
    relatedVideos: [
      {
        id: 'rel-vid-002',
        title: 'Método EMRM: Demonstração Completa',
        description: 'Vídeo demonstrando a aplicação prática da metodologia em espaço reduzido.',
        thumbnailUrl: '/images/videos/metodo-emrm-thumb.jpg',
        videoUrl: '/videos/metodo-emrm.mp4',
        duration: 1256 // 20:56
      }
    ],
    isFeatured: true
  }
];

// Funções para gerenciar dicas profissionais

// Função para obter dicas por categoria
export function getProTipsByCategory(category: ProTipCategory): ProTip[] {
  return proTips.filter(tip => tip.category === category);
}

// Função para obter dicas por nível de jogador
export function getProTipsByLevel(level: PlayerLevel): ProTip[] {
  return proTips.filter(tip => tip.level.includes(level) || tip.level.includes(PlayerLevel.ALL));
}

// Função para obter dicas por tag
export function getProTipsByTag(tag: string): ProTip[] {
  return proTips.filter(tip => tip.tags.includes(tag));
}

// Função para obter dicas por autor
export function getProTipsByAuthor(authorId: string): ProTip[] {
  return proTips.filter(tip => tip.author.id === authorId);
}

// Função para obter dicas em destaque
export function getFeaturedProTips(): ProTip[] {
  return proTips.filter(tip => tip.isFeatured);
}

// Função para obter dicas relacionadas a um exercício
export function getProTipsByRelatedExercise(exerciseId: string): ProTip[] {
  return proTips.filter(tip => 
    tip.relatedExercises?.some(exercise => exercise.id === exerciseId || exercise.url.includes(exerciseId))
  );
}

// Função para pesquisar dicas
export function searchProTips(query: string): ProTip[] {
  const normalizedQuery = query.toLowerCase();
  
  return proTips.filter(tip => 
    tip.title.toLowerCase().includes(normalizedQuery) || 
    tip.content.toLowerCase().includes(normalizedQuery) ||
    tip.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)) ||
    tip.author.name.toLowerCase().includes(normalizedQuery)
  );
}

// Função para obter autor por ID
export function getAuthorById(authorId: string): Author {
  return authors.find(author => author.id === authorId);
}

// Função para obter todos os autores
export function getAllAuthors(): Author[] {
  return authors;
}

// Função para obter dicas mais populares (baseado em likes e views)
export function getMostPopularProTips(limit: number = 5): ProTip[] {
  // Cálculo simples de popularidade: likes * 2 + views / 10
  const tipsWithPopularity = proTips.map(tip => ({
    ...tip,
    popularity: tip.likes * 2 + tip.views / 10
  }));
  
  // Ordenar por popularidade e retornar os primeiros 'limit' resultados
  return tipsWithPopularity
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

// Função para obter dicas mais recentes
export function getLatestProTips(limit: number = 5): ProTip[] {
  return [...proTips]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}

// Função para obter dicas recomendadas para um perfil específico
export function getRecommendedProTips(
  level: PlayerLevel,
  interests: string[],
  limit: number = 5
): ProTip[] {
  // Filtrar dicas adequadas ao nível do jogador
  const levelFilteredTips = proTips.filter(tip => 
    tip.level.includes(level) || tip.level.includes(PlayerLevel.ALL)
  );
  
  // Calcular pontuação de relevância baseada nos interesses
  const scoredTips = levelFilteredTips.map(tip => {
    let relevanceScore = 0;
    
    // Pontos por tags correspondentes
    interests.forEach(interest => {
      if (tip.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))) {
        relevanceScore += 2;
      }
      
      // Pontos por menção no conteúdo
      if (tip.content.toLowerCase().includes(interest.toLowerCase())) {
        relevanceScore += 1;
      }
    });
    
    // Bônus para dicas em destaque
    if (tip.isFeatured) {
      relevanceScore += 3;
    }
    
    return {
      ...tip,
      relevanceScore
    };
  });
  
  // Ordenar por pontuação de relevância e retornar os primeiros 'limit' resultados
  return scoredTips
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}
