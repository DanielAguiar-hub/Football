// Definição dos tipos para os módulos de habilidades táticas

// Tipo para representar um exercício de habilidade tática
export interface TacticalExercise {
  id: string;
  name: string;
  category: TacticalCategory;
  difficulty: number; // 1-5, onde 5 é mais difícil
  spaceRequired: SpaceRequirement;
  equipment: Equipment[];
  duration: number; // em minutos
  description: string;
  instructions: string[];
  videoUrl?: string;
  imageUrl?: string;
  adaptations: Adaptation[];
  progressions: Progression[];
  benefits: string[];
  cognitiveAreas: CognitiveArea[];
  isKneeFriendly: boolean;
}

// Categorias de habilidades táticas
export enum TacticalCategory {
  POSITIONING = 'positioning',       // posicionamento
  GAME_VISION = 'game_vision',       // visão de jogo
  DECISION_MAKING = 'decision_making', // tomada de decisão
  SPATIAL_AWARENESS = 'spatial_awareness', // percepção espacial
  GAME_INTELLIGENCE = 'game_intelligence' // inteligência de jogo
}

// Requisitos de espaço (reutilizado do módulo técnico)
export enum SpaceRequirement {
  VERY_SMALL = 'very_small', // menos de 2x2m
  SMALL = 'small',           // 2x2m a 5x3m
  MEDIUM = 'medium',         // 5x5m a 10x10m
  LARGE = 'large'            // mais de 10x10m
}

// Equipamentos (reutilizado do módulo técnico)
export enum Equipment {
  BALL = 'ball',                 // bola
  CONES = 'cones',               // cones (ou chinelos improvisados)
  AGILITY_LADDER = 'ladder',     // escada de agilidade
  RESISTANCE_BAND = 'band',      // elástico de resistência
  GOAL = 'goal',                 // gol (ou alvo improvisado)
  WALL = 'wall',                 // parede
  PARTNER = 'partner',           // parceiro de treino
  NONE = 'none'                  // nenhum equipamento adicional
}

// Áreas cognitivas trabalhadas
export enum CognitiveArea {
  PERCEPTION = 'perception',           // percepção
  ANTICIPATION = 'anticipation',       // antecipação
  ATTENTION = 'attention',             // atenção
  MEMORY = 'memory',                   // memória
  PROBLEM_SOLVING = 'problem_solving', // resolução de problemas
  CREATIVITY = 'creativity'            // criatividade
}

// Adaptações para condições específicas (reutilizado do módulo técnico)
export interface Adaptation {
  id: string;
  name: string;
  condition: AdaptationCondition;
  description: string;
  instructions: string[];
}

// Condições que requerem adaptações (reutilizado do módulo técnico)
export enum AdaptationCondition {
  KNEE_PAIN = 'knee_pain',           // dor no joelho
  LIMITED_SPACE = 'limited_space',    // espaço limitado
  NO_EQUIPMENT = 'no_equipment',      // sem equipamento
  BEGINNER = 'beginner',              // iniciante
  ADVANCED = 'advanced'               // avançado
}

// Progressões para aumentar a dificuldade (reutilizado do módulo técnico)
export interface Progression {
  id: string;
  name: string;
  level: number; // 1-3, onde 3 é mais avançado
  description: string;
  instructions: string[];
}

