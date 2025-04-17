// Definição dos tipos para o componente de responsividade

// Tipo para representar um breakpoint de responsividade
export enum Breakpoint {
  MOBILE_SMALL = 'mobile_small',   // < 320px
  MOBILE = 'mobile',               // 320px - 480px
  TABLET_SMALL = 'tablet_small',   // 481px - 768px
  TABLET = 'tablet',               // 769px - 1024px
  DESKTOP = 'desktop',             // 1025px - 1440px
  DESKTOP_LARGE = 'desktop_large'  // > 1440px
}

// Tipo para representar um teste de responsividade
export interface ResponsivenessTest {
  id: string;
  device: Device;
  breakpoint: Breakpoint;
  viewport: Viewport;
  issues: ResponsivenessIssue[];
  screenshotUrl: string;
  testedAt: Date;
  passedTest: boolean;
}

// Tipo para representar um dispositivo de teste
export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  screenSize: string;
  pixelRatio: number;
  userAgent: string;
}

// Tipo para representar um viewport
export interface Viewport {
  width: number;
  height: number;
  orientation: Orientation;
}

// Tipo para representar um problema de responsividade
export interface ResponsivenessIssue {
  id: string;
  component: string;
  description: string;
  severity: IssueSeverity;
  fixSuggestion: string;
  affectedBreakpoints: Breakpoint[];
}

// Tipos de dispositivos
export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}

// Orientações de tela
export enum Orientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

// Severidade de problemas
export enum IssueSeverity {
  LOW = 'low',           // Problema estético menor
  MEDIUM = 'medium',     // Problema de usabilidade, mas funcionalidade mantida
  HIGH = 'high',         // Problema que afeta significativamente a usabilidade
  CRITICAL = 'critical'  // Problema que impede o uso da funcionalidade
}

// Banco de dados de dispositivos para teste
export const testDevices: Device[] = [
  {
    id: 'device-001',
    name: 'iPhone SE',
    type: DeviceType.MOBILE,
    screenSize: '4.7 polegadas',
    pixelRatio: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  },
  {
    id: 'device-002',
    name: 'Samsung Galaxy S21',
    type: DeviceType.MOBILE,
    screenSize: '6.2 polegadas',
    pixelRatio: 3,
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36'
  },
  {
    id: 'device-003',
    name: 'iPad Air',
    type: DeviceType.TABLET,
    screenSize: '10.9 polegadas',
    pixelRatio: 2,
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  },
  {
    id: 'device-004',
    name: 'MacBook Pro',
    type: DeviceType.DESKTOP,
    screenSize: '13.3 polegadas',
    pixelRatio: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15'
  },
  {
    id: 'device-005',
    name: 'Dell XPS 15',
    type: DeviceType.DESKTOP,
    screenSize: '15.6 polegadas',
    pixelRatio: 1.5,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
  }
];

// Banco de dados de testes de responsividade
export const responsivenessTests: ResponsivenessTest[] = [
  {
    id: 'test-001',
    device: testDevices.find(device => device.id === 'device-001'), // iPhone SE
    breakpoint: Breakpoint.MOBILE,
    viewport: {
      width: 375,
      height: 667,
      orientation: Orientation.PORTRAIT
    },
    issues: [
      {
        id: 'issue-001',
        component: 'Calendário de Treinos',
        description: 'Calendário semanal não se ajusta corretamente em telas menores que 375px de largura.',
        severity: IssueSeverity.MEDIUM,
        fixSuggestion: 'Implementar visualização alternativa para dispositivos móveis pequenos, mostrando apenas um dia por vez com opção de navegação.',
        affectedBreakpoints: [Breakpoint.MOBILE_SMALL, Breakpoint.MOBILE]
      }
    ],
    screenshotUrl: '/test-screenshots/iphone-se-portrait.jpg',
    testedAt: new Date('2025-04-17T15:30:00Z'),
    passedTest: false
  },
  {
    id: 'test-002',
    device: testDevices.find(device => device.id === 'device-002'), // Samsung Galaxy S21
    breakpoint: Breakpoint.MOBILE,
    viewport: {
      width: 412,
      height: 915,
      orientation: Orientation.PORTRAIT
    },
    issues: [],
    screenshotUrl: '/test-screenshots/galaxy-s21-portrait.jpg',
    testedAt: new Date('2025-04-17T15:45:00Z'),
    passedTest: true
  },
  {
    id: 'test-003',
    device: testDevices.find(device => device.id === 'device-002'), // Samsung Galaxy S21
    breakpoint: Breakpoint.TABLET_SMALL,
    viewport: {
      width: 915,
      height: 412,
      orientation: Orientation.LANDSCAPE
    },
    issues: [
      {
        id: 'issue-002',
        component: 'Menu de Navegação',
        description: 'Menu de navegação ocupa espaço vertical excessivo em orientação paisagem.',
        severity: IssueSeverity.LOW,
        fixSuggestion: 'Converter para menu horizontal quando em orientação paisagem em dispositivos móveis.',
        affectedBreakpoints: [Breakpoint.MOBILE, Breakpoint.TABLET_SMALL]
      }
    ],
    screenshotUrl: '/test-screenshots/galaxy-s21-landscape.jpg',
    testedAt: new Date('2025-04-17T16:00:00Z'),
    passedTest: true
  },
  {
    id: 'test-004',
    device: testDevices.find(device => device.id === 'device-003'), // iPad Air
    breakpoint: Breakpoint.TABLET,
    viewport: {
      width: 820,
      height: 1180,
      orientation: Orientation.PORTRAIT
    },
    issues: [],
    screenshotUrl: '/test-screenshots/ipad-air-portrait.jpg',
    testedAt: new Date('2025-04-17T16:15:00Z'),
    passedTest: true
  },
  {
    id: 'test-005',
    device: testDevices.find(device => device.id === 'device-004'), // MacBook Pro
    breakpoint: Breakpoint.DESKTOP,
    viewport: {
      width: 1440,
      height: 900,
      orientation: Orientation.LANDSCAPE
    },
    issues: [],
    screenshotUrl: '/test-screenshots/macbook-pro.jpg',
    testedAt: new Date('2025-04-17T16:30:00Z'),
    passedTest: true
  }
];

