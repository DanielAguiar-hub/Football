// Definição dos tipos para a área de comunidade e feedback

// Tipo para representar um post na comunidade
export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title: string;
  content: string;
  tags: string[];
  category: PostCategory;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  comments: Comment[];
  attachments?: Attachment[];
}

// Tipo para representar um comentário
export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  parentCommentId?: string; // Para respostas a outros comentários
}

// Tipo para representar um anexo (imagem, vídeo, etc.)
export interface Attachment {
  id: string;
  type: AttachmentType;
  url: string;
  thumbnailUrl?: string;
  description?: string;
}

// Tipo para representar um feedback de exercício
export interface ExerciseFeedback {
  id: string;
  userId: string;
  userName: string;
  exerciseId: string;
  exerciseType: string;
  rating: number; // 1-5
  difficulty: number; // 1-5
  effectiveness: number; // 1-5
  comment: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  spaceUsed: SpaceRequirement;
  equipmentUsed: Equipment[];
  adaptations?: string;
}

// Tipo para representar uma pergunta
export interface Question {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title: string;
  content: string;
  tags: string[];
  category: QuestionCategory;
  createdAt: Date;
  updatedAt?: Date;
  status: QuestionStatus;
  answers: Answer[];
}

// Tipo para representar uma resposta a uma pergunta
export interface Answer {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  isAccepted: boolean;
  isFromCoach: boolean;
}

// Categorias de posts
export enum PostCategory {
  SUCCESS_STORY = 'success_story',     // história de sucesso
  TRAINING_TIP = 'training_tip',       // dica de treino
  EQUIPMENT_HACK = 'equipment_hack',   // adaptação de equipamento
  INJURY_PREVENTION = 'injury_prevention', // prevenção de lesão
  MOTIVATION = 'motivation',           // motivação
  GENERAL = 'general'                  // geral
}

// Categorias de perguntas
export enum QuestionCategory {
  TECHNICAL = 'technical',             // técnica
  TACTICAL = 'tactical',               // tática
  PHYSICAL = 'physical',               // física
  MENTAL = 'mental',                   // mental
  EQUIPMENT = 'equipment',             // equipamento
  INJURY = 'injury',                   // lesão
  GENERAL = 'general'                  // geral
}

// Status de perguntas
export enum QuestionStatus {
  OPEN = 'open',                       // aberta
  ANSWERED = 'answered',               // respondida
  RESOLVED = 'resolved',               // resolvida
  CLOSED = 'closed'                    // fechada
}

// Tipos de anexos
export enum AttachmentType {
  IMAGE = 'image',                     // imagem
  VIDEO = 'video',                     // vídeo
  DOCUMENT = 'document',               // documento
  LINK = 'link'                        // link
}

// Requisitos de espaço (reutilizado dos módulos anteriores)
export enum SpaceRequirement {
  VERY_SMALL = 'very_small',           // menos de 2x2m
  SMALL = 'small',                     // 2x2m a 5x3m
  MEDIUM = 'medium',                   // 5x5m a 10x10m
  LARGE = 'large'                      // mais de 10x10m
}

// Equipamentos (reutilizado dos módulos anteriores)
export enum Equipment {
  BALL = 'ball',                       // bola
  CONES = 'cones',                     // cones (ou chinelos improvisados)
  AGILITY_LADDER = 'ladder',           // escada de agilidade
  RESISTANCE_BAND = 'band',            // elástico de resistência
  GOAL = 'goal',                       // gol (ou alvo improvisado)
  WALL = 'wall',                       // parede
  PARTNER = 'partner',                 // parceiro de treino
  NONE = 'none'                        // nenhum equipamento adicional
}

