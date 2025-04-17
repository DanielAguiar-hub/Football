// Definição dos tipos para os módulos de aspectos mentais

// Tipo para representar um exercício de aspecto mental
export interface MentalExercise {
  id: string;
  name: string;
  category: MentalCategory;
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
  mentalAreas: MentalArea[];
  isKneeFriendly: boolean;
  practiceFrequency: PracticeFrequency;
}

// Categorias de aspectos mentais
export enum MentalCategory {
  EMOTIONAL_CONTROL = 'emotional_control',   // controle emocional
  DECISION_MAKING = 'decision_making',       // tomada de decisão
  CONCENTRATION = 'concentration',           // concentração
  VISUALIZATION = 'visualization',           // visualização
  CONFIDENCE = 'confidence',                 // confiança
  STRESS_MANAGEMENT = 'stress_management'    // gerenciamento de estresse
}

// Requisitos de espaço (reutilizado dos módulos anteriores)
export enum SpaceRequirement {
  VERY_SMALL = 'very_small', // menos de 2x2m
  SMALL = 'small',           // 2x2m a 5x3m
  MEDIUM = 'medium',         // 5x5m a 10x10m
  LARGE = 'large'            // mais de 10x10m
}

// Equipamentos (reutilizado dos módulos anteriores)
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

// Áreas mentais trabalhadas
export enum MentalArea {
  FOCUS = 'focus',                     // foco
  RESILIENCE = 'resilience',           // resiliência
  EMOTIONAL_REGULATION = 'emotional_regulation', // regulação emocional
  COGNITIVE_PROCESSING = 'cognitive_processing', // processamento cognitivo
  SELF_AWARENESS = 'self_awareness',   // autoconsciência
  MINDFULNESS = 'mindfulness'          // atenção plena
}

// Frequência de prática recomendada
export enum PracticeFrequency {
  DAILY = 'daily',               // diariamente
  MULTIPLE_WEEKLY = 'multiple_weekly', // várias vezes por semana
  WEEKLY = 'weekly',             // semanalmente
  BEFORE_GAMES = 'before_games'  // antes dos jogos
}

// Adaptações para condições específicas (reutilizado dos módulos anteriores)
export interface Adaptation {
  id: string;
  name: string;
  condition: AdaptationCondition;
  description: string;
  instructions: string[];
}

// Condições que requerem adaptações (reutilizado dos módulos anteriores)
export enum AdaptationCondition {
  KNEE_PAIN = 'knee_pain',           // dor no joelho
  LIMITED_SPACE = 'limited_space',    // espaço limitado
  NO_EQUIPMENT = 'no_equipment',      // sem equipamento
  BEGINNER = 'beginner',              // iniciante
  ADVANCED = 'advanced'               // avançado
}

// Progressões para aumentar a dificuldade (reutilizado dos módulos anteriores)
export interface Progression {
  id: string;
  name: string;
  level: number; // 1-3, onde 3 é mais avançado
  description: string;
  instructions: string[];
}

