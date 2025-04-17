// Definição dos tipos para os módulos de preparo físico

// Tipo para representar um exercício de preparo físico
export interface PhysicalExercise {
  id: string;
  name: string;
  category: PhysicalCategory;
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
  muscleGroups: MuscleGroup[];
  isKneeFriendly: boolean;
  energySystem: EnergySystem;
  restTime: number; // em segundos
}

// Categorias de preparo físico
export enum PhysicalCategory {
  RESISTANCE = 'resistance',     // resistência
  AGILITY = 'agility',           // agilidade
  STRENGTH = 'strength',         // força
  SPEED = 'speed',               // velocidade
  FLEXIBILITY = 'flexibility',   // flexibilidade
  COORDINATION = 'coordination'  // coordenação
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

// Grupos musculares trabalhados
export enum MuscleGroup {
  QUADRICEPS = 'quadriceps',     // quadríceps
  HAMSTRINGS = 'hamstrings',     // posteriores de coxa
  CALVES = 'calves',             // panturrilhas
  GLUTES = 'glutes',             // glúteos
  CORE = 'core',                 // core (abdômen e lombar)
  UPPER_BODY = 'upper_body',     // parte superior do corpo
  FULL_BODY = 'full_body'        // corpo inteiro
}

// Sistemas energéticos
export enum EnergySystem {
  AEROBIC = 'aerobic',           // aeróbico
  ANAEROBIC = 'anaerobic',       // anaeróbico
  MIXED = 'mixed'                // misto
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

// Banco de dados de exercícios de resistência
export const resistanceExercises: PhysicalExercise[] = [
  {
    id: 'res-001',
    name: 'Treino Intervalado de Alta Intensidade em Espaço Reduzido',
    category: PhysicalCategory.RESISTANCE,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.NONE],
    duration: 10,
    description: 'Treino intervalado adaptado para espaço pequeno, ideal para desenvolver resistência específica para futebol sem impacto excessivo no joelho.',
    instructions: [
      'Delimite seu espaço de 5x3m',
      'Realize os seguintes exercícios em sequência, com 20 segundos de atividade e 10 segundos de descanso:',
      '1. Corrida estacionária (elevação de joelhos moderada)',
      '2. Deslocamento lateral (2-3 passos para cada lado)',
      '3. Agachamento parcial (não descer completamente)',
      '4. Skipping baixo (elevação moderada dos joelhos)',
      '5. Polichinelo adaptado (sem impacto, movimento controlado)',
      'Complete 3 voltas nesta sequência',
      'Descanse 1 minuto entre as voltas'
    ],
    videoUrl: '/videos/hiit-espaco-reduzido.mp4',
    imageUrl: '/images/hiit-espaco-reduzido.jpg',
    adaptations: [
      {
        id: 'adapt-res-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a altura da elevação dos joelhos na corrida estacionária',
          'Diminua a amplitude do agachamento (apenas 1/4 do movimento)',
          'Substitua o skipping por marcha estacionária',
          'Aumente o tempo de descanso para 15 segundos',
          'Reduza para 2 voltas na sequência'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-res-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Realize 15 segundos de atividade e 15 segundos de descanso',
          'Complete 2 voltas na sequência',
          'Mantenha intensidade moderada'
        ]
      },
      {
        id: 'prog-res-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento do tempo e intensidade',
        instructions: [
          'Realize 20 segundos de atividade e 10 segundos de descanso',
          'Complete 3 voltas na sequência',
          'Aumente a intensidade dos movimentos'
        ]
      },
      {
        id: 'prog-res-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima intensidade e volume',
        instructions: [
          'Realize 30 segundos de atividade e 10 segundos de descanso',
          'Complete 4 voltas na sequência',
          'Execute com intensidade máxima'
        ]
      }
    ],
    benefits: [
      'Desenvolve resistência específica para futebol',
      'Melhora a capacidade cardiovascular',
      'Aumenta o condicionamento físico geral',
      'Simula a intensidade intermitente do jogo'
    ],
    muscleGroups: [MuscleGroup.FULL_BODY, MuscleGroup.QUADRICEPS, MuscleGroup.CALVES],
    isKneeFriendly: false,
    energySystem: EnergySystem.MIXED,
    restTime: 60
  },
  {
    id: 'res-002',
    name: 'Circuito de Resistência com Bola',
    category: PhysicalCategory.RESISTANCE,
    difficulty: 2,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.BALL, Equipment.CONES],
    duration: 12,
    description: 'Circuito que combina elementos técnicos com condicionamento físico, adaptado para espaço pequeno e focado na posição de ponta esquerda.',
    instructions: [
      'Posicione 4 chinelos nos cantos do seu espaço de 5x3m',
      'Realize os seguintes exercícios em sequência, com 30 segundos para cada um:',
      '1. Condução de bola em oito ao redor dos cones',
      '2. Toques com a bola (pés, coxas, cabeça)',
      '3. Corrida estacionária com a bola entre os pés (alternando pés)',
      '4. Condução com mudanças rápidas de direção',
      '5. Controle de bola com a sola (rolando para frente e para trás)',
      '6. Deslocamento lateral com a bola controlada',
      'Descanse 30 segundos entre os exercícios',
      'Complete 2 voltas no circuito'
    ],
    videoUrl: '/videos/circuito-resistencia-bola.mp4',
    imageUrl: '/images/circuito-resistencia-bola.jpg',
    adaptations: [
      {
        id: 'adapt-res-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza o tempo de cada exercício para 20 segundos',
          'Aumente o descanso para 40 segundos',
          'Evite mudanças bruscas de direção na condução',
          'Substitua a corrida estacionária por controle de bola parado'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-res-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Realize 20 segundos de cada exercício',
          'Descanse 40 segundos entre exercícios',
          'Complete 1 volta no circuito'
        ]
      },
      {
        id: 'prog-res-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento do tempo e redução do descanso',
        instructions: [
          'Realize 30 segundos de cada exercício',
          'Descanse 30 segundos entre exercícios',
          'Complete 2 voltas no circuito'
        ]
      },
      {
        id: 'prog-res-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima intensidade e volume',
        instructions: [
          'Realize 40 segundos de cada exercício',
          'Descanse 20 segundos entre exercícios',
          'Complete 3 voltas no circuito',
          'Aumente a velocidade de execução'
        ]
      }
    ],
    benefits: [
      'Desenvolve resistência específica com bola',
      'Melhora a coordenação técnica sob fadiga',
      'Aumenta a capacidade de manter controle técnico durante todo o jogo',
      'Simula situações de jogo com demanda física'
    ],
    muscleGroups: [MuscleGroup.FULL_BODY, MuscleGroup.CALVES, MuscleGroup.CORE],
    isKneeFriendly: true,
    energySystem: EnergySystem.AEROBIC,
    restTime: 30
  }
];

