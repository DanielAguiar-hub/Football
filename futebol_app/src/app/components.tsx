// Arquivo principal de componentes da interface do usuário

import React from 'react';
import { 
  TechnicalExercise, 
  TechnicalCategory, 
  SpaceRequirement, 
  Equipment 
} from './models/technical';
import { 
  TacticalExercise, 
  TacticalCategory 
} from './models/tactical';
import { 
  PhysicalExercise, 
  PhysicalCategory, 
  MuscleGroup, 
  EnergySystem 
} from './models/physical';
import { 
  MentalExercise, 
  MentalCategory, 
  MentalArea, 
  PracticeFrequency 
} from './models/mental';
import { 
  WorkoutPlan, 
  TrainingCalendar, 
  TargetArea, 
  ExerciseType, 
  WeeklySchedule 
} from './models/calendar';
import { 
  CommunityPost, 
  Question, 
  ExerciseFeedback, 
  PostCategory, 
  QuestionCategory 
} from './models/community';
import { 
  ProTip, 
  Author, 
  ProTipCategory, 
  PlayerLevel 
} from './models/protips';
import { 
  ResponsivenessTest, 
  Device, 
  Breakpoint, 
  Orientation 
} from './models/responsiveness';

// Componente principal da aplicação
export default function FutebolApp() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Sidebar />
        <div className="content-area">
          {/* Conteúdo principal será renderizado aqui com base na rota */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Componente de cabeçalho
function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="/images/logo.svg" alt="Treinamento Futebol" />
        <h1>Treinamento Completo de Futebol</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/treinos">Treinos</a></li>
          <li><a href="/calendario">Calendário</a></li>
          <li><a href="/progresso">Progresso</a></li>
          <li><a href="/comunidade">Comunidade</a></li>
          <li><a href="/dicas">Dicas Profissionais</a></li>
        </ul>
      </nav>
      <div className="user-menu">
        <button className="profile-button">
          <img src="/images/avatar.jpg" alt="Perfil" />
          <span>Meu Perfil</span>
        </button>
      </div>
    </header>
  );
}

// Componente de barra lateral
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-profile">
        <img src="/images/avatar.jpg" alt="Avatar do usuário" />
        <h3>Olá, Jogador!</h3>
        <p>Ponta Esquerda • Intermediário</p>
      </div>
      
      <div className="progress-summary">
        <h4>Seu Progresso</h4>
        <div className="skill-progress">
          <span>Técnica</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill-progress">
          <span>Tática</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="skill-progress">
          <span>Física</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '55%' }}></div>
          </div>
        </div>
        <div className="skill-progress">
          <span>Mental</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="next-workout">
        <h4>Próximo Treino</h4>
        <div className="workout-card">
          <h5>Treino Completo para Ponta Esquerda</h5>
          <p>Hoje • 60 minutos</p>
          <button className="start-button">Iniciar Treino</button>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <h4>Categorias</h4>
        <ul>
          <li><a href="/tecnica">Habilidades Técnicas</a></li>
          <li><a href="/tatica">Habilidades Táticas</a></li>
          <li><a href="/fisica">Preparo Físico</a></li>
          <li><a href="/mental">Aspectos Mentais</a></li>
        </ul>
      </nav>
    </aside>
  );
}

// Componente de rodapé
function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Treinamento Completo de Futebol</h4>
          <p>Desenvolvido especialmente para jogadores que treinam em espaços reduzidos.</p>
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
            <li><a href="/privacidade">Privacidade</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Treinamento Completo de Futebol. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// Componente da página inicial
