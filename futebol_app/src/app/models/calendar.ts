// Definição dos tipos para o calendário de treinos

// Tipo para representar um treino no calendário
export interface WorkoutPlan {
  id: string;
  title: string;
  description: string;
  duration: number; // em minutos
  difficulty: number; // 1-5, onde 5 é mais difícil
  targetAreas: TargetArea[];
  exercises: ScheduledExercise[];
  tags: string[];
  isKneeFriendly: boolean;
  spaceRequired: SpaceRequirement;
  equipmentNeeded: Equipment[];
}

// Tipo para representar um exercício agendado em um treino
export interface ScheduledExercise {
  id: string;
  exerciseId: string;
  exerciseType: ExerciseType;
  duration: number; // em minutos
  sets?: number;
  reps?: number;
  restTime?: number; // em segundos
  notes?: string;
  order: number; // ordem no treino
}

// Tipo para representar um calendário de treinos
export interface TrainingCalendar {
  id: string;
  userId: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  goal: string;
  weeklySchedule: WeeklySchedule;
  progressionStrategy: ProgressionStrategy;
}

// Tipo para representar a programação semanal
export interface WeeklySchedule {
  monday?: ScheduledWorkout;
  tuesday?: ScheduledWorkout;
  wednesday?: ScheduledWorkout;
  thursday?: ScheduledWorkout;
  friday?: ScheduledWorkout;
  saturday?: ScheduledWorkout;
  sunday?: ScheduledWorkout;
}

// Tipo para representar um treino agendado em um dia específico
export interface ScheduledWorkout {
  workoutPlanId: string;
  timeOfDay?: TimeOfDay;
  isCompleted?: boolean;
  notes?: string;
}

// Áreas-alvo do treino
export enum TargetArea {
  TECHNICAL = 'technical',   // técnica
  TACTICAL = 'tactical',     // tática
  PHYSICAL = 'physical',     // física
  MENTAL = 'mental'          // mental
}

// Tipos de exercícios
export enum ExerciseType {
  TECHNICAL = 'technical',   // técnico
  TACTICAL = 'tactical',     // tático
  PHYSICAL = 'physical',     // físico
  MENTAL = 'mental'          // mental
}

// Horário do dia para o treino
export enum TimeOfDay {
  MORNING = 'morning',       // manhã
  AFTERNOON = 'afternoon',   // tarde
  EVENING = 'evening',       // noite
  FLEXIBLE = 'flexible'      // flexível
}

