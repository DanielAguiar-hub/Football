// Definição dos tipos para o sistema de acompanhamento de progresso

// Tipo para representar um treino realizado
export interface CompletedWorkout {
  id: string;
  userId: string;
  workoutId: string;
  date: Date;
  duration: number; // em minutos
  rating: number; // avaliação do usuário (1-5)
  feedback: string; // comentários do usuário
  painLevel?: number; // nível de dor no joelho (0-10), opcional
  exercises: CompletedExercise[];
}

// Tipo para representar um exercício concluído
export interface CompletedExercise {
  id: string;
  exerciseId: string;
  sets: number;
  reps: number;
  difficulty: number; // percepção de dificuldade (1-5)
  performance: number; // auto-avaliação de desempenho (1-5)
  notes: string;
}

// Tipo para representar o progresso geral do usuário
export interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  streakDays: number; // dias consecutivos de treino
  totalWorkouts: number;
  totalMinutes: number;
  achievements: Achievement[];
  skillLevels: SkillLevel[];
  weeklyGoal: number; // número de treinos por semana
  weeklyProgress: number; // treinos realizados na semana atual
}

// Tipo para representar um nível de habilidade
export interface SkillLevel {
  skillId: string;
  skillName: string;
  category: SkillCategory;
  level: number;
  progress: number; // progresso para o próximo nível (0-100)
}

// Categorias de habilidades
export enum SkillCategory {
  TECHNICAL = 'technical', // habilidades técnicas
  TACTICAL = 'tactical',   // habilidades táticas
  PHYSICAL = 'physical',   // preparo físico
  MENTAL = 'mental'        // aspectos mentais
}

// Tipo para representar uma conquista
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateUnlocked: Date;
  category: AchievementCategory;
}

// Categorias de conquistas
export enum AchievementCategory {
  CONSISTENCY = 'consistency', // relacionadas à consistência
  PERFORMANCE = 'performance', // relacionadas ao desempenho
  MILESTONE = 'milestone',     // marcos importantes
  SPECIAL = 'special'          // conquistas especiais
}

// Tipo para representar uma recomendação personalizada
export interface Recommendation {
  id: string;
  userId: string;
  title: string;
  description: string;
  workoutId?: string;
  exerciseId?: string;
  priority: number; // 1-3, onde 3 é alta prioridade
  reason: string;
  dateCreated: Date;
  viewed: boolean;
  applied: boolean;
}

// Funções para cálculo de progresso

// Calcula o nível com base na XP
export function calculateLevel(xp: number): number {
  // Fórmula: cada nível requer 20% mais XP que o anterior
  // Nível 1: 0 XP
  // Nível 2: 100 XP
  // Nível 3: 220 XP (100 + 100*1.2)
  // e assim por diante
  
  if (xp < 100) return 1;
  
  let level = 1;
  let xpRequired = 0;
  let nextLevelXp = 100;
  
  while (xp >= xpRequired + nextLevelXp) {
    xpRequired += nextLevelXp;
    level++;
    nextLevelXp = Math.floor(nextLevelXp * 1.2);
  }
  
  return level;
}

// Calcula a XP necessária para o próximo nível
export function calculateXpToNextLevel(xp: number): number {
  const level = calculateLevel(xp);
  let xpRequired = 0;
  let nextLevelXp = 100;
  
  for (let i = 1; i < level; i++) {
    xpRequired += nextLevelXp;
    nextLevelXp = Math.floor(nextLevelXp * 1.2);
  }
  
  return xpRequired + nextLevelXp - xp;
}

// Calcula a XP ganha por um treino
export function calculateWorkoutXp(workout: CompletedWorkout): number {
  // Base XP por minuto de treino
  const baseXpPerMinute = 1;
  
  // XP base pelo tempo de treino
  let xp = workout.duration * baseXpPerMinute;
  
  // Bônus pela avaliação do usuário
  xp += (workout.rating - 1) * 10;
  
  // Bônus por cada exercício concluído
  xp += workout.exercises.length * 5;
  
  // Bônus por desempenho nos exercícios
  const performanceBonus = workout.exercises.reduce((sum, ex) => sum + ex.performance, 0);
  xp += performanceBonus * 2;
  
  // Arredonda para o inteiro mais próximo
  return Math.round(xp);
}

// Verifica se o usuário desbloqueou novas conquistas
export function checkNewAchievements(
  progress: UserProgress, 
  completedWorkout: CompletedWorkout
): Achievement[] {
  const newAchievements: Achievement[] = [];
  const now = new Date();
  
  // Exemplo: Conquista por primeiro treino
  if (progress.totalWorkouts === 1) {
    newAchievements.push({
      id: 'first-workout',
      name: 'Primeiro Treino',
      description: 'Completou seu primeiro treino',
      icon: 'trophy',
      dateUnlocked: now,
      category: AchievementCategory.MILESTONE
    });
  }
  
  // Exemplo: Conquista por 7 dias consecutivos
  if (progress.streakDays === 7) {
    newAchievements.push({
      id: 'week-streak',
      name: 'Semana Perfeita',
      description: 'Treinou por 7 dias consecutivos',
      icon: 'calendar-check',
      dateUnlocked: now,
      category: AchievementCategory.CONSISTENCY
    });
  }
  
  // Mais lógica para outras conquistas...
  
  return newAchievements;
}

// Gera recomendações personalizadas com base no progresso
export function generateRecommendations(progress: UserProgress): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const now = new Date();
  
  // Exemplo: Recomendação para habilidades com nível baixo
  const weakestSkill = progress.skillLevels.reduce(
    (prev, current) => (prev.level < current.level) ? prev : current
  );
  
  if (weakestSkill.level < 3) {
    recommendations.push({
      id: `improve-${weakestSkill.skillId}`,
      userId: progress.userId,
      title: `Melhore sua habilidade de ${weakestSkill.skillName}`,
      description: `Identificamos que sua habilidade de ${weakestSkill.skillName} pode ser melhorada. Recomendamos treinos focados nesta área.`,
      priority: 3,
      reason: 'Habilidade com nível baixo',
      dateCreated: now,
      viewed: false,
      applied: false
    });
  }
  
  // Exemplo: Recomendação para manter consistência
  if (progress.streakDays > 0 && progress.streakDays % 3 === 0) {
    recommendations.push({
      id: `keep-streak-${progress.streakDays}`,
      userId: progress.userId,
      title: 'Mantenha sua sequência!',
      description: `Você está treinando há ${progress.streakDays} dias consecutivos. Continue assim!`,
      priority: 2,
      reason: 'Motivação por consistência',
      dateCreated: now,
      viewed: false,
      applied: false
    });
  }
  
  // Mais lógica para outras recomendações...
  
  return recommendations;
}