export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Treinamento Completo de Futebol</h1>
          <h2>Desenvolvido para jogadores de todos os níveis</h2>
          <p>Aprimore suas habilidades técnicas, táticas, físicas e mentais com treinos personalizados para seu espaço e equipamentos disponíveis.</p>
          <div className="hero-buttons">
            <button className="primary-button">Começar Agora</button>
            <button className="secondary-button">Saiba Mais</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.jpg" alt="Jogador treinando" />
        </div>
      </section>
      
      <section className="features-section">
        <h2>Recursos Completos para seu Desenvolvimento</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏃</div>
            <h3>Treinos Personalizados</h3>
            <p>Rotinas adaptadas ao seu nível, posição e espaço disponível.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Calendário de Treinos</h3>
            <p>Organize sua semana com treinos balanceados e progressivos.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Acompanhamento de Progresso</h3>
            <p>Visualize sua evolução em cada aspecto do jogo.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Comunidade Ativa</h3>
            <p>Compartilhe experiências e aprenda com outros jogadores.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Dicas Profissionais</h3>
            <p>Conselhos de especialistas para maximizar seu potencial.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🦵</div>
            <h3>Adaptações para Lesões</h3>
            <p>Exercícios adaptados para prevenir e recuperar de lesões.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <h2>O que Dizem Nossos Usuários</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Mesmo com um quintal pequeno, consegui melhorar muito meus dribles e condução de bola. Os exercícios são perfeitamente adaptados para espaços reduzidos."</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/testimonials/user1.jpg" alt="Usuário" />
              <div>
                <h4>Carlos Silva</h4>
                <p>Ponta Esquerda • Intermediário</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"As adaptações para problemas no joelho foram essenciais para mim. Consegui treinar sem dor e ainda fortalecer a região para prevenir novas lesões."</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/testimonials/user2.jpg" alt="Usuário" />
              <div>
                <h4>Fernanda Costa</h4>
                <p>Meio-Campo • Avançado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Pronto para Elevar seu Jogo?</h2>
          <p>Comece hoje mesmo sua jornada de desenvolvimento como jogador de futebol.</p>
          <button className="primary-button">Criar Conta Gratuita</button>
        </div>
      </section>
    </div>
  );
}