// Estratégia de progressão do calendário
export enum ProgressionStrategy {
  LINEAR = 'linear',         // progressão linear (aumento gradual constante)
  UNDULATING = 'undulating', // progressão ondulatória (variação de intensidade)
  BLOCK = 'block',           // progressão em blocos (foco em áreas específicas por período)
  CUSTOM = 'custom'          // progressão personalizada
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

// Banco de dados de planos de treino para ponta esquerda em espaço reduzido
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'workout-001',
    title: 'Treino Completo para Ponta Esquerda - Foco em Dribles',
    description: 'Treino completo de 1 hora focado em dribles e condução de bola para jogadores de ponta esquerda, adaptado para espaço reduzido e considerando a condição do joelho.',
    duration: 60, // 1 hora
    difficulty: 3,
    targetAreas: [TargetArea.TECHNICAL, TargetArea.PHYSICAL, TargetArea.TACTICAL, TargetArea.MENTAL],
    exercises: [
      // Aquecimento
      {
        id: 'sched-001',
        exerciseId: 'warmup-001',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 10,
        order: 1,
        notes: 'Foco na mobilidade articular e ativação cardiovascular leve'
      },
      // Técnica - Dribles
      {
        id: 'sched-002',
        exerciseId: 'drib-001', // Pedalada em Espaço Reduzido
        exerciseType: ExerciseType.TECHNICAL,
        duration: 10,
        sets: 3,
        reps: 10,
        restTime: 30,
        order: 2,
        notes: 'Alternar entre pé direito e esquerdo'
      },
      {
        id: 'sched-003',
        exerciseId: 'drib-002', // Drible do Corte em Zigue-Zague
        exerciseType: ExerciseType.TECHNICAL,
        duration: 10,
        sets: 5,
        restTime: 30,
        order: 3,
        notes: 'Foco na explosão após o corte'
      },
      // Técnica - Condução
      {
        id: 'sched-004',
        exerciseId: 'control-001', // Condução em Quadrado Pequeno
        exerciseType: ExerciseType.TECHNICAL,
        duration: 8,
        sets: 2,
        restTime: 30,
        order: 4,
        notes: 'Alternar entre diferentes partes do pé'
      },
      // Físico
      {
        id: 'sched-005',
        exerciseId: 'str-002', // Exercícios Isométricos para Força e Estabilidade
        exerciseType: ExerciseType.PHYSICAL,
        duration: 10,
        order: 5,
        notes: 'Adaptar conforme a condição do joelho'
      },
      // Tático
      {
        id: 'sched-006',
        exerciseId: 'vision-001', // Controle de Bola com Consciência Espacial
        exerciseType: ExerciseType.TACTICAL,
        duration: 6,
        order: 6,
        notes: 'Foco na visão periférica'
      },
      // Mental
      {
        id: 'sched-007',
        exerciseId: 'emot-001', // Respiração para Controle Emocional
        exerciseType: ExerciseType.MENTAL,
        duration: 3,
        order: 7,
        notes: 'Técnica de recuperação e controle'
      },
      // Alongamento
      {
        id: 'sched-008',
        exerciseId: 'cooldown-001',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 3,
        order: 8,
        notes: 'Alongamento completo com foco nos membros inferiores'
      }
    ],
    tags: ['ponta esquerda', 'dribles', 'espaço reduzido', 'intermediário'],
    isKneeFriendly: true,
    spaceRequired: SpaceRequirement.SMALL,
    equipmentNeeded: [Equipment.BALL, Equipment.CONES]
  },
  {
    id: 'workout-002',
    title: 'Treino de Força e Explosão para Ponta Esquerda',
    description: 'Treino focado no desenvolvimento de força e explosão para jogadores de ponta esquerda, com adaptações para espaço reduzido e proteção do joelho.',
    duration: 60, // 1 hora
    difficulty: 3,
    targetAreas: [TargetArea.PHYSICAL, TargetArea.TECHNICAL],
    exercises: [
      // Aquecimento
      {
        id: 'sched-009',
        exerciseId: 'warmup-002',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 10,
        order: 1,
        notes: 'Aquecimento progressivo com foco na preparação muscular'
      },
      // Físico - Força
      {
        id: 'sched-010',
        exerciseId: 'str-001', // Circuito de Força para Membros Inferiores
        exerciseType: ExerciseType.PHYSICAL,
        duration: 15,
        order: 2,
        notes: 'Adaptar conforme a condição do joelho'
      },
      // Físico - Agilidade
      {
        id: 'sched-011',
        exerciseId: 'agil-002', // Exercício de Passos Rápidos
        exerciseType: ExerciseType.PHYSICAL,
        duration: 6,
        sets: 3,
        restTime: 60,
        order: 3,
        notes: 'Foco na velocidade dos pés'
      },
      // Físico - Resistência
      {
        id: 'sched-012',
        exerciseId: 'res-002', // Circuito de Resistência com Bola
        exerciseType: ExerciseType.PHYSICAL,
        duration: 12,
        order: 4,
        notes: 'Manter intensidade moderada'
      },
      // Técnica - Aplicação
      {
        id: 'sched-013',
        exerciseId: 'control-002', // Mudanças de Direção Rápidas
        exerciseType: ExerciseType.TECHNICAL,
        duration: 8,
        order: 5,
        notes: 'Aplicar a força desenvolvida nas mudanças de direção'
      },
      // Mental - Recuperação
      {
        id: 'sched-014',
        exerciseId: 'emot-001', // Respiração para Controle Emocional
        exerciseType: ExerciseType.MENTAL,
        duration: 3,
        order: 6,
        notes: 'Foco na recuperação e controle da respiração'
      },
      // Alongamento
      {
        id: 'sched-015',
        exerciseId: 'cooldown-002',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 6,
        order: 7,
        notes: 'Alongamento profundo com foco na recuperação muscular'
      }
    ],
    tags: ['ponta esquerda', 'força', 'explosão', 'espaço reduzido', 'intermediário'],
    isKneeFriendly: false,
    spaceRequired: SpaceRequirement.SMALL,
    equipmentNeeded: [Equipment.BALL, Equipment.CONES, Equipment.WALL]
  },
  {
    id: 'workout-003',
    title: 'Treino Tático-Cognitivo para Ponta Esquerda',
    description: 'Treino focado no desenvolvimento de habilidades táticas e cognitivas para jogadores de ponta esquerda, com ênfase na tomada de decisão e visão de jogo.',
    duration: 60, // 1 hora
    difficulty: 3,
    targetAreas: [TargetArea.TACTICAL, TargetArea.MENTAL, TargetArea.TECHNICAL],
    exercises: [
      // Aquecimento
      {
        id: 'sched-016',
        exerciseId: 'warmup-001',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 8,
        order: 1,
        notes: 'Aquecimento leve com ativação cognitiva'
      },
      // Mental - Visualização
      {
        id: 'sched-017',
        exerciseId: 'dec-002', // Visualização de Cenários de Decisão
        exerciseType: ExerciseType.MENTAL,
        duration: 8,
        order: 2,
        notes: 'Foco em situações específicas para ponta esquerda'
      },
      // Tático - Posicionamento
      {
        id: 'sched-018',
        exerciseId: 'pos-002', // Simulação de Movimentação sem Bola
        exerciseType: ExerciseType.TACTICAL,
        duration: 7,
        sets: 3,
        restTime: 60,
        order: 3,
        notes: 'Foco na criação de espaços'
      },
      // Tático - Visão de Jogo
      {
        id: 'sched-019',
        exerciseId: 'vision-002', // Reação a Estímulos Visuais
        exerciseType: ExerciseType.TACTICAL,
        duration: 8,
        order: 4,
        notes: 'Desenvolver tempo de reação e processamento'
      },
      // Técnica - Aplicação Tática
      {
        id: 'sched-020',
        exerciseId: 'finish-001', // Finalização após Drible em Espaço Reduzido
        exerciseType: ExerciseType.TECHNICAL,
        duration: 10,
        sets: 3,
        reps: 10,
        restTime: 60,
        order: 5,
        notes: 'Aplicar conceitos táticos na finalização'
      },
      // Mental - Tomada de Decisão
      {
        id: 'sched-021',
        exerciseId: 'dec-001', // Simulação de Tomada de Decisão
        exerciseType: ExerciseType.MENTAL,
        duration: 10,
        order: 6,
        notes: 'Integrar todas as habilidades desenvolvidas'
      },
      // Físico - Recuperação
      {
        id: 'sched-022',
        exerciseId: 'cooldown-001',
        exerciseType: ExerciseType.PHYSICAL,
        duration: 5,
        order: 7,
        notes: 'Alongamento e relaxamento mental'
      },
      // Mental - Reflexão
      {
        id: 'sched-023',
        exerciseId: 'emot-002', // Técnica de Ancoragem Emocional
        exerciseType: ExerciseType.MENTAL,
        duration: 4,
        order: 8,
        notes: 'Consolidar aprendizados e sensações positivas'
      }
    ],
    tags: ['ponta esquerda', 'tático', 'cognitivo', 'tomada de decisão', 'intermediário'],
    isKneeFriendly: true,
    spaceRequired: SpaceRequirement.SMALL,
    equipmentNeeded: [Equipment.BALL, Equipment.CONES, Equipment.GOAL]
  }
];

