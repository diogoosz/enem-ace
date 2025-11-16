

export type Plan = 'Basico' | 'Intermediario' | 'Premium';

// This maps your plan names to the price IDs from your Stripe products
// ATENÇÃO: Substitua estes IDs pelos IDs de preço reais do seu painel Stripe.
const priceIds: Record<Plan, string> = {
  'Basico': 'price_1SUCx1GRgvt8K8GIG2Pk6TvL', // <-- SUBSTITUA ESTE ID
  'Intermediario': 'price_1SUCxKGRgvt8K8GIMXN8YKjB', // <-- SUBSTITUA ESTE ID
  'Premium': 'price_1SUCxTGRgvt8K8GIIyU1p3lx', // <-- SUBSTITUA ESTE ID
};

export const getPriceIdForPlan = (plan: Plan): string | null => {
    return priceIds[plan] || null;
}

export type Feature = 
  // Plano Básico
  | 'questoes'
  | 'correcao-basica'
  | 'explicacoes-curtas'
  | 'estatisticas-basicas'
  // Plano Intermediário
  | 'explicacoes-detalhadas'
  | 'simulados-personalizados'
  | 'relatorios-inteligentes-basico'
  // Plano Premium
  | 'plano-de-estudos'
  | 'questoes-extras'
  | 'temas-redacao'
  | 'correcao-redacao-completa'
  | 'metas-diarias'
  | 'evolucao-completa';

export const plans: Record<Plan, { features: Feature[], price: string }> = {
  'Basico': {
    price: '9,90',
    features: [
      'questoes',
      'correcao-basica',
      'explicacoes-curtas',
      'estatisticas-basicas'
    ],
  },
  'Intermediario': {
    price: '19,90',
    features: [
      'questoes',
      'correcao-basica',
      'explicacoes-curtas',
      'estatisticas-basicas',
      'explicacoes-detalhadas',
      'simulados-personalizados',
      'relatorios-inteligentes-basico'
    ],
  },
  'Premium': {
    price: '29,90',
    features: [
      'questoes',
      'correcao-basica',
      'explicacoes-curtas',
      'estatisticas-basicas',
      'explicacoes-detalhadas',
      'simulados-personalizados',
      'relatorios-inteligentes-basico',
      'plano-de-estudos',
      'questoes-extras',
      'temas-redacao',
      'correcao-redacao-completa',
      'metas-diarias',
      'evolucao-completa'
    ],
  },
};

export const hasAccess = (userPlan: Plan | undefined, feature: Feature): boolean => {
  if (!userPlan) {
    return false;
  }
  return plans[userPlan]?.features.includes(feature) ?? false;
};

export const allFeatures: Record<Feature, { title: string, description: string }> = {
  'questoes': { title: 'Acesso às Questões', description: 'Acesso ao banco de questões de Matemática, Física e Biologia.' },
  'correcao-basica': { title: 'Correção Básica', description: 'Feedback imediato de certo ou errado para as questões.' },
  'explicacoes-curtas': { title: 'Explicações Curtas da IA', description: 'Justificativa concisa da IA para a resposta correta.' },
  'estatisticas-basicas': { title: 'Estatísticas Básicas', description: 'Acompanhamento de acertos por matéria e dificuldade.' },
  'explicacoes-detalhadas': { title: 'Explicações Detalhadas da IA', description: 'Análise passo a passo da resolução e dicas de estudo.' },
  'simulados-personalizados': { title: 'Simulados Personalizados', description: 'Crie simulados escolhendo matéria, dificuldade e número de questões.' },
  'relatorios-inteligentes-basico': { title: 'Relatórios Inteligentes', description: 'Análise de pontos fortes e fracos no seu desempenho.' },
  'plano-de-estudos': { title: 'Plano de Estudos Semanal', description: 'IA cria um cronograma de estudos personalizado para a semana.' },
  'questoes-extras': { title: 'Gerador de Questões Extras', description: 'Peça para a IA criar questões inéditas para você praticar.' },
  'temas-redacao': { title: 'Gerador de Temas de Redação', description: 'Acesso a diversos temas no estilo ENEM para praticar sua escrita.' },
  'correcao-redacao-completa': { title: 'Correção de Redação Completa', description: 'A IA avalia sua redação com base nas 5 competências do ENEM.' },
  'metas-diarias': { title: 'Metas Diárias com IA', description: 'Receba sugestões de metas diárias para otimizar seus estudos.' },
  'evolucao-completa': { title: 'Evolução Completa', description: 'Acompanhe seu progresso detalhado ao longo do tempo.' },
};