// Banco de dados de exercícios de agilidade
export const agilityExercises: PhysicalExercise[] = [
  {
    id: 'agil-001',
    name: 'Mini Circuito de Agilidade',
    category: PhysicalCategory.AGILITY,
    difficulty: 3,
    spaceRequired: SpaceRequirement.SMALL,
    equipment: [Equipment.CONES],
    duration: 8,
    description: 'Circuito compacto para desenvolver agilidade, mudanças de direção e coordenação, adaptado para espaço reduzido.',
    instructions: [
      'Posicione 4 chinelos formando um quadrado de aproximadamente 2x2m',
      'Realize os seguintes padrões de movimento:',
      '1. Deslocamento frontal-lateral-traseiro-lateral (em volta do quadrado)',
      '2. Deslocamento em diagonal (tocando os cones opostos)',
      '3. Deslocamento em "Z" (frente-diagonal-frente)',
      '4. Deslocamento em "8" (contornando os cones)',
      'Execute cada padrão por 30 segundos',
      'Descanse 30 segundos entre os padrões',
      'Complete 2 séries do circuito completo'
    ],
    videoUrl: '/videos/mini-circuito-agilidade.mp4',
    imageUrl: '/images/mini-circuito-agilidade.jpg',
    adaptations: [
      {
        id: 'adapt-agil-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a velocidade de execução',
          'Evite mudanças bruscas de direção',
          'Aumente o tamanho do quadrado para 3x3m (se possível)',
          'Elimine os deslocamentos traseiros',
          'Substitua o deslocamento em "Z" por deslocamento em linha reta com paradas controladas'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-agil-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute em ritmo moderado',
          'Realize 20 segundos de cada padrão',
          'Descanse 40 segundos entre padrões',
          'Complete 1 série do circuito'
        ]
      },
      {
        id: 'prog-agil-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e tempo',
        instructions: [
          'Aumente o ritmo de execução',
          'Realize 30 segundos de cada padrão',
          'Descanse 30 segundos entre padrões',
          'Complete 2 séries do circuito'
        ]
      },
      {
        id: 'prog-agil-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e complexidade',
        instructions: [
          'Execute em velocidade máxima',
          'Realize 40 segundos de cada padrão',
          'Descanse 20 segundos entre padrões',
          'Complete 3 séries do circuito',
          'Adicione a bola nos deslocamentos (se possível)'
        ]
      }
    ],
    benefits: [
      'Desenvolve agilidade e capacidade de mudança de direção',
      'Melhora a coordenação e equilíbrio',
      'Aumenta a velocidade de reação',
      'Aperfeiçoa movimentos específicos para pontas'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.CALVES, MuscleGroup.HAMSTRINGS],
    isKneeFriendly: false,
    energySystem: EnergySystem.ANAEROBIC,
    restTime: 30
  },
  {
    id: 'agil-002',
    name: 'Exercício de Passos Rápidos',
    category: PhysicalCategory.AGILITY,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 6,
    description: 'Exercício para desenvolver a velocidade dos pés e coordenação, fundamental para dribles e mudanças de direção rápidas.',
    instructions: [
      'Posicione-se em pé com os pés na largura dos ombros',
      'Realize os seguintes padrões de passos rápidos:',
      '1. Passos laterais (direita-esquerda) por 20 segundos',
      '2. Passos frontais-traseiros por 20 segundos',
      '3. Passos em "X" (cruzando os pés) por 20 segundos',
      '4. Passos em "tesoura" (alternando pé da frente) por 20 segundos',
      'Descanse 20 segundos entre cada padrão',
      'Complete 3 séries do circuito completo'
    ],
    videoUrl: '/videos/passos-rapidos.mp4',
    imageUrl: '/images/passos-rapidos.jpg',
    adaptations: [
      {
        id: 'adapt-agil-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a amplitude dos movimentos',
          'Diminua a velocidade de execução',
          'Evite os passos em "X" que exigem rotação do joelho',
          'Substitua por passos laterais mais controlados',
          'Realize apenas 2 séries do circuito'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-agil-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Execute em ritmo moderado',
          'Realize 15 segundos de cada padrão',
          'Descanse 30 segundos entre padrões',
          'Complete 2 séries do circuito'
        ]
      },
      {
        id: 'prog-agil-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento da velocidade e tempo',
        instructions: [
          'Aumente o ritmo de execução',
          'Realize 20 segundos de cada padrão',
          'Descanse 20 segundos entre padrões',
          'Complete 3 séries do circuito'
        ]
      },
      {
        id: 'prog-agil-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máxima velocidade e complexidade',
        instructions: [
          'Execute em velocidade máxima',
          'Realize 30 segundos de cada padrão',
          'Descanse 15 segundos entre padrões',
          'Complete 4 séries do circuito',
          'Adicione comandos verbais para mudar de padrão aleatoriamente'
        ]
      }
    ],
    benefits: [
      'Desenvolve a velocidade dos pés',
      'Melhora a coordenação e agilidade',
      'Aumenta a capacidade de executar dribles rápidos',
      'Aperfeiçoa a base para movimentos explosivos'
    ],
    muscleGroups: [MuscleGroup.CALVES, MuscleGroup.QUADRICEPS],
    isKneeFriendly: true,
    energySystem: EnergySystem.ANAEROBIC,
    restTime: 20
  }
];