// Banco de dados de exercícios de controle emocional
export const emotionalControlExercises: MentalExercise[] = [
  {
    id: 'emot-001',
    name: 'Respiração para Controle Emocional',
    category: MentalCategory.EMOTIONAL_CONTROL,
    difficulty: 1,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 5,
    description: 'Técnica de respiração para regular emoções e reduzir a ansiedade antes, durante e após os treinos ou jogos.',
    instructions: [
      'Encontre uma posição confortável, sentado ou em pé',
      'Feche os olhos ou mantenha um olhar suave fixo em um ponto',
      'Inspire lentamente pelo nariz contando até 4',
      'Segure a respiração por 2 segundos',
      'Expire lentamente pela boca contando até 6',
      'Concentre-se na sensação do ar entrando e saindo dos pulmões',
      'Observe pensamentos e emoções sem julgamento',
      'Continue por 5 minutos, aumentando gradualmente o tempo com a prática',
      'Pratique diariamente e sempre que sentir ansiedade ou frustração'
    ],
    videoUrl: '/videos/respiracao-controle-emocional.mp4',
    imageUrl: '/images/respiracao-controle-emocional.jpg',
    adaptations: [
      {
        id: 'adapt-emot-001-beginner',
        name: 'Adaptação para Iniciantes',
        condition: AdaptationCondition.BEGINNER,
        description: 'Versão simplificada para quem está começando',
        instructions: [
          'Comece com sessões de apenas 2-3 minutos',
          'Use um temporizador suave para não se preocupar com o tempo',
          'Foque apenas na expiração, tornando-a mais longa que a inspiração',
          'Não se preocupe com a contagem exata, apenas mantenha um ritmo lento'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-emot-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Pratique em ambiente tranquilo',
          'Sessões de 3-5 minutos',
          'Foco na respiração regular'
        ]
      },
      {
        id: 'prog-emot-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da duração e contexto',
        instructions: [
          'Aumente para sessões de 5-10 minutos',
          'Pratique em diferentes ambientes',
          'Adicione visualização de situações de jogo durante a respiração'
        ]
      },
      {
        id: 'prog-emot-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Aplicação em situações de estresse',
        instructions: [
          'Pratique durante exercícios físicos leves',
          'Aplique a técnica em momentos de frustração durante treinos',
          'Use respirações curtas e discretas durante situações de jogo'
        ]
      }
    ],
    benefits: [
      'Reduz a ansiedade pré-jogo e durante momentos críticos',
      'Melhora a capacidade de manter a calma sob pressão',
      'Aumenta o foco e clareza mental',
      'Ajuda a recuperar o controle emocional após erros ou frustrações'
    ],
    mentalAreas: [MentalArea.EMOTIONAL_REGULATION, MentalArea.MINDFULNESS, MentalArea.FOCUS],
    isKneeFriendly: true,
    practiceFrequency: PracticeFrequency.DAILY
  },
  {
    id: 'emot-002',
    name: 'Técnica de Ancoragem Emocional',
    category: MentalCategory.EMOTIONAL_CONTROL,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 8,
    description: 'Técnica para criar "âncoras" mentais que ajudam a acessar estados emocionais positivos durante momentos de pressão ou frustração.',
    instructions: [
      'Fase 1: Criação da Âncora (5 minutos)',
      '- Sente-se confortavelmente e feche os olhos',
      '- Relembre detalhadamente um momento de excelente desempenho no futebol',
      '- Reviva as sensações, emoções e pensamentos daquele momento',
      '- Quando o estado emocional positivo estiver no auge, crie uma âncora física (ex: pressionar o polegar contra o dedo médio)',
      '- Mantenha a âncora por 5-10 segundos enquanto sustenta o estado emocional positivo',
      '- Repita este processo 3-5 vezes',
      '',
      'Fase 2: Teste e Reforço da Âncora (3 minutos)',
      '- Limpe sua mente por alguns instantes',
      '- Ative a âncora (pressione os dedos da mesma forma)',
      '- Observe se as sensações e emoções positivas retornam',
      '- Se não forem fortes o suficiente, repita a Fase 1',
      '',
      'Pratique regularmente para fortalecer a associação'
    ],
    videoUrl: '/videos/ancoragem-emocional.mp4',
    imageUrl: '/images/ancoragem-emocional.jpg',
    adaptations: [
      {
        id: 'adapt-emot-002-beginner',
        name: 'Adaptação para Iniciantes',
        condition: AdaptationCondition.BEGINNER,
        description: 'Versão simplificada para quem está começando',
        instructions: [
          'Use uma memória mais recente e vívida',
          'Escolha uma âncora mais óbvia (como apertar o punho)',
          'Foque em apenas uma emoção específica (como confiança)',
          'Pratique em ambiente completamente livre de distrações'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-emot-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Crie uma âncora para um estado emocional específico',
          'Pratique em ambiente tranquilo',
          'Teste a âncora em situações de baixa pressão'
        ]
      },
      {
        id: 'prog-emot-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Múltiplas âncoras e aplicação',
        instructions: [
          'Crie âncoras diferentes para estados emocionais distintos (calma, confiança, foco)',
          'Pratique a ativação rápida das âncoras',
          'Aplique durante exercícios técnicos'
        ]
      },
      {
        id: 'prog-emot-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Aplicação em situações de alta pressão',
        instructions: [
          'Use âncoras sutis que podem ser ativadas durante o jogo',
          'Combine com respiração e auto-diálogo positivo',
          'Pratique em situações simuladas de alta pressão',
          'Desenvolva gatilhos automáticos para situações específicas (antes de um drible, após um erro)'
        ]
      }
    ],
    benefits: [
      'Permite acesso rápido a estados emocionais positivos',
      'Melhora a recuperação após erros ou situações adversas',
      'Aumenta a consistência emocional durante o jogo',
      'Desenvolve maior autocontrole em momentos críticos'
    ],
    mentalAreas: [MentalArea.EMOTIONAL_REGULATION, MentalArea.SELF_AWARENESS, MentalArea.RESILIENCE],
    isKneeFriendly: true,
    practiceFrequency: PracticeFrequency.MULTIPLE_WEEKLY
  }
];

