// Definição dos tipos para os módulos de habilidades técnicas

// Tipo para representar um exercício de habilidade técnica
export interface TechnicalExercise {
  id: string;
  name: string;
  category: TechnicalCategory;
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
  focusAreas: BodyArea[];
  isKneeFriendly: boolean;
}

// Categorias de habilidades técnicas
export enum TechnicalCategory {
  DRIBBLING = 'dribbling',       // dribles
  BALL_CONTROL = 'ball_control', // condução de bola
  FINISHING = 'finishing',       // finalização
  PASSING = 'passing',           // passes
  FIRST_TOUCH = 'first_touch'    // primeiro toque
}

// Requisitos de espaço
export enum SpaceRequirement {
  VERY_SMALL = 'very_small', // menos de 2x2m
  SMALL = 'small',           // 2x2m a 5x3m
  MEDIUM = 'medium',         // 5x5m a 10x10m
  LARGE = 'large'            // mais de 10x10m
}

// Equipamentos
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

// Áreas do corpo trabalhadas
export enum BodyArea {
  FEET = 'feet',                 // pés
  LEGS = 'legs',                 // pernas
  CORE = 'core',                 // core (abdômen e lombar)
  UPPER_BODY = 'upper_body',     // parte superior do corpo
  BALANCE = 'balance',           // equilíbrio
  COORDINATION = 'coordination'  // coordenação
}

// Adaptações para condições específicas
export interface Adaptation {
  id: string;
  name: string;
  condition: AdaptationCondition;
  description: string;
  instructions: string[];
}

// Condições que requerem adaptações
export enum AdaptationCondition {
  KNEE_PAIN = 'knee_pain',           // dor no joelho
  LIMITED_SPACE = 'limited_space',    // espaço limitado
  NO_EQUIPMENT = 'no_equipment',      // sem equipamento
  BEGINNER = 'beginner',              // iniciante
  ADVANCED = 'advanced'               // avançado
}

// Progressões para aumentar a dificuldade
export interface Progression {
  id: string;
  name: string;
  level: number; // 1-3, onde 3 é mais avançado
  description: string;
  instructions: string[];
}

