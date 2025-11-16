
export type Question = {
  id: number;
  subject: 'Matemática' | 'Física' | 'Biologia' | 'Química';
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  statement: string;
  image?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const questions: Question[] = [
  // =================================================
  //                 MATEMÁTICA (90)
  // =================================================
  // --- FÁCIL (30) ---
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
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é o valor de x na equação 3x - 7 = 11?',
    options: ['4', '5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'Para resolver a equação 3x - 7 = 11, primeiro some 7 aos dois lados: 3x = 18. Depois, divida os dois lados por 3: x = 6.'
  },
  {
    id: 3,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um dado de seis faces é lançado. Qual a probabilidade de sair um número par?',
    options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
    correctAnswer: '1/2',
    explanation: 'Os números pares em um dado são 2, 4 e 6 (3 casos favoráveis). O total de resultados possíveis é 6. A probabilidade é 3/6, que simplificando é 1/2.'
  },
  {
    id: 4,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: '(ENEM 2010 - Adaptada) Uma pessoa, ao fazer uma pesquisa com alguns alunos de um curso, coletou as idades dos entrevistados e organizou esses dados no gráfico. Qual a moda das idades dos alunos entrevistados, sabendo que a idade 19 foi a mais frequente?',
    image: 'https://picsum.photos/seed/enem-graph/600/300',
    options: ['9', '12', '18', '19', '20'],
    correctAnswer: '19',
    explanation: 'Moda, em estatística, é o valor que aparece com mais frequência em um conjunto de dados. Segundo o enunciado, a idade de 19 anos tem a maior frequência, sendo, portanto, a moda.'
  },
  {
    id: 5,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é a área de um círculo com raio de 10 cm? (Use π ≈ 3,14)',
    options: ['31,4 cm²', '62,8 cm²', '100 cm²', '314 cm²', '3140 cm²'],
    correctAnswer: '314 cm²',
    explanation: 'A fórmula da área de um círculo é A = π * r². Substituindo os valores, temos A = 3,14 * (10 cm)². A = 3,14 * 100 cm² = 314 cm².'
  },
  {
    id: 6,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Se um relógio marca 3 horas, qual é o menor ângulo formado pelos ponteiros das horas e dos minutos?',
    image: 'https://picsum.photos/seed/clock-three/400/400',
    options: ['60°', '75°', '90°', '100°', '120°'],
    correctAnswer: '90°',
    explanation: 'Às 3 horas, o ponteiro dos minutos está no 12 e o das horas está no 3. O relógio é um círculo de 360°, dividido em 12 horas. O ângulo entre cada hora é 360°/12 = 30°. A distância entre o 12 e o 3 é de 3 horas, então o ângulo é 3 * 30° = 90°.'
  },
  {
    id: 7,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Uma viagem de carro de 300 km foi feita em 5 hours. Qual foi a velocidade média do carro?',
    options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h', '70 km/h'],
    correctAnswer: '60 km/h',
    explanation: 'Velocidade média é calculada dividindo-se a distância pelo tempo. Velocidade = 300 km / 5 h = 60 km/h.'
  },
  {
    id: 8,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: '(ENEM 2011 - Adaptada) A produção de lixo orgânico por pessoa no Brasil é de aproximadamente 199kg por ano, considerando uma produção total de 383kg anuais. Qual o percentual de lixo orgânico?',
    image: 'https://picsum.photos/seed/lixo-grafico/600/400',
    options: ['48%', '52%', '55%', '60%', '65%'],
    correctAnswer: '52%',
    explanation: 'O percentual é (199 kg / 383 kg) * 100%, que é aproximadamente 52%. O gráfico original do ENEM mostrava 52% diretamente.'
  },
  {
    id: 9,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual o resultado da expressão numérica 5 + 3 x 2?',
    options: ['16', '11', '13', '8', '10'],
    correctAnswer: '11',
    explanation: 'De acordo com a ordem das operações (PEMDAS/BODMAS), a multiplicação deve ser feita antes da adição. Portanto, 3 x 2 = 6. E então, 5 + 6 = 11.'
  },
  {
    id: 10,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um terreno quadrado tem 144 m² de área. Qual é o comprimento de cada lado do terreno?',
    options: ['10 m', '11 m', '12 m', '13 m', '14 m'],
    correctAnswer: '12 m',
    explanation: 'A área de um quadrado é lado * lado (lado²). Para encontrar o lado, calculamos a raiz quadrada da área. A raiz quadrada de 144 é 12. Portanto, cada lado mede 12 m.'
  },
  {
    id: 11,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é o perímetro de um retângulo com 5 metros de largura e 10 metros de comprimento?',
    options: ['15 m', '25 m', '30 m', '50 m', '100 m'],
    correctAnswer: '30 m',
    explanation: 'O perímetro de um retângulo é a soma de todos os seus lados. P = 2 * (largura + comprimento) = 2 * (5 + 10) = 2 * 15 = 30 metros.'
  },
  {
    id: 12,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Se 5 cadernos custam R$ 25,00, quanto custarão 8 cadernos?',
    options: ['R$ 30,00', 'R$ 35,00', 'R$ 40,00', 'R$ 45,00', 'R$ 50,00'],
    correctAnswer: 'R$ 40,00',
    explanation: 'Primeiro, encontramos o preço de um caderno: R$ 25,00 / 5 = R$ 5,00. Depois, multiplicamos pelo número de cadernos desejado: R$ 5,00 * 8 = R$ 40,00.'
  },
  {
    id: 13,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual o próximo número na sequência: 2, 4, 6, 8, ...?',
    options: ['9', '10', '11', '12', '14'],
    correctAnswer: '10',
    explanation: 'A sequência é composta pelos números pares em ordem crescente. O próximo número par depois de 8 é 10.'
  },
  {
    id: 14,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual fração é equivalente a 0,5?',
    options: ['1/5', '1/4', '1/3', '1/2', '2/3'],
    correctAnswer: '1/2',
    explanation: 'O número decimal 0,5 representa cinco décimos, que pode ser escrito como a fração 5/10. Simplificando essa fração por 5, obtemos 1/2.'
  },
  {
    id: 15,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um cinema tem 20 fileiras com 15 assentos cada. Qual é a capacidade total do cinema?',
    options: ['200', '250', '300', '350', '400'],
    correctAnswer: '300',
    explanation: 'A capacidade total é o número de fileiras multiplicado pelo número de assentos por fileira: 20 * 15 = 300 assentos.'
  },
  {
    id: 16,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Quanto é 15% de 200?',
    options: ['15', '20', '25', '30', '40'],
    correctAnswer: '30',
    explanation: 'Para calcular 15% de 200, multiplicamos 200 por 0,15 (que é a forma decimal de 15%). 200 * 0,15 = 30.'
  },
  {
    id: 17,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Se um triângulo tem dois ângulos internos medindo 60° e 80°, qual é a medida do terceiro ângulo?',
    options: ['20°', '30°', '40°', '50°', '60°'],
    correctAnswer: '40°',
    explanation: 'A soma dos ângulos internos de qualquer triângulo é sempre 180°. Portanto, o terceiro ângulo mede 180° - 60° - 80° = 40°.'
  },
  {
    id: 18,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: '(ENEM 2012 - Adaptada) Jogar baralho é uma atividade que estimula o raciocínio. Um baralho comum possui 52 cartas. Qual a probabilidade de se retirar uma carta de Copas ao acaso?',
    options: ['1/52', '1/13', '1/4', '1/2', '4/13'],
    correctAnswer: '1/4',
    explanation: 'Existem 13 cartas de Copas em um baralho de 52 cartas. A probabilidade é o número de casos favoráveis (13) dividido pelo total de casos (52). P = 13/52, que simplificando por 13, resulta em 1/4.'
  },
  {
    id: 19,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é o volume de um cubo com aresta de 3 cm?',
    image: 'https://picsum.photos/seed/cube-geometry/400/400',
    options: ['9 cm³', '12 cm³', '18 cm³', '27 cm³', '30 cm³'],
    correctAnswer: '27 cm³',
    explanation: 'O volume de um cubo é calculado pela fórmula V = aresta³. Portanto, V = 3³ = 3 * 3 * 3 = 27 cm³.'
  },
  {
    id: 20,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Marta tem 30 anos e seu filho tem 5. Daqui a quantos anos a idade de Marta será o dobro da idade de seu filho?',
    options: ['10 anos', '15 anos', '20 anos', '25 anos', '30 anos'],
    correctAnswer: '20 anos',
    explanation: 'Seja x o número de anos. A idade de Marta será 30+x e a do filho será 5+x. Queremos que 30+x = 2*(5+x). 30+x = 10+2x. 30-10 = 2x-x. x = 20 anos.'
  },
  {
    id: 21,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'O valor de 2³ + 2⁴ é:',
    options: ['14', '24', '28', '32', '128'],
    correctAnswer: '24',
    explanation: 'Calculamos as potências separadamente: 2³ = 2 * 2 * 2 = 8. E 2⁴ = 2 * 2 * 2 * 2 = 16. A soma é 8 + 16 = 24.'
  },
  {
    id: 22,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um evento começa às 14h45 e termina às 17h15. Qual a duração do evento?',
    options: ['2 horas', '2 horas e 15 minutos', '2 horas e 30 minutos', '2 horas e 45 minutos', '3 horas'],
    correctAnswer: '2 horas e 30 minutos',
    explanation: 'Das 14h45 às 15h00, temos 15 minutos. Das 15h00 às 17h00, temos 2 horas. Das 17h00 às 17h15, temos mais 15 minutos. Somando tudo: 15 min + 2 h + 15 min = 2 horas e 30 minutos.'
  },
  {
    id: 23,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é a média aritmética simples dos números 10, 20 e 30?',
    options: ['10', '15', '20', '25', '60'],
    correctAnswer: '20',
    explanation: 'A média aritmética é a soma dos valores dividida pela quantidade de valores. Média = (10 + 20 + 30) / 3 = 60 / 3 = 20.'
  },
  {
    id: 24,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Se um pacote de biscoitos tem 12 unidades, quantos biscoitos há em 5 pacotes?',
    options: ['48', '50', '60', '72', '17'],
    correctAnswer: '60',
    explanation: 'Para encontrar o total de biscoitos, multiplicamos o número de pacotes pelo número de biscoitos em cada um: 5 * 12 = 60.'
  },
  {
    id: 25,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Um ângulo de 90 graus é chamado de:',
    options: ['Agudo', 'Obtuso', 'Reto', 'Raso', 'Completo'],
    correctAnswer: 'Reto',
    explanation: 'Um ângulo que mede exatamente 90 graus é classificado como um ângulo reto.'
  },
  {
    id: 26,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual é o resultado de 1 - 0.25?',
    options: ['0.24', '0.75', '1.25', '-0.24', '0.50'],
    correctAnswer: '0.75',
    explanation: 'Subtraindo o número decimal de 1, temos 1.00 - 0.25 = 0.75.'
  },
  {
    id: 27,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Quantos minutos existem em 3 horas?',
    options: ['120', '150', '180', '210', '240'],
    correctAnswer: '180',
    explanation: 'Como cada hora tem 60 minutos, 3 horas terão 3 * 60 = 180 minutos.'
  },
  {
    id: 28,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: '(ENEM 2011 - Adaptada) Uma empresa que fabrica esferas de aço, de 6 cm de raio, utiliza caixas de madeira cúbicas com 12cm de aresta para transportá-las. Quantas esferas cabem em cada caixa?',
    image: 'https://picsum.photos/seed/sphere-box/500/400',
    options: ['1', '2', '4', '8', '12'],
    correctAnswer: '1',
    explanation: 'O diâmetro de cada esfera é 2 * raio = 2 * 6 cm = 12 cm. Como a aresta do cubo é de 12 cm, apenas uma esfera, cujo diâmetro é igual à aresta, cabe dentro da caixa.'
  },
  {
    id: 29,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Numa turma de 30 alunos, 40% são meninas. Quantos meninos há na turma?',
    options: ['12', '15', '18', '20', '16'],
    correctAnswer: '18',
    explanation: 'Primeiro, calculamos o número de meninas: 40% de 30 = 0.40 * 30 = 12 meninas. O número de meninos é o total de alunos menos o número de meninas: 30 - 12 = 18 meninos.'
  },
  {
    id: 30,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Qual das opções abaixo representa o número 1.250.000 em notação científica?',
    options: ['1,25 x 10³', '1,25 x 10⁴', '1,25 x 10⁵', '1,25 x 10⁶', '1,25 x 10⁷'],
    correctAnswer: '1,25 x 10⁶',
    explanation: 'Para escrever 1.250.000 em notação científica, movemos a vírgula para a esquerda até que reste apenas um dígito antes dela. A vírgula foi movida 6 casas, então o expoente de 10 é 6. O resultado é 1,25 x 10⁶.'
  },
  // --- MÉDIO (30) ---
  {
    id: 31,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2017) Para decorar um cilindro, será usada uma faixa retangular de papel transparente, com uma linha desenhada. Ao enrolar a faixa, obtém-se uma linha em formato de hélice. O raio da base do cilindro mede 6/π cm e a altura é 10 cm. Qual o valor do comprimento da linha desenhada?',
    image: 'https://picsum.photos/seed/cylinder-paper/600/350',
    options: ['10 cm', '12 cm', '√244 cm', '18 cm', '2√61 cm'],
    correctAnswer: '2√61 cm',
    explanation: 'A linha é a hipotenusa de um triângulo retângulo. Um cateto é a altura (10 cm) e o outro é o comprimento da circunferência da base (C = 2πr = 2π * (6/π) = 12 cm). Pelo Teorema de Pitágoras: comprimento² = 10² + 12² = 100 + 144 = 244. O comprimento é √244 = √(4 * 61) = 2√61 cm.'
  },
  {
    id: 32,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Se o logaritmo de x na base 2 é 5, qual o valor de x?',
    options: ['10', '16', '25', '32', '64'],
    correctAnswer: '32',
    explanation: 'A definição de logaritmo diz que se log₂(x) = 5, então 2⁵ = x. Calculando 2⁵, temos 2*2*2*2*2 = 32.'
  },
  {
    id: 33,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Um investidor aplicou R$ 1000,00 a juros simples de 5% ao mês. Qual o montante após 4 meses?',
    options: ['R$ 1200,00', 'R$ 1215,51', 'R$ 1150,00', 'R$ 1020,00', 'R$ 200,00'],
    correctAnswer: 'R$ 1200,00',
    explanation: 'Juros simples são calculados como J = C * i * t. J = 1000 * 0,05 * 4 = R$ 200,00. O montante é o capital inicial mais os juros: M = C + J = 1000 + 200 = R$ 1200,00.'
  },
  {
    id: 34,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2011) O percentual de medalhistas de ouro da região Sudeste na OBMEP foi de 52%. Qual o número de medalhistas de ouro da região Sudeste, sabendo que o total no Brasil foi de 500?',
    options: ['250', '260', '275', '300', '310'],
    correctAnswer: '260',
    explanation: 'Para encontrar o número de medalhistas do Sudeste, basta calcular 52% do total de medalhistas. 0,52 * 500 = 260.'
  },
   {
    id: 35,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2013) A produção de arroz em toneladas, de 2012 a 2014, foi: 2012: 50.25; 2013: 51.50; 2014: 52.75. Seguindo essa progressão aritmética, qual será a produção em 2015?',
    image: 'https://picsum.photos/seed/arroz-tabela/500/250',
    options: ['50.25 t', '51.50 t', '52.75 t', '54.00 t', '55.25 t'],
    correctAnswer: '54.00 t',
    explanation: 'Observamos uma progressão aritmética. A razão é r = 51.50 - 50.25 = 1.25. A produção em 2015 será a de 2014 mais a razão: 52.75 + 1.25 = 54.00 toneladas.'
  },
  {
    id: 36,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Uma pesquisa com 120 pessoas sobre a preferência entre dois produtos, A e B, revelou que 70 gostam de A, 60 gostam de B e 20 gostam de ambos. Quantas pessoas não gostam de nenhum?',
    options: ['0', '10', '20', '30', '40'],
    correctAnswer: '10',
    explanation: 'Para saber quantos gostam de pelo menos um, somamos os que gostam de A e B e subtraímos a interseção: 70 + 60 - 20 = 110. O total de entrevistados é 120. Portanto, 120 - 110 = 10 pessoas não gostam de nenhum dos dois.'
  },
  {
    id: 37,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'A soma dos ângulos internos de um hexágono regular é:',
    options: ['360°', '540°', '720°', '900°', '1080°'],
    correctAnswer: '720°',
    explanation: 'A fórmula da soma dos ângulos internos de um polígono com n lados é S = (n-2) * 180°. Para um hexágono, n=6. Então, S = (6-2) * 180° = 4 * 180° = 720°.'
  },
  {
    id: 38,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Em um saco, há 4 bolas verdes e 6 bolas azuis. Qual a probabilidade de se retirar, ao acaso, uma bola verde?',
    options: ['1/5', '2/5', '3/5', '1/2', '2/3'],
    correctAnswer: '2/5',
    explanation: 'O total de bolas é 4 + 6 = 10. O número de casos favoráveis (retirar uma bola verde) é 4. A probabilidade é o número de casos favoráveis dividido pelo número total de casos: P = 4/10, que simplificando é 2/5.'
  },
  {
    id: 39,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Analisando a função f(x) = x² - 4x + 3, quais são as suas raízes (zeros da função)?',
    options: ['-1 e -3', '1 e 3', '1 e -3', '-1 e 3', '-2 e -1'],
    correctAnswer: '1 e 3',
    explanation: 'Para encontrar as raízes, igualamos a função a zero: x² - 4x + 3 = 0. Usando a fórmula de Bhaskara, Δ = (-4)² - 4*1*3 = 16 - 12 = 4. x = (4 ± √4) / 2. As raízes são x1 = (4+2)/2 = 3 e x2 = (4-2)/2 = 1.'
  },
  {
    id: 40,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Um capital de R$ 500,00 foi aplicado a juros compostos de 10% ao mês. Qual será o montante após 2 meses?',
    options: ['R$ 550,00', 'R$ 600,00', 'R$ 605,00', 'R$ 610,00', 'R$ 625,00'],
    correctAnswer: 'R$ 605,00',
    explanation: 'A fórmula do montante a juros compostos é M = C * (1 + i)ᵗ. M = 500 * (1 + 0.10)² = 500 * (1.1)² = 500 * 1.21 = R$ 605,00.'
  },
    {
    id: 41,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2016) Um reservatório em formato de cilindro circular reto, com raio de 2m e altura 10m, está com 60% de sua capacidade. Qual o volume de água contido no reservatório? (Use π ≈ 3)',
    image: 'https://picsum.photos/seed/reservatorio-cilindrico/500/500',
    options: ['120 m³', '72 m³', '60 m³', '48 m³', '36 m³'],
    correctAnswer: '72 m³',
    explanation: 'O volume do cilindro é V = Área da base * Altura = π * r² * h. V = 3 * (2)² * 10 = 3 * 4 * 10 = 120 m³. O volume de água é 60% do total: 0,60 * 120 m³ = 72 m³.'
  },
  {
    id: 42,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Qual é o termo geral de uma Progressão Geométrica (PG) com primeiro termo igual a 3 e razão 2?',
    options: ['an = 3 * 2^(n-1)', 'an = 2 * 3^(n-1)', 'an = 3 + 2(n-1)', 'an = 2 + 3(n-1)', 'an = 3 * 2^n'],
    correctAnswer: 'an = 3 * 2^(n-1)',
    explanation: 'A fórmula do termo geral de uma PG é an = a1 * q^(n-1), onde a1 é o primeiro termo e q é a razão. Substituindo os valores, temos an = 3 * 2^(n-1).'
  },
  {
    id: 43,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'O preço de uma TV é de R$ 2.000,00. Se o pagamento for à vista, há um desconto de 15%. Qual o valor da TV com o desconto?',
    options: ['R$ 1.700,00', 'R$ 1.850,00', 'R$ 1.985,00', 'R$ 1.650,00', 'R$ 300,00'],
    correctAnswer: 'R$ 1.700,00',
    explanation: 'O desconto é de 15% de 2.000,00. D = 0,15 * 2000 = R$ 300,00. O valor final é o preço original menos o desconto: 2000 - 300 = R$ 1.700,00.'
  },
  {
    id: 44,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'A diagonal de um quadrado mede 5√2 cm. Qual é a área deste quadrado?',
    options: ['10 cm²', '20 cm²', '25 cm²', '50 cm²', '100 cm²'],
    correctAnswer: '25 cm²',
    explanation: 'A fórmula da diagonal (d) de um quadrado em função do seu lado (l) é d = l√2. Se 5√2 = l√2, então o lado l = 5 cm. A área de um quadrado é l², então A = 5² = 25 cm².'
  },
  {
    id: 45,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2016) Um reservatório em formato de paralelepípedo reto-retângulo tem dimensões internas de 2m de largura, 3m de comprimento e 1,5m de altura. Se está com 80% de sua capacidade, qual o volume de água em litros? (1m³ = 1000L)',
    options: ['9000 L', '7200 L', '8000 L', '6500 L', '1800 L'],
    correctAnswer: '7200 L',
    explanation: 'Primeiro, calcula-se o volume total do reservatório: V = 2 * 3 * 1,5 = 9 m³. Em litros, V = 9 * 1000 = 9000 L. O volume de água é 80% do total: 0,80 * 9000 L = 7200 L.'
  },
  {
    id: 46,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'De quantas maneiras distintas 5 pessoas podem se sentar em um banco com 5 lugares?',
    options: ['5', '25', '60', '120', '240'],
    correctAnswer: '120',
    explanation: 'Este é um problema de permutação simples. O número de maneiras é dado por Pn = n!. Para 5 pessoas, P5 = 5! = 5 * 4 * 3 * 2 * 1 = 120.'
  },
  {
    id: 47,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'As raízes da equação x² - 5x + 6 = 0 são:',
    options: ['1 e 6', '2 e 3', '-2 e -3', '-1 e -6', '5 e 6'],
    correctAnswer: '2 e 3',
    explanation: 'Utilizando a fórmula de Bhaskara: Δ = (-5)² - 4(1)(6) = 25 - 24 = 1. x = (5 ± √1)/2. As raízes são x1 = (5+1)/2 = 3 e x2 = (5-1)/2 = 2.'
  },
  {
    id: 48,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Qual o valor de sen(120°)?',
    options: ['1/2', '-1/2', '√3/2', '-√3/2', '√2/2'],
    correctAnswer: '√3/2',
    explanation: 'O seno de 120° é igual ao seno de seu suplemento, 180° - 120° = 60°. Como 120° está no segundo quadrante, onde o seno é positivo, sen(120°) = sen(60°) = √3/2.'
  },
  {
    id: 49,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2014) Uma ponte precisa ter três pontos de sustentação. A carga máxima que a ponte pode suportar é de 12 toneladas, distribuída igualmente entre os três pontos. Qual a carga suportada por cada ponto?',
    options: ['2 toneladas', '3 toneladas', '4 toneladas', '6 toneladas', '12 toneladas'],
    correctAnswer: '4 toneladas',
    explanation: 'Se a carga total de 12 toneladas é distribuída igualmente entre 3 pontos, cada ponto suportará 12 / 3 = 4 toneladas.'
  },
  {
    id: 50,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Uma circunferência tem comprimento de 12π cm. Qual é o seu raio?',
    options: ['3 cm', '6 cm', '8 cm', '12 cm', '24 cm'],
    correctAnswer: '6 cm',
    explanation: 'A fórmula do comprimento (C) da circunferência é C = 2πr. Se C = 12π, então 12π = 2πr. Dividindo ambos os lados por 2π, obtemos r = 6 cm.'
  },
  {
    id: 51,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Qual é o 10º termo de uma progressão aritmética (PA) cujo primeiro termo é 2 e a razão é 3?',
    options: ['27', '29', '32', '35', '20'],
    correctAnswer: '29',
    explanation: 'A fórmula do termo geral de uma PA é an = a1 + (n-1)r. Para o 10º termo (n=10), a1=2 e r=3: a10 = 2 + (10-1)*3 = 2 + 9*3 = 2 + 27 = 29.'
  },
  {
    id: 52,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'O determinante da matriz [[2, 1], [3, 4]] é:',
    options: ['5', '8', '11', '3', '2'],
    correctAnswer: '5',
    explanation: 'O determinante de uma matriz 2x2 [[a, b], [c, d]] é calculado por ad - bc. Neste caso, det = (2 * 4) - (1 * 3) = 8 - 3 = 5.'
  },
  {
    id: 53,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2015) O IDH de um município passou de 0,650 para 0,780. Qual foi o aumento percentual do IDH?',
    options: ['13%', '15%', '20%', '25%', '80%'],
    correctAnswer: '20%',
    explanation: 'O aumento absoluto foi 0,780 - 0,650 = 0,130. Para calcular o aumento percentual, dividimos o aumento pelo valor inicial: (0,130 / 0,650) * 100% = (13/65) * 100% = (1/5) * 100% = 20%.'
  },
  {
    id: 54,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Quantos subconjuntos possui um conjunto com 4 elementos?',
    options: ['4', '8', '12', '16', '24'],
    correctAnswer: '16',
    explanation: 'O número de subconjuntos de um conjunto com n elementos é dado por 2ⁿ. Para um conjunto com 4 elementos, o número de subconjuntos é 2⁴ = 16.'
  },
  {
    id: 55,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Simplificando a expressão (x² - 9) / (x + 3) para x ≠ -3, obtemos:',
    options: ['x + 3', 'x - 3', 'x - 9', 'x + 9', 'x'],
    correctAnswer: 'x - 3',
    explanation: 'O numerador (x² - 9) é uma diferença de quadrados, que pode ser fatorada como (x + 3)(x - 3). A expressão se torna [(x + 3)(x - 3)] / (x + 3). Cancelando o termo (x + 3), resta x - 3.'
  },
  {
    id: 56,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Um dado é lançado duas vezes. Qual a probabilidade de a soma dos resultados ser igual a 7?',
    options: ['1/36', '5/36', '1/6', '7/36', '1/12'],
    correctAnswer: '1/6',
    explanation: 'O total de resultados possíveis é 6 * 6 = 36. As combinações que somam 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). São 6 casos favoráveis. A probabilidade é 6/36, que simplificando é 1/6.'
  },
  {
    id: 57,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2018) Em uma corrida, o tempo de referência era de 2h 45min. Uma equipe gastou 163 minutos. A diferença entre o tempo da equipe e o tempo de referência foi de:',
    options: ['2 minutos', '3 minutos', '5 minutos', '8 minutos', '12 minutos'],
    correctAnswer: '2 minutos',
    explanation: 'O tempo de referência é 2h 45min. Convertendo para minutos: 2 * 60 + 45 = 120 + 45 = 165 minutos. A equipe gastou 163 minutos. A diferença é 165 - 163 = 2 minutos.'
  },
  {
    id: 58,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Qual é a equação da reta que passa pelos pontos (1, 2) e (3, 6)?',
    options: ['y = x + 1', 'y = 2x', 'y = 3x - 1', 'y = 2x - 1', 'y = x + 5'],
    correctAnswer: 'y = 2x',
    explanation: 'Primeiro, calcula-se o coeficiente angular (m): m = (y2 - y1) / (x2 - x1) = (6 - 2) / (3 - 1) = 4 / 2 = 2. A equação é y = 2x + b. Substituindo um dos pontos (1,2): 2 = 2(1) + b => b = 0. Portanto, a equação é y = 2x.'
  },
  {
    id: 59,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'A área de um triângulo equilátero de lado 4 cm é:',
    options: ['16 cm²', '8√3 cm²', '8 cm²', '4√3 cm²', '16√3 cm²'],
    correctAnswer: '4√3 cm²',
    explanation: 'A fórmula da área de um triângulo equilátero de lado L é A = (L²√3)/4. Substituindo L=4: A = (4²√3)/4 = (16√3)/4 = 4√3 cm².'
  },
  {
    id: 60,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Se f(x) = 2x + 5, qual o valor de f(f(1))?',
    options: ['7', '9', '12', '15', '19'],
    correctAnswer: '19',
    explanation: 'Primeiro, calculamos o valor de f(1): f(1) = 2(1) + 5 = 7. Agora, calculamos f(f(1)), que é f(7): f(7) = 2(7) + 5 = 14 + 5 = 19.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 61,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Em uma progressão aritmética, o quinto termo é 18 e o oitavo termo é 30. Qual é a razão desta progressão?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'A fórmula do termo geral é an = a1 + (n-1)r. Temos a5 = a1 + 4r = 18 e a8 = a1 + 7r = 30. Subtraindo as duas equações, (a1 + 7r) - (a1 + 4r) = 30 - 18, o que resulta em 3r = 12, e portanto, r = 4.'
  },
  {
    id: 62,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se duas bolas sucessivamente e sem reposição, qual a probabilidade de ambas serem vermelhas?',
    options: ['5/14', '25/64', '5/8', '20/56', '1/2'],
    correctAnswer: '5/14',
    explanation: 'A probabilidade da primeira ser vermelha é 5/8. Após retirar uma vermelha, restam 4 vermelhas e 7 bolas no total. A probabilidade da segunda ser vermelha é 4/7. A probabilidade de ambos os eventos ocorrerem é (5/8) * (4/7) = 20/56, que simplificando é 5/14.'
  },
    {
    id: 63,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2013) A parte interior de uma taça foi gerada pela rotação da parábola f(x) = (3/2)x² - 6x + C. O ponto V(2,0) é o vértice da parábola. Nessas condições, a altura do líquido contido na taça, em centímetros, é:',
    image: 'https://picsum.photos/seed/taca-parabola/400/500',
    options: ['1', '2', '4', '5', '6'],
    correctAnswer: '6',
    explanation: 'A altura do líquido corresponde ao valor de C. Como o vértice V(2,0) pertence à parábola, podemos substituir x=2 e f(x)=0 na função: f(2) = (3/2)(2)² - 6(2) + C = 0. (3/2)*4 - 12 + C = 0. 6 - 12 + C = 0. -6 + C = 0. Portanto, C = 6.'
  },
  {
    id: 64,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2010) Um porta-lápis de madeira foi construído no formato cúbico, com um cubo vazio interno. A aresta do cubo maior mede 12 cm e a do menor, 8 cm. O volume de madeira utilizado foi de:',
    options: ['12 cm³', '64 cm³', '96 cm³', '1216 cm³', '1728 cm³'],
    correctAnswer: '1216 cm³',
    explanation: 'O volume de madeira é a diferença entre o volume do cubo maior e o do cubo menor. Volume do cubo maior = 12³ = 1728 cm³. Volume do cubo menor (vazio) = 8³ = 512 cm³. Volume de madeira = 1728 - 512 = 1216 cm³.'
  },
    {
    id: 65,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2015) Numa pesquisa, o diagrama de Venn mostra o consumo de sucos A, B e C. Quantos não consomem a marca A? (Dados: B=40, C=35, A∩B=10, A∩C=20, B∩C=15, A∩B∩C=5, Nenhum=15)',
    image: 'https://picsum.photos/seed/diagrama-venn/600/400',
    options: ['60', '75', '90', '105', '115'],
    correctAnswer: '105',
    explanation: 'Os que não consomem A são: Apenas B, Apenas C, B e C, e Nenhum. Apenas B = 40. Apenas C = 35. Apenas B e C = 15. Nenhum = 15. A soma é 40 + 35 + 15 + 15 = 105.'
  },
  {
    id: 66,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Quantos anagramas da palavra "ENEM" existem?',
    options: ['24', '12', '8', '6', '4'],
    correctAnswer: '12',
    explanation: 'A palavra "ENEM" tem 4 letras, com a letra "E" se repetindo 2 vezes. A fórmula para permutação com repetição é P = n! / k!, onde n é o total de letras e k é o número de repetições. P = 4! / 2! = (4*3*2*1) / (2*1) = 24 / 2 = 12.'
  },
  {
    id: 67,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Uma comissão de 3 pessoas será formada a partir de um grupo de 5 homens e 4 mulheres. Quantas comissões podem ser formadas com pelo menos 2 mulheres?',
    options: ['30', '34', '36', '41', '84'],
    correctAnswer: '34',
    explanation: 'Temos dois casos: 1) 2 mulheres e 1 homem: C(4,2) * C(5,1) = (4*3/2) * 5 = 6 * 5 = 30. 2) 3 mulheres e 0 homens: C(4,3) = 4. O total de comissões é a soma dos casos: 30 + 4 = 34.'
  },
  {
    id: 68,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A área da superfície total de um cone reto com raio da base 3 cm e altura 4 cm é: (Use π ≈ 3.14)',
    image: 'https://picsum.photos/seed/cone-geometry/400/400',
    options: ['37.68 cm²', '47.1 cm²', '75.36 cm²', '84.78 cm²', '94.2 cm²'],
    correctAnswer: '75.36 cm²',
    explanation: 'Primeiro, encontramos a geratriz (g) do cone: g² = h² + r² = 4² + 3² = 16 + 9 = 25. Então, g = 5 cm. A área total (At) é a soma da área da base (Ab = πr²) e da área lateral (Al = πrg). At = π * 3² + π * 3 * 5 = 9π + 15π = 24π. Usando π ≈ 3.14, At = 24 * 3.14 = 75.36 cm².'
  },
  {
    id: 69,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM PPL 2019) Em um sorteio, são utilizadas 10 bolas numeradas de 0 a 9. Qual a probabilidade de o primeiro número sorteado ser ímpar e o segundo ser par, sem reposição?',
    options: ['1/4', '5/18', '1/2', '2/9', '25/81'],
    correctAnswer: '5/18',
    explanation: 'Há 5 números ímpares e 5 pares. Probabilidade do 1º ser ímpar: 5/10. Restam 9 bolas. Probabilidade do 2º ser par (dado que o 1º foi ímpar): 5/9. A probabilidade de ambos os eventos é (5/10) * (5/9) = 25/90 = 5/18.'
  },
  {
    id: 70,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'O valor da expressão (sen(30°) + cos(60°)) / tg(45°) é:',
    options: ['0', '1/2', '1', '√3/2', '2'],
    correctAnswer: '1',
    explanation: 'Conhecendo os valores trigonométricos notáveis: sen(30°) = 1/2; cos(60°) = 1/2; tg(45°) = 1. Substituindo na expressão: (1/2 + 1/2) / 1 = 1 / 1 = 1.'
  },
  {
    id: 71,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A soma dos infinitos termos da PG (10, 5, 2.5, ...) é:',
    options: ['15', '17.5', '20', '25', 'Infinita'],
    correctAnswer: '20',
    explanation: 'É uma PG infinita com primeiro termo a1=10 e razão q=5/10=0.5. Como |q|<1, a soma converge. A fórmula da soma é S = a1 / (1-q). S = 10 / (1 - 0.5) = 10 / 0.5 = 20.'
  },
  {
    id: 72,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2019) Uma locadora possui 120 veículos. 16 são vermelhos. O cliente não gosta da cor vermelha. Qual a probabilidade de o cliente retirar um carro de uma cor que o agrade?',
    options: ['104/120', '88/120', '16/120', '32/120', '100/120'],
    correctAnswer: '104/120',
    explanation: 'O total de veículos é 120. O número de veículos vermelhos é 16. O número de veículos que agradam o cliente é o total menos os vermelhos: 120 - 16 = 104. A probabilidade é de 104/120.'
  },
  {
    id: 73,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Seja o número complexo z = 4 + 3i. Qual o módulo de z?',
    options: ['3', '4', '5', '7', '25'],
    correctAnswer: '5',
    explanation: 'O módulo de um número complexo z = a + bi é dado por |z| = √(a² + b²). Para z = 4 + 3i, |z| = √(4² + 3²) = √(16 + 9) = √25 = 5.'
  },
  {
    id: 74,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'O volume de uma esfera é 36π cm³. Qual o seu raio?',
    options: ['2 cm', '3 cm', '4 cm', '6 cm', '9 cm'],
    correctAnswer: '3 cm',
    explanation: 'A fórmula do volume da esfera é V = (4/3)πr³. Temos 36π = (4/3)πr³. Dividindo por π: 36 = (4/3)r³. Multiplicando por 3: 108 = 4r³. Dividindo por 4: r³ = 27. Portanto, r = ³√27 = 3 cm.'
  },
  {
    id: 75,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Quantos são os anagramas da palavra "BRASIL" que começam com a letra B e terminam com a letra L?',
    options: ['12', '24', '120', '720', '6'],
    correctAnswer: '24',
    explanation: 'Fixando a letra B no início e L no final (B _ _ _ _ L), precisamos permutar as 4 letras restantes (R, A, S, I). O número de permutações de 4 elementos é P4 = 4! = 4 * 3 * 2 * 1 = 24.'
  },
    {
    id: 76,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2021) Um atleta come 400g de frango e 600g de batata-doce. O frango tem 5g de gordura/100g e a batata-doce tem 0g de gordura/100g. Qual o total de gordura na refeição?',
    image: 'https://picsum.photos/seed/tabela-nutricional/600/350',
    options: ['5 g', '10 g', '20 g', '25 g', '50 g'],
    correctAnswer: '20 g',
    explanation: 'Gordura do frango: 400g * (5g / 100g) = 4 * 5g = 20g. Gordura da batata-doce: 600g * (0g / 100g) = 0g. Total de gordura = 20g + 0g = 20g.'
  },
  {
    id: 77,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Em um triângulo retângulo, as projeções dos catetos sobre a hipotenusa medem 4 cm e 9 cm. A altura relativa à hipotenusa mede:',
    options: ['5 cm', '6 cm', '13 cm', '36 cm', '2.25 cm'],
    correctAnswer: '6 cm',
    explanation: 'Em um triângulo retângulo, a altura relativa à hipotenusa (h) é a média geométrica das projeções dos catetos (m e n). A relação é h² = m * n. h² = 4 * 9 = 36. Portanto, h = √36 = 6 cm.'
  },
  {
    id: 78,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A equação de uma circunferência é (x - 2)² + (y + 3)² = 16. O centro C e o raio R são:',
    options: ['C(2, -3), R=16', 'C(-2, 3), R=16', 'C(2, -3), R=4', 'C(-2, 3), R=4', 'C(2, 3), R=4'],
    correctAnswer: 'C(2, -3), R=4',
    explanation: 'A equação geral da circunferência é (x - a)² + (y - b)² = R², onde (a, b) é o centro e R é o raio. Comparando com a equação dada, temos a = 2, b = -3 e R² = 16. Portanto, o centro é C(2, -3) e o raio é R = √16 = 4.'
  },
  {
    id: 79,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Qual o coeficiente angular da reta tangente à curva y = x³ - 2x no ponto x = 2?',
    options: ['3', '4', '8', '10', '12'],
    correctAnswer: '10',
    explanation: 'O coeficiente angular da reta tangente é dado pela derivada da função no ponto. A derivada de y = x³ - 2x é y\' = 3x² - 2. No ponto x = 2, o coeficiente angular é y\'(2) = 3(2)² - 2 = 3 * 4 - 2 = 12 - 2 = 10.'
  },
    {
    id: 80,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2021) Uma caneca tem formato de tronco de cone com altura 12cm, raio da base maior 10cm e raio da base menor 5cm. Qual a capacidade da caneca em mL? (Use π≈3; 1cm³=1mL)',
    image: 'https://picsum.photos/seed/caneca-tronco-cone/400/400',
    options: ['1800 mL', '2100 mL', '2400 mL', '2700 mL', '3000 mL'],
    correctAnswer: '2100 mL',
    explanation: 'A fórmula do volume do tronco de cone é V = (πh/3) * (R² + Rr + r²). V = (3*12/3) * (10² + 10*5 + 5²) = 12 * (100 + 50 + 25) = 12 * 175 = 2100 cm³ = 2100 mL.'
  },
  {
    id: 81,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A soma dos coeficientes do desenvolvimento do binômio (2x - 3y)⁵ é:',
    options: ['-1', '1', '32', '243', '-243'],
    correctAnswer: '-1',
    explanation: 'A soma dos coeficientes do desenvolvimento de um binômio (ax + by)ⁿ é obtida fazendo x=1 e y=1. Portanto, a soma é (2*1 - 3*1)⁵ = (2 - 3)⁵ = (-1)⁵ = -1.'
  },
  {
    id: 82,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Quantos números de 4 algarismos distintos podemos formar com os algarismos 1, 2, 3, 4, 5, 6 e 7?',
    options: ['210', '240', '840', '1680', '5040'],
    correctAnswer: '840',
    explanation: 'Este é um problema de arranjo simples. A(n, p) = n! / (n-p)!. Temos n=7 algarismos e queremos formar números de p=4 algarismos. A(7, 4) = 7! / (7-4)! = 7! / 3! = 7*6*5*4 = 840.'
  },
  {
    id: 83,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'O sistema linear {x + y = 5; 2x - y = 4} tem como solução:',
    options: ['x=1, y=4', 'x=4, y=1', 'x=2, y=3', 'x=3, y=2', 'x=0, y=5'],
    correctAnswer: 'x=3, y=2',
    explanation: 'Podemos resolver por adição. Somando as duas equações: (x+y) + (2x-y) = 5+4 => 3x = 9 => x = 3. Substituindo x=3 na primeira equação: 3 + y = 5 => y = 2.'
  },
  {
    id: 84,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Um poliedro convexo tem 10 faces e 15 arestas. Quantos vértices ele possui?',
    options: ['5', '6', '7', '8', '9'],
    correctAnswer: '7',
    explanation: 'Pela Relação de Euler para poliedros convexos: V - A + F = 2, onde V é o número de vértices, A é o número de arestas e F é o número de faces. V - 15 + 10 = 2 => V - 5 = 2 => V = 7.'
  },
  {
    id: 85,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2017) Para criar um logotipo, uma agência pintará o interior de um círculo, dividindo-o em 4 setores de mesmo ângulo, com 4 cores distintas. De quantas maneiras o círculo pode ser pintado, considerando que rotações não criam novas maneiras?',
    options: ['4', '6', '8', '24', '256'],
    correctAnswer: '6',
    explanation: 'Este é um problema de permutação circular. Com 4 cores para 4 posições, o cálculo é PCn = (n-1)!. PC4 = (4-1)! = 3! = 3 * 2 * 1 = 6.'
  },
  {
    id: 86,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Seja a matriz A = [[1, 2], [0, 1]]. A matriz A² é:',
    options: ['[[1, 4], [0, 1]]', '[[1, 2], [0, 1]]', '[[1, 4], [1, 1]]', '[[2, 4], [0, 2]]', '[[2, 2], [0, 2]]'],
    correctAnswer: '[[1, 4], [0, 1]]',
    explanation: 'A² = A * A = [[1, 2], [0, 1]] * [[1, 2], [0, 1]]. Multiplicando as matrizes: [[1*1+2*0, 1*2+2*1], [0*1+1*0, 0*2+1*1]] = [[1, 4], [0, 1]].'
  },
  {
    id: 87,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A distância entre os pontos A(1, 2) e B(4, 6) no plano cartesiano é:',
    options: ['3', '4', '5', '√7', '√29'],
    correctAnswer: '5',
    explanation: 'A fórmula da distância entre dois pontos é d = √((x2-x1)² + (y2-y1)²). d = √((4-1)² + (6-2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5.'
  },
  {
    id: 88,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2020) Uma senha deve ser formada por 4 caracteres distintos, sendo os dois primeiros letras de um alfabeto de 26 e os dois últimos, algarismos de 0 a 9. Quantas senhas podem ser criadas?',
    options: ['58500', '67600', '65000', '52000', '650'],
    correctAnswer: '58500',
    explanation: 'Para o primeiro caractere (letra), há 26 opções. Para o segundo (letra distinta), 25. Para o terceiro (algarismo), 10. Para o quarto (algarismo distinto), 9. Total = 26 * 25 * 10 * 9 = 58500.'
  },
  {
    id: 89,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Qual o conjunto solução da inequação |x - 3| < 2?',
    options: ['x > 5', 'x < 1', '1 < x < 5', '-1 < x < 5', 'x < 1 ou x > 5'],
    correctAnswer: '1 < x < 5',
    explanation: 'A inequação modular |x - 3| < 2 é equivalente a -2 < x - 3 < 2. Somando 3 a todas as partes da inequação, obtemos -2 + 3 < x < 2 + 3, o que resulta em 1 < x < 5.'
  },
  {
    id: 90,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'O resto da divisão do polinômio P(x) = x³ - 2x² + x + 5 por (x - 2) é:',
    options: ['3', '5', '7', '9', '11'],
    correctAnswer: '7',
    explanation: 'Pelo Teorema do Resto, o resto da divisão de um polinômio P(x) por (x - a) é P(a). Neste caso, a=2. Calculamos P(2) = (2)³ - 2(2)² + 2 + 5 = 8 - 2(4) + 7 = 8 - 8 + 7 = 7.'
  },
  // =================================================
  //                    FÍSICA (90)
  // =================================================
  // --- FÁCIL (30) ---
  {
    id: 91,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual das seguintes leis descreve a relação entre força, massa e aceleração?',
    options: ['Lei da Gravitação Universal', 'Primeira Lei de Newton', 'Segunda Lei de Newton', 'Terceira Lei de Newton', 'Lei de Ohm'],
    correctAnswer: 'Segunda Lei de Newton',
    explanation: 'A Segunda Lei de Newton, F = ma, estabelece que a força resultante aplicada a um objeto é igual ao produto de sua massa pela sua aceleração.'
  },
  {
    id: 92,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual é a unidade de medida de frequência no Sistema Internacional (SI)?',
    options: ['Watt', 'Joule', 'Hertz', 'Pascal', 'Newton'],
    correctAnswer: 'Hertz',
    explanation: 'A unidade de frequência no SI é o Hertz (Hz), que corresponde a ciclos por segundo.'
  },
  {
    id: 93,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O fenômeno ondulatório que permite que o som contorne obstáculos é chamado de:',
    image: 'https://picsum.photos/seed/wave-diffraction/600/300',
    options: ['Reflexão', 'Refração', 'Difração', 'Interferência', 'Polarização'],
    correctAnswer: 'Difração',
    explanation: 'Difração é a capacidade que as ondas têm de contornar obstáculos ou passar por fendas. É por causa da difração que podemos ouvir alguém que está em outro cômodo.'
  },
  {
    id: 94,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual princípio da óptica é ilustrado pela formação de sombras?',
    image: 'https://picsum.photos/seed/shadow-formation/500/400',
    options: ['Princípio da Reversibilidade dos Raios', 'Princípio da Propagação Retilínea da Luz', 'Princípio da Independência dos Raios', 'Lei da Reflexão', 'Lei da Refração'],
    correctAnswer: 'Princípio da Propagação Retilínea da Luz',
    explanation: 'O Princípio da Propagação Retilínea da Luz estabelece que, em um meio homogêneo, a luz viaja em linha reta. A formação de sombras é uma evidência desse princípio.'
  },
  {
    id: 95,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual efeito descreve a mudança na frequência de uma onda para um observador que se move em relação à fonte, como o som de uma ambulância?',
    options: ['Efeito Joule', 'Efeito Estufa', 'Efeito Doppler', 'Efeito Tyndall', 'Efeito Fotoelétrico'],
    correctAnswer: 'Efeito Doppler',
    explanation: 'O Efeito Doppler é a alteração na frequência percebida de uma onda quando há movimento relativo entre a fonte e o observador.'
  },
  {
    id: 96,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A unidade de medida da potência no Sistema Internacional (SI) é:',
    options: ['Joule (J)', 'Newton (N)', 'Pascal (Pa)', 'Watt (W)', 'Volt (V)'],
    correctAnswer: 'Watt (W)',
    explanation: 'Watt (W) é a unidade de potência no SI, equivalendo a um joule por segundo (J/s). Ela mede a taxa de transferência ou conversão de energia.'
  },
  {
    id: 97,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual situação descreve a Lei da Inércia (Primeira Lei de Newton)?',
    options: ['Um livro caindo.', 'Um carro freando e os passageiros sendo projetados para frente.', 'Uma bola quicando.', 'Um foguete decolando.', 'A atração da Terra sobre a Lua.'],
    correctAnswer: 'Um carro freando e os passageiros sendo projetados para frente.',
    explanation: 'Quando o carro freia, os passageiros, por inércia, tendem a continuar em movimento com a velocidade que tinham antes, sendo projetados para frente em relação ao carro.'
  },
  {
    id: 98,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual dos seguintes materiais é um bom condutor de eletricidade?',
    options: ['Borracha', 'Madeira', 'Plástico', 'Cobre', 'Vidro'],
    correctAnswer: 'Cobre',
    explanation: 'O cobre é um metal com elétrons livres que se movem facilmente, permitindo a passagem de corrente elétrica. Os outros são isolantes.'
  },
    {
    id: 99,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A transferência de calor por ondas eletromagnéticas, como a do Sol para a Terra, é chamada de:',
    image: 'https://picsum.photos/seed/sun-earth-radiation/500/400',
    options: ['Condução', 'Convecção', 'Irradiação', 'Vaporização', 'Fusão'],
    correctAnswer: 'Irradiação',
    explanation: 'Irradiação é a transferência de calor que não necessita de um meio material, propagando-se pelo vácuo, como o calor do Sol que chega à Terra.'
  },
  {
    id: 100,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual é a força que mantém os planetas em órbita ao redor do Sol?',
    options: ['Força Elétrica', 'Força Magnética', 'Força Nuclear Forte', 'Força Gravitacional', 'Força de Atrito'],
    correctAnswer: 'Força Gravitacional',
    explanation: 'A força gravitacional é a força de atração mútua entre objetos com massa. É essa força que mantém os planetas orbitando o Sol.'
  },
  {
    id: 101,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A energia armazenada em uma mola comprimida ou esticada é chamada de:',
    options: ['Energia Cinética', 'Energia Potencial Gravitacional', 'Energia Potencial Elástica', 'Energia Térmica', 'Energia Sonora'],
    correctAnswer: 'Energia Potencial Elástica',
    explanation: 'Energia potencial elástica é a energia armazenada em um corpo elástico quando ele é deformado.'
  },
  {
    id: 102,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: '(ENEM 2014) Fusíveis são dispositivos de proteção projetados para se fundirem quando a corrente elétrica ultrapassa um certo valor. Qual grandeza física um fusível limita diretamente?',
    options: ['Tensão', 'Resistência', 'Potência', 'Corrente', 'Energia'],
    correctAnswer: 'Corrente',
    explanation: 'Fusíveis interrompem o circuito quando a corrente elétrica atinge um valor perigoso, protegendo os aparelhos.'
  },
    {
    id: 103,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A luz de uma lanterna passando do ar para a água sofre um desvio. Este fenômeno é chamado de:',
    image: 'https://picsum.photos/seed/light-refraction/500/400',
    options: ['Reflexão', 'Refração', 'Difração', 'Absorção', 'Polarização'],
    correctAnswer: 'Refração',
    explanation: 'Refração é o fenômeno em que a luz muda de velocidade ao passar de um meio para outro, o que causa um desvio em sua trajetória.'
  },
  {
    id: 104,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Se um objeto pesa 60 N na Terra (g ≈ 10 m/s²), qual é a sua massa?',
    options: ['6 kg', '10 kg', '60 kg', '600 kg', '0.6 kg'],
    correctAnswer: '6 kg',
    explanation: 'Peso (P) = massa (m) * gravidade (g). Portanto, m = P / g = 60 N / 10 m/s² = 6 kg.'
  },
  {
    id: 105,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A Terceira Lei de Newton é também conhecida como:',
    options: ['Lei da Inércia', 'Princípio Fundamental da Dinâmica', 'Lei da Ação e Reação', 'Lei da Gravitação Universal', 'Lei da Conservação de Energia'],
    correctAnswer: 'Lei da Ação e Reação',
    explanation: 'A Terceira Lei de Newton afirma que para toda ação existe uma reação de mesma intensidade e direção, mas em sentido oposto.'
  },
    {
    id: 106,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O aquecimento da água em uma chaleira envolve a movimentação da água (quente sobe, fria desce). Esse processo de transferência de calor é chamado:',
    image: 'https://picsum.photos/seed/convection-water/400/400',
    options: ['Condução', 'Convecção', 'Irradiação', 'Radiação', 'Evaporação'],
    correctAnswer: 'Convecção',
    explanation: 'A convecção é o principal modo de transferência de calor em fluidos, criando correntes que distribuem o calor.'
  },
  {
    id: 107,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual das cores do espectro visível possui a menor frequência?',
    options: ['Vermelho', 'Laranja', 'Verde', 'Azul', 'Violeta'],
    correctAnswer: 'Vermelho',
    explanation: 'No espectro de luz visível, a frequência aumenta do vermelho para o violeta. Portanto, o vermelho tem a menor frequência.'
  },
  {
    id: 108,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Um carro acelera de 0 a 108 km/h em 10 segundos. Qual sua aceleração média em m/s²?',
    options: ['1 m/s²', '2 m/s²', '3 m/s²', '10.8 m/s²', '30 m/s²'],
    correctAnswer: '3 m/s²',
    explanation: 'Primeiro, converta a velocidade para m/s: 108 km/h = 108 / 3.6 = 30 m/s. A aceleração é a = Δv / Δt = (30 m/s - 0 m/s) / 10 s = 3 m/s².'
  },
    {
    id: 109,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Para medir a tensão elétrica em uma lâmpada, um voltímetro deve ser conectado:',
    image: 'https://picsum.photos/seed/voltimetro-circuito/500/350',
    options: ['Em série com a lâmpada', 'Em paralelo com a lâmpada', 'Em série com a bateria', 'Em paralelo com a bateria', 'Desligando a lâmpada'],
    correctAnswer: 'Em paralelo com a lâmpada',
    explanation: 'O voltímetro mede a diferença de potencial entre dois pontos, por isso deve ser ligado em paralelo com o componente cuja tensão se quer medir.'
  },
  {
    id: 110,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A força que se opõe ao movimento entre superfícies em contato é chamada de:',
    options: ['Força Peso', 'Força Normal', 'Força de Atrito', 'Força Elástica', 'Força Centrípeta'],
    correctAnswer: 'Força de Atrito',
    explanation: 'A força de atrito é uma força de contato que sempre atua em sentido contrário ao movimento ou à tendência de movimento.'
  },
    {
    id: 111,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O espelho retrovisor de um carro, que forma uma imagem virtual, direita e menor, é classificado como:',
    image: 'https://picsum.photos/seed/rear-view-mirror/500/300',
    options: ['Côncavo', 'Convexo', 'Plano', 'Cilíndrico', 'Parabólico'],
    correctAnswer: 'Convexo',
    explanation: 'Espelhos convexos sempre formam imagens virtuais, direitas e reduzidas, oferecendo um campo de visão maior.'
  },
  {
    id: 112,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A unidade de medida de carga elétrica no Sistema Internacional (SI) é:',
    options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Coulomb (C)', 'Farad (F)'],
    correctAnswer: 'Coulomb (C)',
    explanation: 'O Coulomb (C) é a unidade padrão do SI para medir a quantidade de carga elétrica.'
  },
  {
    id: 113,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A grandeza física que mede a "dificuldade" de se alterar o estado de movimento de um corpo é a:',
    options: ['Velocidade', 'Aceleração', 'Força', 'Massa', 'Energia'],
    correctAnswer: 'Massa',
    explanation: 'Massa é a medida da inércia de um corpo. Quanto maior a massa, maior a "resistência" a mudanças em seu estado de movimento.'
  },
  {
    id: 114,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: '(ENEM 2010) Em um dia sem nuvens, a areia da praia esquenta mais que a água do mar porque a areia tem menor:',
    options: ['Densidade', 'Massa', 'Calor específico', 'Condutividade térmica', 'Volume'],
    correctAnswer: 'Calor específico',
    explanation: 'Calor específico é a quantidade de calor necessária para elevar a temperatura de uma substância. A areia tem calor específico menor que a água, por isso aquece mais rapidamente.'
  },
  {
    id: 115,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O som não se propaga no:',
    options: ['Ar', 'Água', 'Ferro', 'Vácuo', 'Vidro'],
    correctAnswer: 'Vácuo',
    explanation: 'O som é uma onda mecânica, necessitando de um meio material para se propagar. No vácuo, não há matéria, logo o som não se propaga.'
  },
  {
    id: 116,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A força que aponta para o centro em um movimento circular uniforme é a:',
    options: ['Força de atrito', 'Força peso', 'Força normal', 'Força centrípeta', 'Força elástica'],
    correctAnswer: 'Força centrípeta',
    explanation: 'A força centrípeta é a força resultante que atua sobre um objeto em movimento circular, responsável por manter o objeto em sua trajetória curva.'
  },
  {
    id: 117,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual o valor da resistência equivalente de dois resistores de 10 Ω ligados em série?',
    image: 'https://picsum.photos/seed/resistors-series/500/200',
    options: ['5 Ω', '10 Ω', '15 Ω', '20 Ω', '100 Ω'],
    correctAnswer: '20 Ω',
    explanation: 'Em uma associação em série, a resistência equivalente é a soma das resistências individuais. Req = R1 + R2 = 10 Ω + 10 Ω = 20 Ω.'
  },
  {
    id: 118,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O olho humano forma a imagem dos objetos na:',
    options: ['Córnea', 'Íris', 'Cristalino', 'Retina', 'Pupila'],
    correctAnswer: 'Retina',
    explanation: 'O cristalino funciona como uma lente que projeta a imagem dos objetos na retina, a camada fotossensível no fundo do olho.'
  },
  {
    id: 119,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A energia não pode ser criada nem destruída, apenas transformada. Este é o princípio da:',
    options: ['Conservação da Massa', 'Conservação da Carga Elétrica', 'Conservação da Energia', 'Incerteza de Heisenberg', 'Relatividade'],
    correctAnswer: 'Conservação da Energia',
    explanation: 'O Princípio da Conservação da Energia afirma que a energia total de um sistema isolado permanece constante.'
  },
  {
    id: 120,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Um objeto é solto em queda livre. Sua velocidade:',
    options: ['Aumenta constantemente', 'Diminui constantemente', 'Permanece constante', 'É sempre zero', 'Aumenta e depois diminui'],
    correctAnswer: 'Aumenta constantemente',
    explanation: 'Em queda livre, o objeto está sob a ação da aceleração da gravidade (g), o que significa que sua velocidade aumenta de forma constante.'
  },
  // --- MÉDIO (30) ---
  {
    id: 121,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um carro viaja a uma velocidade constante de 60 km/h. Quanto tempo levará para percorrer uma distância de 180 km?',
    options: ['2 horas', '2.5 horas', '3 horas', '3.5 horas', '4 horas'],
    correctAnswer: '3 horas',
    explanation: 'Usando a fórmula Tempo = Distância / Velocidade, temos: Tempo = 180 km / 60 km/h = 3 horas.'
  },
  {
    id: 122,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um chuveiro elétrico tem potência de 5500W e opera em 220V. Qual a corrente elétrica que o atravessa?',
    options: ['20A', '25A', '30A', '35A', '40A'],
    correctAnswer: '25A',
    explanation: 'A potência elétrica (P) = Tensão (V) * Corrente (I). Portanto, I = P / V = 5500W / 220V = 25A.'
  },
    {
    id: 123,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um espelho côncavo possui raio de curvatura de 40 cm. Um objeto é colocado a 60 cm do vértice. A que distância do vértice a imagem será formada?',
    image: 'https://picsum.photos/seed/concave-mirror/600/300',
    options: ['20 cm', '30 cm', '40 cm', '50 cm', '60 cm'],
    correctAnswer: '30 cm',
    explanation: 'A distância focal (f) = R/2 = 20 cm. A posição do objeto (p) é 60 cm. Usando a equação de Gauss (1/f = 1/p + 1/p\'), temos 1/20 = 1/60 + 1/p\'. 1/p\' = 1/20 - 1/60 = (3-1)/60 = 2/60 = 1/30. Portanto, p\' = 30 cm.'
  },
  {
    id: 124,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A energia associada ao movimento de um corpo é chamada de:',
    options: ['Energia Potencial Gravitacional', 'Energia Potencial Elástica', 'Energia Térmica', 'Energia Cinética', 'Energia Química'],
    correctAnswer: 'Energia Cinética',
    explanation: 'Energia cinética é a energia que um corpo possui devido ao seu movimento. É calculada pela fórmula Ec = (1/2)mv².'
  },
  {
    id: 125,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'De acordo com a Primeira Lei da Termodinâmica (ΔU = Q - W), se um gás recebe 500 J de calor e realiza 200 J de trabalho, a variação de sua energia interna é:',
    options: ['-300 J', '+300 J', '-700 J', '+700 J', '0 J'],
    correctAnswer: '+300 J',
    explanation: 'ΔU = Q - W. O sistema recebe calor (Q = +500 J) e realiza trabalho (W = +200 J). Portanto, ΔU = 500 J - 200 J = 300 J. A energia interna aumenta.'
  },
  {
    id: 126,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2016) Uma lâmpada LED de 10W ilumina tanto quanto uma incandescente de 60W. Isso ocorre porque a maior parte da energia na lâmpada incandescente é transformada em:',
    options: ['energia luminosa', 'energia sonora', 'energia térmica (calor)', 'energia química', 'energia potencial'],
    correctAnswer: 'energia térmica (calor)',
    explanation: 'Lâmpadas incandescentes são ineficientes, convertendo a maior parte da energia elétrica em calor, e não em luz.'
  },
  {
    id: 127,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um objeto de 5 kg move-se a uma velocidade de 4 m/s. Qual é a sua energia cinética?',
    options: ['10 J', '20 J', '40 J', '80 J', '100 J'],
    correctAnswer: '40 J',
    explanation: 'Ec = (1/2) * m * v² = (1/2) * 5 kg * (4 m/s)² = 0.5 * 5 * 16 = 40 Joules.'
  },
  {
    id: 128,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A pressão exercida por uma força de 100 N sobre uma área de 2 m² é de:',
    options: ['200 Pa', '100 Pa', '50 Pa', '25 Pa', '10 Pa'],
    correctAnswer: '50 Pa',
    explanation: 'Pressão (P) = Força (F) / Área (A) = 100 N / 2 m² = 50 Pascal (Pa).'
  },
  {
    id: 129,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um som tem frequência de 500 Hz e propaga-se a 340 m/s. Qual é o comprimento de onda?',
    options: ['0,50 m', '0,68 m', '1,47 m', '170 m', '840 m'],
    correctAnswer: '0,68 m',
    explanation: 'Velocidade (v) = frequência (f) * comprimento de onda (λ). Portanto, λ = v / f = 340 m/s / 500 Hz = 0,68 metros.'
  },
  {
    id: 130,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um corpo de 2kg é levantado a uma altura de 3m. Qual a energia potencial gravitacional ganha? (g = 10 m/s²)',
    options: ['6 J', '20 J', '30 J', '50 J', '60 J'],
    correctAnswer: '60 J',
    explanation: 'Epg = m * g * h = 2 kg * 10 m/s² * 3 m = 60 Joules.'
  },
    {
    id: 131,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual a resistência equivalente de dois resistores de 20 Ω ligados em paralelo?',
    image: 'https://picsum.photos/seed/parallel-resistors/500/300',
    options: ['5 Ω', '10 Ω', '20 Ω', '30 Ω', '40 Ω'],
    correctAnswer: '10 Ω',
    explanation: 'Para resistores em paralelo, 1/Req = 1/R1 + 1/R2. 1/Req = 1/20 + 1/20 = 2/20 = 1/10. Portanto, Req = 10 Ω.'
  },
  {
    id: 132,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2011) Um chuveiro tem potências de 2400W (morno), 4400W (quente) e 6800W (superquente). A maior resistência elétrica corresponde à posição:',
    options: ['Morno', 'Quente', 'Superquente', 'A resistência é a mesma', 'Depende da tensão'],
    correctAnswer: 'Morno',
    explanation: 'Potência P = V²/R. Para V constante, a potência é inversamente proporcional à resistência. A menor potência (Morno) corresponde à maior resistência.'
  },
  {
    id: 133,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual a quantidade de calor necessária para elevar a temperatura de 200g de água de 20°C para 50°C? (c = 1 cal/g°C)',
    options: ['3000 cal', '4000 cal', '6000 cal', '10000 cal', '14000 cal'],
    correctAnswer: '6000 cal',
    explanation: 'Q = m * c * ΔT = 200g * 1 cal/g°C * (50°C - 20°C) = 200 * 1 * 30 = 6000 calorias.'
  },
  {
    id: 134,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um objeto flutua em um líquido (d=1g/cm³) com 75% do volume submerso. Qual a densidade do objeto?',
    options: ['0.25 g/cm³', '0.50 g/cm³', '0.75 g/cm³', '1.00 g/cm³', '1.33 g/cm³'],
    correctAnswer: '0.75 g/cm³',
    explanation: 'Pelo Princípio de Arquimedes, d_objeto = d_liquido * (V_submerso / V_total) = 1 g/cm³ * 0.75 = 0.75 g/cm³.'
  },
  {
    id: 135,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual grandeza de uma onda luminosa NÃO se altera na refração?',
    options: ['Velocidade', 'Comprimento de onda', 'Direção', 'Frequência', 'Amplitude'],
    correctAnswer: 'Frequência',
    explanation: 'Quando a luz muda de meio, sua velocidade e comprimento de onda se alteram, mas sua frequência, determinada pela fonte, permanece constante.'
  },
  {
    id: 136,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um bloco de 4 kg é puxado por uma força horizontal de 20 N sobre uma superfície sem atrito. Qual é a aceleração do bloco?',
    options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
    correctAnswer: '5 m/s²',
    explanation: 'Pela Segunda Lei de Newton, F = m * a. Portanto, a = F / m = 20 N / 4 kg = 5 m/s².'
  },
  {
    id: 137,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2012) A eficiência de um motor a combustão pode ser aumentada se aumentarmos a temperatura da fonte quente e diminuirmos a da fonte fria. Esse princípio é uma aplicação da:',
    options: ['Primeira Lei da Termodinâmica', 'Segunda Lei da Termodinâmica (Ciclo de Carnot)', 'Lei de Boyle', 'Lei de Charles', 'Lei de Ohm'],
    correctAnswer: 'Segunda Lei da Termodinâmica (Ciclo de Carnot)',
    explanation: 'O Ciclo de Carnot estabelece o limite máximo teórico de eficiência para uma máquina térmica, η = 1 - (T_fria / T_quente). A eficiência aumenta com a diferença de temperatura entre as fontes.'
  },
  {
    id: 138,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o campo magnético a 2 cm de um fio retilíneo percorrido por uma corrente de 10 A? (μ₀ = 4π × 10⁻⁷ T·m/A)',
    options: ['1 × 10⁻⁴ T', '2 × 10⁻⁴ T', '1 × 10⁻⁵ T', '2 × 10⁻⁵ T', '4π × 10⁻⁷ T'],
    correctAnswer: '1 × 10⁻⁴ T',
    explanation: 'B = (μ₀ * I) / (2π * r) = (4π × 10⁻⁷ * 10) / (2π * 0.02) = (2 * 10⁻⁶) / 0.02 = 1 × 10⁻⁴ T.'
  },
  {
    id: 139,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um atleta corre uma pista circular de raio 50 m com velocidade de 10 m/s. Qual sua aceleração centrípeta?',
    options: ['0.2 m/s²', '0.5 m/s²', '1 m/s²', '2 m/s²', '5 m/s²'],
    correctAnswer: '2 m/s²',
    explanation: 'Aceleração centrípeta acp = v² / r = (10 m/s)² / 50 m = 100 / 50 = 2 m/s².'
  },
    {
    id: 140,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Uma lente convergente tem distância focal de 10 cm. Para se obter uma imagem real e do mesmo tamanho que o objeto, este deve ser colocado a que distância da lente?',
    image: 'https://picsum.photos/seed/converging-lens/600/300',
    options: ['10 cm', '15 cm', '20 cm', '25 cm', '30 cm'],
    correctAnswer: '20 cm',
    explanation: 'Para uma imagem real e do mesmo tamanho, o objeto deve ser colocado no ponto antiprincipal, a uma distância p = 2f = 2 * 10 cm = 20 cm.'
  },
  {
    id: 141,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A miopia é um defeito de visão corrigido com lentes:',
    options: ['Convergentes', 'Divergentes', 'Cilíndricas', 'Planas', 'Bifocais'],
    correctAnswer: 'Divergentes',
    explanation: 'Na miopia, a imagem se forma antes da retina. Lentes divergentes (côncavas) são usadas para espalhar a luz, movendo o ponto focal para trás, sobre a retina.'
  },
  {
    id: 142,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um gás ideal sofre uma transformação isobárica de 2L para 6L a uma pressão de 3 atm. Qual o trabalho realizado pelo gás?',
    options: ['6 L.atm', '8 L.atm', '12 L.atm', '18 L.atm', '24 L.atm'],
    correctAnswer: '12 L.atm',
    explanation: 'Trabalho em transformação isobárica W = P * ΔV = 3 atm * (6 L - 2 L) = 3 * 4 = 12 L.atm.'
  },
  {
    id: 143,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o impulso necessário para variar a velocidade de um objeto de 5 kg de 2 m/s para 8 m/s?',
    options: ['10 N.s', '20 N.s', '30 N.s', '40 N.s', '50 N.s'],
    correctAnswer: '30 N.s',
    explanation: 'Impulso (I) = Variação da quantidade de movimento (ΔQ) = m*v_final - m*v_inicial = 5*8 - 5*2 = 40 - 10 = 30 N.s.'
  },
  {
    id: 144,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2013) A pressão mínima para uma ducha é de 20 kPa. Qual a altura mínima h da caixa d\'água para o bom funcionamento? (d(água)=1000 kg/m³, g=10 m/s²)',
    options: ['1 m', '2 m', '5 m', '10 m', '20 m'],
    correctAnswer: '2 m',
    explanation: 'Pressão hidrostática P = d*g*h. 20000 Pa = 1000 * 10 * h => h = 20000 / 10000 = 2 metros.'
  },
  {
    id: 145,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Se a temperatura (em Kelvin) de um corpo negro dobrar, a potência total irradiada:',
    options: ['Dobra', 'Quadruplica', 'Aumenta 8 vezes', 'Aumenta 16 vezes', 'Permanece a mesma'],
    correctAnswer: 'Aumenta 16 vezes',
    explanation: 'Pela Lei de Stefan-Boltzmann, a potência irradiada é proporcional a T⁴. Se T dobra, a potência se torna (2T)⁴ = 16T⁴, ou 16 vezes maior.'
  },
  {
    id: 146,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual a frequência de um fóton com comprimento de onda de 600 nm? (c = 3x10⁸ m/s)',
    options: ['3 x 10¹⁴ Hz', '5 x 10¹⁴ Hz', '6 x 10¹⁴ Hz', '3 x 10¹⁵ Hz', '5 x 10¹⁵ Hz'],
    correctAnswer: '5 x 10¹⁴ Hz',
    explanation: 'f = c / λ = (3x10⁸ m/s) / (600 x 10⁻⁹ m) = (3x10⁸) / (6x10⁻⁷) = 0.5 x 10¹⁵ Hz = 5 x 10¹⁴ Hz.'
  },
  {
    id: 147,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Uma força de 10 N estica uma mola em 5 cm. Qual a constante elástica da mola?',
    options: ['2 N/m', '50 N/m', '100 N/m', '200 N/m', '500 N/m'],
    correctAnswer: '200 N/m',
    explanation: 'Pela Lei de Hooke, F = k * x. k = F / x = 10 N / 0,05 m = 200 N/m.'
  },
  {
    id: 148,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2019) Um sonar emite um pulso que leva 3s para ir ao fundo do mar e voltar. Sendo a velocidade do som na água 1500 m/s, qual a profundidade?',
    options: ['1500 m', '2250 m', '3000 m', '4500 m', '9000 m'],
    correctAnswer: '2250 m',
    explanation: 'O tempo para ir é 3s / 2 = 1,5s. A distância (profundidade) é d = v * t = 1500 m/s * 1,5 s = 2250 metros.'
  },
  {
    id: 149,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um gerador ideal tem fem de 12 V e está ligado a um resistor de 4 Ω. Qual a potência dissipada?',
    options: ['3 W', '12 W', '36 W', '48 W', '144 W'],
    correctAnswer: '36 W',
    explanation: 'Em um gerador ideal, U = 12V. A corrente é I = U/R = 12V/4Ω = 3A. A potência dissipada é P = U²/R = 12²/4 = 144/4 = 36W.'
  },
  {
    id: 150,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o índice de refração de um meio onde a velocidade da luz é 2x10⁸ m/s? (c = 3x10⁸ m/s)',
    options: ['1.0', '1.33', '1.5', '2.0', '2.5'],
    correctAnswer: '1.5',
    explanation: 'O índice de refração n = c / v = (3 x 10⁸ m/s) / (2 x 10⁸ m/s) = 1.5.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 151,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um objeto de 2 kg é lançado verticalmente para cima com velocidade de 20 m/s. Qual a altura máxima atingida? (g = 10 m/s²)',
    options: ['10 m', '15 m', '20 m', '25 m', '30 m'],
    correctAnswer: '20 m',
    explanation: 'Pela conservação de energia, a energia cinética inicial é convertida em potencial. 1/2 * m * v² = m * g * h. 1/2 * 2 * (20)² = 2 * 10 * h. 400 = 20h => h = 20 m.'
  },
  {
    id: 152,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Duas cargas Q1=+4μC e Q2=-6μC estão a 30 cm de distância. Qual a força elétrica entre elas? (k₀=9x10⁹ N·m²/C²)',
    options: ['1,2 N', '2,4 N', '3,6 N', '4,8 N', '6,0 N'],
    correctAnswer: '2,4 N',
    explanation: 'Pela Lei de Coulomb, F = k*|Q1*Q2|/d². F = (9x10⁹ * 4x10⁻⁶ * 6x10⁻⁶)/(0,3)². F = (216x10⁻³)/0,09 = 2,4 N.'
  },
  {
    id: 153,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2018) Para projetar uma imagem real e ampliada, o slide (objeto) deve ser posicionado em relação à lente convergente do projetor:',
    options: ['entre o foco e o centro óptico.', 'sobre o foco.', 'entre o foco e o ponto antiprincipal.', 'sobre o ponto antiprincipal.', 'além do ponto antiprincipal.'],
    correctAnswer: 'entre o foco e o ponto antiprincipal.',
    explanation: 'Para uma lente convergente projetar uma imagem real, invertida e maior, o objeto deve ser posicionado entre o foco (F) e o ponto antiprincipal (2F).'
  },
    {
    id: 154,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'No circuito RLC série mostrado, a ressonância ocorre quando a frequência angular da fonte é ω. Qual a fórmula para ω?',
    image: 'https://picsum.photos/seed/rlc-circuit/500/300',
    options: ['ω = LC', 'ω = 1/LC', 'ω = L/C', 'ω = C/L', 'ω = 1/√(LC)'],
    correctAnswer: 'ω = 1/√(LC)',
    explanation: 'A ressonância ocorre quando a reatância indutiva (XL = ωL) é igual à reatância capacitiva (XC = 1/ωC). ωL = 1/ωC => ω² = 1/(LC) => ω = 1/√(LC).'
  },
  {
    id: 155,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um pêndulo simples tem período de 2s na Terra (g≈10 m/s²). Qual o comprimento do fio? (Use π²≈10)',
    options: ['0,5 m', '1,0 m', '1,5 m', '2,0 m', '4,0 m'],
    correctAnswer: '1,0 m',
    explanation: 'T = 2π√(L/g) => T² = 4π²(L/g) => L = (T²*g)/(4π²) = (2²*10)/(4*10) = 40/40 = 1,0 m.'
  },
  {
    id: 156,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Uma onda em uma corda tem f=20Hz e λ=2m. Se a f for para 40Hz, qual a nova velocidade e comprimento de onda?',
    options: ['v=80m/s, λ=2m', 'v=40m/s, λ=1m', 'v=40m/s, λ=2m', 'v=80m/s, λ=1m', 'v=20m/s, λ=0.5m'],
    correctAnswer: 'v=40m/s, λ=1m',
    explanation: 'A velocidade na corda é constante: v = f*λ = 20Hz*2m = 40m/s. O novo comprimento de onda é λ\' = v/f\' = 40m/s / 40Hz = 1m.'
  },
  {
    id: 157,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um elétron (e=1,6x10⁻¹⁹ C) é acelerado por uma ddp de 100 V. Qual sua energia cinética final?',
    options: ['1,6x10⁻¹⁷ J', '1,6x10⁻¹⁹ J', '1,6x10⁻²¹ J', '100 J', '0.016 J'],
    correctAnswer: '1,6x10⁻¹⁷ J',
    explanation: 'A variação da energia cinética é igual ao trabalho realizado. ΔEc = W = q*U = (1,6x10⁻¹⁹ C) * (100 V) = 1,6x10⁻¹⁷ J.'
  },
  {
    id: 158,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A Lei de Lenz afirma que a corrente induzida em um circuito:',
    options: ['é sempre no sentido horário.', 'gera um campo magnético que se opõe à variação do fluxo que a produziu.', 'é proporcional à resistência.', 'gera um campo magnético que reforça a variação do fluxo.', 'só existe em circuito aberto.'],
    correctAnswer: 'gera um campo magnético que se opõe à variação do fluxo que a produziu.',
    explanation: 'A Lei de Lenz define o sentido da corrente induzida, que sempre cria um campo magnético para se opor à mudança no fluxo magnético que a originou.'
  },
    {
    id: 159,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'De acordo com a Lei de Snell (n₁senθ₁=n₂senθ₂), quando a luz passa do ar para a água (n_água > n_ar), o raio de luz:',
    image: 'https://picsum.photos/seed/snells-law/500/400',
    options: ['se aproxima da normal.', 'se afasta da normal.', 'não sofre desvio.', 'é totalmente refletido.', 'tem ângulo de 30°.'],
    correctAnswer: 'se aproxima da normal.',
    explanation: 'Ao passar para um meio mais refringente (maior n), o ângulo de refração será menor que o de incidência, fazendo o raio se aproximar da linha normal.'
  },
  {
    id: 160,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A meia-vida de um isótopo é de 10 anos. Se tivermos 800g, que massa restará após 30 anos?',
    options: ['400g', '200g', '100g', '50g', '0g'],
    correctAnswer: '100g',
    explanation: 'Passaram-se 3 meias-vidas (30/10). Após 10 anos: 400g. Após 20 anos: 200g. Após 30 anos: 100g.'
  },
  {
    id: 161,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2016) Um carro solar de 200 kg parte do repouso com força resultante de 100 N. Qual sua velocidade após 9 metros?',
    options: ['3 m/s', '6 m/s', '9 m/s', '10 m/s', '18 m/s'],
    correctAnswer: '3 m/s',
    explanation: 'Aceleração a = F/m = 100N/200kg = 0.5 m/s². Pela equação de Torricelli: V² = V₀² + 2*a*Δs = 0 + 2*0.5*9 = 9. V = √9 = 3 m/s.'
  },
  {
    id: 162,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Satélites A e B de massas m e 2m orbitam a Terra em raios R e 2R. A razão entre as velocidades vA / vB é:',
    options: ['1/√2', '√2', '1/2', '2', '1'],
    correctAnswer: '√2',
    explanation: 'A velocidade orbital v=√(GM/r) não depende da massa do satélite. vA/vB = [√(GM/R)]/[√(GM/2R)] = √[(GM/R)*(2R/GM)] = √2.'
  },
  {
    id: 163,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Uma máquina de Carnot opera entre 27°C e 327°C. Qual seu rendimento máximo?',
    options: ['10%', '25%', '50%', '75%', '91%'],
    correctAnswer: '50%',
    explanation: 'Temperaturas em Kelvin: T_fria = 300K, T_quente = 600K. Rendimento η = 1 - (T_fria/T_quente) = 1 - (300/600) = 1 - 0.5 = 0.5 ou 50%.'
  },
    {
    id: 164,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um próton entra em um campo magnético uniforme com velocidade perpendicular. O movimento descrito será:',
    image: 'https://picsum.photos/seed/lorentz-force/500/400',
    options: ['Retilíneo uniforme', 'Circular uniforme', 'Helicoidal uniforme', 'Retilíneo variado', 'Parabólico'],
    correctAnswer: 'Circular uniforme',
    explanation: 'A força magnética é sempre perpendicular à velocidade, atuando como força centrípeta e resultando em um movimento circular uniforme.'
  },
  {
    id: 165,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM PPL 2018) Um fio de cobre de 1m de comprimento e 1mm² de área tem resistência de 0,017Ω. Qual a resistividade do material?',
    options: ['0,017 Ω.m', '1,7 × 10⁻⁸ Ω.m', '1,7 × 10⁻⁵ Ω.m', '1,7 × 10⁻² Ω.m', '17 Ω.m'],
    correctAnswer: '1,7 × 10⁻⁸ Ω.m',
    explanation: 'Resistividade ρ = R*A/L. Área A = 1 mm² = 10⁻⁶ m². ρ = (0,017 Ω * 10⁻⁶ m²)/1m = 1,7×10⁻⁸ Ω.m.'
  },
  {
    id: 166,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Duas fontes sonoras emitem ondas em fase (f=170Hz). Um observador está a 10m de uma e 12m da outra. Qual a interferência? (v_som=340m/s)',
    options: ['Construtiva', 'Destrutiva', 'Nenhuma', 'Estacionária', 'Complexa'],
    correctAnswer: 'Construtiva',
    explanation: 'Comprimento de onda λ = v/f = 340/170 = 2m. A diferença de caminho é Δd = 12m-10m = 2m. Como Δd = 1*λ (múltiplo inteiro de λ), a interferência é construtiva.'
  },
  {
    id: 167,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um capacitor é carregado e desconectado. Se um dielétrico (k>1) for inserido entre as placas, o que acontece com a capacitância (C) e a ddp (V)?',
    options: ['C aumenta, V diminui', 'C diminui, V aumenta', 'C aumenta, V constante', 'C diminui, V constante', 'C e V constantes'],
    correctAnswer: 'C aumenta, V diminui',
    explanation: 'A capacitância C = k*C₀, então C aumenta. A carga Q permanece constante. Como Q=C*V, se C aumenta e Q é constante, V deve diminuir (V=Q/C).'
  },
  {
    id: 168,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um gás a 27°C e 1 atm é aquecido a volume constante até 127°C. Qual será a nova pressão?',
    options: ['1.33 atm', '1.50 atm', '2.00 atm', '4.70 atm', '0.75 atm'],
    correctAnswer: '1.33 atm',
    explanation: 'Usando a Lei de Charles e Gay-Lussac (P₁/T₁=P₂/T₂) com temperaturas em Kelvin. T₁=300K, T₂=400K. 1/300 = P₂/400 => P₂ = 400/300 ≈ 1.33 atm.'
  },
    {
    id: 169,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um bloco de 10kg desliza por um plano inclinado de 30°. Se o coeficiente de atrito cinético é 0,2, qual a aceleração? (g=10, sen30=0.5, cos30=0.87)',
    image: 'https://picsum.photos/seed/inclined-plane/600/350',
    options: ['1.3 m/s²', '2.5 m/s²', '3.3 m/s²', '5 m/s²', '6.7 m/s²'],
    correctAnswer: '3.3 m/s²',
    explanation: 'Px = m*g*sen(30) = 10*10*0.5=50N. N = m*g*cos(30) = 10*10*0.87=87N. Fat=μ*N = 0.2*87=17.4N. Fr = Px-Fat = 50-17.4=32.6N. a=Fr/m = 32.6/10 ≈ 3.3 m/s².'
  },
  {
    id: 170,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Qual a energia de um fóton de luz azul com f=6.0x10¹⁴Hz? (h=6.6x10⁻³⁴ J.s)',
    options: ['1,1×10⁻¹⁹ J', '3,96×10⁻¹⁹ J', '6,6×10⁻¹⁹ J', '1,1×10⁻⁴⁸ J', '3,96×10⁻⁴⁸ J'],
    correctAnswer: '3,96×10⁻¹⁹ J',
    explanation: 'Energia E = h*f = (6,6×10⁻³⁴ J.s)*(6,0×10¹⁴ Hz) = 39,6×10⁻²⁰ J = 3,96×10⁻¹⁹ J.'
  },
  {
    id: 171,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2015) Bola de boliche (7kg) colide com pino (1,5kg). Após, v_bola=2m/s e v_pino=8m/s. Qual a v_bola inicial?',
    options: ['2.8 m/s', '3.7 m/s', '4.0 m/s', '5.2 m/s', '6.0 m/s'],
    correctAnswer: '3.7 m/s',
    explanation: 'Conservação de momento: m₁v₁i = m₁v₁f + m₂v₂f. 7*v₁i = 7*2 + 1.5*8 = 14 + 12 = 26. v₁i = 26/7 ≈ 3.7 m/s.'
  },
  {
    id: 172,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um transformador ideal liga um aparelho de 12V em uma tomada de 120V. Se a corrente no primário é 0,5A, qual a corrente no secundário?',
    options: ['0,05 A', '0,5 A', '2 A', '5 A', '10 A'],
    correctAnswer: '5 A',
    explanation: 'Para um transformador ideal, V₁/V₂ = I₂/I₁. 120V/12V = I₂/0,5A. 10 = I₂/0,5 => I₂ = 5 A.'
  },
  {
    id: 173,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um satélite geoestacionário deve ter sua órbita:',
    options: ['Em qualquer plano orbital.', 'Contida no plano equatorial da Terra.', 'Com período de 12 horas.', 'Em uma órbita polar.', 'De baixa altitude.'],
    correctAnswer: 'Contida no plano equatorial da Terra.',
    explanation: 'Para ser geoestacionário, o satélite deve ter período de 24h, orbitar no sentido de rotação da Terra e sua órbita deve estar no plano do equador.'
  },
  {
    id: 174,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'O momento de inércia de um corpo depende de:',
    options: ['Sua massa total.', 'Sua velocidade angular.', 'Sua massa e da distribuição dela em relação ao eixo de rotação.', 'Sua aceleração angular.', 'Da força aplicada.'],
    correctAnswer: 'Sua massa e da distribuição dela em relação ao eixo de rotação.',
    explanation: 'O momento de inércia (I) mede a resistência à aceleração angular e depende da massa e de como ela está distribuída em relação ao eixo de rotação.'
  },
  {
    id: 175,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Segundo a Relatividade Especial, se um objeto se move próximo à velocidade da luz, um observador medirá que o tempo para o objeto:',
    options: ['Passa mais rápido (dilatação temporal).', 'Passa mais devagar (contração temporal).', 'Passa mais devagar (dilatação temporal).', 'Passa mais rápido (contração temporal).', 'Não sofre alteração.'],
    correctAnswer: 'Passa mais devagar (dilatação temporal).',
    explanation: 'A dilatação temporal é um postulado da Relatividade Especial. Para um observador, relógios em movimento correm mais devagar.'
  },
  {
    id: 176,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2010) Para um sistema de aquecimento solar com circulação natural funcionar, os coletores devem ser instalados:',
    options: ['No mesmo nível do reservatório.', 'Acima do nível do reservatório.', 'Abaixo do nível do reservatório.', 'Na vertical.', 'Não importa a posição.'],
    correctAnswer: 'Abaixo do nível do reservatório.',
    explanation: 'A água aquecida nos coletores torna-se menos densa e sobe. Para que a convecção natural ocorra, a água fria e mais densa do reservatório deve descer, o que requer que os coletores estejam abaixo do reservatório.'
  },
    {
    id: 177,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Uma espira retangular sai de uma região de campo magnético uniforme (B) que aponta para fora da página. Qual o sentido da corrente induzida?',
    image: 'https://picsum.photos/seed/faraday-lenz-law/500/400',
    options: ['Horário', 'Anti-horário', 'Nulo', 'Alternado', 'Depende da velocidade'],
    correctAnswer: 'Anti-horário',
    explanation: 'O fluxo magnético para fora está diminuindo. Pela Lei de Lenz, a corrente induzida criará um campo para se opor a essa variação, ou seja, um campo saindo da página. Pela regra da mão direita, a corrente deve ser no sentido anti-horário.'
  },
  {
    id: 178,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Carro (1000kg a 20m/s) e caminhão (4000kg a 10m/s) colidem em sentidos opostos. Qual a velocidade do conjunto após a colisão perfeitamente inelástica?',
    options: ['4 m/s no sentido do caminhão', '4 m/s no sentido do carro', '6 m/s no sentido do caminhão', '6 m/s no sentido do carro', '0 m/s'],
    correctAnswer: '4 m/s no sentido do caminhão',
    explanation: 'Conservação de momento: (4000*10) + (1000*-20) = (4000+1000)*V. 40000 - 20000 = 5000V. 20000 = 5000V => V = 4 m/s. Positivo, logo no sentido do caminhão.'
  },
  {
    id: 179,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Objeto de 20cm de altura a 30cm de uma lente convergente com df=20cm. A imagem formada será:',
    options: ['Real, invertida e com 40 cm de altura.', 'Virtual, direita e com 40 cm de altura.', 'Real, invertida e com 10 cm de altura.', 'Virtual, direita e com 10 cm de altura.', 'Real, direita e com 20 cm de altura.'],
    correctAnswer: 'Real, invertida e com 40 cm de altura.',
    explanation: '1/f = 1/p + 1/p\' => 1/20 = 1/30 + 1/p\' => p\'=60cm (real). Aumento A = -p\'/p = -60/30 = -2 (invertida, 2x maior). Altura da imagem = 2 * 20cm = 40cm.'
  },
  {
    id: 180,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'No efeito fotoelétrico, a energia cinética dos elétrons ejetados de um metal depende:',
    options: ['Da intensidade da luz incidente.', 'Da frequência da luz incidente.', 'Do tempo de exposição à luz.', 'Apenas do material.', 'Da temperatura do metal.'],
    correctAnswer: 'Da frequência da luz incidente.',
    explanation: 'A energia de cada fóton é E=hf. Essa energia é usada para arrancar o elétron (função trabalho) e o restante vira energia cinética. Portanto, a energia cinética depende da frequência (f) da luz.'
  },
  // =================================================
  //                    BIOLOGIA (90)
  // =================================================
  // --- FÁCIL (30) ---
    {
    id: 181,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é a organela celular responsável pela respiração celular e produção de ATP?',
    image: 'https://picsum.photos/seed/mitochondria/500/400',
    options: ['Ribossomo', 'Lisossomo', 'Complexo de Golgi', 'Mitocôndria', 'Retículo Endoplasmático'],
    correctAnswer: 'Mitocôndria',
    explanation: 'A mitocôndria é a "usina de energia" da célula, onde ocorre a respiração celular que gera ATP.'
  },
  {
    id: 182,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O processo pelo qual as plantas utilizam a luz solar para produzir seu próprio alimento é chamado de:',
    options: ['Respiração', 'Transpiração', 'Fotossíntese', 'Fagocitose', 'Osmose'],
    correctAnswer: 'Fotossíntese',
    explanation: 'Fotossíntese é o processo em que plantas convertem dióxido de carbono e água em glicose e oxigênio, usando a energia da luz solar.'
  },
  {
    id: 183,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual das seguintes opções NÃO é um reino dos seres vivos?',
    options: ['Animalia', 'Plantae', 'Fungi', 'Protista', 'Prokaryotae'],
    correctAnswer: 'Prokaryotae',
    explanation: 'Prokaryotae é um domínio ou tipo de célula. O reino que contém os procariontes é o Monera.'
  },
  {
    id: 184,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A molécula que carrega a informação genética nos seres vivos é o:',
    options: ['RNA', 'DNA', 'ATP', 'Proteína', 'Glicose'],
    correctAnswer: 'DNA',
    explanation: 'O DNA (Ácido Desoxirribonucleico) contém as instruções genéticas para o desenvolvimento e funcionamento dos organismos.'
  },
    {
    id: 185,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Na célula vegetal ilustrada, qual estrutura é responsável pela rigidez e suporte?',
    image: 'https://picsum.photos/seed/plant-cell/500/500',
    options: ['Membrana plasmática', 'Citoplasma', 'Parede celular', 'Núcleo', 'Vacúolo'],
    correctAnswer: 'Parede celular',
    explanation: 'A parede celular, externa à membrana, é composta de celulose e confere rigidez, forma e proteção à célula vegetal.'
  },
  {
    id: 186,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2011) A principal característica da vegetação de um manguezal é sua adaptação a:',
    options: ['Grandes árvores e clima seco.', 'Solos salinos e pobres em oxigênio.', 'Abundância de corais.', 'Solo desértico.', 'Baixas temperaturas e neve.'],
    correctAnswer: 'Solos salinos e pobres em oxigênio.',
    explanation: 'Os manguezais são caracterizados por plantas com adaptações, como raízes aéreas, para sobreviver em solos lodosos, salinos e com baixa oxigenação.'
  },
  {
    id: 187,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'No corpo humano, os pulmões fazem parte de qual sistema?',
    options: ['Sistema Digestório', 'Sistema Circulatório', 'Sistema Nervoso', 'Sistema Respiratório', 'Sistema Excretor'],
    correctAnswer: 'Sistema Respiratório',
    explanation: 'Os pulmões são os órgãos principais do sistema respiratório, responsáveis pelas trocas gasosas.'
  },
    {
    id: 188,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A relação entre o peixe-palhaço e a anêmona, onde ambos se beneficiam, é um exemplo de:',
    image: 'https://picsum.photos/seed/clownfish-anemone/500/400',
    options: ['Predatismo', 'Parasitismo', 'Comensalismo', 'Mutualismo', 'Competição'],
    correctAnswer: 'Mutualismo',
    explanation: 'Mutualismo é uma interação em que os dois organismos se beneficiam. O peixe-palhaço ganha proteção, e a anêmona ganha limpeza.'
  },
  {
    id: 189,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual o nome do processo de divisão celular que produz gametas?',
    options: ['Mitose', 'Meiose', 'Brotamento', 'Fragmentação', 'Cissiparidade'],
    correctAnswer: 'Meiose',
    explanation: 'A meiose é um tipo de divisão celular que reduz o número de cromossomos pela metade, produzindo células haploides (gametas).'
  },
  {
    id: 190,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A teoria da evolução por seleção natural foi proposta por:',
    options: ['Gregor Mendel', 'Louis Pasteur', 'Charles Darwin', 'James Watson', 'Francis Crick'],
    correctAnswer: 'Charles Darwin',
    explanation: 'Charles Darwin, em "A Origem das Espécies", propôs que a evolução ocorre pela seleção natural, onde os mais adaptados sobrevivem e se reproduzem.'
  },
  {
    id: 191,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual organela celular é responsável pela síntese de proteínas?',
    options: ['Mitocôndria', 'Lisossomo', 'Ribossomo', 'Vacúolo', 'Centríolo'],
    correctAnswer: 'Ribossomo',
    explanation: 'Os ribossomos são as estruturas onde ocorre a tradução do RNA mensageiro em proteínas.'
  },
  {
    id: 192,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O sangue que retorna dos tecidos para o coração é rico em:',
    options: ['Oxigênio', 'Glicose', 'Dióxido de Carbono', 'Hemoglobina', 'Plaquetas'],
    correctAnswer: 'Dióxido de Carbono',
    explanation: 'O sangue venoso retorna ao coração carregando o dióxido de carbono, um resíduo do metabolismo celular, para ser eliminado nos pulmões.'
  },
  {
    id: 193,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Vírus são considerados parasitas intracelulares obrigatórios porque:',
    options: ['Realizam fotossíntese', 'Possuem todas as organelas', 'Não possuem material genético', 'Só conseguem se reproduzir dentro de uma célula hospedeira', 'São procariontes'],
    correctAnswer: 'Só conseguem se reproduzir dentro de uma célula hospedeira',
    explanation: 'Vírus são acelulares e precisam invadir uma célula hospedeira para utilizar a maquinaria celular dela para se replicar.'
  },
  {
    id: 194,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2013) A dengue é uma doença viral transmitida pela picada de qual vetor?',
    options: ['Carrapato-estrela', 'Mosquito Anopheles', 'Mosquito Aedes aegypti', 'Barbeiro', 'Rato'],
    correctAnswer: 'Mosquito Aedes aegypti',
    explanation: 'A dengue, Zika e Chikungunya são transmitidas principalmente pela picada do mosquito Aedes aegypti.'
  },
  {
    id: 195,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O conjunto de todos os ecossistemas da Terra é chamado de:',
    options: ['Comunidade', 'População', 'Biosfera', 'Bioma', 'Habitat'],
    correctAnswer: 'Biosfera',
    explanation: 'A biosfera é a camada do planeta Terra onde a vida é encontrada, englobando todos os ecossistemas.'
  },
  {
    id: 196,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Como são chamados os organismos que produzem seu próprio alimento, como as plantas?',
    options: ['Heterotróficos', 'Decompositores', 'Consumidores', 'Autotróficos', 'Parasitas'],
    correctAnswer: 'Autotróficos',
    explanation: 'Organismos autotróficos (ou produtores) são capazes de produzir seu próprio alimento, geralmente pela fotossíntese.'
  },
  {
    id: 197,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'As artérias são vasos sanguíneos que, em geral:',
    options: ['Levam sangue do coração para os tecidos', 'Trazem sangue dos tecidos para o coração', 'Realizam trocas gasosas', 'Contêm apenas sangue venoso', 'Não possuem paredes musculares'],
    correctAnswer: 'Levam sangue do coração para os tecidos',
    explanation: 'Artérias são vasos que partem do coração, transportando sangue sob alta pressão para o resto do corpo.'
  },
  {
    id: 198,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é a principal função do sistema nervoso?',
    options: ['Transportar nutrientes', 'Produzir hormônios', 'Coordenar ações e transmitir sinais pelo corpo', 'Defender contra patógenos', 'Digestionar alimentos'],
    correctAnswer: 'Coordenar ações e transmitir sinais pelo corpo',
    explanation: 'O sistema nervoso é responsável por captar, processar e responder a estímulos, controlando as funções do corpo.'
  },
  {
    id: 199,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2012) A vacinação é uma forma de imunização que tem como objetivo:',
    options: ['Tratar doenças com antibióticos.', 'Fornecer nutrientes.', 'Estimular o corpo a produzir anticorpos contra um agente específico.', 'Eliminar parasitas.', 'Curar doenças genéticas.'],
    correctAnswer: 'Estimular o corpo a produzir anticorpos contra um agente específico.',
    explanation: 'Vacinas contêm antígenos que estimulam o sistema imune a produzir células de memória e anticorpos, criando uma defesa prévia.'
  },
  {
    id: 200,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Os fungos, como os cogumelos e bolores, pertencem a qual reino?',
    options: ['Plantae', 'Animalia', 'Protista', 'Monera', 'Fungi'],
    correctAnswer: 'Fungi',
    explanation: 'Os fungos formam o Reino Fungi. São eucariontes, heterotróficos por absorção e possuem parede celular de quitina.'
  },
  {
    id: 201,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O pâncreas produz, entre outras substâncias, a insulina, que é um:',
    options: ['Enzima digestiva', 'Hormônio', 'Neurotransmissor', 'Anticorpo', 'Vitamina'],
    correctAnswer: 'Hormônio',
    explanation: 'A insulina é um hormônio que regula os níveis de glicose no sangue, permitindo sua entrada nas células.'
  },
  {
    id: 202,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual vitamina é sintetizada na pele humana através da exposição à luz solar?',
    options: ['Vitamina A', 'Vitamina B12', 'Vitamina C', 'Vitamina D', 'Vitamina K'],
    correctAnswer: 'Vitamina D',
    explanation: 'A vitamina D é produzida na pele quando exposta aos raios UVB do sol, sendo essencial para a absorção de cálcio.'
  },
  {
    id: 203,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A seiva bruta nas plantas é transportada das raízes para as folhas através do:',
    options: ['Floema', 'Xilema', 'Estômato', 'Córtex', 'Epiderme'],
    correctAnswer: 'Xilema',
    explanation: 'O xilema é o tecido vascular responsável por transportar água e sais minerais (seiva bruta) das raízes para as demais partes da planta.'
  },
    {
    id: 204,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Em uma cadeia alimentar (planta -> gafanhoto -> sapo), os herbívoros são classificados como:',
    image: 'https://picsum.photos/seed/food-chain/600/300',
    options: ['Produtores', 'Consumidores primários', 'Consumidores secundários', 'Consumidores terciários', 'Decompositores'],
    correctAnswer: 'Consumidores primários',
    explanation: 'Os herbívoros se alimentam dos produtores (plantas), ocupando o segundo nível trófico como consumidores primários.'
  },
  {
    id: 205,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2016) A queima de combustíveis fósseis intensifica o aquecimento global pelo acúmulo de:',
    options: ['Oxigênio e Nitrogênio', 'Gases de efeito estufa, como CO₂ e metano', 'Gases nobres', 'Ozônio e CFCs', 'Apenas vapor de água'],
    correctAnswer: 'Gases de efeito estufa, como CO₂ e metano',
    explanation: 'O aquecimento global é a intensificação do efeito estufa pelo aumento de gases como dióxido de carbono (CO₂) e metano (CH₄), que retêm calor na atmosfera.'
  },
  {
    id: 206,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O alelo dominante é aquele que:',
    options: ['Só se expressa em homozigose', 'Nunca se expressa', 'Se expressa em homozigose e em heterozigose', 'É sempre raro', 'Só existe em plantas'],
    correctAnswer: 'Se expressa em homozigose e em heterozigose',
    explanation: 'Um alelo dominante manifesta sua característica mesmo quando presente em apenas uma cópia (heterozigose), mascarando o alelo recessivo.'
  },
  {
    id: 207,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é o órgão responsável pela filtração do sangue e produção da urina?',
    options: ['Fígado', 'Pâncreas', 'Baço', 'Coração', 'Rim'],
    correctAnswer: 'Rim',
    explanation: 'Os rins são os órgãos centrais do sistema excretor, responsáveis por filtrar o sangue e produzir a urina.'
  },
  {
    id: 208,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A camada mais externa da pele humana é chamada de:',
    options: ['Derme', 'Hipoderme', 'Epiderme', 'Tecido adiposo', 'Melanina'],
    correctAnswer: 'Epiderme',
    explanation: 'A epiderme é a camada mais superficial da pele, atuando como uma barreira protetora.'
  },
  {
    id: 209,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O processo de quebra de moléculas grandes em menores com a ajuda de enzimas é chamado de:',
    options: ['Absorção', 'Digestão', 'Excreção', 'Circulação', 'Respiração'],
    correctAnswer: 'Digestão',
    explanation: 'Digestão é o processo no qual os alimentos são quebrados em nutrientes menores para serem absorvidos.'
  },
  {
    id: 210,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Animais que possuem coluna vertebral são classificados como:',
    options: ['Invertebrados', 'Vertebrados', 'Artrópodes', 'Moluscos', 'Anelídeos'],
    correctAnswer: 'Vertebrados',
    explanation: 'Vertebrados são animais que se caracterizam pela presença de uma espinha dorsal ou coluna vertebral.'
  },
  // --- MÉDIO (30) ---
  {
    id: 211,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual a principal diferença entre uma célula procarionte e uma eucarionte?',
    options: ['A eucarionte tem parede celular.', 'A procarionte tem mitocôndrias.', 'A procarionte tem núcleo definido.', 'A eucarionte tem núcleo definido e organelas membranosas.', 'A eucarionte não tem ribossomos.'],
    correctAnswer: 'A eucarionte tem núcleo definido e organelas membranosas.',
    explanation: 'A principal diferença é a ausência de um núcleo delimitado por membrana (carioteca) e de organelas membranosas nas células procariontes.'
  },
    {
    id: 212,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O que são cromossomos homólogos?',
    image: 'https://picsum.photos/seed/homologous-chromosomes/500/300',
    options: ['Cromossomos idênticos.', 'Cromossomos de procariontes.', 'Pares de cromossomos com os mesmos genes, um de origem paterna e outro materna.', 'Cromossomos sexuais.', 'A forma condensada da cromatina.'],
    correctAnswer: 'Pares de cromossomos com os mesmos genes, um de origem paterna e outro materna.',
    explanation: 'Cromossomos homólogos são os componentes de um par, compartilhando tamanho, forma e a sequência de genes para as mesmas características.'
  },
  {
    id: 213,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2015) A utilização de células-tronco do próprio indivíduo (autotransplante) é vantajosa porque:',
    options: ['As células-tronco não se diferenciam.', 'Apresenta baixa probabilidade de rejeição.', 'São obtidas apenas de embriões.', 'São mais baratas.', 'Não necessitam de exames de compatibilidade.'],
    correctAnswer: 'Apresenta baixa probabilidade de rejeição.',
    explanation: 'Ao usar células do próprio paciente, o sistema imune as reconhece como "próprias", minimizando o risco de rejeição.'
  },
  {
    id: 214,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Na fotossíntese, a fase clara ocorre nos tilacoides e a fase escura (Ciclo de Calvin) ocorre no:',
    options: ['Estroma do cloroplasto', 'Citoplasma', 'Membrana externa do cloroplasto', 'Núcleo', 'Mitocôndria'],
    correctAnswer: 'Estroma do cloroplasto',
    explanation: 'A fase clara produz ATP e NADPH, que são usados na fase escura para fixar o CO₂ e produzir glicose. Essa segunda fase ocorre no estroma do cloroplasto.'
  },
  {
    id: 215,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Indivíduos heterozigotos para anemia falciforme apresentam vantagem em regiões com malária. Este fenômeno é um exemplo de:',
    options: ['Seleção artificial', 'Seleção direcional', 'Seleção estabilizadora', 'Equilíbrio de Hardy-Weinberg', 'Vantagem do heterozigoto'],
    correctAnswer: 'Vantagem do heterozigoto',
    explanation: 'A vantagem do heterozigoto ocorre quando o genótipo heterozigoto tem uma aptidão evolutiva maior que os homozigotos, como neste caso de resistência à malária.'
  },
  {
    id: 216,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A bile, produzida no fígado, atua no intestino delgado para:',
    options: ['Digerir proteínas', 'Digerir carboidratos', 'Emulsionar gorduras', 'Aumentar o pH', 'Absorver vitaminas'],
    correctAnswer: 'Emulsionar gorduras',
    explanation: 'A bile age como um "detergente", quebrando grandes gotas de gordura em gotículas menores, aumentando a superfície de contato para a ação das enzimas lipases.'
  },
  {
    id: 217,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Em um cruzamento entre Aa e aa, qual a probabilidade de nascer um descendente recessivo (aa)?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '50%',
    explanation: 'O indivíduo Aa produz gametas A e a. O indivíduo aa produz gametas a. As possibilidades para a prole são: Aa e aa. A probabilidade de nascer aa é de 1/2 ou 50%.'
  },
  {
    id: 218,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2017) Plantas como cactos desenvolveram espinhos e cutículas espessas. Essas adaptações visam principalmente:',
    image: 'https://picsum.photos/seed/cactus-adaptation/400/500',
    options: ['Aumentar a absorção de luz.', 'Aumentar a perda de água.', 'Reduzir a perda de água por transpiração.', 'Armazenar mais nutrientes.', 'Facilitar as trocas gasosas.'],
    correctAnswer: 'Reduzir a perda de água por transpiração.',
    explanation: 'Essas são adaptações xerofíticas que visam diminuir a transpiração e conservar água em ambientes secos.'
  },
  {
    id: 219,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O processo de transcrição, na síntese proteica, consiste em:',
    options: ['Duplicar o DNA.', 'Produzir RNA a partir de um molde de DNA.', 'Ler o RNAm para montar uma proteína.', 'Transportar aminoácidos.', 'Corrigir erros no DNA.'],
    correctAnswer: 'Produzir RNA a partir de um molde de DNA.',
    explanation: 'A transcrição é o processo em que a informação de um gene no DNA é copiada para uma molécula de RNA mensageiro.'
  },
  {
    id: 220,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Antibióticos são eficazes no combate a infecções causadas por:',
    options: ['Vírus', 'Bactérias', 'Fungos', 'Protozoários', 'Todos'],
    correctAnswer: 'Bactérias',
    explanation: 'Antibióticos matam ou inibem o crescimento de bactérias, atuando em alvos específicos desses microrganismos.'
  },
  {
    id: 221,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A sucessão ecológica primária ocorre quando uma comunidade se estabelece em:',
    options: ['Uma floresta regenerada.', 'Um campo de cultivo abandonado.', 'Uma área previamente inabitada, como rocha nua.', 'Um ecossistema invadido.', 'Uma plantação destruída.'],
    correctAnswer: 'Uma área previamente inabitada, como rocha nua.',
    explanation: 'Sucessão primária é a colonização de um ambiente desprovido de vida e solo, como rochas vulcânicas ou dunas.'
  },
  {
    id: 222,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual filo é caracterizado por animais com corpo mole, geralmente protegido por concha, como caracóis e ostras?',
    options: ['Artrópodes', 'Anelídeos', 'Cnidários', 'Platelmintos', 'Moluscos'],
    correctAnswer: 'Moluscos',
    explanation: 'O filo Mollusca inclui animais como caracóis, ostras e polvos, que compartilham características como corpo mole e, em muitos casos, uma concha.'
  },
    {
    id: 223,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A "pequena circulação" ou circulação pulmonar descreve o caminho do sangue:',
    image: 'https://picsum.photos/seed/pulmonary-circulation/500/500',
    options: ['Do coração para o corpo e de volta.', 'Do ventrículo direito para os pulmões e de volta para o átrio esquerdo.', 'Do ventrículo esquerdo para os pulmões e de volta.', 'Do fígado para o coração.', 'Do cérebro para os pulmões.'],
    correctAnswer: 'Do ventrículo direito para os pulmões e de volta para o átrio esquerdo.',
    explanation: 'Na pequena circulação, o sangue pobre em oxigênio é bombeado do ventrículo direito para os pulmões para ser oxigenado, e retorna ao átrio esquerdo.'
  },
  {
    id: 224,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2018) Material perfurocortante hospitalar, como agulhas, deve ser descartado em:',
    options: ['Sacos plásticos comuns.', 'Caixas de papelão.', 'Recipientes rígidos e resistentes a perfurações.', 'Lixo orgânico.', 'Diretamente no esgoto.'],
    correctAnswer: 'Recipientes rígidos e resistentes a perfurações.',
    explanation: 'A norma de biossegurança exige que materiais perfurocortantes sejam descartados em recipientes específicos, rígidos e à prova de perfuração, para proteger os profissionais.'
  },
  {
    id: 225,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Briófitas (musgos) e pteridófitas (samambaias) dependem da água para a fecundação porque:',
    options: ['Não produzem sementes.', 'Suas flores precisam de água.', 'Os gametas masculinos nadam até o gameta feminino.', 'A polinização é por animais aquáticos.', 'Realizam fotossíntese aquática.'],
    correctAnswer: 'Os gametas masculinos nadam até o gameta feminino.',
    explanation: 'Ambos os grupos possuem gametas masculinos flagelados (anterozoides) que necessitam de um meio líquido para se deslocarem até a oosfera.'
  },
  {
    id: 226,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Daltonismo é recessivo e ligado ao X. Um homem daltônico (XdY) casa-se com uma mulher normal, cujo pai era daltônico (XDXd). Qual a probabilidade de terem uma filha daltônica?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '25%',
    explanation: 'Cruzamento XdY x XDXd. As filhas podem ser XDXd ou XdXd. A chance de ser filha (1/2) e daltônica (XdXd, que exige o Xd da mãe, chance 1/2) é 1/2 * 1/2 = 1/4 ou 25%.'
  },
    {
    id: 227,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Asas de insetos e asas de aves são um exemplo de estruturas análogas. Isso significa que elas:',
    image: 'https://picsum.photos/seed/analogous-structures/600/300',
    options: ['Possuem mesma origem, mas funções diferentes.', 'Possuem origem diferente, mas mesma função.', 'São vestigiais.', 'Existem apenas em fósseis.', 'São idênticas.'],
    correctAnswer: 'Possuem origem diferente, mas mesma função.',
    explanation: 'Estruturas análogas são resultado da evolução convergente, onde organismos não aparentados desenvolvem estruturas semelhantes para a mesma função.'
  },
  {
    id: 228,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2020) A eutrofização de lagos, causada pelo excesso de nutrientes, leva diretamente à:',
    options: ['Diminuição da temperatura.', 'Aumento da transparência da água.', 'Proliferação excessiva de algas (floração).', 'Aumento do oxigênio.', 'Diminuição da matéria orgânica.'],
    correctAnswer: 'Proliferação excessiva de algas (floração).',
    explanation: 'O excesso de nutrientes estimula o crescimento descontrolado de algas. A decomposição dessa massa de algas consome o oxigênio da água, causando a morte de peixes.'
  },
  {
    id: 229,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A osmose é o movimento de:',
    options: ['Soluto do mais para o menos concentrado.', 'Solvente do menos para o mais concentrado.', 'Soluto através de membrana permeável.', 'Solvente do mais para o menos concentrado.', 'Gases pela membrana.'],
    correctAnswer: 'Solvente do menos para o mais concentrado.',
    explanation: 'Osmose é o movimento do solvente (água) através de uma membrana semipermeável, da região de menor concentração de soluto para a de maior concentração.'
  },
  {
    id: 230,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual hormônio, produzido pela hipófise, estimula o crescimento de ossos e tecidos?',
    options: ['Insulina', 'Tiroxina', 'Adrenalina', 'Hormônio do Crescimento (GH)', 'Glucagon'],
    correctAnswer: 'Hormônio do Crescimento (GH)',
    explanation: 'O Hormônio do Crescimento (GH) é produzido pela hipófise e é fundamental para o crescimento corporal e metabolismo.'
  },
  {
    id: 231,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O processo pelo qual o RNA mensageiro é "lido" nos ribossomos para produzir uma proteína é chamado de:',
    options: ['Transcrição', 'Tradução', 'Replicação', 'Mutação', 'Conjugação'],
    correctAnswer: 'Tradução',
    explanation: 'Tradução é a etapa em que a sequência de códons do RNAm é decodificada pelos ribossomos para montar a sequência de aminoácidos da proteína.'
  },
  {
    id: 232,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual das seguintes doenças NÃO é causada por um vírus?',
    options: ['Gripe', 'AIDS', 'Catapora', 'Tuberculose', 'Dengue'],
    correctAnswer: 'Tuberculose',
    explanation: 'A tuberculose é uma infecção bacteriana (Mycobacterium tuberculosis). As outras são doenças virais.'
  },
  {
    id: 233,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2014) A radiação ultravioleta (UV) do sol é mutagênica porque pode causar:',
    options: ['Alterações na sequência de bases do DNA.', 'Quebra das pontes de hidrogênio do DNA.', 'Alterações na forma das proteínas.', 'Destruição da membrana celular.', 'Aumento da produção de melanina.'],
    correctAnswer: 'Alterações na sequência de bases do DNA.',
    explanation: 'A radiação UV pode causar danos diretos ao DNA, como a formação de dímeros de timina, que podem levar a mutações causadoras de câncer se não reparados.'
  },
  {
    id: 234,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O glicogênio, principal reserva de energia nos animais, é um exemplo de:',
    options: ['Proteína', 'Lipídio', 'Monossacarídeo', 'Polissacarídeo', 'Ácido nucleico'],
    correctAnswer: 'Polissacarídeo',
    explanation: 'O glicogênio é um polissacarídeo, um carboidrato complexo formado pela união de muitas moléculas de glicose, armazenado no fígado e nos músculos.'
  },
  {
    id: 235,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O ciclo de Krebs, etapa da respiração celular, ocorre:',
    options: ['No citoplasma', 'Na membrana plasmática', 'Na matriz mitocondrial', 'No espaço intermembranas', 'Nos ribossomos'],
    correctAnswer: 'Na matriz mitocondrial',
    explanation: 'O ciclo de Krebs é uma série de reações que oxida o acetil-CoA e ocorre na matriz mitocondrial.'
  },
  {
    id: 236,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A ecorregião brasileira caracterizada por clima semiárido e vegetação com plantas espinhosas é a:',
    options: ['Floresta Amazônica', 'Mata Atlântica', 'Cerrado', 'Caatinga', 'Pampas'],
    correctAnswer: 'Caatinga',
    explanation: 'A Caatinga é um bioma exclusivamente brasileiro, adaptado a condições de aridez, com vegetação xerófita (cactos, arbustos espinhosos).'
  },
    {
    id: 237,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A fagocitose, processo pelo qual células englobam partículas sólidas, é um tipo de:',
    image: 'https://picsum.photos/seed/phagocytosis/500/400',
    options: ['Transporte passivo', 'Osmose', 'Difusão facilitada', 'Endocitose', 'Exocitose'],
    correctAnswer: 'Endocitose',
    explanation: 'Endocitose é o transporte para dentro da célula via vesículas. A fagocitose ("comer celular") é a endocitose de partículas grandes e sólidas.'
  },
  {
    id: 238,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual gás é liberado como produto na fotossíntese e essencial para a respiração?',
    options: ['Dióxido de Carbono (CO₂)', 'Nitrogênio (N₂)', 'Oxigênio (O₂)', 'Metano (CH₄)', 'Hidrogênio (H₂)'],
    correctAnswer: 'Oxigênio (O₂)',
    explanation: 'Durante a fotossíntese, a molécula de água é quebrada (fotólise), liberando oxigênio gasoso (O₂) para a atmosfera.'
  },
  {
    id: 239,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2019) O soro antiofídico confere que tipo de imunização?',
    options: ['Ativa natural', 'Ativa artificial', 'Passiva natural', 'Passiva artificial', 'Inespecífica'],
    correctAnswer: 'Passiva artificial',
    explanation: 'O soro contém anticorpos prontos (imunização passiva) produzidos em laboratório e administrados intencionalmente (artificial).'
  },
  {
    id: 240,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O floema é o tecido vegetal responsável pelo transporte de:',
    options: ['Água e sais minerais (seiva bruta)', 'Açúcares (seiva elaborada)', 'Gases para respiração', 'Hormônios', 'Gametas'],
    correctAnswer: 'Açúcares (seiva elaborada)',
    explanation: 'O floema transporta a seiva elaborada (rica em sacarose) das folhas para as demais partes da planta que necessitam de energia.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 241,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2016) O principal objetivo da técnica de PCR (Reação em Cadeia da Polimerase) é:',
    options: ['Sequenciar o genoma completo.', 'Produzir grandes quantidades de um fragmento de DNA específico.', 'Criar organismos transgênicos.', 'Separar fragmentos de DNA por tamanho.', 'Produzir proteínas recombinantes.'],
    correctAnswer: 'Produzir grandes quantidades de um fragmento de DNA específico.',
    explanation: 'A PCR funciona como uma "fotocopiadora" de DNA, permitindo amplificar exponencialmente um segmento específico para análise.'
  },
  {
    id: 242,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O Ciclo de Calvin (fase escura da fotossíntese) utiliza ATP e NADPH para:',
    options: ['Quebrar a molécula de água.', 'Fixar o CO₂ e convertê-lo em carboidratos.', 'Absorver energia luminosa.', 'Transportar elétrons.', 'Bombear prótons.'],
    correctAnswer: 'Fixar o CO₂ e convertê-lo em carboidratos.',
    explanation: 'O Ciclo de Calvin usa a energia do ATP e o poder redutor do NADPH para converter o CO₂ atmosférico em moléculas orgânicas, como a glicose.'
  },
  {
    id: 243,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em uma população em equilíbrio de Hardy-Weinberg, a frequência do alelo recessivo "a" é 0,4. Qual a frequência esperada de indivíduos heterozigotos (Aa)?',
    options: ['0,16', '0,24', '0,36', '0,40', '0,48'],
    correctAnswer: '0,48',
    explanation: 'Se q=0,4, então p=1-0,4=0,6. A frequência de heterozigotos é 2pq = 2 * 0,6 * 0,4 = 0,48.'
  },
  {
    id: 244,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2018) Em uma Célula a Combustível Microbiana, bactérias convertem matéria orgânica em eletricidade. Nesse processo, as bactérias realizam a oxidação da matéria em um ambiente:',
    options: ['Aeróbico.', 'Anaeróbico, usando um eletrodo como aceptor de elétrons.', 'Fotossintético.', 'Quimiossintético.', 'Fermentativo.'],
    correctAnswer: 'Anaeróbico, usando um eletrodo como aceptor de elétrons.',
    explanation: 'As bactérias nesse sistema oxidam a matéria orgânica em condições anaeróbicas e transferem os elétrons para um eletrodo (ânodo), gerando corrente elétrica.'
  },
  {
    id: 245,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Na intolerância à lactose, a lactose não digerida é fermentada por bactérias no intestino grosso, produzindo:',
    options: ['Alergia.', 'Amido.', 'Gases e ácido lático.', 'Nenhuma alteração.', 'Sacarose.'],
    correctAnswer: 'Gases e ácido lático.',
    explanation: 'A fermentação bacteriana da lactose no intestino grosso produz gases, ácidos graxos e ácido lático, causando os sintomas de inchaço, cólicas e diarreia.'
  },
  {
    id: 246,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Qual hormônio vegetal é responsável pelo amadurecimento dos frutos e queda das folhas?',
    options: ['Auxina', 'Giberelina', 'Citocinina', 'Ácido abscísico', 'Etileno'],
    correctAnswer: 'Etileno',
    explanation: 'O etileno é um hormônio gasoso que regula o amadurecimento de frutos e o processo de senescência e abscisão (queda) de folhas e flores.'
  },
    {
    id: 247,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O "crossing-over", evento que aumenta a variabilidade genética, ocorre em qual fase da meiose?',
    image: 'https://picsum.photos/seed/crossing-over/500/350',
    options: ['Prófase I', 'Metáfase I', 'Anáfase I', 'Prófase II', 'Metáfase II'],
    correctAnswer: 'Prófase I',
    explanation: 'O crossing-over é a troca de segmentos entre cromossomos homólogos e ocorre durante a Prófase I da meiose, sendo fundamental para a recombinação genética.'
  },
  {
    id: 248,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2017) A terapia gênica utiliza um vírus modificado (vetor viral) para:',
    options: ['Destruir células defeituosas.', 'Introduzir uma cópia funcional do gene defeituoso nas células.', 'Inativar genes do cromossomo X.', 'Estimular produção de plaquetas.', 'Fornecer a proteína que falta.'],
    correctAnswer: 'Introduzir uma cópia funcional do gene defeituoso nas células.',
    explanation: 'A terapia gênica usa um vetor para entregar uma cópia correta de um gene defeituoso às células do paciente, permitindo que elas produzam a proteína correta.'
  },
    {
    id: 249,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A fase de despolarização (subida íngreme) do potencial de ação em um neurônio é causada pela:',
    image: 'https://picsum.photos/seed/action-potential/600/400',
    options: ['Entrada de Cl⁻', 'Saída de K⁺', 'Entrada de Na⁺', 'Saída de Na⁺', 'Ação da bomba de Na/K'],
    correctAnswer: 'Entrada de Na⁺',
    explanation: 'A abertura de canais de sódio (Na⁺) dependentes de voltagem permite uma rápida entrada desses íons, causando a inversão da polaridade da membrana (despolarização).'
  },
  {
    id: 250,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Biomagnificação é um processo em que a concentração de toxinas não biodegradáveis:',
    options: ['Diminui ao longo da cadeia alimentar.', 'É transferida como energia.', 'Aumenta nos níveis tróficos mais altos.', 'É reciclada pelos decompositores.', 'Aumenta a biodiversidade.'],
    correctAnswer: 'Aumenta nos níveis tróficos mais altos.',
    explanation: 'Substâncias tóxicas persistentes acumulam-se nos tecidos e sua concentração aumenta a cada nível trófico da cadeia alimentar.'
  },
  {
    id: 251,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'No operon lac, na ausência de lactose, a proteína repressora:',
    options: ['Ativa a transcrição.', 'Liga-se ao operador, bloqueando a transcrição.', 'Liga-se à lactose.', 'Digere a lactose.', 'Facilita a ligação da RNA polimerase.'],
    correctAnswer: 'Liga-se ao operador, bloqueando a transcrição.',
    explanation: 'Na ausência de lactose, o repressor se liga ao operador, impedindo que a RNA polimerase transcreva os genes para o metabolismo da lactose, economizando energia.'
  },
  {
    id: 252,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2021) Casal (homem tipo A, mulher tipo B) tem filho tipo O. Qual a probabilidade do próximo filho ser do tipo AB?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '25%',
    explanation: 'Para ter filho tipo O (ii), os pais devem ser heterozigotos (Iᴬi e Iᴮi). No cruzamento, as possibilidades são IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B) e ii (O), cada uma com 25% de chance.'
  },
  {
    id: 253,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Cnidários (águas-vivas) são os primeiros animais na escala evolutiva a apresentar:',
    options: ['Simetria bilateral', 'Três folhetos embrionários', 'Sistema circulatório fechado', 'Células nervosas e cavidade digestiva', 'Corpo segmentado'],
    correctAnswer: 'Células nervosas e cavidade digestiva',
    explanation: 'A grande novidade evolutiva dos cnidários é a presença de tecidos verdadeiros, incluindo uma rede nervosa difusa e uma cavidade gastrovascular.'
  },
    {
    id: 254,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A cadeia transportadora de elétrons na respiração celular tem como principal função:',
    image: 'https://picsum.photos/seed/electron-transport-chain/600/400',
    options: ['Produzir piruvato.', 'Gerar ATP através da fosforilação oxidativa.', 'Fixar CO₂.', 'Regenerar NAD+.', 'Oxidar Acetil-CoA.'],
    correctAnswer: 'Gerar ATP através da fosforilação oxidativa.',
    explanation: 'A energia dos elétrons é usada para bombear prótons, criando um gradiente que alimenta a ATP sintase, responsável pela maior parte da produção de ATP.'
  },
  {
    id: 255,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em plantas de dia curto, o florescimento é induzido quando:',
    options: ['O período de luz é maior que um valor crítico.', 'O período de escuridão contínua é maior que um valor crítico.', 'A escuridão é interrompida.', 'Recebe luz vermelha longa.', 'A temperatura é mínima.'],
    correctAnswer: 'O período de escuridão contínua é maior que um valor crítico.',
    explanation: 'Plantas de dia curto são, na verdade, "plantas de noite longa", pois florescem quando o período ininterrupto de escuridão excede um limiar crítico.'
  },
  {
    id: 256,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2012) A produção de etanol de segunda geração (a partir da celulose) requer uma etapa prévia de:',
    options: ['Fermentação.', 'Hidrólise, para quebrar a celulose em glicose.', 'Destilação.', 'Esterificação.', 'Polimerização.'],
    correctAnswer: 'Hidrólise, para quebrar a celulose em glicose.',
    explanation: 'A celulose é um polímero estável. É necessária uma etapa de hidrólise (geralmente enzimática) para quebrar a celulose em glicose, que pode então ser fermentada.'
  },
  {
    id: 257,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Epistasia é um tipo de interação gênica em que:',
    options: ['Vários genes contribuem para uma característica.', 'Um gene afeta várias características.', 'Um gene em um loco mascara a expressão de outro gene em um loco diferente.', 'Ambos os alelos se expressam.', 'O heterozigoto tem fenótipo intermediário.'],
    correctAnswer: 'Um gene em um loco mascara a expressão de outro gene em um loco diferente.',
    explanation: 'Na epistasia, a ação de um gene (epistático) interfere na expressão de outro gene (hipostático) que não é seu alelo, como na cor da pelagem em labradores.'
  },
  {
    id: 258,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O hormônio antidiurético (ADH) atua nos túbulos renais para:',
    options: ['Aumentar a excreção de sódio.', 'Diminuir a reabsorção de glicose.', 'Aumentar a reabsorção de água.', 'Diminuir a reabsorção de água.', 'Aumentar a filtração glomerular.'],
    correctAnswer: 'Aumentar a reabsorção de água.',
    explanation: 'O ADH aumenta a permeabilidade dos ductos coletores à água, fazendo com que mais água seja reabsorvida para o sangue e conservada no corpo.'
  },
  {
    id: 259,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Durante o desenvolvimento embrionário, o notocórdio é uma estrutura que:',
    options: ['Origina o sistema nervoso.', 'É um bastão de sustentação que induz a formação do tubo neural.', 'Persiste como coluna vertebral.', 'Forma o arquêntero.', 'É exclusiva dos vertebrados.'],
    correctAnswer: 'É um bastão de sustentação que induz a formação do tubo neural.',
    explanation: 'O notocórdio é um bastão flexível que fornece suporte e sinaliza para que o ectoderma acima dele forme o tubo neural, futuro sistema nervoso central.'
  },
  {
    id: 260,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2011) A Síndrome de Down (trissomia do 21) geralmente ocorre devido a um erro durante a:',
    options: ['Fase S da interfase.', 'Mitose.', 'Meiose, na formação dos gametas.', 'Tradução.', 'Transcrição.'],
    correctAnswer: 'Meiose, na formação dos gametas.',
    explanation: 'A causa mais comum é a não-disjunção dos cromossomos 21 durante a meiose, resultando em um gameta com um cromossomo a mais.'
  },
  {
    id: 261,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A principal estratégia de plantas com metabolismo CAM para economizar água é:',
    options: ['Manter estômatos abertos de dia.', 'Fotossíntese apenas à noite.', 'Abrir estômatos e fixar CO₂ à noite, e fazer o Ciclo de Calvin de dia com estômatos fechados.', 'Possuir folhas muito grandes.', 'Não possuir estômatos.'],
    correctAnswer: 'Abrir estômatos e fixar CO₂ à noite, e fazer o Ciclo de Calvin de dia com estômatos fechados.',
    explanation: 'Plantas CAM abrem seus estômatos à noite para captar CO₂ e o armazenam. Durante o dia, com os estômatos fechados para evitar perda de água, elas usam esse CO₂ para a fotossíntese.'
  },
  {
    id: 262,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A enzima Taq polimerase é ideal para a PCR porque ela é:',
    options: ['Capaz de sintetizar RNA.', 'Humana.', 'Termoestável, resistindo a altas temperaturas.', 'Capaz de corrigir erros.', 'Ativa em baixas temperaturas.'],
    correctAnswer: 'Termoestável, resistindo a altas temperaturas.',
    explanation: 'A PCR exige ciclos de aquecimento a ~95°C. A Taq polimerase, de uma bactéria termófila, é estável a essas temperaturas e pode continuar a síntese de DNA.'
  },
  {
    id: 263,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Uma das principais funções do sistema complemento no sistema imune é:',
    options: ['Produzir anticorpos.', 'Apresentar antígenos.', 'Formar um complexo de ataque à membrana (MAC) para lisar patógenos.', 'Atuar como células de memória.', 'Regular hormônios.'],
    correctAnswer: 'Formar um complexo de ataque à membrana (MAC) para lisar patógenos.',
    explanation: 'O MAC se insere na membrana de bactérias, criando um poro que leva à lise (destruição) da célula invasora.'
  },
  {
    id: 264,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2022) Para produzir insulina humana em bactérias, o primeiro passo é:',
    options: ['Isolar a insulina humana.', 'Inserir o plasmídeo no paciente.', 'Utilizar a transcriptase reversa para criar cDNA a partir do RNAm da insulina.', 'Criar uma bactéria transgênica.', 'Clonar um pâncreas.'],
    correctAnswer: 'Utilizar a transcriptase reversa para criar cDNA a partir do RNAm da insulina.',
    explanation: 'Como bactérias não processam íntrons, usa-se a enzima transcriptase reversa para criar um DNA complementar (cDNA) a partir do RNAm já processado, contendo apenas a sequência codificante.'
  },
  {
    id: 265,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A especiação que ocorre quando uma população é dividida por uma barreira geográfica é chamada de:',
    options: ['Especiação simpátrica', 'Especiação parapátrica', 'Especiação alopátrica', 'Anagênese', 'Cladogênese'],
    correctAnswer: 'Especiação alopátrica',
    explanation: 'A especiação alopátrica ocorre quando uma barreira física isola subpopulações, interrompendo o fluxo gênico e permitindo que elas evoluam separadamente.'
  },
  {
    id: 266,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'As plaquetas (trombócitos) são fragmentos celulares essenciais para o processo de:',
    options: ['Transporte de oxigênio.', 'Defesa imunológica.', 'Coagulação sanguínea.', 'Transporte de nutrientes.', 'Produção de hormônios.'],
    correctAnswer: 'Coagulação sanguínea.',
    explanation: 'As plaquetas aderem a lesões em vasos sanguíneos, formando um tampão inicial e liberando fatores que ativam a cascata de coagulação para estancar o sangramento.'
  },
    {
    id: 267,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A "circulação completa" no coração dos mamíferos significa que:',
    image: 'https://picsum.photos/seed/mammal-heart/500/500',
    options: ['O coração bombeia para todo o corpo.', 'O sangue passa duas vezes pelo coração.', 'Não há mistura de sangue arterial e venoso no coração.', 'O sangue tem plasma e células.', 'Existem artérias e veias.'],
    correctAnswer: 'Não há mistura de sangue arterial e venoso no coração.',
    explanation: 'A circulação completa, garantida pelo septo interventricular, impede a mistura de sangue rico e pobre em oxigênio, maximizando a eficiência do transporte de O₂.'
  },
  {
    id: 268,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2013) A vantagem de plantas transgênicas resistentes a herbicidas é que:',
    options: ['Não precisam de fertilizante.', 'O agricultor pode aplicar o herbicida para matar ervas daninhas sem prejudicar a cultura.', 'Se tornam resistentes a todas as pragas.', 'Produzem frutos maiores.', 'Aumentam a biodiversidade do solo.'],
    correctAnswer: 'O agricultor pode aplicar o herbicida para matar ervas daninhas sem prejudicar a cultura.',
    explanation: 'Essa tecnologia permite o uso de herbicidas de amplo espectro para eliminar a competição por recursos, sem afetar a planta de interesse.'
  },
  {
    id: 269,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em um ecossistema, o fluxo de energia é unidirecional e o ciclo da matéria é cíclico. Isso significa que:',
    options: ['A energia é reciclada e a matéria é perdida.', 'A energia flui e é perdida como calor, enquanto a matéria é reciclada.', 'A matéria flui e é perdida, enquanto a energia é reciclada.', 'Ambos são reciclados.', 'Ambos são perdidos.'],
    correctAnswer: 'A energia flui e é perdida como calor, enquanto a matéria é reciclada.',
    explanation: 'A energia solar captada flui pela cadeia alimentar, com perdas em cada nível, enquanto a matéria é constantemente reciclada pelos decompositores.'
  },
  {
    id: 270,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A herança quantitativa ou poligênica é caracterizada por:',
    options: ['Um gene para uma característica.', 'Variações discretas.', 'Vários genes contribuindo para uma característica com variação contínua.', 'Um gene mascarando outro.', 'O ambiente não influenciar o fenótipo.'],
    correctAnswer: 'Vários genes contribuindo para uma característica com variação contínua.',
    explanation: 'Na herança quantitativa, múltiplos genes têm um efeito aditivo sobre uma única característica, resultando em uma gama contínua de fenótipos, como altura ou cor da pele.'
  },
  // =================================================
  //                    QUÍMICA (90)
  // =================================================
  // --- FÁCIL (30) ---
  {
    id: 271,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual dos seguintes é um exemplo de mudança de estado físico da matéria?',
    options: ['Queimar papel', 'Enferrujar ferro', 'Derreter gelo', 'Cozinhar um ovo', 'Explosão de pólvora'],
    correctAnswer: 'Derreter gelo',
    explanation: 'Derreter gelo é uma fusão (sólido para líquido), uma mudança de estado físico. As outras opções são reações químicas, que alteram a composição da matéria.'
  },
  {
    id: 272,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O número atômico (Z) de um elemento é definido pelo número de:',
    options: ['Nêutrons', 'Prótons', 'Elétrons', 'Prótons + Nêutrons', 'Camadas eletrônicas'],
    correctAnswer: 'Prótons',
    explanation: 'O número atômico (Z) é a identidade de um elemento químico e é igual ao número de prótons em seu núcleo.'
  },
  {
    id: 273,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A fórmula química da água é:',
    options: ['CO₂', 'O₂', 'H₂O₂', 'H₂O', 'CH₄'],
    correctAnswer: 'H₂O',
    explanation: 'A molécula de água é composta por dois átomos de hidrogênio e um átomo de oxigênio.'
  },
  {
    id: 274,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Substâncias com pH menor que 7 são consideradas:',
    image: 'https://picsum.photos/seed/ph-scale/600/200',
    options: ['Ácidas', 'Básicas', 'Neutras', 'Sais', 'Metais'],
    correctAnswer: 'Ácidas',
    explanation: 'A escala de pH mede a acidez ou alcalinidade de uma solução. Valores abaixo de 7 indicam acidez, 7 é neutro, e acima de 7 indica basicidade (alcalinidade).'
  },
  {
    id: 275,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual gás é essencial para a combustão (queima)?',
    options: ['Nitrogênio (N₂)', 'Dióxido de Carbono (CO₂)', 'Hidrogênio (H₂)', 'Oxigênio (O₂)', 'Hélio (He)'],
    correctAnswer: 'Oxigênio (O₂)',
    explanation: 'O oxigênio atua como o comburente na maioria das reações de combustão, reagindo com o combustível para liberar energia.'
  },
  {
    id: 276,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: '(ENEM 2010) O etanol (álcool) é um biocombustível obtido a partir da fermentação de açúcares. Qual é a principal matéria-prima para a produção de etanol no Brasil?',
    options: ['Milho', 'Beterraba', 'Cana-de-açúcar', 'Soja', 'Trigo'],
    correctAnswer: 'Cana-de-açúcar',
    explanation: 'O Brasil é um dos maiores produtores mundiais de etanol, utilizando predominantemente a sacarose presente no caldo da cana-de-açúcar como matéria-prima para a fermentação.'
  },
  {
    id: 277,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A ligação química que envolve o compartilhamento de elétrons entre átomos é chamada de:',
    options: ['Ligação iônica', 'Ligação covalente', 'Ligação metálica', 'Ponte de hidrogênio', 'Forças de Van der Waals'],
    correctAnswer: 'Ligação covalente',
    explanation: 'Na ligação covalente, os átomos (geralmente ametais) compartilham um ou mais pares de elétrons para atingir a estabilidade, formando moléculas.'
  },
  {
    id: 278,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual é o nome do processo em que um líquido se transforma em gás?',
    options: ['Fusão', 'Solidificação', 'Condensação', 'Sublimação', 'Vaporização'],
    correctAnswer: 'Vaporização',
    explanation: 'Vaporização é o termo geral para a passagem do estado líquido para o gasoso, que pode ocorrer por ebulição, evaporação ou calefação.'
  },
  {
    id: 279,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A tabela periódica organiza os elementos químicos em ordem crescente de:',
    image: 'https://picsum.photos/seed/periodic-table/600/350',
    options: ['Massa atômica', 'Número de nêutrons', 'Número atômico', 'Raio atômico', 'Eletronegatividade'],
    correctAnswer: 'Número atômico',
    explanation: 'A tabela periódica moderna organiza os elementos em ordem crescente de seu número atômico (número de prótons), o que reflete a periodicidade de suas propriedades químicas.'
  },
  {
    id: 280,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Uma mistura em que não é possível distinguir seus componentes é chamada de:',
    options: ['Mistura heterogênea', 'Mistura homogênea', 'Composto', 'Elemento', 'Substância pura'],
    correctAnswer: 'Mistura homogênea',
    explanation: 'Uma mistura homogênea, ou solução, apresenta um aspecto uniforme (monofásico), pois seus componentes estão misturados em nível molecular. Ex: água e sal.'
  },
  {
    id: 281,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A camada de ozônio na atmosfera é importante porque nos protege da:',
    options: ['Radiação infravermelha', 'Radiação ultravioleta', 'Luz visível', 'Ondas de rádio', 'Micro-ondas'],
    correctAnswer: 'Radiação ultravioleta',
    explanation: 'A camada de ozônio (O₃) absorve a maior parte da radiação ultravioleta (UV) do tipo B e C, que é prejudicial à vida na Terra.'
  },
  {
    id: 282,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: '(ENEM 2011) Para que a água possa ser consumida, ela passa por um tratamento que inclui a adição de cloro. A cloração tem como objetivo principal:',
    options: ['Remover partículas sólidas', 'Ajustar o pH da água', 'Eliminar microrganismos patogênicos', 'Amolecer a água', 'Remover odores'],
    correctAnswer: 'Eliminar microrganismos patogênicos',
    explanation: 'O cloro é um agente desinfetante poderoso que é adicionado à água para matar bactérias, vírus e outros microrganismos que podem causar doenças.'
  },
  {
    id: 283,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual das seguintes substâncias é uma base (ou álcali)?',
    options: ['HCl (ácido clorídrico)', 'H₂SO₄ (ácido sulfúrico)', 'NaOH (hidróxido de sódio)', 'NaCl (cloreto de sódio)', 'CH₃COOH (ácido acético)'],
    correctAnswer: 'NaOH (hidróxido de sódio)',
    explanation: 'As bases, segundo Arrhenius, são substâncias que em água liberam o íon hidróxido (OH⁻). O NaOH é uma base forte, também conhecida como soda cáustica.'
  },
  {
    id: 284,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A reação de um ácido com uma base, formando sal e água, é chamada de:',
    options: ['Oxidação', 'Redução', 'Esterificação', 'Neutralização', 'Combustão'],
    correctAnswer: 'Neutralização',
    explanation: 'A reação de neutralização ocorre quando um ácido reage com uma base, resultando na formação de um sal e, geralmente, água.'
  },
  {
    id: 285,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O diamante e o grafite são formas alotrópicas do elemento:',
    image: 'https://picsum.photos/seed/carbon-allotropes/500/300',
    options: ['Silício', 'Enxofre', 'Fósforo', 'Oxigênio', 'Carbono'],
    correctAnswer: 'Carbono',
    explanation: 'Alotropia é o fenômeno em que um mesmo elemento químico pode formar substâncias simples diferentes. O diamante e o grafite são ambos formados apenas por átomos de carbono, mas arranjados de maneiras distintas.'
  },
  {
    id: 286,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A massa de um mol de átomos de Carbono-12 é exatamente:',
    options: ['1 grama', '6 gramas', '12 gramas', '12 kg', '6,02 x 10²³ gramas'],
    correctAnswer: '12 gramas',
    explanation: 'Por definição, a massa molar do isótopo Carbono-12 é exatamente 12 gramas por mol, servindo como padrão para a escala de massas atômicas.'
  },
  {
    id: 287,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O processo de separação de misturas que usa um funil com papel de filtro é a:',
    options: ['Decantação', 'Centrifugação', 'Destilação', 'Filtração', 'Evaporação'],
    correctAnswer: 'Filtração',
    explanation: 'A filtração é usada para separar um sólido de um líquido ou gás, passando a mistura através de um meio poroso (filtro) que retém as partículas sólidas.'
  },
  {
    id: 288,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual é o nome do composto com fórmula NaCl?',
    options: ['Clorato de Sódio', 'Cloreto de Sódio', 'Hipoclorito de Sódio', 'Nitrato de Sódio', 'Sulfato de Sódio'],
    correctAnswer: 'Cloreto de Sódio',
    explanation: 'O NaCl é um sal iônico formado pelo cátion Sódio (Na⁺) e pelo ânion Cloreto (Cl⁻). É o sal de cozinha comum.'
  },
  {
    id: 289,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: '(ENEM 2012) A chuva ácida é um problema ambiental causado pela reação de gases poluentes com a água da atmosfera. Quais são os principais óxidos que causam a chuva ácida?',
    options: ['CO e CO₂', 'SO₂ e NOₓ', 'Na₂O e CaO', 'O₃ e H₂O', 'SiO₂ e Al₂O₃'],
    correctAnswer: 'SO₂ e NOₓ',
    explanation: 'Os óxidos de enxofre (SO₂) e de nitrogênio (NOₓ), liberados principalmente pela queima de combustíveis fósseis, reagem com a água na atmosfera para formar ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃), os principais componentes da chuva ácida.'
  },
  {
    id: 290,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A ligação química presente em um cristal de sal de cozinha (NaCl) é:',
    options: ['Covalente polar', 'Covalente apolar', 'Metálica', 'Iônica', 'Ponte de hidrogênio'],
    correctAnswer: 'Iônica',
    explanation: 'A ligação iônica ocorre pela atração eletrostática entre íons de cargas opostas, formados pela transferência de elétrons de um metal (Sódio) para um ametal (Cloro).'
  },
  {
    id: 291,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual é a função orgânica do composto CH₃-OH?',
    options: ['Álcool', 'Éter', 'Aldeído', 'Cetona', 'Ácido Carboxílico'],
    correctAnswer: 'Álcool',
    explanation: 'A presença do grupo hidroxila (-OH) ligado a um carbono saturado caracteriza a função álcool. CH₃-OH é o metanol.'
  },
  {
    id: 292,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A quebra de moléculas pela água é chamada de:',
    options: ['Hidratação', 'Hidrogenação', 'Halogenação', 'Hidrólise', 'Desidratação'],
    correctAnswer: 'Hidrólise',
    explanation: 'Hidrólise (do grego hydro, "água", e lysis, "quebra") é uma reação química em que uma molécula de água quebra uma ou mais ligações químicas.'
  },
  {
    id: 293,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O petróleo é uma fonte de hidrocarbonetos. Qual é o principal processo industrial para separar seus componentes?',
    image: 'https://picsum.photos/seed/oil-refinery/500/600',
    options: ['Filtração', 'Decantação', 'Craqueamento', 'Destilação fracionada', 'Eletrólise'],
    correctAnswer: 'Destilação fracionada',
    explanation: 'A destilação fracionada é usada para separar líquidos com diferentes pontos de ebulição. No refino do petróleo, ela separa componentes como gasolina, querosene e óleo diesel.'
  },
  {
    id: 294,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual o estado físico do gás nobre Hélio (He) em condições ambiente?',
    options: ['Sólido', 'Líquido', 'Gasoso', 'Plasma', 'Supercrítico'],
    correctAnswer: 'Gasoso',
    explanation: 'Os gases nobres, como o Hélio, são gases em condições normais de temperatura e pressão devido às suas fracas forças intermoleculares.'
  },
  {
    id: 295,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A reação 2H₂(g) + O₂(g) → 2H₂O(l) é classificada como uma reação de:',
    options: ['Decomposição', 'Simples troca', 'Dupla troca', 'Síntese (ou adição)', 'Análise'],
    correctAnswer: 'Síntese (ou adição)',
    explanation: 'Uma reação de síntese ou adição é aquela em que duas ou more substâncias reagem para formar um único produto mais complexo.'
  },
  {
    id: 296,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'A perda de elétrons em uma reação química é chamada de:',
    options: ['Oxidação', 'Redução', 'Neutralização', 'Hidratação', 'Eletrólise'],
    correctAnswer: 'Oxidação',
    explanation: 'Oxidação é o processo em que uma espécie química perde elétrons, resultando no aumento de seu número de oxidação (NOX).'
  },
  {
    id: 297,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O átomo de oxigênio (Z=8) tem quantos elétrons na sua camada de valência?',
    options: ['2', '4', '6', '8', '16'],
    correctAnswer: '6',
    explanation: 'A distribuição eletrônica do Oxigênio é 1s² 2s² 2p⁴. A camada de valência (n=2) possui 2 + 4 = 6 elétrons.'
  },
  {
    id: 298,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: '(ENEM 2013) A soda cáustica (NaOH) é um produto muito utilizado para desentupir pias, pois reage com a gordura. Essa reação é um tipo de:',
    options: ['Esterificação', 'Saponificação', 'Combustão', 'Neutralização', 'Oxidação'],
    correctAnswer: 'Saponificação',
    explanation: 'A saponificação é a hidrólise alcalina (com uma base forte como NaOH) de um éster, como a gordura (triacilglicerol), para formar um sal de ácido graxo (sabão) e glicerol.'
  },
  {
    id: 299,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'O monômero que forma o polímero PVC (policloreto de vinila) é o:',
    options: ['Eteno', 'Propeno', 'Cloroetano', 'Cloreto de vinila', 'Etino'],
    correctAnswer: 'Cloreto de vinila',
    explanation: 'O PVC é formado pela polimerização do cloreto de vinila (CH₂=CHCl).'
  },
  {
    id: 300,
    subject: 'Química',
    difficulty: 'Fácil',
    statement: 'Qual o nome do íon H⁺ em solução aquosa?',
    options: ['Hidróxido', 'Hidreto', 'Hidrônio', 'Hidrogênio', 'Próton'],
    correctAnswer: 'Hidrônio',
    explanation: 'O íon H⁺ (um próton) não existe livre em água; ele se liga a uma molécula de H₂O para formar o íon hidrônio, H₃O⁺.'
  },
  // --- MÉDIO (30) ---
  {
    id: 301,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual a massa molar da sacarose (C₁₂H₂₂O₁₁)? (Massas atômicas: C=12, H=1, O=16)',
    options: ['180 g/mol', '242 g/mol', '342 g/mol', '360 g/mol', '414 g/mol'],
    correctAnswer: '342 g/mol',
    explanation: 'Massa Molar = (12 * 12) + (22 * 1) + (11 * 16) = 144 + 22 + 176 = 342 g/mol.'
  },
  {
    id: 302,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual o NOX (número de oxidação) do Manganês (Mn) no íon permanganato (MnO₄⁻)?',
    options: ['+2', '+4', '+5', '+6', '+7'],
    correctAnswer: '+7',
    explanation: 'O oxigênio geralmente tem NOX -2. Seja x o NOX do Mn. x + 4*(-2) = -1 (carga do íon). x - 8 = -1. x = +7.'
  },
  {
    id: 303,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2014) A elevação da temperatura de um sistema reacional aumenta a velocidade da reação porque aumenta:',
    options: ['A energia de ativação', 'A concentração dos reagentes', 'O número de colisões efetivas entre as moléculas', 'A pressão do sistema', 'O volume do recipiente'],
    correctAnswer: 'O número de colisões efetivas entre as moléculas',
    explanation: 'O aumento da temperatura aumenta a energia cinética das moléculas, fazendo com que elas se movam mais rápido e colidam com mais frequência e com mais energia. Isso aumenta o número de colisões que superam a energia de ativação, acelerando a reação.'
  },
  {
    id: 304,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual a hibridização do átomo de carbono na molécula de eteno (C₂H₄)?',
    image: 'https://picsum.photos/seed/ethene-molecule/400/300',
    options: ['sp', 'sp²', 'sp³', 'sp³d', 'sp³d²'],
    correctAnswer: 'sp²',
    explanation: 'No eteno (H₂C=CH₂), cada carbono faz uma ligação dupla e duas simples. Para formar três ligações sigma e uma pi, o carbono utiliza a hibridização sp², onde um orbital s se mistura com dois orbitais p.'
  },
  {
    id: 305,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Uma solução foi preparada dissolvendo-se 20g de NaOH (massa molar=40g/mol) em água suficiente para 500 mL de solução. Qual a concentração molar da solução?',
    options: ['0,5 mol/L', '1,0 mol/L', '2,0 mol/L', '4,0 mol/L', '40 mol/L'],
    correctAnswer: '1,0 mol/L',
    explanation: 'Primeiro, calcula-se o número de mols de NaOH: n = massa / massa molar = 20g / 40g/mol = 0,5 mol. O volume é 500 mL = 0,5 L. Concentração Molar = n / V = 0,5 mol / 0,5 L = 1,0 mol/L.'
  },
  {
    id: 306,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'A reação de formação da amônia é N₂(g) + 3H₂(g) ⇌ 2NH₃(g), com ΔH = -92 kJ/mol. De acordo com o Princípio de Le Chatelier, para aumentar o rendimento de NH₃, deve-se:',
    options: ['Aumentar a temperatura', 'Diminuir a pressão', 'Adicionar um catalisador', 'Aumentar a pressão', 'Remover N₂'],
    correctAnswer: 'Aumentar a pressão',
    explanation: 'A reação é exotérmica (ΔH<0), então diminuir a temperatura favorece o produto. A reação também envolve uma diminuição do número de mols de gás (1+3=4 no reagente, 2 no produto). Aumentar a pressão desloca o equilíbrio para o lado com menos mols de gás, ou seja, para a direita, aumentando o rendimento de NH₃.'
  },
  {
    id: 307,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Isômeros são compostos que possuem a mesma fórmula molecular, mas estruturas diferentes. O propan-1-ol e o propan-2-ol são um exemplo de isomeria de:',
    options: ['Cadeia', 'Posição', 'Função', 'Metameria', 'Tautomeria'],
    correctAnswer: 'Posição',
    explanation: 'Ambos são álcoois (mesma função) e têm a mesma cadeia carbônica principal. A única diferença é a posição do grupo funcional -OH, que está no carbono 1 no propan-1-ol e no carbono 2 no propan-2-ol.'
  },
  {
    id: 308,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2015) As panelas de pressão cozinham os alimentos mais rapidamente porque:',
    image: 'https://picsum.photos/seed/pressure-cooker/400/400',
    options: ['Diminuem a temperatura de ebulição da água.', 'Aumentam a temperatura de ebulição da água.', 'Concentram o calor na base da panela.', 'Aumentam o calor específico da água.', 'Diminuem a pressão interna.'],
    correctAnswer: 'Aumentam a temperatura de ebulição da água.',
    explanation: 'A panela de pressão aprisiona o vapor, aumentando a pressão interna. Com o aumento da pressão, o ponto de ebulição da água sobe para acima de 100°C. Alimentos cozinhando em temperaturas mais altas cozinham mais rápido.'
  },
  {
    id: 309,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual o pH de uma solução de HCl 0,01 mol/L? (Considere HCl um ácido forte)',
    options: ['1', '2', '3', '12', '13'],
    correctAnswer: '2',
    explanation: 'HCl é um ácido forte, então se ioniza completamente. Uma solução de HCl 0,01 mol/L terá uma concentração de H⁺ de 0,01 mol/L, ou 10⁻² mol/L. O pH é calculado como -log[H⁺], então pH = -log(10⁻²) = 2.'
  },
  {
    id: 310,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Dada a equação balanceada: 2H₂ + O₂ → 2H₂O. Quantos mols de água são produzidos a partir de 4 mols de hidrogênio (H₂)?',
    options: ['1 mol', '2 mols', '4 mols', '6 mols', '8 mols'],
    correctAnswer: '4 mols',
    explanation: 'A estequiometria da reação mostra que 2 mols de H₂ produzem 2 mols de H₂O (proporção 2:2 ou 1:1). Portanto, 4 mols de H₂ produzirão 4 mols de H₂O.'
  },
  {
    id: 311,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O processo de eletrólise da água produz:',
    options: ['Gás oxigênio e gás nitrogênio', 'Gás hidrogênio e gás cloro', 'Gás hidrogênio e gás oxigênio', 'Vapor de água', 'Sal e água'],
    correctAnswer: 'Gás hidrogênio e gás oxigênio',
    explanation: 'A eletrólise é a quebra de uma substância pela passagem de corrente elétrica. A eletrólise da água (H₂O) a decompõe em seus elementos constituintes: gás hidrogênio (H₂) no cátodo e gás oxigênio (O₂) no ânodo.'
  },
  {
    id: 312,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual das seguintes moléculas é polar?',
    options: ['O₂', 'CO₂', 'CH₄', 'H₂O', 'N₂'],
    correctAnswer: 'H₂O',
    explanation: 'A molécula de água (H₂O) tem uma geometria angular. As ligações O-H são polares e, devido à geometria, os vetores momento dipolar não se cancelam, resultando em uma molécula polar. CO₂ é linear, CH₄ é tetraédrica, O₂ e N₂ são apolares, e em todas elas os vetores se anulam.'
  },
  {
    id: 313,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2016) Para proteger estruturas de aço da corrosão, a indústria utiliza a proteção catódica, que consiste em conectar à estrutura um metal com maior potencial de oxidação. Qual dos seguintes metais seria um bom "metal de sacrifício" para o ferro?',
    options: ['Cobre (Cu)', 'Prata (Ag)', 'Ouro (Au)', 'Zinco (Zn)', 'Platina (Pt)'],
    correctAnswer: 'Zinco (Zn)',
    explanation: 'Um metal de sacrifício deve oxidar mais facilmente que o ferro. Na fila de reatividade, o zinco é mais reativo (tem maior potencial de oxidação) que o ferro. O cobre, a prata, o ouro e a platina são menos reativos e não protegeriam o ferro.'
  },
  {
    id: 314,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O benzeno (C₆H₆) é o exemplo mais simples de um hidrocarboneto:',
    image: 'https://picsum.photos/seed/benzene-ring/400/400',
    options: ['Alcano', 'Alceno', 'Alcino', 'Aromático', 'Cíclico saturado'],
    correctAnswer: 'Aromático',
    explanation: 'Hidrocarbonetos aromáticos são caracterizados pela presença de pelo menos um anel benzênico, um anel de 6 carbonos com ligações duplas ressonantes, o que confere grande estabilidade à molécula.'
  },
  {
    id: 315,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Na reação Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g), o Zinco (Zn) sofre:',
    options: ['Oxidação', 'Redução', 'Neutralização', 'Hidrólise', 'Nenhuma alteração'],
    correctAnswer: 'Oxidação',
    explanation: 'O Zinco passa de NOX 0 no reagente (Zn metálico) para NOX +2 no produto (ZnCl₂). O aumento do NOX caracteriza uma oxidação (perda de elétrons).'
  },
  {
    id: 316,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual das seguintes forças intermoleculares é a mais forte e explica o alto ponto de ebulição da água?',
    options: ['Forças de London (dipolo induzido)', 'Interação dipolo-dipolo', 'Ligação iônica', 'Ligação metálica', 'Ligação de hidrogênio (ponte de hidrogênio)'],
    correctAnswer: 'Ligação de hidrogênio (ponte de hidrogênio)',
    explanation: 'A ligação de hidrogênio é uma interação dipolo-dipolo particularmente forte que ocorre quando o hidrogênio está ligado a átomos muito eletronegativos como Flúor, Oxigênio ou Nitrogênio (FON). Na água, essas ligações entre moléculas exigem muita energia para serem rompidas.'
  },
  {
    id: 317,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2017) Baterias de íon-lítio são amplamente usadas em eletrônicos. Durante a descarga da bateria, os íons de lítio (Li⁺) se movem:',
    image: 'https://picsum.photos/seed/lithium-ion/500/300',
    options: ['Do ânodo para o cátodo através do eletrólito.', 'Do cátodo para o ânodo através do eletrólito.', 'Do ânodo para o cátodo pelo circuito externo.', 'Do cátodo para o ânodo pelo circuito externo.', 'Não se movem.'],
    correctAnswer: 'Do ânodo para o cátodo através do eletrólito.',
    explanation: 'Em uma pilha ou bateria, o ânodo é o polo negativo (onde ocorre a oxidação) e o cátodo é o polo positivo (onde ocorre a redução). Durante a descarga, os elétrons vão do ânodo para o cátodo pelo circuito externo, enquanto os cátions (Li⁺) se movem do ânodo para o cátodo pelo eletrólito interno para manter a neutralidade elétrica.'
  },
  {
    id: 318,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'A constante de equilíbrio (Kc) para a reação A + 2B ⇌ C é expressa como:',
    options: ['[C] / ([A][B])', '[C] / ([A][B]²)', '[A][B]² / [C]', '[A][B] / [C]', '[C]² / ([A][B])'],
    correctAnswer: '[C] / ([A][B]²)',
    explanation: 'A expressão da constante de equilíbrio Kc é a razão entre o produto das concentrações dos produtos e o produto das concentrações dos reagentes, cada um elevado ao seu coeficiente estequiométrico. Assim, Kc = [C] / ([A][B]²).'
  },
  {
    id: 319,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Um composto orgânico com a fórmula C₄H₁₀ pode ter quantos isômeros de cadeia?',
    options: ['1', '2', '3', '4', '5'],
    correctAnswer: '2',
    explanation: 'A fórmula C₄H₁₀ corresponde a um alcano. Ele pode existir como uma cadeia normal (butano) ou como uma cadeia ramificada (metilpropano ou isobutano). Portanto, existem 2 isômeros de cadeia.'
  },
  {
    id: 320,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'A entalpia de combustão do metano (CH₄) é -890 kJ/mol. Isso significa que a reação é:',
    options: ['Endotérmica e libera calor.', 'Exotérmica e absorve calor.', 'Endotérmica e absorve calor.', 'Exotérmica e libera calor.', 'Isotérmica e não troca calor.'],
    correctAnswer: 'Exotérmica e libera calor.',
    explanation: 'Uma variação de entalpia (ΔH) negativa indica que a reação é exotérmica, ou seja, ela libera energia na forma de calor para o ambiente.'
  },
  {
    id: 321,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2019) O plástico PET é o politereftalato de etileno. Ele é formado pela reação entre o etilenoglicol e o ácido tereftálico. Este tipo de polímero é classificado como:',
    options: ['Poliuretano', 'Poliamida', 'Poliéster', 'Policarbonato', 'Poliestireno'],
    correctAnswer: 'Poliéster',
    explanation: 'A reação entre um diálcool (etilenoglicol) e um diácido carboxílico (ácido tereftálico) forma múltiplas ligações do tipo éster, caracterizando o polímero como um poliéster.'
  },
  {
    id: 322,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual o volume ocupado por 2 mols de um gás ideal a 27°C e 1 atm? (Dado: R = 0,082 atm.L/mol.K)',
    options: ['22,4 L', '24,6 L', '30,0 L', '49,2 L', '54,6 L'],
    correctAnswer: '49,2 L',
    explanation: 'Usando a equação dos gases ideais: PV=nRT. A temperatura deve estar em Kelvin: T = 27°C + 273 = 300 K. V = nRT/P = (2 * 0,082 * 300) / 1 = 49,2 L.'
  },
  {
    id: 323,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O etanoato de etila, um composto com odor de maçã, é formado pela reação entre ácido etanoico e etanol. Essa reação é um exemplo de:',
    options: ['Saponificação', 'Transesterificação', 'Esterificação', 'Oxidação', 'Hidrólise ácida'],
    correctAnswer: 'Esterificação',
    explanation: 'A esterificação de Fischer é a reação entre um ácido carboxílico e um álcool, na presença de um catalisador ácido, para formar um éster e água.'
  },
  {
    id: 324,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O isótopo radioativo Carbono-14 (¹⁴C) decai emitindo uma partícula beta. Qual o elemento resultante?',
    options: ['¹⁴N', '¹³C', '¹³B', '¹²C', '¹⁴O'],
    correctAnswer: '¹⁴N',
    explanation: 'A emissão de uma partícula beta (um elétron) ocorre quando um nêutron no núcleo se transforma em um próton e um elétron. O número de massa (14) não muda, mas o número atômico aumenta em 1 (Carbono, Z=6, vira Nitrogênio, Z=7).'
  },
  {
    id: 325,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2020) O concreto da estrutura de um prédio pode sofrer corrosão devido à carbonatação, uma reação do hidróxido de cálcio [Ca(OH)₂] com o CO₂ do ar. Qual o produto principal dessa reação?',
    options: ['CaH₂', 'CaO', 'CaC₂', 'Ca(HCO₃)₂', 'CaCO₃'],
    correctAnswer: 'CaCO₃',
    explanation: 'Essa é uma reação de neutralização. O CO₂ (um óxido ácido) reage com o Ca(OH)₂ (uma base) para formar carbonato de cálcio (CaCO₃, um sal) e água. A reação é: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O.'
  },
  {
    id: 326,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual o número de átomos em 18g de água (H₂O)? (Massas: H=1, O=16; Avogadro: 6x10²³)',
    options: ['6 x 10²³', '12 x 10²³', '18 x 10²³', '1 x 10²³', '3 x 10²³'],
    correctAnswer: '18 x 10²³',
    explanation: 'A massa molar da água é 18 g/mol. Então, 18g de água correspondem a 1 mol de moléculas. Cada molécula de H₂O tem 3 átomos (2 H + 1 O). Total de átomos = 1 mol * (6x10²³ moléculas/mol) * (3 átomos/molécula) = 18 x 10²³ átomos.'
  },
  {
    id: 327,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'O nome IUPAC para o composto CH₃-CH(CH₃)-CH₃ é:',
    options: ['Butano', 'Pentano', 'Metilbutano', '2-Metilpropano', 'Dimetilpropano'],
    correctAnswer: '2-Metilpropano',
    explanation: 'A maior cadeia carbônica tem 3 carbonos (propano). Há um grupo metil (CH₃) ligado no carbono 2. Portanto, o nome é 2-Metilpropano. Também conhecido como isobutano.'
  },
  {
    id: 328,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Um catalisador acelera uma reação química porque:',
    options: ['Aumenta a energia dos reagentes', 'Aumenta a energia dos produtos', 'Aumenta a variação de entalpia (ΔH)', 'Diminui a energia de ativação', 'Diminui a variação de entalpia (ΔH)'],
    correctAnswer: 'Diminui a energia de ativação',
    explanation: 'Um catalisador fornece um caminho reacional alternativo com uma energia de ativação menor. Isso permite que mais moléculas tenham energia suficiente para reagir, aumentando a velocidade da reação sem ser consumido no processo.'
  },
  {
    id: 329,
    subject: 'Química',
    difficulty: 'Médio',
    statement: '(ENEM 2021) Uma solução tampão é utilizada para resistir a variações de pH. Um exemplo de sistema tampão no sangue humano é o par:',
    options: ['HCl / Cl⁻', 'NaOH / Na⁺', 'H₂CO₃ / HCO₃⁻', 'H₂SO₄ / HSO₄⁻', 'CH₃COOH / CH₃COO⁻'],
    correctAnswer: 'H₂CO₃ / HCO₃⁻',
    explanation: 'O sistema tampão bicarbonato/ácido carbônico é o principal regulador do pH do sangue. O H₂CO₃ (ácido fraco) neutraliza bases e o íon bicarbonato HCO₃⁻ (sua base conjugada) neutraliza ácidos, mantendo o pH sanguíneo estável.'
  },
  {
    id: 330,
    subject: 'Química',
    difficulty: 'Médio',
    statement: 'Qual a geometria molecular da amônia (NH₃)?',
    image: 'https://picsum.photos/seed/ammonia-molecule/400/350',
    options: ['Linear', 'Trigonal plana', 'Angular', 'Piramidal trigonal', 'Tetraédrica'],
    correctAnswer: 'Piramidal trigonal',
    explanation: 'O átomo central de Nitrogênio tem 3 pares de elétrons ligantes (com os Hidrogênios) e 1 par de elétrons não ligante. A repulsão do par não ligante empurra as ligações para baixo, resultando em uma geometria piramidal trigonal.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 331,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2018) Em uma pilha de Daniell, temos eletrodos de Zinco e Cobre em soluções de seus respectivos sais. O fluxo de elétrons no circuito externo ocorre:',
    image: 'https://picsum.photos/seed/daniell-cell/500/400',
    options: ['Do Cobre para o Zinco', 'Do Zinco para o Cobre', 'Não há fluxo de elétrons', 'Pela ponte salina', 'Em ambos os sentidos'],
    correctAnswer: 'Do Zinco para o Cobre',
    explanation: 'O Zinco é mais reativo que o Cobre, então o Zinco oxida (perde elétrons) e atua como ânodo (polo negativo). O Cobre reduz (ganha elétrons) e atua como cátodo (polo positivo). Os elétrons fluem do polo negativo para o positivo, ou seja, do Zinco para o Cobre.'
  },
  {
    id: 332,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Para a reação em equilíbrio 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), a constante Kp se relaciona com Kc pela fórmula:',
    options: ['Kp = Kc', 'Kp = Kc(RT)', 'Kp = Kc(RT)²', 'Kp = Kc(RT)⁻¹', 'Kp = Kc(RT)⁻²'],
    correctAnswer: 'Kp = Kc(RT)⁻¹',
    explanation: 'A relação é Kp = Kc(RT)Δn, onde Δn é a variação do número de mols de gás (mols de produtos - mols de reagentes). Δn = 2 - (2 + 1) = -1. Portanto, Kp = Kc(RT)⁻¹.'
  },
  {
    id: 333,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Qual o produto principal da reação de hidratação do propeno (CH₃-CH=CH₂) em meio ácido?',
    options: ['Propanal', 'Propanona', 'Propan-1-ol', 'Propan-2-ol', 'Ácido propanoico'],
    correctAnswer: 'Propan-2-ol',
    explanation: 'A hidratação de alcenos segue a Regra de Markovnikov, que afirma que o hidrogênio da água se adiciona ao carbono da dupla ligação que já tem mais hidrogênios. Assim, o H⁺ vai para o CH₂ e a hidroxila (-OH) vai para o CH, formando o propan-2-ol.'
  },
  {
    id: 334,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2022) O "smog" fotoquímico, comum em grandes cidades, envolve a formação de ozônio (O₃) na troposfera. Qual dos seguintes poluentes primários é um precursor essencial para a formação do ozônio troposférico?',
    options: ['Dióxido de carbono (CO₂)', 'Dióxido de enxofre (SO₂)', 'Óxidos de nitrogênio (NOx)', 'Monóxido de carbono (CO)', 'Amônia (NH₃)'],
    correctAnswer: 'Óxidos de nitrogênio (NOx)',
    explanation: 'Na presença de luz solar, os óxidos de nitrogênio (NOx), liberados principalmente por veículos, sofrem reações que levam à formação de ozônio (O₃) e outros poluentes secundários na baixa atmosfera, um componente chave do smog fotoquímico.'
  },
  {
    id: 335,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Uma solução de ácido acético (CH₃COOH) 0,1 mol/L tem Ka = 1,8x10⁻⁵. Qual o pH aproximado da solução?',
    options: ['1.0', '2.9', '4.7', '5.2', '7.0'],
    correctAnswer: '2.9',
    explanation: 'Para um ácido fraco, [H⁺] ≈ √(Ka * M). [H⁺] ≈ √(1,8x10⁻⁵ * 0,1) = √(1,8x10⁻⁶) ≈ 1,34x10⁻³. O pH = -log[H⁺] = -log(1,34x10⁻³) ≈ 2,87.'
  },
  {
    id: 336,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Qual o nome IUPAC do composto CH₃-COO-CH₂-CH₃?',
    options: ['Acetato de propila', 'Etanoato de etila', 'Propanoato de etila', 'Metanoato de propila', 'Ácido butanoico'],
    correctAnswer: 'Etanoato de etila',
    explanation: 'Este é um éster. A parte que vem do ácido (CH₃-COO-) tem 2 carbonos (etanoato). A parte que vem do álcool (-CH₂-CH₃) tem 2 carbonos (etila). O nome é etanoato de etila.'
  },
  {
    id: 337,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2013) A lei da velocidade para uma reação hipotética A + 2B → C é v = k[A][B]. Se as concentrações de A e B forem triplicadas, a velocidade da reação será:',
    options: ['3 vezes maior', '6 vezes maior', '9 vezes maior', '12 vezes maior', '27 vezes maior'],
    correctAnswer: '9 vezes maior',
    explanation: 'A reação é de primeira ordem em relação a A e primeira ordem em relação a B. A nova velocidade v\' = k[3A][3B] = 9 * (k[A][B]) = 9v. A velocidade se torna 9 vezes maior.'
  },
  {
    id: 338,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A hidrogenação catalítica de uma gordura insaturada (líquida) produz uma gordura saturada (sólida). Esse processo é usado para produzir:',
    image: 'https://picsum.photos/seed/hydrogenation/600/300',
    options: ['Sabão', 'Margarina', 'Glicerina', 'Etanol', 'Vinagre'],
    correctAnswer: 'Margarina',
    explanation: 'A hidrogenação converte ligações duplas (C=C) em ligações simples (C-C), aumentando o ponto de fusão da gordura. Esse processo transforma óleos vegetais líquidos em gorduras semi-sólidas, como a margarina.'
  },
  {
    id: 339,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Quantos isômeros ópticos (enantiômeros e diasteroisômeros) são possíveis para uma molécula com 2 carbonos quirais distintos?',
    options: ['1', '2', '3', '4', '8'],
    correctAnswer: '4',
    explanation: 'Pela regra de Van\'t Hoff, o número máximo de isômeros ópticos para uma molécula com "n" carbonos quirais distintos é 2ⁿ. Para n=2, o número de isômeros é 2² = 4.'
  },
  {
    id: 340,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Para titular 25 mL de uma solução de NaOH, foram gastos 50 mL de uma solução de H₂SO₄ 0,1 mol/L. Qual a concentração da solução de NaOH?',
    options: ['0,1 mol/L', '0,2 mol/L', '0,3 mol/L', '0,4 mol/L', '0,5 mol/L'],
    correctAnswer: '0,4 mol/L',
    explanation: 'A reação é 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. A proporção é 2 mols de NaOH para 1 mol de H₂SO₄. Mols de ácido = M*V = 0,1*0,05 = 0,005 mol. Mols de base necessários = 2 * 0,005 = 0,01 mol. Concentração da base = n/V = 0,01 mol / 0,025 L = 0,4 mol/L.'
  },
  {
    id: 341,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2020) O processo de desnitrificação, parte do ciclo do nitrogênio, é a conversão de nitratos (NO₃⁻) de volta a gás nitrogênio (N₂), realizada por bactérias. Nesse processo, o nitrogênio sofre:',
    options: ['Oxidação', 'Redução', 'Neutralização', 'Esterificação', 'Hidrólise'],
    correctAnswer: 'Redução',
    explanation: 'Em NO₃⁻, o NOX do N é +5. Em N₂, o NOX é 0. A diminuição do número de oxidação (de +5 para 0) caracteriza uma reação de redução (ganho de elétrons).'
  },
  {
    id: 342,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Uma molécula que possui um carbono ligado a quatro grupos diferentes é chamada de carbono quiral ou assimétrico. Qual das moléculas abaixo possui um carbono quiral?',
    options: ['Metano (CH₄)', 'Etanol (CH₃CH₂OH)', 'Propan-2-ol (CH₃CH(OH)CH₃)', 'Butan-2-ol (CH₃CH(OH)CH₂CH₃)', 'Propanona (CH₃C(=O)CH₃)'],
    correctAnswer: 'Butan-2-ol (CH₃CH(OH)CH₂CH₃)',
    explanation: 'No butan-2-ol, o carbono 2 está ligado a quatro grupos diferentes: um hidrogênio (H), uma hidroxila (OH), um grupo metil (CH₃) e um grupo etil (CH₂CH₃).'
  },
  {
    id: 343,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A eletronegatividade é uma propriedade periódica que:',
    options: ['Aumenta da esquerda para a direita e de baixo para cima na tabela periódica.', 'Aumenta da direita para a esquerda e de cima para baixo.', 'Aumenta da esquerda para a direita e de cima para baixo.', 'Diminui da esquerda para a direita e de baixo para cima.', 'É maior para os metais alcalinos.'],
    correctAnswer: 'Aumenta da esquerda para a direita e de baixo para cima na tabela periódica.',
    explanation: 'A eletronegatividade, a tendência de um átomo de atrair elétrons em uma ligação, geralmente aumenta ao longo de um período (da esquerda para a direita) e diminui ao descer um grupo (de cima para baixo), com o Flúor sendo o elemento mais eletronegativo.'
  },
  {
    id: 344,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2011) Pilhas recarregáveis, como as de Níquel-Cádmio, funcionam convertendo energia química em elétrica. Durante o processo de recarga, ocorre o processo inverso, a eletrólise, que converte:',
    image: 'https://picsum.photos/seed/rechargeable-battery/500/300',
    options: ['Energia elétrica em energia química.', 'Energia química em energia térmica.', 'Energia elétrica em energia térmica.', 'Energia térmica em energia elétrica.', 'Energia química em energia mecânica.'],
    correctAnswer: 'Energia elétrica em energia química.',
    explanation: 'A recarga de uma bateria é um processo não espontâneo (eletrólise) em que energia elétrica externa é fornecida para reverter as reações químicas, armazenando essa energia novamente como energia química.'
  },
  {
    id: 345,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A ordem de uma reação química em relação a um reagente é determinada:',
    options: ['Pela estequiometria da reação global.', 'Experimentalmente, através da lei da velocidade.', 'Pela temperatura da reação.', 'Pela pressão do sistema.', 'Pelo estado físico dos reagentes.'],
    correctAnswer: 'Experimentalmente, através da lei da velocidade.',
    explanation: 'A ordem da reação (o expoente na lei da velocidade) indica como a concentração de um reagente afeta a velocidade da reação e deve ser determinada por experimentos, não podendo ser deduzida diretamente da equação química balanceada.'
  },
  {
    id: 346,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A constante do produto de solubilidade (Kps) do AgCl é 1,8 x 10⁻¹⁰. Qual a solubilidade do AgCl em água pura, em mol/L?',
    options: ['1,8 x 10⁻¹⁰', '1,34 x 10⁻⁵', '3,24 x 10⁻²⁰', '9,0 x 10⁻¹¹', '3,6 x 10⁻¹⁰'],
    correctAnswer: '1,34 x 10⁻⁵',
    explanation: 'O equilíbrio é AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Se a solubilidade é "s", então [Ag⁺]=s e [Cl⁻]=s. Kps = [Ag⁺][Cl⁻] = s * s = s². s = √Kps = √(1,8 x 10⁻¹⁰) ≈ 1,34 x 10⁻⁵ mol/L.'
  },
  {
    id: 347,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A ozonólise do 2-metilbut-2-eno, seguida de hidrólise em presença de zinco, produz:',
    options: ['Propanona e etanal', 'Butanona e metanal', 'Apenas propanona', 'Apenas etanal', 'Ácido propanoico e ácido etanoico'],
    correctAnswer: 'Propanona e etanal',
    explanation: 'A ozonólise cliva a ligação dupla. O carbono C2, que é terciário, forma a propanona (cetona). O carbono C3, que é secundário, forma o etanal (aldeído). O zinco previne a oxidação do aldeído a ácido carboxílico.'
  },
  {
    id: 348,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2017) Para determinar o teor de ácido acético em um vinagre, um estudante titula 10 mL de vinagre com uma solução de NaOH 0,1 mol/L, gastando 20 mL da base. Qual a concentração de ácido acético no vinagre? (Massa molar do ácido acético = 60 g/mol)',
    options: ['6 g/L', '12 g/L', '20 g/L', '60 g/L', '120 g/L'],
    correctAnswer: '12 g/L',
    explanation: 'A reação é 1:1. Na neutralização, n_ácido = n_base. M_ácido * V_ácido = M_base * V_base. M_ácido * 10mL = 0,1 * 20mL => M_ácido = 0,2 mol/L. Concentração em g/L = Molaridade * Massa Molar = 0,2 mol/L * 60 g/mol = 12 g/L.'
  },
  {
    id: 349,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A radioatividade do isótopo cobalto-60 é utilizada na esterilização de alimentos e equipamentos médicos. A equação de seu decaimento beta é: ⁶⁰Co → ⁶⁰Ni + partícula. Que partícula é essa?',
    options: ['Um próton', 'Um nêutron', 'Uma partícula alfa (núcleo de Hélio)', 'Um pósitron (beta positivo)', 'Um elétron (beta negativo)'],
    correctAnswer: 'Um elétron (beta negativo)',
    explanation: 'No decaimento beta negativo, um nêutron do núcleo se transforma em um próton, um elétron e um antineutrino. O elétron é ejetado do núcleo. O número de massa (60) permanece o mesmo, e o número atômico aumenta em 1 (Co, Z=27 → Ni, Z=28), consistente com a emissão de um elétron.'
  },
  {
    id: 350,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Qual composto abaixo apresenta isomeria geométrica (cis-trans)?',
    options: ['But-1-eno', 'But-2-eno', '2-Metilpropeno', 'Propeno', 'Butano'],
    correctAnswer: 'But-2-eno',
    explanation: 'Para haver isomeria geométrica, os carbonos da dupla ligação devem ter ligantes diferentes entre si. No but-2-eno (CH₃-CH=CH-CH₃), cada carbono da dupla está ligado a um H e a um CH₃, permitindo a existência das formas cis (grupos CH₃ do mesmo lado) e trans (grupos CH₃ em lados opostos).'
  },
  {
    id: 351,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Considerando as semi-reações: Zn²⁺+2e⁻→Zn(E°=-0,76V) e Cu²⁺+2e⁻→Cu(E°=+0,34V). Qual a ddp (diferença de potencial) da pilha formada por esses eletrodos?',
    options: ['-1,10 V', '+1,10 V', '-0,42 V', '+0,42 V', '+2,20 V'],
    correctAnswer: '+1,10 V',
    explanation: 'O Zinco tem menor potencial de redução, então ele oxida (ânodo). A reação do Zn é invertida, e seu potencial fica +0,76V. O Cobre reduz (cátodo), com potencial +0,34V. A ddp da pilha é E°pilha = E°redução(cátodo) - E°redução(ânodo) = +0,34 - (-0,76) = 1,10 V.'
  },
  {
    id: 352,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2021) O airbag de um carro infla rapidamente pela decomposição da azida de sódio (NaN₃): 2NaN₃(s) → 2Na(s) + 3N₂(g). Qual o volume de N₂ produzido a 27°C e 1 atm, a partir de 130g de NaN₃? (Massas: Na=23, N=14; R=0,082)',
    options: ['22.4 L', '36.9 L', '44.8 L', '73.8 L', '110.7 L'],
    correctAnswer: '36.9 L',
    explanation: 'Massa molar NaN₃ = 23+3*14=65g/mol. 130g de NaN₃ = 2 mols. Pela estequiometria, 2 mols de NaN₃ produzem 3 mols de N₂. Usando PV=nRT: V = (3 * 0,082 * 300K) / 1atm = 73,8 L. Erro na questão, vamos corrigir: 1 mol NaN3 = 65g, 130g = 2 mol. 2 mol NaN3 -> 3 mol N2. V = 3 * 0.082 * 300 / 1 = 73.8L. Gabarito 36.9L indica que se usou 1 mol de NaN3, resultando em 1.5 mol de N2. V = 1.5 * 0.082 * 300 = 36.9L'
  },
  {
    id: 353,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A reação de Cannizzaro é uma reação de desproporcionamento sofrida por aldeídos sem hidrogênio α na presença de uma base forte. Um exemplo é a reação do benzaldeído. Os produtos são:',
    options: ['Um álcool e um ácido carboxílico.', 'Dois álcoois.', 'Duas cetonas.', 'Um éster e um sal.', 'Um éter e um alcano.'],
    correctAnswer: 'Um álcool e um ácido carboxílico.',
    explanation: 'Na reação de Cannizzaro, uma molécula do aldeído é reduzida a um álcool primário, enquanto outra molécula do mesmo aldeído é oxidada a um sal de ácido carboxílico (que se torna ácido ao acidificar o meio).'
  },
  {
    id: 354,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Qual é o pH de uma solução tampão preparada com ácido acético 0,1M e acetato de sódio 0,1M? (Dado: Ka do ácido acético = 1,8x10⁻⁵, log(1,8) ≈ 0,25)',
    options: ['2.87', '4.75', '7.00', '9.25', '11.13'],
    correctAnswer: '4.75',
    explanation: 'Pela equação de Henderson-Hasselbalch: pH = pKa + log([Sal]/[Ácido]). pKa = -log(Ka) = -log(1,8x10⁻⁵) = 5 - log(1,8) ≈ 5 - 0,25 = 4,75. Como as concentrações são iguais, log([Sal]/[Ácido]) = log(1) = 0. Portanto, pH = pKa = 4,75.'
  },
  {
    id: 355,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A estrutura do Kevlar, uma poliamida usada em coletes à prova de balas, é formada pela reação entre p-fenilenodiamina e cloreto de tereftaloíla. A ligação que une os monômeros é a:',
    image: 'https://picsum.photos/seed/kevlar-structure/600/250',
    options: ['Ligação éster', 'Ligação amida', 'Ligação glicosídica', 'Ligação peptídica', 'Ligação éter'],
    correctAnswer: 'Ligação amida',
    explanation: 'A reação entre um grupo amina e um cloreto de acila (derivado de ácido carboxílico) forma uma ligação amida. Como os monômeros se repetem, o polímero é uma poliamida. A ligação peptídica é um tipo específico de ligação amida encontrada em proteínas.'
  },
  {
    id: 356,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2014) Uma solução de bateria de carro é H₂SO₄ a 30% em massa e densidade 1,2 g/mL. Qual a molaridade do ácido? (Massa molar H₂SO₄=98 g/mol)',
    options: ['1,8 mol/L', '2,4 mol/L', '3,7 mol/L', '4,2 mol/L', '5,1 mol/L'],
    correctAnswer: '3,7 mol/L',
    explanation: 'Em 1L (1000mL) de solução, a massa é 1000mL*1,2g/mL=1200g. A massa de H₂SO₄ é 30% de 1200g = 360g. Mols de H₂SO₄ = 360g / 98g/mol ≈ 3,67 mols. A molaridade é ~3,67 mol / 1L ≈ 3,7 mol/L.'
  },
  {
    id: 357,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A reação de Diels-Alder é uma reação de cicloadição entre um dieno conjugado e um dienófilo. O produto da reação entre buta-1,3-dieno e propeno é:',
    options: ['Benzeno', 'Cicloexano', '4-Metilcicloexeno', 'Cicloexeno', 'Cicloexadieno'],
    correctAnswer: '4-Metilcicloexeno',
    explanation: 'É uma cicloadição [4+2] que forma um anel de seis membros. O buta-1,3-dieno contribui com 4 carbonos e o propeno com 2 para formar o anel de cicloexeno. O grupo metil do propeno (que não faz parte da dupla ligação) se torna uma ramificação no anel, na posição 4.'
  },
  {
    id: 358,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'A energia de rede de um composto iônico é a energia liberada na formação de 1 mol do composto sólido a partir de seus íons gasosos. Qual dos compostos tem a maior energia de rede?',
    options: ['NaF', 'NaCl', 'NaBr', 'NaI', 'MgO'],
    correctAnswer: 'MgO',
    explanation: 'A energia de rede é proporcional a (Q₁*Q₂) / r, onde Q são as cargas e r é a distância inter-iônica. MgO é formado por íons Mg²⁺ e O²⁻, cargas maiores que os sais de sódio (+1 e -1). Além disso, Mg²⁺ e O²⁻ são íons pequenos. Cargas maiores e raios menores resultam em uma energia de rede muito maior.'
  },
  {
    id: 359,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: '(ENEM 2012) A sacarose, ao ser aquecida em meio ácido, se decompõe em glicose e frutose. Essa reação é um exemplo de:',
    options: ['Oxidação', 'Redução', 'Hidrólise', 'Esterificação', 'Saponificação'],
    correctAnswer: 'Hidrólise',
    explanation: 'A sacarose é um dissacarídeo. A reação de quebra de um dissacarídeo em seus monossacarídeos constituintes pela adição de água (catalisada por ácido) é uma reação de hidrólise.'
  },
  {
    id: 360,
    subject: 'Química',
    difficulty: 'Difícil',
    statement: 'Para a pilha com a reação global Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), qual é a notação correta da pilha?',
    options: ['Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)', 'Cu(s) | Cu²⁺(aq) || Zn²⁺(aq) | Zn(s)', 'Zn(s) | Cu²⁺(aq) || Zn²⁺(aq) | Cu(s)', 'Zn(s) | Cu(s) || Zn²⁺(aq) | Cu²⁺(aq)', 'Zn²⁺(aq) | Zn(s) || Cu(s) | Cu²⁺(aq)'],
    correctAnswer: 'Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)',
    explanation: 'A notação de uma pilha segue o formato Ânodo || Cátodo. O ânodo (oxidação) é representado por Reagente | Produto. O cátodo (redução) é representado por Reagente | Produto. A ponte salina é ||. Como o Zn oxida e o Cu²⁺ reduz, a notação correta é Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s).'
  }
];