// Banco de dados de exercícios de tomada de decisão
export const decisionMakingExercises: MentalExercise[] = [
  {
    id: 'dec-001',
    name: 'Simulação de Tomada de Decisão',
    category: MentalCategory.DECISION_MAKING,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 10,
    description: 'Exercício que simula situações de jogo que exigem tomadas de decisão rápidas, adaptado para espaço reduzido.',
    instructions: [
      'Posicione 4 chinelos nos cantos do seu espaço de 5x3m',
      'Atribua uma ação específica para cada cone:',
      '- Cone 1: Drible para a direita',
      '- Cone 2: Drible para a esquerda',
      '- Cone 3: Passe (imaginário)',
      '- Cone 4: Finalização (imaginária)',
      'Posicione-se no centro com a bola',
      'Um parceiro (ou você mesmo) grita um número de 1 a 4 aleatoriamente',
      'Reaja imediatamente executando a ação correspondente ao número',
      'Retorne ao centro após cada ação',
      'Continue por 3 minutos, descanse 1 minuto, e repita 3 vezes',
      'Varie a velocidade dos comandos para aumentar a dificuldade'
    ],
    videoUrl: '/videos/simulacao-tomada-decisao.mp4',
    imageUrl: '/images/simulacao-tomada-decisao.jpg',
    adaptations: [
      {
        id: 'adapt-dec-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a velocidade de execução',
          'Substitua dribles por toques simples na bola',
          'Diminua a distância até os cones',
          'Aumente o tempo de descanso entre séries'
        ]
      },
      {
        id: 'adapt-dec-001-solo',
        name: 'Adaptação para Treino Solo',
        condition: AdaptationCondition.NO_EQUIPMENT,
        description: 'Versão para treinar sozinho',
        instructions: [
          'Use um aplicativo de smartphone que emite números aleatórios',
          'Ou escreva os números em pedaços de papel e sorteie',
          'Defina um temporizador para manter o ritmo',
          'Foque na velocidade da reação e na qualidade da execução'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-dec-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Use apenas 2-3 opções de decisão',
          'Permita 2-3 segundos para reagir',
          'Mantenha um ritmo constante e previsível'
        ]
      },
      {
        id: 'prog-dec-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da complexidade',
        instructions: [
          'Use 4 opções de decisão',
          'Reduza o tempo de reação para 1-2 segundos',
          'Varie o ritmo dos comandos',
          'Adicione comandos falsos ocasionais (quando não deve reagir)'
        ]
      },
      {
        id: 'prog-dec-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima complexidade',
        instructions: [
          'Use 5-6 opções de decisão',
          'Reação imediata (menos de 1 segundo)',
          'Adicione estímulos visuais além dos auditivos',
          'Inclua "defensores" imaginários que deve evitar',
          'Adicione decisões condicionais (ex: se ouvir "vermelho" antes do número, inverta a ação)'
        ]
      }
    ],
    benefits: [
      'Melhora a velocidade de processamento e tomada de decisão',
      'Desenvolve a capacidade de reagir sob pressão',
      'Aumenta a conexão entre pensamento e ação',
      'Aperfeiçoa a execução técnica em situações de decisão rápida'
    ],
    mentalAreas: [MentalArea.COGNITIVE_PROCESSING, MentalArea.FOCUS, MentalArea.RESILIENCE],
    isKneeFriendly: false,
    practiceFrequency: PracticeFrequency.MULTIPLE_WEEKLY
  },
  {
    id: 'dec-002',
    name: 'Visualização de Cenários de Decisão',
    category: MentalCategory.DECISION_MAKING,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 8,
    description: 'Exercício de visualização mental focado em melhorar a tomada de decisão através da simulação mental de cenários de jogo.',
    instructions: [
      'Sente-se ou deite-se em uma posição confortável',
      'Feche os olhos e respire profundamente por 1 minuto para relaxar',
      'Visualize-se em uma situação de jogo específica para um ponta esquerda:',
      '- Recebendo a bola com um defensor se aproximando',
      '- Tendo que decidir entre driblar, passar ou finalizar',
      '- Observe todas as opções disponíveis',
      'Tome uma decisão na visualização e veja o resultado',
      'Repita a mesma cena, mas tome uma decisão diferente',
      'Compare os resultados das diferentes decisões',
      'Repita com 3-5 cenários diferentes',
      'Para cada cenário, visualize pelo menos 2 decisões alternativas',
      'Concentre-se em ver os detalhes e sentir as emoções envolvidas'
    ],
    videoUrl: '/videos/visualizacao-cenarios.mp4',
    imageUrl: '/images/visualizacao-cenarios.jpg',
    adaptations: [
      {
        id: 'adapt-dec-002-beginner',
        name: 'Adaptação para Iniciantes',
        condition: AdaptationCondition.BEGINNER,
        description: 'Versão simplificada para quem tem dificuldade com visualização',
        instructions: [
          'Comece visualizando apenas uma situação simples',
          'Use imagens ou vídeos reais antes para ajudar na visualização',
          'Foque primeiro nos aspectos visuais, depois adicione sensações',
          'Escreva o cenário em detalhes antes de visualizá-lo'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-dec-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Visualize situações simples e previsíveis',
          'Foque em apenas 2 opções de decisão',
          'Visualize em câmera lenta'
        ]
      },
      {
        id: 'prog-dec-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da complexidade',
        instructions: [
          'Visualize situações mais complexas com múltiplos jogadores',
          'Considere 3-4 opções de decisão',
          'Visualize em tempo real',
          'Adicione pressão (placar, tempo de jogo)'
        ]
      },
      {
        id: 'prog-dec-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima complexidade e realismo',
        instructions: [
          'Visualize situações altamente complexas e imprevisíveis',
          'Inclua fatores externos (clima, torcida, cansaço)',
          'Adicione adversidades (erro anterior, pressão do treinador)',
          'Pratique a visualização de decisões em sequência',
          'Visualize em primeira pessoa com todos os detalhes sensoriais'
        ]
      }
    ],
    benefits: [
      'Melhora a capacidade de antecipar situações de jogo',
      'Desenvolve o processamento mental de múltiplas opções',
      'Aumenta a confiança na tomada de decisão',
      'Reduz o tempo de reação em situações reais similares às visualizadas'
    ],
    mentalAreas: [MentalArea.COGNITIVE_PROCESSING, MentalArea.SELF_AWARENESS, MentalArea.FOCUS],
    isKneeFriendly: true,
    practiceFrequency: PracticeFrequency.MULTIPLE_WEEKLY
  }
];