// Exemplo de calendário de treino semanal para ponta esquerda
export const sampleWeeklyCalendar: TrainingCalendar = {
  id: 'calendar-001',
  userId: 'user-001',
  name: 'Calendário Semanal para Ponta Esquerda - Nível Intermediário',
  description: 'Calendário de treinos semanal adaptado para jogadores de ponta esquerda de nível intermediário, com foco em dribles, condução e força, considerando espaço reduzido e condição do joelho.',
  startDate: new Date('2025-04-17'),
  endDate: new Date('2025-05-17'),
  goal: 'Melhorar habilidades técnicas e físicas específicas para ponta esquerda em 4 semanas',
  weeklySchedule: {
    monday: {
      workoutPlanId: 'workout-001', // Treino Completo para Ponta Esquerda - Foco em Dribles
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Foco na qualidade dos dribles'
    },
    tuesday: {
      workoutPlanId: 'rest-day',
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Dia de descanso ativo - caminhada leve ou alongamento'
    },
    wednesday: {
      workoutPlanId: 'workout-002', // Treino de Força e Explosão para Ponta Esquerda
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Adaptar exercícios conforme a condição do joelho'
    },
    thursday: {
      workoutPlanId: 'rest-day',
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Dia de descanso ativo - caminhada leve ou alongamento'
    },
    friday: {
      workoutPlanId: 'workout-003', // Treino Tático-Cognitivo para Ponta Esquerda
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Foco na qualidade da tomada de decisão'
    },
    saturday: {
      workoutPlanId: 'workout-001', // Repetição do Treino Completo para Ponta Esquerda
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Tentar aumentar a velocidade de execução em relação a segunda-feira'
    },
    sunday: {
      workoutPlanId: 'rest-day',
      timeOfDay: TimeOfDay.FLEXIBLE,
      isCompleted: false,
      notes: 'Descanso completo'
    }
  },
  progressionStrategy: ProgressionStrategy.UNDULATING
};