// Banco de dados de posts da comunidade
export const communityPosts: CommunityPost[] = [
  {
    id: 'post-001',
    userId: 'user-002',
    userName: 'Carlos Silva',
    userAvatar: '/images/avatars/carlos.jpg',
    title: 'Como adaptei dribles para meu quintal de 4x3m',
    content: `Queria compartilhar minha experiência treinando dribles em um espaço super limitado. Meu quintal tem apenas 4x3m, mas consegui adaptar vários exercícios que melhoraram muito minha técnica.

O segredo foi focar na qualidade do movimento em vez da amplitude. Uso chinelos como cones e marco áreas específicas para diferentes tipos de dribles. Para a pedalada, por exemplo, coloco dois chinelos a 50cm de distância e pratico o movimento preciso entre eles.

Também criei um sistema de progressão onde começo com movimentos lentos e controlados, e vou aumentando a velocidade gradualmente. Isso me ajudou a melhorar a técnica sem precisar de muito espaço.

Para quem tem espaço limitado como eu, recomendo focar em:
1. Precisão do movimento
2. Controle de bola em espaço reduzido
3. Variações do mesmo drible
4. Combinações curtas de 2-3 movimentos

Espero que isso ajude outros jogadores com espaços pequenos!`,
    tags: ['espaço pequeno', 'dribles', 'adaptação', 'treino em casa'],
    category: PostCategory.TRAINING_TIP,
    createdAt: new Date('2025-04-10T14:30:00Z'),
    likes: 24,
    comments: [
      {
        id: 'comment-001',
        userId: 'user-003',
        userName: 'Ana Oliveira',
        userAvatar: '/images/avatars/ana.jpg',
        content: 'Muito bom! Também tenho espaço limitado e vou tentar suas dicas. Você poderia compartilhar um vídeo mostrando como faz?',
        createdAt: new Date('2025-04-10T15:45:00Z'),
        likes: 5
      },
      {
        id: 'comment-002',
        userId: 'user-004',
        userName: 'Pedro Mendes',
        userAvatar: '/images/avatars/pedro.jpg',
        content: 'Estou com dor no joelho também. Alguma adaptação específica que você recomenda para evitar impacto?',
        createdAt: new Date('2025-04-11T09:20:00Z'),
        likes: 3
      }
    ],
    attachments: [
      {
        id: 'attach-001',
        type: AttachmentType.IMAGE,
        url: '/images/community/small-space-dribbling.jpg',
        thumbnailUrl: '/images/community/small-space-dribbling-thumb.jpg',
        description: 'Meu setup de treino em espaço pequeno'
      }
    ]
  },
  {
    id: 'post-002',
    userId: 'user-005',
    userName: 'Fernanda Costa',
    userAvatar: '/images/avatars/fernanda.jpg',
    title: 'Recuperação do joelho: minha jornada e exercícios adaptados',
    content: `Há 6 meses tive uma lesão no joelho que me deixou preocupada se conseguiria voltar a jogar como ponta esquerda. Quero compartilhar minha experiência de recuperação e os exercícios que me ajudaram a voltar mais forte.

O mais importante foi respeitar os limites do meu corpo. No início, foquei em exercícios isométricos que não causavam dor, como agachamentos parciais contra a parede e pranchas para fortalecer o core.

Gradualmente, adicionei exercícios de equilíbrio e propriocepção, que foram fundamentais para recuperar a confiança no joelho. Usei uma almofada ou travesseiro para criar uma superfície instável e praticava ficar em uma perna só.

Para manter minhas habilidades técnicas, adaptei dribles e conduções para movimentos sem impacto. Trabalhei muito com a sola do pé e movimentos controlados.

Hoje estou jogando novamente e, surpreendentemente, com melhor consciência corporal e controle técnico do que antes da lesão!

Principais aprendizados:
1. Paciência é fundamental
2. Fortalecer músculos ao redor do joelho
3. Trabalhar equilíbrio e propriocepção
4. Adaptar exercícios técnicos para baixo impacto
5. Ouvir o corpo e respeitar sinais de dor`,
    tags: ['recuperação', 'joelho', 'lesão', 'adaptação', 'fortalecimento'],
    category: PostCategory.INJURY_PREVENTION,
    createdAt: new Date('2025-04-05T10:15:00Z'),
    likes: 37,
    comments: [
      {
        id: 'comment-003',
        userId: 'user-006',
        userName: 'Rafael Santos',
        userAvatar: '/images/avatars/rafael.jpg',
        content: 'Sua história é inspiradora! Estou passando por algo parecido. Quanto tempo levou até você conseguir fazer movimentos mais explosivos sem dor?',
        createdAt: new Date('2025-04-05T11:30:00Z'),
        likes: 2
      },
      {
        id: 'comment-004',
        userId: 'user-005',
        userName: 'Fernanda Costa',
        userAvatar: '/images/avatars/fernanda.jpg',
        content: 'Obrigada, Rafael! Levou cerca de 3 meses para começar movimentos mais explosivos, mas com muita cautela. Comecei com apenas 2-3 repetições e fui aumentando gradualmente. O segredo foi nunca forçar quando sentia desconforto.',
        createdAt: new Date('2025-04-05T12:45:00Z'),
        likes: 4,
        parentCommentId: 'comment-003'
      }
    ],
    attachments: [
      {
        id: 'attach-002',
        type: AttachmentType.IMAGE,
        url: '/images/community/knee-exercises.jpg',
        thumbnailUrl: '/images/community/knee-exercises-thumb.jpg',
        description: 'Exercícios de fortalecimento para o joelho'
      },
      {
        id: 'attach-003',
        type: AttachmentType.VIDEO,
        url: '/videos/community/balance-training.mp4',
        thumbnailUrl: '/images/community/balance-training-thumb.jpg',
        description: 'Demonstração de exercícios de equilíbrio'
      }
    ]
  }
];