// Componente da página de treinos
export function WorkoutsPage() {
  return (
    <div className="workouts-page">
      <header className="page-header">
        <h1>Treinos Personalizados</h1>
        <p>Encontre treinos adaptados para seu perfil, espaço e equipamentos disponíveis.</p>
      </header>
      
      <section className="filters-section">
        <div className="filter-group">
          <label>Categoria:</label>
          <select>
            <option value="all">Todas</option>
            <option value="technical">Técnica</option>
            <option value="tactical">Tática</option>
            <option value="physical">Física</option>
            <option value="mental">Mental</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Espaço:</label>
          <select>
            <option value="all">Qualquer</option>
            <option value="very_small">Muito Pequeno (&lt;2x2m)</option>
            <option value="small" selected>Pequeno (2x2m a 5x3m)</option>
            <option value="medium">Médio (5x5m a 10x10m)</option>
            <option value="large">Grande (&gt;10x10m)</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Duração:</label>
          <select>
            <option value="all">Qualquer</option>
            <option value="short">Curta (&lt;30 min)</option>
            <option value="medium" selected>Média (30-60 min)</option>
            <option value="long">Longa (&gt;60 min)</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Adaptado para joelho:</label>
          <select>
            <option value="all">Todos</option>
            <option value="knee_friendly" selected>Adaptado para joelho</option>
          </select>
        </div>
      </section>
      
      <section className="workouts-grid">
        <div className="workout-card">
          <div className="workout-header">
            <span className="workout-tag">Técnica</span>
            <span className="workout-duration">60 min</span>
          </div>
          <h3>Treino Completo para Ponta Esquerda - Foco em Dribles</h3>
          <p>Treino completo focado em dribles e condução de bola para jogadores de ponta esquerda, adaptado para espaço reduzido.</p>
          <div className="workout-meta">
            <span className="workout-difficulty">Intermediário</span>
            <span className="workout-space">Espaço Pequeno</span>
          </div>
          <div className="workout-actions">
            <button className="primary-button">Ver Detalhes</button>
            <button className="secondary-button">Adicionar ao Calendário</button>
          </div>
        </div>
        
        <div className="workout-card">
          <div className="workout-header">
            <span className="workout-tag">Física</span>
            <span className="workout-duration">60 min</span>
          </div>
          <h3>Treino de Força e Explosão para Ponta Esquerda</h3>
          <p>Treino focado no desenvolvimento de força e explosão para jogadores de ponta esquerda, com adaptações para espaço reduzido.</p>
          <div className="workout-meta">
            <span className="workout-difficulty">Intermediário</span>
            <span className="workout-space">Espaço Pequeno</span>
          </div>
          <div className="workout-actions">
            <button className="primary-button">Ver Detalhes</button>
            <button className="secondary-button">Adicionar ao Calendário</button>
          </div>
        </div>
        
        <div className="workout-card">
          <div className="workout-header">
            <span className="workout-tag">Tática</span>
            <span className="workout-duration">60 min</span>
          </div>
          <h3>Treino Tático-Cognitivo para Ponta Esquerda</h3>
          <p>Treino focado no desenvolvimento de habilidades táticas e cognitivas para jogadores de ponta esquerda, com ênfase na tomada de decisão.</p>
          <div className="workout-meta">
            <span className="workout-difficulty">Intermediário</span>
            <span className="workout-space">Espaço Pequeno</span>
          </div>
          <div className="workout-actions">
            <button className="primary-button">Ver Detalhes</button>
            <button className="secondary-button">Adicionar ao Calendário</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente da página de calendário
export function CalendarPage() {
  return (
    <div className="calendar-page">
      <header className="page-header">
        <h1>Calendário de Treinos</h1>
        <p>Organize sua semana de treinos e acompanhe seu progresso.</p>
      </header>
      
      <section className="calendar-controls">
        <div className="date-navigation">
          <button className="nav-button">&lt; Semana Anterior</button>
          <h2>17 a 23 de Abril, 2025</h2>
          <button className="nav-button">Próxima Semana &gt;</button>
        </div>
        
        <div className="calendar-actions">
          <button className="primary-button">Adicionar Treino</button>
          <button className="secondary-button">Exportar Calendário</button>
        </div>
      </section>
      
      <section className="weekly-calendar">
        <div className="calendar-day">
          <div className="day-header">
            <h3>Segunda</h3>
            <span className="date">17/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Treino Completo para Ponta Esquerda</h4>
                <p>60 minutos • Técnica</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Terça</h3>
            <span className="date">18/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item rest-day">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Dia de Descanso Ativo</h4>
                <p>Caminhada leve ou alongamento</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Quarta</h3>
            <span className="date">19/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Treino de Força e Explosão</h4>
                <p>60 minutos • Física</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Quinta</h3>
            <span className="date">20/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item rest-day">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Dia de Descanso Ativo</h4>
                <p>Caminhada leve ou alongamento</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Sexta</h3>
            <span className="date">21/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Treino Tático-Cognitivo</h4>
                <p>60 minutos • Tática</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Sábado</h3>
            <span className="date">22/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Treino Completo para Ponta Esquerda</h4>
                <p>60 minutos • Técnica</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
        
        <div className="calendar-day">
          <div className="day-header">
            <h3>Domingo</h3>
            <span className="date">23/04</span>
          </div>
          <div className="day-content">
            <div className="workout-item rest-day">
              <span className="workout-time">Flexível</span>
              <div className="workout-info">
                <h4>Descanso Completo</h4>
                <p>Recuperação total</p>
              </div>
              <div className="workout-status incomplete"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="calendar-summary">
        <div className="summary-card">
          <h3>Resumo da Semana</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Treinos Planejados</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Treinos Concluídos</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">300</span>
              <span className="stat-label">Minutos Totais</span>
            </div>
          </div>
          <div className="summary-breakdown">
            <div className="breakdown-item">
              <span className="breakdown-label">Técnica</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '40%' }}></div>
              </div>
              <span className="breakdown-value">40%</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-label">Tática</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '20%' }}></div>
              </div>
              <span className="breakdown-value">20%</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-label">Física</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '20%' }}></div>
              </div>
              <span className="breakdown-value">20%</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-label">Mental</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '20%' }}></div>
              </div>
              <span className="breakdown-value">20%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente da página de progresso
export function ProgressPage() {
  return (
    <div className="progress-page">
      <header className="page-header">
        <h1>Acompanhamento de Progresso</h1>
        <p>Visualize sua evolução em todas as áreas do seu desenvolvimento como jogador.</p>
      </header>
      
      <section className="progress-overview">
        <div className="progress-card">
          <h3>Nível Geral</h3>
          <div className="level-indicator">
            <span className="level">Intermediário</span>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: '65%' }}></div>
            </div>
            <span className="xp-text">6500 XP / 10000 XP para Avançado</span>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Técnica</h3>
            <div className="stat-circle">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4caf50"
                  strokeWidth="3"
                  strokeDasharray="65, 100"
                />
              </svg>
              <span className="stat-value">65%</span>
            </div>
            <div className="stat-breakdown">
              <div className="breakdown-item">
                <span>Dribles</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Condução</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Finalização</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <h3>Tática</h3>
            <div className="stat-circle">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2196f3"
                  strokeWidth="3"
                  strokeDasharray="40, 100"
                />
              </svg>
              <span className="stat-value">40%</span>
            </div>
            <div className="stat-breakdown">
              <div className="breakdown-item">
                <span>Posicionamento</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Visão de Jogo</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Tomada de Decisão</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <h3>Física</h3>
            <div className="stat-circle">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ff9800"
                  strokeWidth="3"
                  strokeDasharray="55, 100"
                />
              </svg>
              <span className="stat-value">55%</span>
            </div>
            <div className="stat-breakdown">
              <div className="breakdown-item">
                <span>Resistência</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Agilidade</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Força</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <h3>Mental</h3>
            <div className="stat-circle">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#9c27b0"
                  strokeWidth="3"
                  strokeDasharray="30, 100"
                />
              </svg>
              <span className="stat-value">30%</span>
            </div>
            <div className="stat-breakdown">
              <div className="breakdown-item">
                <span>Controle Emocional</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Tomada de Decisão</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span>Concentração</span>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="progress-history">
        <h2>Histórico de Progresso</h2>
        <div className="chart-container">
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span>
              <span>Técnica</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#2196f3' }}></span>
              <span>Tática</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#ff9800' }}></span>
              <span>Física</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#9c27b0' }}></span>
              <span>Mental</span>
            </div>
          </div>
          <div className="chart">
            {/* Aqui seria renderizado um gráfico de linha mostrando o progresso ao longo do tempo */}
            <img src="/images/progress-chart.png" alt="Gráfico de progresso" />
          </div>
        </div>
      </section>
      
      <section className="achievements">
        <h2>Conquistas</h2>
        <div className="achievements-grid">
          <div className="achievement-card unlocked">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-info">
              <h3>Mestre dos Dribles</h3>
              <p>Complete 50 exercícios de dribles</p>
            </div>
            <div className="achievement-progress">
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
              <span>50/50</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">🔥</div>
            <div className="achievement-info">
              <h3>Consistência Total</h3>
              <p>Complete treinos por 30 dias consecutivos</p>
            </div>
            <div className="achievement-progress">
              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}></div>
              </div>
              <span>12/30</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">💪</div>
            <div className="achievement-info">
              <h3>Força Explosiva</h3>
              <p>Atinja nível 5 em exercícios de força</p>
            </div>
            <div className="achievement-progress">
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
              <span>3/5</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">🧠</div>
            <div className="achievement-info">
              <h3>Mente de Aço</h3>
              <p>Complete todos os exercícios mentais</p>
            </div>
            <div className="achievement-progress">
              <div className="progress-bar">
                <div className="progress" style={{ width: '25%' }}></div>
              </div>
              <span>2/8</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente da página de comunidade
export function CommunityPage() {
  return (
    <div className="community-page">
      <header className="page-header">
        <h1>Comunidade</h1>
        <p>Compartilhe experiências, faça perguntas e conecte-se com outros jogadores.</p>
      </header>
      
      <section className="community-tabs">
        <div className="tabs">
          <button className="tab active">Posts</button>
          <button className="tab">Perguntas</button>
          <button className="tab">Feedbacks</button>
        </div>
        
        <div className="tab-actions">
          <button className="primary-button">Novo Post</button>
          <button className="secondary-button">Nova Pergunta</button>
        </div>
      </section>
      
      <section className="community-content">
        <div className="content-filters">
          <div className="filter-group">
            <label>Filtrar por:</label>
            <select>
              <option value="recent">Mais Recentes</option>
              <option value="popular">Mais Populares</option>
              <option value="trending">Em Alta</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Categoria:</label>
            <select>
              <option value="all">Todas</option>
              <option value="success_story">História de Sucesso</option>
              <option value="training_tip">Dica de Treino</option>
              <option value="equipment_hack">Adaptação de Equipamento</option>
              <option value="injury_prevention">Prevenção de Lesão</option>
              <option value="motivation">Motivação</option>
              <option value="general">Geral</option>
            </select>
          </div>
          
          <div className="search-group">
            <input type="text" placeholder="Pesquisar na comunidade..." />
            <button>🔍</button>
          </div>
        </div>
        
        <div className="posts-list">
          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <img src="/images/avatars/carlos.jpg" alt="Avatar do usuário" />
                <div>
                  <h3>Carlos Silva</h3>
                  <span className="post-date">10 de abril, 2025</span>
                </div>
              </div>
              <div className="post-category">Dica de Treino</div>
            </div>
            
            <div className="post-content">
              <h2>Como adaptei dribles para meu quintal de 4x3m</h2>
              <p>Queria compartilhar minha experiência treinando dribles em um espaço super limitado. Meu quintal tem apenas 4x3m, mas consegui adaptar vários exercícios que melhoraram muito minha técnica...</p>
              <div className="post-image">
                <img src="/images/community/small-space-dribbling.jpg" alt="Setup de treino em espaço pequeno" />
              </div>
            </div>
            
            <div className="post-footer">
              <div className="post-stats">
                <span>24 curtidas</span>
                <span>2 comentários</span>
              </div>
              <div className="post-tags">
                <span className="tag">espaço pequeno</span>
                <span className="tag">dribles</span>
                <span className="tag">adaptação</span>
              </div>
            </div>
            
            <div className="post-actions">
              <button className="action-button">👍 Curtir</button>
              <button className="action-button">💬 Comentar</button>
              <button className="action-button">📤 Compartilhar</button>
            </div>
          </div>
          
          <div className="post-card">
            <div className="post-header">
              <div className="user-info">
                <img src="/images/avatars/fernanda.jpg" alt="Avatar do usuário" />
                <div>
                  <h3>Fernanda Costa</h3>
                  <span className="post-date">5 de abril, 2025</span>
                </div>
              </div>
              <div className="post-category">Prevenção de Lesão</div>
            </div>
            
            <div className="post-content">
              <h2>Recuperação do joelho: minha jornada e exercícios adaptados</h2>
              <p>Há 6 meses tive uma lesão no joelho que me deixou preocupada se conseguiria voltar a jogar como ponta esquerda. Quero compartilhar minha experiência de recuperação e os exercícios que me ajudaram a voltar mais forte...</p>
              <div className="post-gallery">
                <img src="/images/community/knee-exercises.jpg" alt="Exercícios de fortalecimento para o joelho" />
                <div className="video-thumbnail">
                  <img src="/images/community/balance-training-thumb.jpg" alt="Demonstração de exercícios de equilíbrio" />
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
            
            <div className="post-footer">
              <div className="post-stats">
                <span>37 curtidas</span>
                <span>2 comentários</span>
              </div>
              <div className="post-tags">
                <span className="tag">recuperação</span>
                <span className="tag">joelho</span>
                <span className="tag">lesão</span>
                <span className="tag">adaptação</span>
              </div>
            </div>
            
            <div className="post-actions">
              <button className="action-button">👍 Curtir</button>
              <button className="action-button">💬 Comentar</button>
              <button className="action-button">📤 Compartilhar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente da página de dicas profissionais
export function ProTipsPage() {
  return (
    <div className="protips-page">
      <header className="page-header">
        <h1>Dicas Profissionais</h1>
        <p>Conselhos e estratégias de especialistas para maximizar seu desenvolvimento.</p>
      </header>
      
      <section className="featured-tip">
        <div className="tip-content">
          <div className="tip-category">Técnica</div>
          <h2>Técnicas avançadas de drible para espaços reduzidos</h2>
          <p>Como ponta esquerda, sua capacidade de driblar em espaços apertados pode ser o diferencial entre criar uma oportunidade de gol ou perder a posse de bola. Após treinar centenas de jogadores em diferentes condições, desenvolvi algumas técnicas específicas para aprimorar dribles em espaços muito limitados...</p>
          <div className="author-info">
            <img src="/images/authors/ricardo.jpg" alt="Ricardo Oliveira" />
            <div>
              <h3>Ricardo Oliveira</h3>
              <p>Ex-jogador profissional e treinador de base</p>
            </div>
          </div>
          <button className="primary-button">Ler Artigo Completo</button>
        </div>
        <div className="tip-image">
          <img src="/images/protips/dribbling-techniques.jpg" alt="Técnicas de drible" />
        </div>
      </section>
      
      <section className="tips-filters">
        <div className="filter-group">
          <label>Categoria:</label>
          <select>
            <option value="all">Todas</option>
            <option value="technical">Técnica</option>
            <option value="tactical">Tática</option>
            <option value="physical">Física</option>
            <option value="mental">Mental</option>
            <option value="nutrition">Nutrição</option>
            <option value="recovery">Recuperação</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Nível:</label>
          <select>
            <option value="all">Todos</option>
            <option value="beginner">Iniciante</option>
            <option value="intermediate" selected>Intermediário</option>
            <option value="advanced">Avançado</option>
          </select>
        </div>
        
        <div className="search-group">
          <input type="text" placeholder="Pesquisar dicas..." />
          <button>🔍</button>
        </div>
      </section>
      
      <section className="tips-grid">
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-category">Física</span>
            <span className="tip-level">Todos os níveis</span>
          </div>
          <h3>Protegendo seu joelho: guia completo para jogadores de futebol</h3>
          <p>Como fisioterapeuta que trabalhou com centenas de jogadores de futebol, do amador ao profissional, posso afirmar com certeza: a saúde do seu joelho é fundamental para sua longevidade no esporte...</p>
          <div className="tip-footer">
            <div className="author-info">
              <img src="/images/authors/patricia.jpg" alt="Dra. Patrícia Santos" />
              <span>Dra. Patrícia Santos</span>
            </div>
            <div className="tip-stats">
              <span>203 curtidas</span>
              <span>3128 visualizações</span>
            </div>
          </div>
        </div>
        
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-category">Método de Treino</span>
            <span className="tip-level">Todos os níveis</span>
          </div>
          <h3>Maximizando resultados em espaços mínimos: metodologia completa</h3>
          <p>Após anos desenvolvendo metodologias de treinamento para atletas em comunidades com infraestrutura limitada, criei o sistema "Espaço Mínimo, Resultado Máximo" (EMRM). Esta abordagem permite que jogadores desenvolvam habilidades de alto nível mesmo em espaços extremamente reduzidos...</p>
          <div className="tip-footer">
            <div className="author-info">
              <img src="/images/authors/carlos.jpg" alt="Prof. Carlos Mendes" />
              <span>Prof. Carlos Mendes</span>
            </div>
            <div className="tip-stats">
              <span>178 curtidas</span>
              <span>2654 visualizações</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="authors-section">
        <h2>Nossos Especialistas</h2>
        <div className="authors-grid">
          <div className="author-card">
            <img src="/images/authors/ricardo.jpg" alt="Ricardo Oliveira" />
            <h3>Ricardo Oliveira</h3>
            <p>Ex-jogador profissional e treinador de base</p>
            <div className="author-credentials">
              <span>Ex-jogador profissional (1995-2010)</span>
              <span>Licença A de treinador CBF</span>
            </div>
            <button className="secondary-button">Ver Perfil</button>
          </div>
          
          <div className="author-card">
            <img src="/images/authors/patricia.jpg" alt="Dra. Patrícia Santos" />
            <h3>Dra. Patrícia Santos</h3>
            <p>Fisioterapeuta esportiva e especialista em reabilitação</p>
            <div className="author-credentials">
              <span>Doutorado em Fisioterapia Esportiva</span>
              <span>Ex-fisioterapeuta de clube da Série A</span>
            </div>
            <button className="secondary-button">Ver Perfil</button>
          </div>
          
          <div className="author-card">
            <img src="/images/authors/carlos.jpg" alt="Prof. Carlos Mendes" />
            <h3>Prof. Carlos Mendes</h3>
            <p>Preparador físico e especialista em treinamento em espaços reduzidos</p>
            <div className="author-credentials">
              <span>Mestrado em Ciências do Esporte</span>
              <span>Criador do método "Espaço Mínimo, Resultado Máximo"</span>
            </div>
            <button className="secondary-button">Ver Perfil</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Exportar todos os componentes
export {
  FutebolApp as default,
  Header,
  Sidebar,
  Footer,
  HomePage,
  WorkoutsPage,
  CalendarPage,
  ProgressPage,
  CommunityPage,
  ProTipsPage
};