// Banco de dados de exercícios de posicionamento
export const positioningExercises: TacticalExercise[] = [
  {
    id: 'pos-001',
    name: 'Visualização de Posicionamento para Ponta Esquerda',
    category: TacticalCategory.POSITIONING,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 5,
    description: 'Exercício de visualização mental para melhorar o posicionamento tático como ponta esquerda, mesmo sem espaço para prática física.',
    instructions: [
      'Sente-se ou fique em pé em um local confortável',
      'Feche os olhos e visualize um campo de futebol',
      'Imagine-se na posição de ponta esquerda',
      'Visualize diferentes situações de jogo:',
      '- Equipe em posse de bola no ataque',
      '- Equipe sem a bola, em fase defensiva',
      '- Transição defesa-ataque',
      '- Transição ataque-defesa',
      'Para cada situação, visualize seu posicionamento ideal',
      'Concentre-se em detalhes como distância dos defensores, espaços livres e opções de passe',
      'Realize 3 séries de 1 minuto para cada situação'
    ],
    videoUrl: '/videos/visualizacao-posicionamento.mp4',
    imageUrl: '/images/visualizacao-posicionamento.jpg',
    adaptations: [
      {
        id: 'adapt-pos-001-space',
        name: 'Adaptação para Espaço Muito Limitado',
        condition: AdaptationCondition.LIMITED_SPACE,
        description: 'Este exercício já é adaptado para espaços muito pequenos, pois é principalmente mental',
        instructions: [
          'Pode ser realizado em qualquer espaço, até mesmo sentado',
          'Se possível, use um pequeno desenho ou diagrama para auxiliar a visualização'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-pos-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Visualize situações simples e previsíveis',
          'Foque em posicionamentos básicos',
          'Use 30 segundos para cada situação'
        ]
      },
      {
        id: 'prog-pos-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da complexidade das situações',
        instructions: [
          'Visualize situações mais complexas e variadas',
          'Inclua adversários diretos em sua visualização',
          'Adicione tomadas de decisão à visualização',
          'Use 45 segundos para cada situação'
        ]
      },
      {
        id: 'prog-pos-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima complexidade e detalhamento',
        instructions: [
          'Visualize situações de jogo completas e imprevisíveis',
          'Inclua múltiplos adversários e companheiros',
          'Adicione reações a mudanças repentinas no jogo',
          'Use 1 minuto para cada situação'
        ]
      }
    ],
    benefits: [
      'Melhora a compreensão tática da posição de ponta esquerda',
      'Desenvolve a capacidade de antecipação',
      'Aumenta a velocidade de tomada de decisão em campo',
      'Aperfeiçoa o posicionamento para receber a bola em condições vantajosas'
    ],
    cognitiveAreas: [CognitiveArea.PERCEPTION, CognitiveArea.ANTICIPATION, CognitiveArea.PROBLEM_SOLVING],
    isKneeFriendly: true
  },
  {
    id: 'pos-002',
    name: 'Simulação de Movimentação sem Bola',
    category: TacticalCategory.POSITIONING,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.CONES],
    duration: 7,
    description: 'Exercício para aprimorar a movimentação sem bola, criando espaços e opções de passe, adaptado para espaço reduzido.',
    instructions: [
      'Posicione 4 chinelos nos cantos do seu espaço de 5x3m',
      'Imagine que os cones representam: defensor, meio-campista, outro atacante e o gol',
      'Inicie em uma posição central',
      'Realize movimentações típicas de um ponta esquerda:',
      '- Movimento de aproximação para receber a bola',
      '- Desmarcação em diagonal para o gol',
      '- Abertura na linha lateral para dar amplitude',
      '- Movimento de apoio ao meio-campista',
      'Execute cada movimento com explosão, como se estivesse em jogo real',
      'Após cada movimento, retorne à posição inicial',
      'Realize 3 séries de 5 repetições de cada movimento'
    ],
    videoUrl: '/videos/movimentacao-sem-bola.mp4',
    imageUrl: '/images/movimentacao-sem-bola.jpg',
    adaptations: [
      {
        id: 'adapt-pos-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a explosão dos movimentos',
          'Evite mudanças bruscas de direção',
          'Diminua a amplitude dos movimentos',
          'Aumente o tempo de recuperação entre as séries'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-pos-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute os movimentos em ritmo moderado',
          'Foque na técnica correta de cada movimento',
          'Faça pausas entre os movimentos'
        ]
      },
      {
        id: 'prog-pos-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e variação',
        instructions: [
          'Aumente o ritmo dos movimentos',
          'Reduza o tempo entre movimentos',
          'Adicione variações nos tipos de movimento'
        ]
      },
      {
        id: 'prog-pos-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e complexidade',
        instructions: [
          'Execute com explosão máxima',
          'Combine diferentes movimentos em sequência',
          'Adicione sinais visuais para reagir (ex: levantar a mão simulando um passe)',
          'Inclua finalizações imaginárias após os movimentos'
        ]
      }
    ],
    benefits: [
      'Melhora a capacidade de criar espaços sem a bola',
      'Desenvolve a inteligência posicional',
      'Aumenta a eficácia das desmarcações',
      'Aperfeiçoa a sincronização com os companheiros de equipe'
    ],
    cognitiveAreas: [CognitiveArea.PERCEPTION, CognitiveArea.ANTICIPATION, CognitiveArea.CREATIVITY],
    isKneeFriendly: false
  }
];