// Banco de dados de feedbacks de exercícios
export const exerciseFeedbacks: ExerciseFeedback[] = [
  {
    id: 'feedback-001',
    userId: 'user-007',
    userName: 'Lucas Almeida',
    exerciseId: 'drib-001', // Pedalada em Espaço Reduzido
    exerciseType: 'technical',
    rating: 5,
    difficulty: 3,
    effectiveness: 5,
    comment: 'Excelente exercício para espaço pequeno! Consegui adaptar perfeitamente para meu quintal de 4x2m. A progressão sugerida é muito boa, comecei devagar e fui aumentando a velocidade. Notei melhora significativa na minha pedalada em apenas 2 semanas de prática regular.',
    createdAt: new Date('2025-04-12T16:20:00Z'),
    likes: 8,
    spaceUsed: SpaceRequirement.VERY_SMALL,
    equipmentUsed: [Equipment.BALL, Equipment.CONES]
  },
  {
    id: 'feedback-002',
    userId: 'user-008',
    userName: 'Mariana Souza',
    exerciseId: 'str-002', // Exercícios Isométricos para Força e Estabilidade
    exerciseType: 'physical',
    rating: 4,
    difficulty: 4,
    effectiveness: 5,
    comment: 'Ótimo para quem tem problemas no joelho como eu. Senti bastante os músculos trabalhando sem nenhuma dor articular. Adaptei reduzindo o tempo das séries no início e fui aumentando gradualmente. Recomendo muito para fortalecimento sem impacto.',
    createdAt: new Date('2025-04-08T09:45:00Z'),
    likes: 12,
    spaceUsed: SpaceRequirement.VERY_SMALL,
    equipmentUsed: [Equipment.WALL],
    adaptations: 'Reduzi o tempo das séries para 15 segundos no início e aumentei 5 segundos a cada semana.'
  }
];