// Banco de dados de exercícios de dribles
export const dribblingExercises: TechnicalExercise[] = [
  {
    id: 'drib-001',
    name: 'Pedalada em Espaço Reduzido',
    category: TechnicalCategory.DRIBBLING,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 5,
    description: 'Exercício para aperfeiçoar a pedalada em um espaço muito pequeno, ideal para pontas que precisam criar espaço em situações apertadas.',
    instructions: [
      'Posicione dois chinelos como cones a uma distância de 1 metro um do outro',
      'Coloque a bola no meio dos cones',
      'Execute o movimento da pedalada, passando o pé por cima da bola sem tocá-la',
      'Complete o movimento conduzindo a bola para o lado oposto',
      'Alterne entre pedaladas com o pé direito e esquerdo',
      'Realize 3 séries de 10 repetições com cada pé'
    ],
    videoUrl: '/videos/pedalada-espaco-reduzido.mp4',
    imageUrl: '/images/pedalada-espaco-reduzido.jpg',
    adaptations: [
      {
        id: 'adapt-drib-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão modificada com menos impacto no joelho',
        instructions: [
          'Reduza a amplitude do movimento',
          'Execute o exercício em ritmo mais lento',
          'Evite rotações bruscas do joelho',
          'Faça pausas mais frequentes entre as repetições'
        ]
      },
      {
        id: 'adapt-drib-001-space',
        name: 'Adaptação para Espaço Muito Limitado',
        condition: AdaptationCondition.LIMITED_SPACE,
        description: 'Versão para espaços extremamente pequenos',
        instructions: [
          'Reduza a distância entre os cones para 50cm',
          'Execute o movimento no mesmo lugar, sem deslocamento',
          'Foque na qualidade do gesto técnico em vez da velocidade'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-drib-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute o movimento em ritmo lento',
          'Foque na técnica correta',
          'Faça 10 repetições com cada pé'
        ]
      },
      {
        id: 'prog-drib-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e complexidade',
        instructions: [
          'Aumente o ritmo da execução',
          'Combine duas pedaladas seguidas antes de mudar de direção',
          'Faça 15 repetições com cada pé'
        ]
      },
      {
        id: 'prog-drib-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e adição de elementos',
        instructions: [
          'Execute em velocidade máxima',
          'Combine pedalada com outros dribles (ex: corte, elástico)',
          'Adicione mudanças de direção aleatórias',
          'Faça 20 repetições com cada pé'
        ]
      }
    ],
    benefits: [
      'Melhora a coordenação pé-bola',
      'Desenvolve a capacidade de criar espaço em situações apertadas',
      'Aumenta a confiança para executar dribles em jogo',
      'Aperfeiçoa a técnica da pedalada, movimento essencial para pontas'
    ],
    focusAreas: [BodyArea.FEET, BodyArea.COORDINATION, BodyArea.BALANCE],
    isKneeFriendly: true
  },
  {
    id: 'drib-002',
    name: 'Drible do Corte em Zigue-Zague',
    category: TechnicalCategory.DRIBBLING,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 7,
    description: 'Exercício para aperfeiçoar o drible de corte, essencial para pontas que precisam mudar de direção rapidamente para superar defensores.',
    instructions: [
      'Posicione 3-4 chinelos em linha reta com 50cm de distância entre eles',
      'Inicie a uma distância de 1 metro do primeiro cone',
      'Conduza a bola em direção ao primeiro cone',
      'Ao se aproximar, execute um corte rápido usando a parte interna do pé',
      'Contorne o cone e dirija-se ao próximo',
      'Alterne entre cortes com o pé direito e esquerdo',
      'Complete o percurso ida e volta 5 vezes'
    ],
    videoUrl: '/videos/corte-ziguezague.mp4',
    imageUrl: '/images/corte-ziguezague.jpg',
    adaptations: [
      {
        id: 'adapt-drib-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto nas articulações',
        instructions: [
          'Aumente a distância entre os cones para 70cm',
          'Execute os cortes com menor ângulo de mudança de direção',
          'Reduza a velocidade de execução',
          'Evite apoiar todo o peso no joelho durante o corte'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-drib-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute em ritmo lento',
          'Foque na técnica correta do corte',
          'Complete 3 percursos completos'
        ]
      },
      {
        id: 'prog-drib-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e precisão',
        instructions: [
          'Aumente o ritmo da execução',
          'Reduza a distância entre os cones para 40cm',
          'Complete 5 percursos completos'
        ]
      },
      {
        id: 'prog-drib-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e adição de elementos',
        instructions: [
          'Execute em velocidade máxima',
          'Adicione uma finta antes de cada corte',
          'Alterne entre diferentes tipos de corte (interno, externo, sola)',
          'Complete 7 percursos completos'
        ]
      }
    ],
    benefits: [
      'Desenvolve a capacidade de mudar de direção rapidamente',
      'Melhora o controle de bola em espaços reduzidos',
      'Aumenta a agilidade e coordenação',
      'Aperfeiçoa a técnica do corte, movimento essencial para superar defensores'
    ],
    focusAreas: [BodyArea.FEET, BodyArea.LEGS, BodyArea.BALANCE],
    isKneeFriendly: false
  }
];

