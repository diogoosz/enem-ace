export type Question = {
  id: number;
  subject: 'Matemática' | 'Física' | 'Química';
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  statement: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Uma loja de roupas oferece um desconto de 20% em todas as peças. Se uma camiseta custa R$ 50,00, qual será o valor final com o desconto?',
    options: ['R$ 30,00', 'R$ 35,00', 'R$ 40,00', 'R$ 45,00', 'R$ 10,00'],
    correctAnswer: 'R$ 40,00',
    explanation: 'O desconto é de 20% de R$ 50,00, que é 0.20 * 50 = R$ 10,00. O valor final é R$ 50,00 - R$ 10,00 = R$ 40,00.'
  },
  {
    id: 2,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual das seguintes leis da física descreve a relação entre força, massa e aceleração?',
    options: ['Lei da Gravitação Universal', 'Primeira Lei de Newton', 'Segunda Lei de Newton', 'Terceira Lei de Newton', 'Lei de Ohm'],
    correctAnswer: 'Segunda Lei de Newton',
    explanation: 'A Segunda Lei de Newton, F = ma, estabelece que a força resultante aplicada a um objeto é igual ao produto de sua massa pela sua aceleração.'
  },
  {
    id: 3,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual é o símbolo químico do elemento Oxigênio?',
    options: ['H', 'He', 'O', 'Au', 'Ag'],
    correctAnswer: 'O',
    explanation: 'O símbolo químico para o elemento Oxigênio é "O". "H" é Hidrogênio, "He" é Hélio, "Au" é Ouro e "Ag" é Prata.'
  },
  {
    id: 4,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Um terreno retangular tem 15 metros de largura e 25 metros de comprimento. Qual é a área total do terreno em metros quadrados?',
    options: ['375 m²', '400 m²', '350 m²', '325 m²', '80 m²'],
    correctAnswer: '375 m²',
    explanation: 'A área de um retângulo é calculada multiplicando-se a largura pelo comprimento. Área = 15 m * 25 m = 375 m².'
  },
  {
    id: 5,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um carro viaja a uma velocidade constante de 60 km/h. Quanto tempo levará para percorrer uma distância de 180 km?',
    options: ['2 horas', '2.5 horas', '3 horas', '3.5 horas', '4 horas'],
    correctAnswer: '3 horas',
    explanation: 'Usando a fórmula Tempo = Distância / Velocidade, temos: Tempo = 180 km / 60 km/h = 3 horas.'
  },
  {
    id: 6,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Qual o pH de uma solução que possui uma concentração de íons hidrogênio [H+] de 1.0 x 10⁻⁴ mol/L?',
    options: ['2', '3', '4', '5', '10'],
    correctAnswer: '4',
    explanation: 'O pH é calculado como o logaritmo negativo da concentração de íons hidrogênio: pH = -log[H+]. Portanto, pH = -log(1.0 x 10⁻⁴) = 4.'
  },
  {
    id: 7,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Em uma progressão aritmética, o quinto termo é 18 e o oitavo termo é 30. Qual é a razão desta progressão?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'A fórmula do termo geral é an = a1 + (n-1)r. Temos a5 = a1 + 4r = 18 e a8 = a1 + 7r = 30. Subtraindo as duas equações, (a1 + 7r) - (a1 + 4r) = 30 - 18, o que resulta em 3r = 12, e portanto, r = 4.'
  },
  {
    id: 8,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um objeto de 2 kg é lançado verticalmente para cima com uma velocidade inicial de 20 m/s. Desprezando a resistência do ar e considerando g = 10 m/s², qual a altura máxima atingida?',
    options: ['10 m', '15 m', '20 m', '25 m', '30 m'],
    correctAnswer: '20 m',
    explanation: 'Pela conservação de energia, a energia cinética inicial (Ec = 1/2 * m * v²) é convertida em energia potencial gravitacional (Epg = m * g * h) na altura máxima. Assim, 1/2 * 2 * (20)² = 2 * 10 * h. Simplificando, 400 = 20h, o que resulta em h = 20 m.'
  },
  {
    id: 9,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual o número de mols em 90g de água (H₂O)? (Dados: Massa molar H = 1 g/mol, O = 16 g/mol)',
    options: ['2 mols', '3 mols', '4 mols', '5 mols', '6 mols'],
    correctAnswer: '5 mols',
    explanation: 'A massa molar da água (H₂O) é 2*(1 g/mol) + 16 g/mol = 18 g/mol. O número de mols é a massa total dividida pela massa molar: 90g / 18 g/mol = 5 mols.'
  },
  {
    id: 10,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é o valor de x na equação 3x - 7 = 11?',
    options: ['4', '5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'Para resolver a equação 3x - 7 = 11, primeiro some 7 aos dois lados: 3x = 18. Depois, divida os dois lados por 3: x = 6.'
  },
  {
    id: 11,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um chuveiro elétrico tem uma potência de 5500W e opera em uma tensão de 220V. Qual a corrente elétrica que o atravessa?',
    options: ['20A', '25A', '30A', '35A', '40A'],
    correctAnswer: '25A',
    explanation: 'A potência elétrica (P) é relacionada à tensão (V) e à corrente (I) pela fórmula P = V * I. Portanto, I = P / V. I = 5500W / 220V = 25A.'
  },
  {
    id: 12,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O processo de passagem de uma substância do estado sólido diretamente para o gasoso é chamado de:',
    options: ['Fusão', 'Vaporização', 'Solidificação', 'Condensação', 'Sublimação'],
    correctAnswer: 'Sublimação',
    explanation: 'Sublimação é a mudança de estado físico diretamente do sólido para o gasoso, sem passar pelo estado líquido.'
  },
  {
    id: 13,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Se o logaritmo de x na base 2 é 5, qual o valor de x?',
    options: ['10', '16', '25', '32', '64'],
    correctAnswer: '32',
    explanation: 'A definição de logaritmo diz que se log₂(x) = 5, então 2⁵ = x. Calculando 2⁵, temos 2*2*2*2*2 = 32.'
  },
  {
    id: 14,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual é a unidade de medida de frequência no Sistema Internacional (SI)?',
    options: ['Watt', 'Joule', 'Hertz', 'Pascal', 'Newton'],
    correctAnswer: 'Hertz',
    explanation: 'A unidade de frequência no SI é o Hertz (Hz), que corresponde a ciclos por segundo.'
  },
  {
    id: 15,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Para a reação 2H₂(g) + O₂(g) → 2H₂O(g), quantos litros de água gasosa são produzidos a partir de 10 litros de oxigênio, nas mesmas condições de temperatura e pressão?',
    options: ['5 L', '10 L', '15 L', '20 L', '25 L'],
    correctAnswer: '20 L',
    explanation: 'Pela Lei de Gay-Lussac para volumes de gases, a proporção estequiométrica em mols é a mesma que a proporção em volumes. A proporção entre O₂ e H₂O é de 1:2. Portanto, se 10 L de O₂ reagem, serão produzidos 2 * 10 L = 20 L de H₂O.'
  },
  {
    id: 16,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um dado de seis faces é lançado. Qual a probabilidade de sair um número par?',
    options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
    correctAnswer: '1/2',
    explanation: 'Os números pares em um dado são 2, 4 e 6 (3 casos favoráveis). O total de resultados possíveis é 6. A probabilidade é 3/6, que simplificando é 1/2.'
  },
  {
    id: 17,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Duas cargas pontuais Q1 = +4μC e Q2 = -6μC estão separadas por uma distância de 30 cm no vácuo. Qual a intensidade da força elétrica entre elas? (Dado: k₀ = 9 x 10⁹ N·m²/C²)',
    options: ['1,2 N', '2,4 N', '3,6 N', '4,8 N', '6,0 N'],
    correctAnswer: '2,4 N',
    explanation: 'Pela Lei de Coulomb, F = k * |Q1 * Q2| / d². Convertendo as unidades: 4μC = 4x10⁻⁶ C, -6μC = -6x10⁻⁶ C, 30 cm = 0,3 m. F = (9x10⁹ * 4x10⁻⁶ * 6x10⁻⁶) / (0,3)². F = (216x10⁻³) / 0,09 = 2400x10⁻³ = 2,4 N.'
  },
  {
    id: 18,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual dos seguintes compostos é considerado um ácido?',
    options: ['NaCl', 'H₂O', 'HCl', 'NaOH', 'CH₄'],
    correctAnswer: 'HCl',
    explanation: 'HCl (Ácido Clorídrico) é um ácido pois em solução aquosa se ioniza e libera íons H+. NaOH é uma base, NaCl é um sal, H₂O é água e CH₄ é um hidrocarboneto.'
  },
  {
    id: 19,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se duas bolas sucessivamente e sem reposição, qual a probabilidade de ambas serem vermelhas?',
    options: ['5/14', '25/64', '5/8', '20/56', '1/2'],
    correctAnswer: '5/14',
    explanation: 'A probabilidade da primeira ser vermelha é 5/8. Após retirar uma vermelha, restam 4 vermelhas e 7 bolas no total. A probabilidade da segunda ser vermelha é 4/7. A probabilidade de ambos os eventos ocorrerem é (5/8) * (4/7) = 20/56, que simplificando é 5/14.'
  },
  {
    id: 20,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um espelho côncavo possui um raio de curvatura de 40 cm. Um objeto é colocado a 60 cm do vértice do espelho. A que distância do vértice a imagem será formada?',
    options: ['20 cm', '30 cm', '40 cm', '50 cm', '60 cm'],
    correctAnswer: '30 cm',
    explanation: 'A distância focal (f) é metade do raio de curvatura, f = R/2 = 40/2 = 20 cm. A posição do objeto (p) é 60 cm. Usando a equação de Gauss (1/f = 1/p + 1/p\'), temos 1/20 = 1/60 + 1/p\'. 1/p\' = 1/20 - 1/60 = (3-1)/60 = 2/60 = 1/30. Portanto, a posição da imagem (p\') é 30 cm.'
  }
];