// Banco de dados de exercícios de visão de jogo
export const gameVisionExercises: TacticalExercise[] = [
  {
    id: 'vision-001',
    name: 'Controle de Bola com Consciência Espacial',
    category: TacticalCategory.GAME_VISION,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 6,
    description: 'Exercício para desenvolver a visão periférica e consciência espacial enquanto mantém o controle da bola.',
    instructions: [
      'Posicione 4-5 chinelos como "defensores" em seu espaço de 5x3m',
      'Conduza a bola em velocidade moderada entre os obstáculos',
      'A cada 15 segundos, pare e, sem olhar, aponte para um dos "defensores"',
      'Verifique se apontou corretamente e continue a condução',
      'Reorganize os "defensores" ocasionalmente',
      'Realize o exercício por 3 minutos, descanse 1 minuto, e repita mais uma vez'
    ],
    videoUrl: '/videos/consciencia-espacial.mp4',
    imageUrl: '/images/consciencia-espacial.jpg',
    adaptations: [
      {
        id: 'adapt-vision-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a velocidade da condução',
          'Diminua a distância entre os cones para reduzir deslocamentos',
          'Evite paradas bruscas ao apontar para os "defensores"'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-vision-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Use apenas 3 "defensores"',
          'Conduza em ritmo lento',
          'Pare completamente antes de apontar'
        ]
      },
      {
        id: 'prog-vision-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da complexidade',
        instructions: [
          'Use 4-5 "defensores"',
          'Aumente o ritmo da condução',
          'Aponte sem parar completamente'
        ]
      },
      {
        id: 'prog-vision-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima complexidade',
        instructions: [
          'Use 6-7 "defensores"',
          'Conduza em velocidade alta',
          'Aponte enquanto executa um drible ou mudança de direção',
          'Adicione cores aos "defensores" e aponte apenas para uma cor específica'
        ]
      }
    ],
    benefits: [
      'Desenvolve a visão periférica durante a condução',
      'Melhora a consciência espacial',
      'Aumenta a capacidade de processar múltiplas informações',
      'Aperfeiçoa o controle de bola enquanto observa o ambiente'
    ],
    cognitiveAreas: [CognitiveArea.PERCEPTION, CognitiveArea.ATTENTION, CognitiveArea.MEMORY],
    isKneeFriendly: true
  },
  {
    id: 'vision-002',
    name: 'Reação a Estímulos Visuais',
    category: TacticalCategory.GAME_VISION,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 8,
    description: 'Exercício para melhorar a tomada de decisão rápida baseada em estímulos visuais, simulando situações de jogo.',
    instructions: [
      'Coloque 3 objetos de cores diferentes (ou marque com cores) em diferentes pontos do seu espaço',
      'Conduza a bola no centro do espaço',
      'Determine mentalmente uma ação para cada cor:',
      '- Vermelho = mudança brusca de direção',
      '- Azul = parada rápida seguida de aceleração',
      '- Verde = drible específico (pedalada, corte, etc.)',
      'Olhe rapidamente para um dos objetos e execute a ação correspondente',
      'Repita 10 vezes, variando a sequência de forma aleatória',
      'Descanse 1 minuto e realize mais uma série'
    ],
    videoUrl: '/videos/reacao-estimulos.mp4',
    imageUrl: '/images/reacao-estimulos.jpg',
    adaptations: [
      {
        id: 'adapt-vision-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Substitua a mudança brusca de direção por uma mudança mais suave',
          'Evite acelerações explosivas após as paradas',
          'Escolha dribles que não forcem o joelho (evite cortes bruscos)'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-vision-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Use apenas 2 cores e 2 ações',
          'Execute em ritmo moderado',
          'Olhe para as cores por 2-3 segundos antes de reagir'
        ]
      },
      {
        id: 'prog-vision-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da complexidade',
        instructions: [
          'Use 3 cores e 3 ações',
          'Aumente o ritmo da execução',
          'Reduza o tempo de olhar para as cores antes de reagir'
        ]
      },
      {
        id: 'prog-vision-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima complexidade',
        instructions: [
          'Use 4-5 cores e ações',
          'Execute em velocidade máxima',
          'Reaja instantaneamente ao ver as cores',
          'Adicione comandos verbais que podem contradizer as cores (para treinar foco)'
        ]
      }
    ],
    benefits: [
      'Melhora o tempo de reação a estímulos visuais',
      'Desenvolve a tomada de decisão rápida',
      'Aumenta a capacidade de processar informações durante o jogo',
      'Aperfeiçoa a execução técnica sob pressão mental'
    ],
    cognitiveAreas: [CognitiveArea.PERCEPTION, CognitiveArea.ATTENTION, CognitiveArea.PROBLEM_SOLVING],
    isKneeFriendly: false
  }
];