// Banco de dados de exercícios de força
export const strengthExercises: PhysicalExercise[] = [
  {
    id: 'str-001',
    name: 'Circuito de Força para Membros Inferiores',
    category: PhysicalCategory.STRENGTH,
    difficulty: 3,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.NONE],
    duration: 15,
    description: 'Circuito de exercícios de força focados nos membros inferiores, essenciais para um ponta esquerda, adaptados para proteger o joelho.',
    instructions: [
      'Realize os seguintes exercícios em sequência:',
      '1. Agachamento parcial (15 repetições)',
      '2. Elevação de panturrilha (20 repetições)',
      '3. Afundo estático adaptado (10 repetições cada perna)',
      '4. Elevação lateral de perna (12 repetições cada perna)',
      '5. Ponte de glúteos (15 repetições)',
      '6. Prancha frontal (30 segundos)',
      'Descanse 45 segundos entre os exercícios',
      'Complete 3 séries do circuito completo',
      'Descanse 2 minutos entre as séries'
    ],
    videoUrl: '/videos/circuito-forca-inferiores.mp4',
    imageUrl: '/images/circuito-forca-inferiores.jpg',
    adaptations: [
      {
        id: 'adapt-str-001-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'Reduza a amplitude do agachamento (apenas 1/4 do movimento)',
          'Substitua o afundo por elevação de quadril deitado',
          'Reduza o número de repetições em 30%',
          'Aumente o tempo de descanso para 60 segundos entre exercícios',
          'Complete apenas 2 séries do circuito'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-str-001-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Reduza o número de repetições em 30%',
          'Aumente o descanso para 60 segundos entre exercícios',
          'Complete 2 séries do circuito'
        ]
      },
      {
        id: 'prog-str-001-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento do volume',
        instructions: [
          'Realize o número padrão de repetições',
          'Descanse 45 segundos entre exercícios',
          'Complete 3 séries do circuito'
        ]
      },
      {
        id: 'prog-str-001-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máximo volume e intensidade',
        instructions: [
          'Aumente o número de repetições em 20%',
          'Reduza o descanso para 30 segundos entre exercícios',
          'Complete 4 séries do circuito',
          'Adicione pequenos saltos após o agachamento (se não houver dor no joelho)'
        ]
      }
    ],
    benefits: [
      'Desenvolve força nos membros inferiores',
      'Melhora a estabilidade articular',
      'Aumenta a potência para arranques e mudanças de direção',
      'Previne lesões através do fortalecimento muscular'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.HAMSTRINGS, MuscleGroup.CALVES, MuscleGroup.GLUTES, MuscleGroup.CORE],
    isKneeFriendly: false,
    energySystem: EnergySystem.ANAEROBIC,
    restTime: 45
  },
  {
    id: 'str-002',
    name: 'Exercícios Isométricos para Força e Estabilidade',
    category: PhysicalCategory.STRENGTH,
    difficulty: 2,
    spaceRequired: SpaceRequirement.VERY_SMALL,
    equipment: [Equipment.WALL],
    duration: 10,
    description: 'Série de exercícios isométricos que desenvolvem força e estabilidade sem impacto nas articulações, ideal para jogadores com problemas no joelho.',
    instructions: [
      'Realize os seguintes exercícios isométricos:',
      '1. Agachamento isométrico na parede (4 séries de 20 segundos)',
      '2. Prancha frontal (4 séries de 30 segundos)',
      '3. Prancha lateral (3 séries de 20 segundos para cada lado)',
      '4. Elevação de quadril isométrica (4 séries de 20 segundos)',
      '5. Posição de "cadeira" contra a parede (3 séries de 20 segundos)',
      'Descanse 30 segundos entre as séries de cada exercício',
      'Descanse 45 segundos ao mudar de exercício'
    ],
    videoUrl: '/videos/exercicios-isometricos.mp4',
    imageUrl: '/images/exercicios-isometricos.jpg',
    adaptations: [
      {
        id: 'adapt-str-002-knee',
        name: 'Adaptação para Dor no Joelho',
        condition: AdaptationCondition.KNEE_PAIN,
        description: 'Versão com menor impacto no joelho',
        instructions: [
          'No agachamento isométrico, mantenha um ângulo maior no joelho (menos flexão)',
          'Reduza o tempo de cada série em 5-10 segundos',
          'Aumente o descanso para 45 segundos entre séries',
          'Evite a posição de "cadeira" se causar desconforto'
        ]
      }
    ],
    progressions: [
      {
        id: 'prog-str-002-1',
        name: 'Progressão Básica',
        level: 1,
        description: 'Versão inicial do exercício',
        instructions: [
          'Reduza o tempo de cada série em 5-10 segundos',
          'Aumente o descanso para 45 segundos entre séries',
          'Realize 2-3 séries de cada exercício'
        ]
      },
      {
        id: 'prog-str-002-2',
        name: 'Progressão Intermediária',
        level: 2,
        description: 'Aumento do tempo sob tensão',
        instructions: [
          'Realize o tempo padrão para cada série',
          'Descanse 30 segundos entre séries',
          'Complete o número padrão de séries'
        ]
      },
      {
        id: 'prog-str-002-3',
        name: 'Progressão Avançada',
        level: 3,
        description: 'Máximo tempo sob tensão',
        instructions: [
          'Aumente o tempo de cada série em 5-10 segundos',
          'Reduza o descanso para 20 segundos entre séries',
          'Adicione uma série extra para cada exercício',
          'Adicione pequenas pulsações durante as posições isométricas'
        ]
      }
    ],
    benefits: [
      'Desenvolve força sem impacto nas articulações',
      'Melhora a estabilidade do core e membros inferiores',
      'Aumenta a resistência muscular',
      'Fortalece músculos estabilizadores importantes para prevenção de lesões'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.CORE],
    isKneeFriendly: true,
    energySystem: EnergySystem.ANAEROBIC,
    restTime: 30
  }
];