// Banco de dados de exercícios de condução de bola
export const ballControlExercises: TechnicalExercise[] = [
  {
    id: 'control-001',
    name: 'Condução em Quadrado Pequeno',
    category: TechnicalCategory.BALL_CONTROL,
    difficulty: 2,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 6,
    description: 'Exercício para aprimorar o controle de bola em espaço reduzido, usando diferentes partes do pé.',
    instructions: [
      'Posicione 4 chinelos formando um quadrado de 2x2 metros',
      'Posicione-se dentro do quadrado com a bola',
      'Conduza a bola dentro do quadrado usando a parte interna do pé por 30 segundos',
      'Mude para a parte externa do pé por mais 30 segundos',
      'Continue com a sola do pé por 30 segundos',
      'Finalize alternando os pés a cada toque por 30 segundos',
      'Repita a sequência 2 vezes'
    ],
    videoUrl: '/videos/conducao-quadrado.mp4',
    imageUrl: '/images/conducao-quadrado.jpg',
    adaptations: [
      {
        id: 'adapt-control-001-space',
        name: 'Adaptação para Espaço Muito Limitado',
        condition: AdaptationCondition.LIMITED_SPACE,
        description: 'Versão para espaços extremamente pequenos',
        instructions: [
          'Reduza o quadrado para 1x1 metro',
          'Foque em toques mais curtos e precisos',
          'Aumente o tempo em cada parte do pé para 45 segundos'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-control-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Conduza em ritmo lento',
          'Mantenha a bola sempre próxima aos pés',
          'Foque na precisão dos toques'
        ]
      },
      {
        id: 'prog-control-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e complexidade',
        instructions: [
          'Aumente o ritmo da condução',
          'Adicione mudanças rápidas de direção',
          'Alterne entre diferentes partes do pé sem pausas'
        ]
      },
      {
        id: 'prog-control-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e adição de elementos',
        instructions: [
          'Conduza em velocidade máxima',
          'Adicione giros de 360 graus durante a condução',
          'Inclua paradas bruscas seguidas de acelerações'
        ]
      }
    ],
    benefits: [
      'Melhora o controle de bola em espaços reduzidos',
      'Desenvolve a sensibilidade com diferentes partes do pé',
      'Aumenta a capacidade de manter a posse em situações de pressão',
      'Aperfeiçoa a técnica de condução, fundamental para pontas'
    ],
    focusAreas: [BodyArea.FEET, BodyArea.COORDINATION],
    isKneeFriendly: true
  },
  {
    id: 'control-002',
    name: 'Mudanças de Direção Rápidas',
    category: TechnicalCategory.BALL_CONTROL,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL],
    duration: 8,
    description: 'Exercício para desenvolver a capacidade de mudar de direção rapidamente enquanto mantém o controle da bola.',
    instructions: [
      'Utilize todo o espaço disponível de 5x3 metros',
      'Conduza a bola por 2-3 metros em linha reta',
      'Execute uma mudança brusca de direção usando a parte interna do pé',
      'Continue por mais 2-3 metros e mude novamente de direção',
      'Pratique 4 tipos de mudanças (1 minuto cada):',
      '- Mudança com parte interna do pé',
      '- Mudança com parte externa do pé',
      '- Mudança com sola do pé (rolando para trás)',
      '- Mudança com giro do corpo (proteção da bola)'
    ],
    videoUrl: '/videos/mudancas-direcao.mp4',
    imageUrl: '/images/mudancas-direcao.jpg',
    adaptations: [
      {
        id: 'adapt-control-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza o ângulo das mudanças de direção (menos bruscas)',
          'Evite giros completos que forcem o joelho',
          'Diminua a velocidade de execução',
          'Foque nas mudanças com a sola do pé, que geram menos impacto'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-control-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute em ritmo moderado',
          'Foque na técnica correta de cada tipo de mudança',
          'Mantenha a bola sempre sob controle'
        ]
      },
      {
        id: 'prog-control-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e imprevisibilidade',
        instructions: [
          'Aumente o ritmo das mudanças de direção',
          'Varie aleatoriamente entre os diferentes tipos de mudança',
          'Reduza o tempo entre as mudanças'
        ]
      },
      {
        id: 'prog-control-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e adição de elementos',
        instructions: [
          'Execute em velocidade máxima',
          'Combine diferentes tipos de mudança em sequência',
          'Adicione fintas antes das mudanças de direção',
          'Inclua acelerações explosivas após cada mudança'
        ]
      }
    ],
    benefits: [
      'Desenvolve a capacidade de mudar de direção mantendo o controle da bola',
      'Melhora a agilidade e coordenação',
      'Aumenta a eficácia em situações de 1x1',
      'Aperfeiçoa a técnica de proteção de bola'
    ],
    focusAreas: [BodyArea.FEET, BodyArea.LEGS, BodyArea.BALANCE, BodyArea.COORDINATION],
    isKneeFriendly: false
  }
];