// Banco de dados de perguntas e respostas
export const questions: Question[] = [
  {
    id: 'question-001',
    userId: 'user-009',
    userName: 'Gabriel Martins',
    userAvatar: '/images/avatars/gabriel.jpg',
    title: 'Como adaptar dribles para espaço de 3x2m?',
    content: 'Tenho um espaço muito limitado em casa (apenas 3x2m) e quero melhorar meus dribles como ponta esquerda. Quais exercícios vocês recomendam que possam ser feitos nesse espaço tão pequeno? Já tentei alguns exercícios do site, mas alguns parecem precisar de mais espaço.',
    tags: ['espaço pequeno', 'dribles', 'ponta esquerda', 'adaptação'],
    category: QuestionCategory.TECHNICAL,
    createdAt: new Date('2025-04-15T14:10:00Z'),
    status: QuestionStatus.ANSWERED,
    answers: [
      {
        id: 'answer-001',
        userId: 'user-010',
        userName: 'Coach Roberto',
        userAvatar: '/images/avatars/roberto.jpg',
        content: `Gabriel, ótima pergunta! Com 3x2m você ainda pode fazer muita coisa. Recomendo focar em:

1. **Pedalada estacionária**: Faça o movimento da pedalada praticamente no mesmo lugar, focando na técnica e não no deslocamento.

2. **Rolinho com a sola**: Pratique rolar a bola para frente e para trás com a sola, depois adicione mudanças laterais curtas.

3. **Dribles combinados em espaço mínimo**: Trabalhe sequências como "pedalada + rolinho + corte" em um espaço de 1x1m.

4. **Controle em círculo**: Desenhe um círculo de 1m de diâmetro e pratique manter a bola dentro dele enquanto executa diferentes movimentos técnicos.

O segredo é adaptar os exercícios para minimizar o deslocamento e maximizar o trabalho técnico. Qualidade sobre quantidade!`,
        createdAt: new Date('2025-04-15T15:30:00Z'),
        likes: 15,
        isAccepted: true,
        isFromCoach: true
      },
      {
        id: 'answer-002',
        userId: 'user-011',
        userName: 'Juliana Rocha',
        userAvatar: '/images/avatars/juliana.jpg',
        content: 'Estou na mesma situação! Tenho usado uma parede para fazer dribles e cortes contra ela, o que me ajuda a praticar em espaço reduzido. Também coloco objetos pequenos (como garrafas) muito próximos e pratico dribles precisos entre eles. O foco tem que ser na precisão, não na velocidade.',
        createdAt: new Date('2025-04-15T16:45:00Z'),
        likes: 8,
        isAccepted: false,
        isFromCoach: false
      }
    ]
  },
  {
    id: 'question-002',
    userId: 'user-012',
    userName: 'Thiago Ferreira',
    userAvatar: '/images/avatars/thiago.jpg',
    title: 'Exercícios para joelho dolorido após treino',
    content: 'Tenho sentido dor no joelho direito após treinos mais intensos. Não é uma dor aguda, mas um desconforto que dura alguns dias. Quais exercícios posso fazer para fortalecer a região e prevenir esse problema? Também gostaria de saber se devo adaptar meu treino técnico de alguma forma.',
    tags: ['joelho', 'dor', 'fortalecimento', 'prevenção', 'adaptação'],
    category: QuestionCategory.INJURY,
    createdAt: new Date('2025-04-13T11:25:00Z'),
    status: QuestionStatus.RESOLVED,
    answers: [
      {
        id: 'answer-003',
        userId: 'user-013',
        userName: 'Dra. Camila Fisioterapeuta',
        userAvatar: '/images/avatars/camila.jpg',
        content: `Olá Thiago! Primeiro, é importante ressaltar que dor persistente deve ser avaliada por um profissional. Dito isso, aqui vão algumas recomendações:

**Para fortalecimento:**
1. Exercícios isométricos são excelentes para fortalecer sem sobrecarregar: agachamento isométrico na parede (60-90° de flexão), prancha frontal e lateral.
2. Fortalecimento de quadril: elevações laterais e abdução de quadril deitado.
3. Trabalho de propriocepção: equilíbrio em uma perna (comece com apoio e progrida para sem apoio).

**Adaptações para treino técnico:**
1. Reduza exercícios com mudanças bruscas de direção
2. Evite saltos e aterrissagens repetitivas
3. Diminua o volume de treino (menos repetições, mais qualidade)
4. Aumente o tempo de recuperação entre séries

**Dicas adicionais:**
- Aplique gelo após o treino (15 min)
- Considere usar uma joelheira leve durante os treinos
- Nunca ignore a dor - se aumentar, pare o exercício

Espero que ajude! Se a dor persistir, consulte um fisioterapeuta ou ortopedista.`,
        createdAt: new Date('2025-04-13T12:40:00Z'),
        likes: 23,
        isAccepted: true,
        isFromCoach: true
      }
    ]
  }
];

// Funções para gerenciar posts da comunidade

// Função para obter posts por categoria
export function getPostsByCategory(category: PostCategory): CommunityPost[] {
  return communityPosts.filter(post => post.category === category);
}

// Função para obter posts por tag
export function getPostsByTag(tag: string): CommunityPost[] {
  return communityPosts.filter(post => post.tags.includes(tag));
}

// Função para obter posts por usuário
export function getPostsByUser(userId: string): CommunityPost[] {
  return communityPosts.filter(post => post.userId === userId);
}

// Função para adicionar um comentário a um post
export function addCommentToPost(postId: string, comment: Omit<Comment, 'id' | 'createdAt' | 'likes'>): Comment {
  const post = communityPosts.find(p => p.id === postId);
  if (!post) return null;
  
  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    createdAt: new Date(),
    likes: 0,
    ...comment
  };
  
  post.comments.push(newComment);
  return newComment;
}

// Funções para gerenciar feedbacks de exercícios