// Função para obter exercícios filtrados por categoria
export function getExercisesByCategory(category: PhysicalCategory): PhysicalExercise[] {
  switch (category) {
    case PhysicalCategory.RESISTANCE:
      return resistanceExercises;
    case PhysicalCategory.AGILITY:
      return agilityExercises;
    case PhysicalCategory.STRENGTH:
      return strengthExercises;
    default:
      return [];
  }
}

// Função para obter exercícios adaptados para condições específicas
export function getAdaptedExercises(condition: AdaptationCondition): PhysicalExercise[] {
  const allExercises = [
    ...resistanceExercises,
    ...agilityExercises,
    ...strengthExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.adaptations.some(adaptation => adaptation.condition === condition)
  );
}

// Função para obter exercícios adequados para espaço disponível
export function getExercisesBySpace(space: SpaceRequirement): PhysicalExercise[] {
  const allExercises = [
    ...resistanceExercises,
    ...agilityExercises,
    ...strengthExercises
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
export function getKneeFriendlyExercises(): PhysicalExercise[] {
  const allExercises = [
    ...resistanceExercises,
    ...agilityExercises,
    ...strengthExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.isKneeFriendly || 
    exercise.adaptations.some(adaptation => adaptation.condition === AdaptationCondition.KNEE_PAIN)
  );
}

// Função para obter exercícios por grupo muscular
export function getExercisesByMuscleGroup(muscleGroup: MuscleGroup): PhysicalExercise[] {
  const allExercises = [
    ...resistanceExercises,
    ...agilityExercises,
    ...strengthExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.muscleGroups.includes(muscleGroup)
  );
}

// Função para obter exercícios por sistema energético
export function getExercisesByEnergySystem(energySystem: EnergySystem): PhysicalExercise[] {
  const allExercises = [
    ...resistanceExercises,
    ...agilityExercises,
    ...strengthExercises
  ];
  
  return allExercises.filter(exercise => 
    exercise.energySystem === energySystem
  );
}