// Função para obter exercícios filtrados por categoria
export function getExercisesByCategory(category: TacticalCategory): TacticalExercise[] {
  switch (category) {
    case TacticalCategory.POSITIONING:
      return positioningExercises;
    case TacticalCategory.GAME_VISION:
      return gameVisionExercises;
    default:
      return [];
  }
}

// Função para obter exercícios adaptados para condições específicas
export function getAdaptedExercises(condition: AdaptationCondition): TacticalExercise[] {
  const allExercises = [
    ...positioningExercises,
    ...gameVisionExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.adaptations.some(adaptation => adaptation.condition === condition)
  );
}

// Função para obter exercícios adequados para espaço disponível
export function getExercisesBySpace(space: SpaceRequirement): TacticalExercise[] {
  const allExercises = [
    ...positioningExercises,
    ...gameVisionExercises
  ];
  
  // Retorna exercícios que requerem o espaço especificado ou menos
  const spaceValues = {
    [SpaceRequirement.VERY_SMALL]: 1,
    [SpaceRequirement.SMALL]: 2,
    [SpaceRequirement.MEDIUM]: 3,
    [SpaceRequirement.LARGE]: 4
  };
  
  const requestedSpaceValue = spaceValues[space];
  
  return allExercises.filter(exercise => 
    spaceValues[exercise.spaceRequired] <= requestedSpaceValue
  );
}

// Função para obter exercícios adequados para jogadores com problemas no joelho
export function getKneeFriendlyExercises(): TacticalExercise[] {
  const allExercises = [
    ...positioningExercises,
    ...gameVisionExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.isKneeFriendly || 
    exercise.adaptations.some(adaptation => adaptation.condition === AdaptationCondition.KNEE_PAIN)
  );
}

// Função para obter exercícios que trabalham áreas cognitivas específicas
export function getExercisesByCognitiveArea(area: CognitiveArea): TacticalExercise[] {
  const allExercises = [
    ...positioningExercises,
    ...gameVisionExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.cognitiveAreas.includes(area)
  );
}