// Função para gerar um calendário personalizado com base no perfil do usuário
export function generatePersonalizedCalendar(
  userId: string,
  position: string,
  level: string,
  availableDays: string[],
  focusAreas: TargetArea[],
  hasKneeIssue: boolean,
  availableSpace: SpaceRequirement
): TrainingCalendar {
  // Implementação básica - em um sistema real, seria mais complexa
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + 28); // 4 semanas
  
  // Criar um calendário vazio
  const calendar: TrainingCalendar = {
    id: `calendar-${userId}-${Date.now()}`,
    userId,
    name: `Calendário Personalizado para ${position} - Nível ${level}`,
    description: `Calendário de treinos personalizado para ${position} de nível ${level}, com foco em ${focusAreas.join(', ')}.`,
    startDate: today,
    endDate,
    goal: `Melhorar habilidades de ${position} em 4 semanas, com foco em ${focusAreas.join(', ')}.`,
    weeklySchedule: {},
    progressionStrategy: ProgressionStrategy.UNDULATING
  };
  
  // Filtrar treinos adequados
  const suitableWorkouts = workoutPlans.filter(workout => {
    // Verificar se o treino é adequado para jogadores com problemas no joelho
    if (hasKneeIssue && !workout.isKneeFriendly) {
      return false;
    }
    
    // Verificar se o treino é adequado para o espaço disponível
    const spaceValues = {
      [SpaceRequirement.VERY_SMALL]: 1,
      [SpaceRequirement.SMALL]: 2,
      [SpaceRequirement.MEDIUM]: 3,
      [SpaceRequirement.LARGE]: 4
    };
    
    if (spaceValues[workout.spaceRequired] > spaceValues[availableSpace]) {
      return false;
    }
    
    // Verificar se o treino aborda pelo menos uma das áreas de foco
    return workout.targetAreas.some(area => focusAreas.includes(area));
  });
  
  // Se não houver treinos adequados, retornar null
  if (suitableWorkouts.length === 0) {
    return null;
  }
  
  // Distribuir os treinos pelos dias disponíveis
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  
  availableDays.forEach((day, index) => {
    const dayIndex = daysOfWeek.indexOf(day.toLowerCase());
    if (dayIndex !== -1) {
      // Selecionar um treino adequado (alternando entre os disponíveis)
      const workout = suitableWorkouts[index % suitableWorkouts.length];
      
      // Adicionar ao calendário
      calendar.weeklySchedule[day.toLowerCase()] = {
        workoutPlanId: workout.id,
        timeOfDay: TimeOfDay.FLEXIBLE,
        isCompleted: false,
        notes: `Foco em ${workout.targetAreas.join(', ')}`
      };
    }
  });
  
  // Adicionar dias de descanso
  daysOfWeek.forEach(day => {
    if (!calendar.weeklySchedule[day]) {
      calendar.weeklySchedule[day] = {
        workoutPlanId: 'rest-day',
        timeOfDay: TimeOfDay.FLEXIBLE,
        isCompleted: false,
        notes: day === 'sunday' ? 'Descanso completo' : 'Dia de descanso ativo - caminhada leve ou alongamento'
      };
    }
  });
  
  return calendar;
}

// Função para obter um treino específico por ID
export function getWorkoutPlanById(id: string): WorkoutPlan {
  return workoutPlans.find(workout => workout.id === id);
}

// Função para obter treinos por área-alvo
export function getWorkoutPlansByTargetArea(targetArea: TargetArea): WorkoutPlan[] {
  return workoutPlans.filter(workout => 
    workout.targetAreas.includes(targetArea)
  );
}

// Função para obter treinos adequados para jogadores com problemas no joelho
export function getKneeFriendlyWorkoutPlans(): WorkoutPlan[] {
  return workoutPlans.filter(workout => workout.isKneeFriendly);
}

// Função para obter treinos por requisito de espaço
export function getWorkoutPlansBySpace(space: SpaceRequirement): WorkoutPlan[] {
  // Retorna treinos que requerem o espaço especificado ou menos
  const spaceValues = {
    [SpaceRequirement.VERY_SMALL]: 1,
    [SpaceRequirement.SMALL]: 2,
    [SpaceRequirement.MEDIUM]: 3,
    [SpaceRequirement.LARGE]: 4
  };
  
  const requestedSpaceValue = spaceValues[space];
  
  return workoutPlans.filter(workout => 
    spaceValues[workout.spaceRequired] <= requestedSpaceValue
  );
}