// Banco de dados de exercícios de finalização
export const finishingExercises: TechnicalExercise[] = [
  {
    id: 'finish-001',
    name: 'Finalização após Drible em Espaço Reduzido',
    category: TechnicalCategory.FINISHING,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES, Equipment.GOAL],
    duration: 10,
    description: 'Exercício para aprimorar a finalização após executar um drible, simulando situações de jogo para um ponta esquerda.',
    instructions: [
      'Posicione um alvo (gol improvisado) em uma das extremidades do espaço',
      'Coloque 2 chinelos como "defensores" a 2 metros do gol',
      'Inicie a 3 metros de distância dos cones',
      'Conduza a bola em direção aos cones',
      'Execute um drible (pedalada, corte ou elástico) para passar pelos cones',
      'Finalize a gol imediatamente após o drible',
      'Alterne entre finalizações com o pé dominante e não-dominante',
      'Realize 3 séries de 10 finalizações'
    ],
    videoUrl: '/videos/finalizacao-apos-drible.mp4',
    imageUrl: '/images/finalizacao-apos-drible.jpg',
    adaptations: [
      {
        id: 'adapt-finish-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho durante a finalização',
        instructions: [
          'Reduza a potência dos chutes, focando na precisão',
          'Evite finalizações com o peito do pé, priorizando a parte interna',
          'Diminua a distância para o gol',
          'Evite apoiar todo o peso na perna de apoio durante o chute'
        ]
      },
      {
        id: 'adapt-finish-001-space',
        name: 'Adaptação para Espaço Muito Limitado',
        condition: AdaptationCondition.LIMITED_SPACE,
        description: 'Versão para espaços extremamente pequenos',
        instructions: [
          'Reduza a distância entre o início do exercício e o gol',
          'Use um alvo menor (ex: chinelos empilhados)',
          'Foque em finalizações rasteiras e precisas'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-finish-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute em ritmo moderado',
          'Use sempre o mesmo tipo de drible',
          'Finalize sempre com o pé dominante'
        ]
      },
      {
        id: 'prog-finish-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e variação',
        instructions: [
          'Aumente o ritmo da execução',
          'Alterne entre diferentes tipos de dribles',
          'Varie entre finalizações com pé dominante e não-dominante'
        ]
      },
      {
        id: 'prog-finish-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e complexidade',
        instructions: [
          'Execute em velocidade máxima',
          'Combine dois dribles antes da finalização',
          'Varie entre finalizações rasantes, meia altura e altas',
          'Adicione alvos específicos dentro do gol'
        ]
      }
    ],
    benefits: [
      'Melhora a capacidade de finalização após drible',
      'Desenvolve a tomada de decisão rápida',
      'Aumenta a eficácia em situações de 1x1 seguidas de finalização',
      'Aperfeiçoa a técnica de chute sob pressão'
    ],
    focusAreas: [BodyArea.FEET, BodyArea.LEGS, BodyArea.COORDINATION],
    isKneeFriendly: false
  }
];

// Função para obter exercícios filtrados por categoria
export function getExercisesByCategory(category: TechnicalCategory): TechnicalExercise[] {
  switch (category) {
    case TechnicalCategory.DRIBBLING:
      return dribblingExercises;
    case TechnicalCategory.BALL_CONTROL:
      return ballControlExercises;
    case TechnicalCategory.FINISHING:
      return finishingExercises;
    default:
      return [];
  }
}

// Função para obter exercícios adaptados para condições específicas
export function getAdaptedExercises(condition: AdaptationCondition): TechnicalExercise[] {
  const allExercises = [
    ...dribblingExercises,
    ...ballControlExercises,
    ...finishingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.adaptations.some(adaptation => adaptation.condition === condition)
  );
}

// Função para obter exercícios adequados para espaço disponível
export function getExercisesBySpace(space: SpaceRequirement): TechnicalExercise[] {
  const allExercises = [
    ...dribblingExercises,
    ...ballControlExercises,
    ...finishingExercises
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
export function getKneeFriendlyExercises(): TechnicalExercise[] {
  const allExercises = [
    ...dribblingExercises,
    ...ballControlExercises,
    ...finishingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.isKneeFriendly || 
    exercise.adaptations.some(adaptation => adaptation.condition === AdaptationCondition.KNEE_PAIN)
  );
}