// Funções para gerenciar testes de responsividade

// Função para obter testes por dispositivo
export function getTestsByDevice(deviceId: string): ResponsivenessTest[] {
  return responsivenessTests.filter(test => test.device.id === deviceId);
}

// Função para obter testes por breakpoint
export function getTestsByBreakpoint(breakpoint: Breakpoint): ResponsivenessTest[] {
  return responsivenessTests.filter(test => test.breakpoint === breakpoint);
}

// Função para obter testes com problemas
export function getTestsWithIssues(): ResponsivenessTest[] {
  return responsivenessTests.filter(test => test.issues.length > 0);
}

// Função para obter testes aprovados
export function getPassedTests(): ResponsivenessTest[] {
  return responsivenessTests.filter(test => test.passedTest);
}

// Função para obter problemas por severidade
export function getIssuesBySeverity(severity: IssueSeverity): ResponsivenessIssue[] {
  const allIssues: ResponsivenessIssue[] = [];
  
  responsivenessTests.forEach(test => {
    test.issues
      .filter(issue => issue.severity === severity)
      .forEach(issue => allIssues.push(issue));
  });
  
  return allIssues;
}

// Função para obter problemas por componente
export function getIssuesByComponent(component: string): ResponsivenessIssue[] {
  const allIssues: ResponsivenessIssue[] = [];
  
  responsivenessTests.forEach(test => {
    test.issues
      .filter(issue => issue.component === component)
      .forEach(issue => allIssues.push(issue));
  });
  
  return allIssues;
}

// Função para verificar se um componente é responsivo em todos os breakpoints
export function isComponentFullyResponsive(component: string): boolean {
  const issues = getIssuesByComponent(component);
  return issues.length === 0;
}

// Função para obter um resumo dos testes de responsividade
export function getResponsivenessTestSummary(): {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  issuesBySeverity: Record<IssueSeverity, number>;
  issuesByBreakpoint: Record<Breakpoint, number>;
} {
  const passedTests = getPassedTests().length;
  const totalTests = responsivenessTests.length;
  const failedTests = totalTests - passedTests;
  
  // Contagem de problemas por severidade
  const issuesBySeverity: Record<IssueSeverity, number> = {
    [IssueSeverity.LOW]: 0,
    [IssueSeverity.MEDIUM]: 0,
    [IssueSeverity.HIGH]: 0,
    [IssueSeverity.CRITICAL]: 0
  };
  
  // Contagem de problemas por breakpoint
  const issuesByBreakpoint: Record<Breakpoint, number> = {
    [Breakpoint.MOBILE_SMALL]: 0,
    [Breakpoint.MOBILE]: 0,
    [Breakpoint.TABLET_SMALL]: 0,
    [Breakpoint.TABLET]: 0,
    [Breakpoint.DESKTOP]: 0,
    [Breakpoint.DESKTOP_LARGE]: 0
  };
  
  // Contar problemas
  responsivenessTests.forEach(test => {
    test.issues.forEach(issue => {
      issuesBySeverity[issue.severity]++;
      
      issue.affectedBreakpoints.forEach(breakpoint => {
        issuesByBreakpoint[breakpoint]++;
      });
    });
  });
  
  return {
    totalTests,
    passedTests,
    failedTests,
    issuesBySeverity,
    issuesByBreakpoint
  };
}

// Função para simular um teste de responsividade em um novo dispositivo
export function simulateResponsivenessTest(
  deviceId: string,
  viewport: Viewport
): ResponsivenessTest {
  const device = testDevices.find(d => d.id === deviceId);
  if (!device) return null;
  
  // Determinar o breakpoint com base na largura do viewport
  let breakpoint: Breakpoint;
  if (viewport.width < 320) {
    breakpoint = Breakpoint.MOBILE_SMALL;
  } else if (viewport.width < 481) {
    breakpoint = Breakpoint.MOBILE;
  } else if (viewport.width < 769) {
    breakpoint = Breakpoint.TABLET_SMALL;
  } else if (viewport.width < 1025) {
    breakpoint = Breakpoint.TABLET;
  } else if (viewport.width < 1441) {
    breakpoint = Breakpoint.DESKTOP;
  } else {
    breakpoint = Breakpoint.DESKTOP_LARGE;
  }
  
  // Simular problemas com base em testes anteriores
  const issues: ResponsivenessIssue[] = [];
  
  // Verificar se existem problemas conhecidos para este breakpoint
  responsivenessTests.forEach(test => {
    test.issues.forEach(issue => {
      if (issue.affectedBreakpoints.includes(breakpoint)) {
        // Evitar duplicatas
        if (!issues.some(i => i.id === issue.id)) {
          issues.push(issue);
        }
      }
    });
  });
  
  return {
    id: `test-simulated-${Date.now()}`,
    device,
    breakpoint,
    viewport,
    issues,
    screenshotUrl: '/test-screenshots/simulated.jpg',
    testedAt: new Date(),
    passedTest: issues.length === 0
  };
}