// Função para obter feedbacks por exercício
export function getFeedbacksByExercise(exerciseId: string): ExerciseFeedback[] {
  return exerciseFeedbacks.filter(feedback => feedback.exerciseId === exerciseId);
}

// Função para obter feedbacks por tipo de exercício
export function getFeedbacksByExerciseType(exerciseType: string): ExerciseFeedback[] {
  return exerciseFeedbacks.filter(feedback => feedback.exerciseType === exerciseType);
}

// Função para calcular a classificação média de um exercício
export function getAverageRating(exerciseId: string): { rating: number, difficulty: number, effectiveness: number } {
  const feedbacks = getFeedbacksByExercise(exerciseId);
  if (feedbacks.length === 0) {
    return { rating: 0, difficulty: 0, effectiveness: 0 };
  }
  
  const sumRating = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
  const sumDifficulty = feedbacks.reduce((sum, feedback) => sum + feedback.difficulty, 0);
  const sumEffectiveness = feedbacks.reduce((sum, feedback) => sum + feedback.effectiveness, 0);
  
  return {
    rating: sumRating / feedbacks.length,
    difficulty: sumDifficulty / feedbacks.length,
    effectiveness: sumEffectiveness / feedbacks.length
  };
}

// Funções para gerenciar perguntas e respostas

// Função para obter perguntas por categoria
export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return questions.filter(question => question.category === category);
}

// Função para obter perguntas por status
export function getQuestionsByStatus(status: QuestionStatus): Question[] {
  return questions.filter(question => question.status === status);
}

// Função para obter perguntas por tag
export function getQuestionsByTag(tag: string): Question[] {
  return questions.filter(question => question.tags.includes(tag));
}

// Função para adicionar uma resposta a uma pergunta
export function addAnswerToQuestion(questionId: string, answer: Omit<Answer, 'id' | 'createdAt' | 'likes'>): Answer {
  const question = questions.find(q => q.id === questionId);
  if (!question) return null;
  
  const newAnswer: Answer = {
    id: `answer-${Date.now()}`,
    createdAt: new Date(),
    likes: 0,
    ...answer
  };
  
  question.answers.push(newAnswer);
  
  // Atualizar o status da pergunta se necessário
  if (question.status === QuestionStatus.OPEN) {
    question.status = QuestionStatus.ANSWERED;
  }
  
  if (answer.isAccepted && question.status === QuestionStatus.ANSWERED) {
    question.status = QuestionStatus.RESOLVED;
    
    // Garantir que apenas uma resposta seja marcada como aceita
    question.answers.forEach(a => {
      if (a.id !== newAnswer.id) {
        a.isAccepted = false;
      }
    });
  }
  
  return newAnswer;
}

// Função para aceitar uma resposta
export function acceptAnswer(questionId: string, answerId: string): boolean {
  const question = questions.find(q => q.id === questionId);
  if (!question) return false;
  
  const answer = question.answers.find(a => a.id === answerId);
  if (!answer) return false;
  
  // Desmarcar outras respostas aceitas
  question.answers.forEach(a => {
    a.isAccepted = a.id === answerId;
  });
  
  // Atualizar status da pergunta
  question.status = QuestionStatus.RESOLVED;
  
  return true;
}

// Função para pesquisar em toda a comunidade
export function searchCommunity(query: string): { posts: CommunityPost[], questions: Question[], feedbacks: ExerciseFeedback[] } {
  const normalizedQuery = query.toLowerCase();
  
  const matchedPosts = communityPosts.filter(post => 
    post.title.toLowerCase().includes(normalizedQuery) || 
    post.content.toLowerCase().includes(normalizedQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
  
  const matchedQuestions = questions.filter(question => 
    question.title.toLowerCase().includes(normalizedQuery) || 
    question.content.toLowerCase().includes(normalizedQuery) ||
    question.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)) ||
    question.answers.some(answer => answer.content.toLowerCase().includes(normalizedQuery))
  );
  
  const matchedFeedbacks = exerciseFeedbacks.filter(feedback => 
    feedback.comment.toLowerCase().includes(normalizedQuery) ||
    feedback.adaptations?.toLowerCase().includes(normalizedQuery)
  );
  
  return {
    posts: matchedPosts,
    questions: matchedQuestions,
    feedbacks: matchedFeedbacks
  };
}