// Função para obter exercícios filtrados por categoria
export function getExercisesByCategory(category: MentalCategory): MentalExercise[] {
  switch (category) {
    case MentalCategory.EMOTIONAL_CONTROL:
      return emotionalControlExercises;
    case MentalCategory.DECISION_MAKING:
      return decisionMakingExercises;
    default:
      return [];
  }
}

// Função para obter exercícios adaptados para condições específicas
export function getAdaptedExercises(condition: AdaptationCondition): MentalExercise[] {
  const allExercises = [
    ...emotionalControlExercises,
    ...decisionMakingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.adaptations.some(adaptation => adaptation.condition === condition)
  );
}

// Função para obter exercícios adequados para espaço disponível
export function getExercisesBySpace(space: SpaceRequirement): MentalExercise[] {
  const allExercises = [
    ...emotionalControlExercises,
    ...decisionMakingExercises
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
export function getKneeFriendlyExercises(): MentalExercise[] {
  const allExercises = [
    ...emotionalControlExercises,
    ...decisionMakingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.isKneeFriendly || 
    exercise.adaptations.some(adaptation => adaptation.condition === AdaptationCondition.KNEE_PAIN)
  );
}

// Função para obter exercícios por área mental
export function getExercisesByMentalArea(area: MentalArea): MentalExercise[] {
  const allExercises = [
    ...emotionalControlExercises,
    ...decisionMakingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.mentalAreas.includes(area)
  );
}

// Função para obter exercícios por frequência de prática
export function getExercisesByFrequency(frequency: PracticeFrequency): MentalExercise[] {
  const allExercises = [
    ...emotionalControlExercises,
    ...decisionMakingExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.practiceFrequency === frequency
  );
}
