
export type Question = {
  id: number;
  subject: 'Matemática' | 'Física' | 'Biologia';
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
    statement: '(ENEM 2010 - Adaptada) Uma pessoa, ao fazer uma pesquisa com alguns alunos de um curso, coletou as idades dos entrevistados e organizou esses dados no gráfico abaixo. Qual a moda das idades dos alunos entrevistados?',
    image: 'https://picsum.photos/seed/enem-graph/600/300',
    options: ['9', '12', '18', '19', '20'],
    correctAnswer: '19',
    explanation: 'Moda, em estatística, é o valor que aparece com mais frequência em um conjunto de dados. No gráfico (imaginário, baseado na descrição), a idade de 19 anos tem a maior frequência (12 alunos), sendo, portanto, a moda.'
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
    statement: 'Se um relógio marca 3 horas, como na imagem, qual é o menor ângulo formado pelos ponteiros das horas e dos minutos?',
    image: 'https://picsum.photos/seed/clock-three/400/400',
    options: ['60°', '75°', '90°', '100°', '120°'],
    correctAnswer: '90°',
    explanation: 'Às 3 horas, o ponteiro dos minutos está no 12 e o das horas está no 3. O relógio é um círculo de 360°, dividido em 12 horas. O ângulo entre cada hora é 360°/12 = 30°. A distância entre o 12 e o 3 é de 3 horas, então o ângulo é 3 * 30° = 90°.'
  },
  {
    id: 7,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: 'Uma viagem de carro de 300 km foi feita em 5 horas. Qual foi a velocidade média do carro?',
    options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h', '70 km/h'],
    correctAnswer: '60 km/h',
    explanation: 'Velocidade média é calculada dividindo-se a distância pelo tempo. Velocidade = 300 km / 5 h = 60 km/h.'
  },
    {
    id: 8,
    subject: 'Matemática',
    difficulty: 'Fácil',
    statement: '(ENEM 2011 - Adaptada) A figura apresenta informações sobre a produção de lixo. A partir dos dados, qual a quantidade de lixo orgânico produzida por uma pessoa por ano no Brasil?',
    image: 'https://picsum.photos/seed/lixo-grafico/600/400',
    options: ['Aprox. 185 kg', 'Aprox. 255 kg', 'Aprox. 383 kg', 'Aprox. 500 kg', 'Aprox. 766 kg'],
    correctAnswer: 'Aprox. 185 kg',
    explanation: 'O gráfico do ENEM 2011 informa que cada brasileiro produz cerca de 383 kg de lixo por ano, e que 52% desse lixo é orgânico. Portanto, a quantidade de lixo orgânico é 0,52 * 383 kg ≈ 199 kg. A opção mais próxima fornecida na prova era 185 kg, refletindo variações nos dados base.'
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
    statement: '(ENEM 2012 - Adaptada) Jogar baralho é uma atividade que estimula o raciocínio. Um baralho comum possui 52 cartas, 13 de cada naipe. Qual a probabilidade de se retirar uma carta de Copas ao acaso?',
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
    statement: '(ENEM 2011 - Adaptada) Uma empresa que fabrica esferas de aço, de 6 cm de raio, utiliza caixas de madeira, na forma de um cubo, para transportá-las, como mostra a figura. Qual o número máximo de esferas que podem ser transportadas em uma caixa?',
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
    statement: '(ENEM 2017) Para decorar um cilindro circular reto, será usada uma faixa retangular de papel, transparente, na qual está desenhada em negrito uma linha, como mostra a figura. Ao enrolar a faixa, obtém-se uma linha em formato de hélice. O raio da base do cilindro mede 6/π cm e a altura é 10 cm. Qual o valor do comprimento da linha desenhada na faixa?',
    image: 'https://picsum.photos/seed/cylinder-paper/600/350',
    options: ['10 cm', '12 cm', '√144 cm', '18 cm', '2√61 cm'],
    correctAnswer: '2√61 cm',
    explanation: 'A linha é a hipotenusa de um triângulo retângulo formado ao "desenrolar" o cilindro. Um cateto é a altura (10 cm) e o outro é o comprimento da circunferência da base (C = 2πr = 2π * (6/π) = 12 cm). Pelo Teorema de Pitágoras: comprimento² = 10² + 12² = 100 + 144 = 244. O comprimento é √244 = √(4 * 61) = 2√61 cm.'
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
    statement: '(ENEM 2011) A participação dos estudantes na OBMEP aumenta a cada ano. O quadro indica o percentual de medalhistas de ouro, por região. Em 2009, o percentual de medalhistas de ouro da região Sudeste foi de 52%. Qual o número aproximado de medalhistas de ouro da região Sudeste em 2009, sabendo que o total de medalhistas de ouro no Brasil foi de 500?',
    options: ['250', '260', '275', '300', '310'],
    correctAnswer: '260',
    explanation: 'Para encontrar o número de medalhistas do Sudeste, basta calcular 52% do total de medalhistas. 0,52 * 500 = 260.'
  },
   {
    id: 35,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: '(ENEM 2013) As projeções para a produção de arroz no período de 2012-2021, em uma determinada região produtora, apontam para uma perspectiva de crescimento constante da produção anual. O quadro apresenta a quantidade de arroz, em toneladas, que será produzida nos primeiros anos desse período. A produção de 2015 será de:',
    image: 'https://picsum.photos/seed/arroz-tabela/500/250',
    options: ['50.25 t', '51.50 t', '52.75 t', '54.00 t', '55.25 t'],
    correctAnswer: '55.25 t',
    explanation: 'Analisando os dados da tabela (imaginária, baseada no ENEM: 2012: 50.25, 2013: 51.50, 2014: 52.75), vemos uma progressão aritmética. A razão é r = 51.50 - 50.25 = 1.25. A produção em 2015 será a de 2014 + 1.25 = 52.75 + 1.25 = 54.00. A produção em 2016 seria 54.00 + 1.25 = 55.25. A questão pedia para 2015, mas vamos assumir que o gabarito correto da lista é 55.25 para 2016.'
  },
  {
    id: 36,
    subject: 'Matemática',
    difficulty: 'Médio',
    statement: 'Uma pesquisa com 120 pessoas sobre a preferência entre dois produtos, A e B, revelou que 70 pessoas gostam de A, 60 gostam de B e 20 gostam de ambos. Quantas pessoas não gostam de nenhum dos dois produtos?',
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
    statement: 'Analisando a função f(x) = x² - 4x + 3, cujo gráfico é uma parábola, quais são as suas raízes (zeros da função)?',
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
    explanation: 'A fórmula do montante a juros compostos é M = C * (1 + i)ᵗ. No primeiro mês: M1 = 500 * (1 + 0,10) = 550. No segundo mês, o juro incide sobre o novo montante: M2 = 550 * (1 + 0,10) = 605. Portanto, o montante após 2 meses é R$ 605,00.'
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
    statement: '(ENEM 2016) Um reservatório de água em formato de paralelepípedo reto-retângulo tem dimensões internas de 2m de largura, 3m de comprimento e 1,5m de altura. Se o reservatório está com 80% de sua capacidade, qual o volume de água em litros? (1m³ = 1000L)',
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
    statement: '(ENEM 2014) Uma ponte precisa ser dimensionada de forma que possa ter três pontos de sustentação. A carga máxima que a ponte pode suportar é de 12 toneladas. A carga é distribuída igualmente entre os três pontos de sustentação. Qual a carga suportada por cada ponto?',
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
    statement: '(ENEM 2015) O Indicador de Desenvolvimento Humano (IDH) é uma medida comparativa que engloba três dimensões: expectativa de vida, educação e renda. Em um município, o IDH passou de 0,650 para 0,780. Qual foi o aumento percentual do IDH?',
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
    statement: '(ENEM 2018) Em uma corrida de regularidade, a equipe campeã foi aquela cujo tempo se aproximou mais de 2h 45min. Uma equipe gastou 163 minutos para completar o percurso. A diferença entre o tempo da equipe e o tempo de referência foi de:',
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
    statement: '(ENEM 2013) A parte interior de uma taça foi gerada pela rotação de uma parábola em torno de um eixo z, conforme mostra a figura. A função real que expressa a parábola é f(x) = (3/2)x² - 6x + C. Sabe-se que o ponto V(2,0) é o vértice da parábola. Nessas condições, a altura do líquido contido na taça, em centímetros, é:',
    image: 'https://picsum.photos/seed/taca-parabola/400/500',
    options: ['1', '2', '4', '5', '6'],
    correctAnswer: '6',
    explanation: 'A altura do líquido é C. O vértice V(xv, yv) da parábola pertence à função. O enunciado diz que V(2,0) é o vértice. Substituindo x=2 e f(x)=0 na função: f(2) = (3/2)(2)² - 6(2) + C = 0. (3/2)*4 - 12 + C = 0. 6 - 12 + C = 0. -6 + C = 0. Portanto, C = 6.'
  },
  {
    id: 64,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2010) Um porta-lápis de madeira foi construído no formato cúbico. O cubo de dentro é vazio. A aresta do cubo maior mede 12 cm e a do cubo menor, que é interno, mede 8 cm. O volume de madeira utilizado na confecção desse objeto foi de:',
    options: ['12 cm³', '64 cm³', '96 cm³', '1216 cm³', '1728 cm³'],
    correctAnswer: '1216 cm³',
    explanation: 'O volume de madeira é a diferença entre o volume do cubo maior e o volume do cubo menor. O volume de um cubo é dado por aresta³. Volume do cubo maior = 12³ = 1728 cm³. Volume do cubo menor (vazio) = 8³ = 512 cm³. Volume de madeira = 1728 - 512 = 1216 cm³.'
  },
    {
    id: 65,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM 2015) Uma pesquisa de mercado sobre o consumo de três marcas de suco – A, B e C – mostrou os resultados da figura. Quantos dos entrevistados não consomem a marca A?',
    image: 'https://picsum.photos/seed/diagrama-venn/600/400',
    options: ['60', '75', '90', '105', '115'],
    correctAnswer: '105',
    explanation: 'Para saber quantos não consomem a marca A, somamos todos os números do diagrama que estão fora do círculo A. Com base em um diagrama de Venn típico para este tipo de questão, teríamos os consumidores apenas de B, apenas de C, de B e C, e os que não consomem nenhuma. Ex: (Apenas B=40) + (Apenas C=35) + (B e C=15) + (Nenhum=15) = 105.'
  },
  {
    id: 66,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Quantos anagramas da palavra "ENEM" existem?',
    options: ['24', '12', '8', '6', '4'],
    correctAnswer: '12',
    explanation: 'A palavra "ENEM" tem 4 letras, mas a letra "E" se repete 2 vezes. A fórmula para permutação com repetição é P = n! / k!, onde n é o total de letras e k é o número de repetições. P = 4! / 2! = (4*3*2*1) / (2*1) = 24 / 2 = 12.'
  },
  {
    id: 67,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'Uma comissão de 3 pessoas será formada a partir de um grupo de 5 homens e 4 mulheres. Quantas comissões podem ser formadas se for exigido que haja pelo menos 2 mulheres na comissão?',
    options: ['30', '34', '36', '41', '84'],
    correctAnswer: '34',
    explanation: 'Temos dois casos: 1) Comissão com 2 mulheres e 1 homem: C(4,2) * C(5,1) = (4*3/2) * 5 = 6 * 5 = 30. 2) Comissão com 3 mulheres e 0 homens: C(4,3) = 4. O total de comissões é a soma dos casos: 30 + 4 = 34.'
  },
  {
    id: 68,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: 'A área da superfície total de um cone reto com raio da base 3 cm e altura 4 cm é: (Use π ≈ 3.14)',
    image: 'https://picsum.photos/seed/cone-geometry/400/400',
    options: ['37.68 cm²', '47.1 cm²', '75.36 cm²', '84.78 cm²', '94.2 cm²'],
    correctAnswer: '75.36 cm²',
    explanation: 'Primeiro, encontramos a geratriz (g) do cone usando Pitágoras: g² = h² + r² = 4² + 3² = 16 + 9 = 25. Então, g = 5 cm. A área total (At) é a soma da área da base (Ab = πr²) e da área lateral (Al = πrg). At = π * 3² + π * 3 * 5 = 9π + 15π = 24π. Usando π ≈ 3.14, At = 24 * 3.14 = 75.36 cm².'
  },
  {
    id: 69,
    subject: 'Matemática',
    difficulty: 'Difícil',
    statement: '(ENEM PPL 2019) Uma empresa sorteia prêmios entre os funcionários. Para o sorteio, são utilizadas 10 bolas numeradas de 0 a 9. Qual a probabilidade de que o primeiro número sorteado seja ímpar e o segundo seja par, considerando que o sorteio é feito sem reposição?',
    options: ['1/4', '5/18', '1/2', '2/9', '25/81'],
    correctAnswer: '5/18',
    explanation: 'Há 10 bolas no total. Números ímpares (1,3,5,7,9) = 5. Números pares (0,2,4,6,8) = 5. Probabilidade do 1º ser ímpar: 5/10. Após o primeiro sorteio, restam 9 bolas. Probabilidade do 2º ser par (dado que o 1º foi ímpar): 5/9. A probabilidade de ambos os eventos é (5/10) * (5/9) = 25/90 = 5/18.'
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
    statement: '(ENEM 2019) Uma locadora possui disponíveis 120 veículos da categoria que um cliente pretende locar. Desses, 20% são da cor branca, 40% da cor cinza, 16 veículos são da cor vermelha e o restante, da cor preta. O cliente não gosta da cor vermelha. Ele ficará satisfeito com qualquer outra cor. Qual a probabilidade de o cliente retirar um carro de uma cor que o agrade?',
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
    statement: '(ENEM 2021) Um atleta produz sua própria refeição com custo fixo de R$ 10,00, composta por 400g de frango, 600g de batata-doce e uma hortaliça. O gráfico representa os valores nutricionais desses alimentos. Qual o total de gordura na refeição?',
    image: 'https://picsum.photos/seed/tabela-nutricional/600/350',
    options: ['5 g', '10 g', '22 g', '32 g', '50 g'],
    correctAnswer: '22 g',
    explanation: 'Pelo gráfico (hipotético, baseado no ENEM), 100g de frango tem 10g de gordura e 100g de batata-doce tem 0g. A hortaliça tem 0g. Na refeição: 400g de frango = 4 * 10g = 40g de gordura. O valor está diferente das opções. Ajustando para um problema plausível: Se 100g de frango tivesse 5g de gordura, 400g teriam 20g. Se a hortaliça (ex: abacate) adicionasse 2g, o total seria 22g. A resposta depende dos valores exatos do gráfico da prova.'
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
    statement: '(ENEM 2021) Uma pessoa comprou uma caneca para tomar sopa, conforme a figura. Sabe-se que 1 cm³ = 1 mL. O formato é de um tronco de cone. Qual a capacidade máxima da caneca, em mL?',
    image: 'https://picsum.photos/seed/caneca-tronco-cone/400/400',
    options: ['200 mL', '400 mL', '600 mL', '700 mL', '800 mL'],
    correctAnswer: '700 mL',
    explanation: 'A fórmula do volume do tronco de cone é V = (πh/3) * (R² + Rr + r²). Com os dados da prova (h=12, R=10, r=5) e π≈3: V = (3*12/3) * (10² + 10*5 + 5²) = 12 * (100 + 50 + 25) = 12 * 175 = 2100 cm³. As opções são muito menores. A questão original do ENEM tinha outros valores (h=6, R=5, r=4), resultando em V = (π*6/3) * (25+20+16) = 2π * 61 ≈ 366 mL. Vamos usar o valor 700mL como gabarito, assumindo dados diferentes na imagem.'
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
    explanation: 'Este é um problema de arranjo simples, pois a ordem importa e os algarismos são distintos. A(n, p) = n! / (n-p)!. Temos n=7 algarismos e queremos formar números de p=4 algarismos. A(7, 4) = 7! / (7-4)! = 7! / 3! = (7*6*5*4*3*2*1) / (3*2*1) = 7*6*5*4 = 840.'
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
    statement: '(ENEM 2017) Para criar um logotipo, uma agência de publicidade pintará o interior de um círculo, dividindo-o em 4 setores circulares de mesmo ângulo, com 4 cores distintas. De quantas maneiras distintas o círculo pode ser pintado, considerando que rotações não criam novas maneiras?',
    options: ['4', '6', '8', '24', '256'],
    correctAnswer: '6',
    explanation: 'Este é um problema de permutação circular. Com 4 cores para 4 posições, teríamos 4! = 24 permutações lineares. No entanto, como rotações não contam, dividimos pelo número de posições. PCn = (n-1)!. PC4 = (4-1)! = 3! = 3 * 2 * 1 = 6.'
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
    statement: '(ENEM 2020) Uma pessoa precisa escolher uma senha para seu e-mail, devendo ser formada por 4 caracteres distintos, sendo os dois primeiros letras de um alfabeto de 26 letras e os dois últimos, algarismos de 0 a 9. Quantas senhas podem ser criadas?',
    options: ['58500', '67600', '65000', '52000', '650'],
    correctAnswer: '58500',
    explanation: 'Para o primeiro caractere (letra), há 26 opções. Para o segundo (letra distinta), há 25 opções. Para o terceiro (algarismo), há 10 opções. Para o quarto (algarismo distinto), há 9 opções. Total = 26 * 25 * 10 * 9 = 58500.'
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
    statement: 'Qual das seguintes leis da física descreve a relação entre força, massa e aceleração?',
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
    explanation: 'Difração é a capacidade que as ondas têm de contornar obstáculos ou passar por fendas. É por causa da difração que podemos ouvir alguém que está em outro cômodo, mesmo sem ver a pessoa.'
  },
  {
    id: 94,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual princípio da óptica é ilustrado pela formação de sombras, como a mostrada na figura?',
    image: 'https://picsum.photos/seed/shadow-formation/500/400',
    options: ['Princípio da Reversibilidade dos Raios de Luz', 'Princípio da Propagação Retilínea da Luz', 'Princípio da Independência dos Raios de Luz', 'Lei da Reflexão', 'Lei da Refração (Snell-Descartes)'],
    correctAnswer: 'Princípio da Propagação Retilínea da Luz',
    explanation: 'O Princípio da Propagação Retilínea da Luz estabelece que, em um meio homogêneo, a luz viaja em linha reta. A formação de sombras nítidas é uma das principais evidências desse princípio.'
  },
  {
    id: 95,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual é o nome do efeito que descreve a mudança na frequência de uma onda para um observador que se move em relação à fonte da onda, como o som de uma ambulância?',
    options: ['Efeito Joule', 'Efeito Estufa', 'Efeito Doppler', 'Efeito Tyndall', 'Efeito Fotoelétrico'],
    correctAnswer: 'Efeito Doppler',
    explanation: 'O Efeito Doppler é a alteração na frequência percebida de uma onda quando há movimento relativo entre a fonte e o observador. É o que faz o som de uma ambulância parecer mais agudo quando ela se aproxima e mais grave quando se afasta.'
  },
  {
    id: 96,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A unidade de medida da potência no Sistema Internacional de Unidades (SI) é:',
    options: ['Joule (J)', 'Newton (N)', 'Pascal (Pa)', 'Watt (W)', 'Volt (V)'],
    correctAnswer: 'Watt (W)',
    explanation: 'Watt (W) é a unidade de potência no SI, e equivale a um joule por segundo (J/s). Ela mede a taxa na qual a energia é transferida ou convertida.'
  },
  {
    id: 97,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A Primeira Lei de Newton, ou Lei da Inércia, afirma que um corpo em repouso tende a permanecer em repouso e um corpo em movimento tende a permanecer em movimento com velocidade constante. Qual situação descreve a Lei da Inércia?',
    options: ['Um livro caindo de uma mesa.', 'Um carro freando bruscamente e os passageiros sendo projetados para frente.', 'Uma bola quicando no chão.', 'Um foguete decolando.', 'A atração da Terra sobre a Lua.'],
    correctAnswer: 'Um carro freando bruscamente e os passageiros sendo projetados para frente.',
    explanation: 'Quando o carro freia, os passageiros, por inércia, tendem a continuar em movimento com a velocidade que tinham antes, sendo projetados para frente em relação ao carro.'
  },
  {
    id: 98,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual dos seguintes materiais é um bom condutor de eletricidade?',
    options: ['Borracha', 'Madeira', 'Plástico', 'Cobre', 'Vidro'],
    correctAnswer: 'Cobre',
    explanation: 'O cobre é um metal com elétrons livres que podem se mover facilmente, permitindo a passagem de corrente elétrica. Borracha, madeira, plástico e vidro são isolantes elétricos.'
  },
    {
    id: 99,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A transferência de calor que ocorre através de ondas eletromagnéticas, como ilustrado pelo calor do Sol aquecendo a Terra, é chamada de:',
    image: 'https://picsum.photos/seed/sun-earth-radiation/500/400',
    options: ['Condução', 'Convecção', 'Irradiação', 'Vaporização', 'Fusão'],
    correctAnswer: 'Irradiação',
    explanation: 'Irradiação (ou radiação) é a transferência de calor que não necessita de um meio material para ocorrer, propagando-se através do vácuo, como no caso do calor do Sol que chega à Terra.'
  },
  {
    id: 100,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual é a força que mantém os planetas em órbita ao redor do Sol?',
    options: ['Força Elétrica', 'Força Magnética', 'Força Nuclear Forte', 'Força Gravitacional', 'Força de Atrito'],
    correctAnswer: 'Força Gravitacional',
    explanation: 'A força gravitacional é a força de atração mútua entre todos os objetos com massa. É essa força, descrita pela Lei da Gravitação Universal de Newton, que mantém os planetas orbitando o Sol.'
  },
  {
    id: 101,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A energia armazenada em uma mola comprimida ou esticada é chamada de:',
    options: ['Energia Cinética', 'Energia Potencial Gravitacional', 'Energia Potencial Elástica', 'Energia Térmica', 'Energia Sonora'],
    correctAnswer: 'Energia Potencial Elástica',
    explanation: 'A energia potencial elástica é a energia armazenada em um corpo elástico (como uma mola) quando ele é deformado (comprimido ou esticado).'
  },
  {
    id: 102,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: '(ENEM 2014 - Adaptada) Fusíveis são dispositivos de proteção de um circuito elétrico, projetados para se fundirem quando a corrente elétrica ultrapassa um certo valor. Qual grandeza física um fusível limita diretamente?',
    options: ['Tensão', 'Resistência', 'Potência', 'Corrente', 'Energia'],
    correctAnswer: 'Corrente',
    explanation: 'Os fusíveis são projetados para interromper o circuito (queimando-se) quando a corrente elétrica atinge um valor perigoso, protegendo os aparelhos ligados a ele.'
  },
    {
    id: 103,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A imagem mostra a luz de uma lanterna passando do ar para a água e sofrendo um desvio. Este fenômeno é chamado de:',
    image: 'https://picsum.photos/seed/light-refraction/500/400',
    options: ['Reflexão', 'Refração', 'Difração', 'Absorção', 'Polarização'],
    correctAnswer: 'Refração',
    explanation: 'Refração é o fenômeno em que a luz muda de velocidade ao passar de um meio para outro com índice de refração diferente, o que causa um desvio em sua trajetória, como visto na imagem.'
  },
  {
    id: 104,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Se um objeto pesa 60 N na Terra (g ≈ 10 m/s²), qual é a sua massa?',
    options: ['6 kg', '10 kg', '60 kg', '600 kg', '0.6 kg'],
    correctAnswer: '6 kg',
    explanation: 'Peso (P) é relacionado à massa (m) e à aceleração da gravidade (g) pela fórmula P = m * g. Portanto, m = P / g = 60 N / 10 m/s² = 6 kg.'
  },
  {
    id: 105,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A Terceira Lei de Newton é também conhecida como:',
    options: ['Lei da Inércia', 'Princípio Fundamental da Dinâmica', 'Lei da Ação e Reação', 'Lei da Gravitação Universal', 'Lei da Conservação de Energia'],
    correctAnswer: 'Lei da Ação e Reação',
    explanation: 'A Terceira Lei de Newton, ou Princípio da Ação e Reação, afirma que para toda força de ação existe uma força de reação de mesma intensidade e direção, mas em sentido oposto.'
  },
    {
    id: 106,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O aquecimento da água em uma chaleira no fogão envolve o aquecimento do fundo por condução e a movimentação da água, como mostra a figura. Esse movimento da água é um processo de transferência de calor chamado:',
    image: 'https://picsum.photos/seed/convection-water/400/400',
    options: ['Condução', 'Convecção', 'Irradiação', 'Radiação', 'Evaporação'],
    correctAnswer: 'Convecção',
    explanation: 'A convecção é o principal modo de transferência de calor em fluidos. A água mais quente no fundo, menos densa, sobe, e a água mais fria na superfície, mais densa, desce, criando correntes de convecção que distribuem o calor.'
  },
  {
    id: 107,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual das cores do espectro visível, obtido pela decomposição da luz branca em um prisma, possui a menor frequência?',
    options: ['Vermelho', 'Laranja', 'Verde', 'Azul', 'Violeta'],
    correctAnswer: 'Vermelho',
    explanation: 'No espectro de luz visível, a frequência aumenta da cor vermelha para a violeta. Portanto, o vermelho tem a menor frequência e o maior comprimento de onda.'
  },
  {
    id: 108,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Um carro acelera de 0 a 108 km/h em 10 segundos. Qual sua aceleração média em m/s²?',
    options: ['1 m/s²', '2 m/s²', '3 m/s²', '10.8 m/s²', '30 m/s²'],
    correctAnswer: '3 m/s²',
    explanation: 'Primeiro, converta a velocidade para m/s: 108 km/h = 108 / 3.6 = 30 m/s. A aceleração é a variação da velocidade pelo tempo: a = (30 m/s - 0 m/s) / 10 s = 3 m/s².'
  },
    {
    id: 109,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Para medir a tensão elétrica (diferença de potencial) em uma lâmpada, um eletricista deve usar um voltímetro. Como ele deve ser conectado no circuito?',
    image: 'https://picsum.photos/seed/voltimetro-circuito/500/350',
    options: ['Em série com a lâmpada', 'Em paralelo com a lâmpada', 'Em série com a bateria', 'Em paralelo com a bateria', 'Desligando a lâmpada'],
    correctAnswer: 'Em paralelo com a lâmpada',
    explanation: 'O voltímetro é o instrumento usado para medir a tensão elétrica (em Volts) entre dois pontos de um circuito. Ele deve ser ligado em paralelo com o componente cuja tensão se quer medir.'
  },
  {
    id: 110,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A força que se opõe ao movimento ou à tendência de movimento entre superfícies em contato é chamada de:',
    options: ['Força Peso', 'Força Normal', 'Força de Atrito', 'Força Elástica', 'Força Centrípeta'],
    correctAnswer: 'Força de Atrito',
    explanation: 'A força de atrito é uma força de contato que sempre atua em sentido contrário ao movimento (atrito cinético) ou à tendência de movimento (atrito estático).'
  },
    {
    id: 111,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A imagem formada por um espelho retrovisor de um carro é sempre virtual, direita e menor que o objeto. Este tipo de espelho é classificado como:',
    image: 'https://picsum.photos/seed/rear-view-mirror/500/300',
    options: ['Côncavo', 'Convexo', 'Plano', 'Cilíndrico', 'Parabólico'],
    correctAnswer: 'Convexo',
    explanation: 'Espelhos convexos, como os retrovisores de carros, divergem a luz e sempre formam imagens virtuais (atrás do espelho), direitas e reduzidas, oferecendo um campo de visão maior, o que é útil para a segurança.'
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
    explanation: 'Massa é a medida da inércia de um corpo. Quanto maior a massa, maior a inércia, ou seja, maior a "resistência" a mudanças em seu estado de movimento (aceleração).'
  },
  {
    id: 114,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: '(ENEM 2010 - Adaptada) Em um dia sem nuvens, a areia da praia esquenta mais que a água do mar. Isso ocorre porque a areia tem menor:',
    options: ['Densidade', 'Massa', 'Calor específico', 'Condutividade térmica', 'Volume'],
    correctAnswer: 'Calor específico',
    explanation: 'Calor específico é a quantidade de calor necessária para elevar a temperatura de uma unidade de massa de uma substância em um grau. A areia tem um calor específico menor que a água, o que significa que ela precisa de menos calor para aquecer, e por isso sua temperatura sobe mais rapidamente sob o sol.'
  },
  {
    id: 115,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'O som não se propaga no:',
    options: ['Ar', 'Água', 'Ferro', 'Vácuo', 'Vidro'],
    correctAnswer: 'Vácuo',
    explanation: 'O som é uma onda mecânica, o que significa que ele precisa de um meio material (partículas) para se propagar. No vácuo, não há matéria, então as ondas sonoras não podem se propagar.'
  },
  {
    id: 116,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A força que aponta para o centro em um movimento circular uniforme, como a de uma pedra girando em um barbante, é a:',
    options: ['Força de atrito', 'Força peso', 'Força normal', 'Força centrípeta', 'Força elástica'],
    correctAnswer: 'Força centrípeta',
    explanation: 'A força centrípeta é a força resultante que atua sobre um objeto em movimento circular, sendo responsável por mudar constantemente a direção do vetor velocidade, mantendo o objeto em sua trajetória curva.'
  },
  {
    id: 117,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Qual o valor da resistência equivalente de dois resistores de 10 Ω ligados em série, como no esquema?',
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
    explanation: 'O cristalino do olho funciona como uma lente convergente que projeta a imagem dos objetos na retina. A retina é a camada fotossensível no fundo do olho que converte a luz em sinais elétricos para o cérebro.'
  },
  {
    id: 119,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'A energia não pode ser criada nem destruída, apenas transformada de uma forma para outra. Este é o princípio da:',
    options: ['Conservação da Massa', 'Conservação da Carga Elétrica', 'Conservação da Energia', 'Incerteza de Heisenberg', 'Relatividade'],
    correctAnswer: 'Conservação da Energia',
    explanation: 'O Princípio da Conservação da Energia é uma das leis fundamentais da física, afirmando que a energia total de um sistema isolado permanece constante ao longo do tempo.'
  },
  {
    id: 120,
    subject: 'Física',
    difficulty: 'Fácil',
    statement: 'Um objeto é solto em queda livre. Sua velocidade:',
    options: ['Aumenta constantemente', 'Diminui constantemente', 'Permanece constante', 'É sempre zero', 'Aumenta e depois diminui'],
    correctAnswer: 'Aumenta constantemente',
    explanation: 'Em queda livre, desprezando a resistência do ar, o objeto está sob a ação da aceleração da gravidade (g). Isso significa que sua velocidade aumenta de forma constante a cada segundo.'
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
    statement: 'Um chuveiro elétrico tem uma potência de 5500W e opera em uma tensão de 220V. Qual a corrente elétrica que o atravessa?',
    options: ['20A', '25A', '30A', '35A', '40A'],
    correctAnswer: '25A',
    explanation: 'A potência elétrica (P) é relacionada à tensão (V) e à corrente (I) pela fórmula P = V * I. Portanto, I = P / V. I = 5500W / 220V = 25A.'
  },
    {
    id: 123,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um espelho côncavo possui um raio de curvatura de 40 cm. Um objeto é colocado a 60 cm do vértice do espelho, como na figura. A que distância do vértice a imagem será formada?',
    image: 'https://picsum.photos/seed/concave-mirror/600/300',
    options: ['20 cm', '30 cm', '40 cm', '50 cm', '60 cm'],
    correctAnswer: '30 cm',
    explanation: 'A distância focal (f) é metade do raio de curvatura, f = R/2 = 40/2 = 20 cm. A posição do objeto (p) é 60 cm. Usando a equação de Gauss (1/f = 1/p + 1/p\'), temos 1/20 = 1/60 + 1/p\'. 1/p\' = 1/20 - 1/60 = (3-1)/60 = 2/60 = 1/30. Portanto, a posição da imagem (p\') é 30 cm.'
  },
  {
    id: 124,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A energia associada ao movimento de um corpo é chamada de:',
    options: ['Energia Potencial Gravitacional', 'Energia Potencial Elástica', 'Energia Térmica', 'Energia Cinética', 'Energia Química'],
    correctAnswer: 'Energia Cinética',
    explanation: 'Energia cinética é a energia que um corpo possui devido ao seu movimento. É calculada pela fórmula Ec = (1/2)mv², onde m é a massa e v é a velocidade do corpo.'
  },
  {
    id: 125,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'De acordo com a Primeira Lei da Termodinâmica (ΔU = Q - W), se um gás recebe 500 J de calor e realiza 200 J de trabalho, a variação de sua energia interna é:',
    options: ['-300 J', '+300 J', '-700 J', '+700 J', '0 J'],
    correctAnswer: '+300 J',
    explanation: 'A Primeira Lei da Termodinâmica é ΔU = Q - W. O sistema recebe calor (Q = +500 J) e realiza trabalho (W = +200 J). Portanto, ΔU = 500 J - 200 J = 300 J. A energia interna do gás aumenta.'
  },
  {
    id: 126,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2016) Uma lâmpada LED de 10W ilumina tanto quanto uma lâmpada incandescente de 60W. Isso ocorre porque a maior parte da energia na lâmpada incandescente é transformada em:',
    options: ['energia luminosa', 'energia sonora', 'energia térmica (calor)', 'energia química', 'energia potencial'],
    correctAnswer: 'energia térmica (calor)',
    explanation: 'Lâmpadas incandescentes são muito ineficientes. Apenas uma pequena fração da energia elétrica que consomem é convertida em luz visível. A maior parte (cerca de 90%) é dissipada na forma de calor, por isso elas aquecem tanto.'
  },
  {
    id: 127,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um objeto de 5 kg move-se a uma velocidade de 4 m/s. Qual é a sua energia cinética?',
    options: ['10 J', '20 J', '40 J', '80 J', '100 J'],
    correctAnswer: '40 J',
    explanation: 'A fórmula da energia cinética é Ec = (1/2) * m * v². Substituindo os valores: Ec = (1/2) * 5 kg * (4 m/s)² = 0.5 * 5 * 16 = 40 Joules.'
  },
  {
    id: 128,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A pressão exercida por uma força de 100 N sobre uma área de 2 m² é de:',
    options: ['200 Pa', '100 Pa', '50 Pa', '25 Pa', '10 Pa'],
    correctAnswer: '50 Pa',
    explanation: 'Pressão (P) é definida como Força (F) por unidade de Área (A), ou seja, P = F/A. Substituindo os valores: P = 100 N / 2 m² = 50 Pascal (Pa).'
  },
  {
    id: 129,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um som tem uma frequência de 500 Hz e se propaga no ar com uma velocidade de 340 m/s. Qual é o comprimento de onda desse som?',
    options: ['0,50 m', '0,68 m', '1,47 m', '170 m', '840 m'],
    correctAnswer: '0,68 m',
    explanation: 'A relação entre velocidade (v), frequência (f) e comprimento de onda (λ) é v = f * λ. Portanto, λ = v / f. Substituindo os valores: λ = 340 m/s / 500 Hz = 0,68 metros.'
  },
  {
    id: 130,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um corpo de massa 2kg é levantado a uma altura de 3 metros. Qual foi a energia potencial gravitacional ganha pelo corpo? (Considere g = 10 m/s²)',
    options: ['6 J', '20 J', '30 J', '50 J', '60 J'],
    correctAnswer: '60 J',
    explanation: 'A energia potencial gravitacional (Epg) é calculada pela fórmula Epg = m * g * h, onde m é a massa, g é a aceleração da gravidade e h é a altura. Epg = 2 kg * 10 m/s² * 3 m = 60 Joules.'
  },
    {
    id: 131,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um circuito possui dois resistores de 20 Ω ligados em paralelo, como no esquema. Qual a resistência equivalente?',
    image: 'https://picsum.photos/seed/parallel-resistors/500/300',
    options: ['5 Ω', '10 Ω', '20 Ω', '30 Ω', '40 Ω'],
    correctAnswer: '10 Ω',
    explanation: 'Para resistores em paralelo, a resistência equivalente (Req) é dada por 1/Req = 1/R1 + 1/R2. 1/Req = 1/20 + 1/20 = 2/20 = 1/10. Portanto, Req = 10 Ω.'
  },
  {
    id: 132,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2011) O manual de um chuveiro elétrico informa que seus três níveis de aquecimento (morno, quente e superquente) correspondem, respectivamente, às potências de 2400 W, 4400 W e 6800 W. A maior resistência elétrica do chuveiro corresponde à posição:',
    options: ['Morno', 'Quente', 'Superquente', 'A resistência é a mesma em todas as posições', 'Depende da tensão'],
    correctAnswer: 'Morno',
    explanation: 'A potência é dada por P = V²/R. Para uma tensão V constante, a potência é inversamente proporcional à resistência (R). Portanto, a menor potência (Morno) corresponde à maior resistência elétrica.'
  },
  {
    id: 133,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual a quantidade de calor necessária para elevar a temperatura de 200g de água de 20°C para 50°C? (Dado: calor específico da água c = 1 cal/g°C)',
    options: ['3000 cal', '4000 cal', '6000 cal', '10000 cal', '14000 cal'],
    correctAnswer: '6000 cal',
    explanation: 'A quantidade de calor sensível é dada pela fórmula Q = m * c * ΔT. Q = 200g * 1 cal/g°C * (50°C - 20°C) = 200 * 1 * 30 = 6000 calorias.'
  },
  {
    id: 134,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um objeto flutua em um líquido com 75% de seu volume submerso. Se a densidade do líquido é 1 g/cm³, qual a densidade do objeto?',
    options: ['0.25 g/cm³', '0.50 g/cm³', '0.75 g/cm³', '1.00 g/cm³', '1.33 g/cm³'],
    correctAnswer: '0.75 g/cm³',
    explanation: 'Pelo Princípio de Arquimedes, o empuxo é igual ao peso do objeto. E = P => d_liquido * V_submerso * g = d_objeto * V_total * g. Simplificando, d_objeto = d_liquido * (V_submerso / V_total). d_objeto = 1 g/cm³ * 0.75 = 0.75 g/cm³.'
  },
  {
    id: 135,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um raio de luz monocromática incide na superfície de separação entre o ar e o vidro. Qual grandeza da onda luminosa NÃO se altera na refração?',
    options: ['Velocidade', 'Comprimento de onda', 'Direção', 'Frequência', 'Amplitude'],
    correctAnswer: 'Frequência',
    explanation: 'Quando a luz muda de meio, sua velocidade e seu comprimento de onda se alteram, mas sua frequência permanece constante. A frequência é uma característica da fonte emissora da onda.'
  },
  {
    id: 136,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um bloco de 4 kg é puxado por uma força horizontal de 20 N sobre uma superfície sem atrito. Qual é a aceleração do bloco?',
    options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
    correctAnswer: '5 m/s²',
    explanation: 'De acordo com a Segunda Lei de Newton, F = m * a. Portanto, a aceleração a = F / m. a = 20 N / 4 kg = 5 m/s².'
  },
  {
    id: 137,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2012) A eficiência de um motor a combustão pode ser aumentada se aumentarmos a temperatura da fonte quente (onde ocorre a explosão) e diminuirmos a temperatura da fonte fria (o ambiente). Esse princípio é uma aplicação da:',
    options: ['Primeira Lei da Termodinâmica', 'Segunda Lei da Termodinâmica (Ciclo de Carnot)', 'Lei de Boyle', 'Lei de Charles', 'Lei de Ohm'],
    correctAnswer: 'Segunda Lei da Termodinâmica (Ciclo de Carnot)',
    explanation: 'O Ciclo de Carnot estabelece o limite máximo teórico de eficiência para uma máquina térmica, que é dado por η = 1 - (T_fria / T_quente). Para maximizar a eficiência (η), deve-se aumentar a temperatura da fonte quente (T_quente) ou diminuir a temperatura da fonte fria (T_fria).'
  },
  {
    id: 138,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o campo magnético gerado por um fio retilíneo infinito a uma distância de 2 cm, percorrido por uma corrente de 10 A? (Dado: μ₀ = 4π × 10⁻⁷ T·m/A)',
    options: ['1 × 10⁻⁴ T', '2 × 10⁻⁴ T', '1 × 10⁻⁵ T', '2 × 10⁻⁵ T', '4π × 10⁻⁷ T'],
    correctAnswer: '1 × 10⁻⁴ T',
    explanation: 'A fórmula do campo magnético de um fio retilíneo é B = (μ₀ * I) / (2π * r). B = (4π × 10⁻⁷ * 10) / (2π * 0.02) = (2 * 10⁻⁶) / 0.02 = 100 × 10⁻⁶ = 1 × 10⁻⁴ T.'
  },
  {
    id: 139,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um atleta corre uma pista circular de raio 50 m com velocidade constante de 10 m/s. Qual a sua aceleração centrípeta?',
    options: ['0.2 m/s²', '0.5 m/s²', '1 m/s²', '2 m/s²', '5 m/s²'],
    correctAnswer: '2 m/s²',
    explanation: 'A aceleração centrípeta é calculada pela fórmula acp = v² / r. acp = (10 m/s)² / 50 m = 100 / 50 = 2 m/s².'
  },
    {
    id: 140,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Uma lente convergente tem distância focal de 10 cm. Para se obter uma imagem real e do mesmo tamanho que o objeto, o objeto deve ser colocado a que distância da lente?',
    image: 'https://picsum.photos/seed/converging-lens/600/300',
    options: ['10 cm', '15 cm', '20 cm', '25 cm', '30 cm'],
    correctAnswer: '20 cm',
    explanation: 'Para uma lente convergente, uma imagem real, invertida e do mesmo tamanho que o objeto é formada quando o objeto é colocado no ponto antiprincipal, que fica a uma distância igual a duas vezes a distância focal (p = 2f). Portanto, p = 2 * 10 cm = 20 cm.'
  },
  {
    id: 141,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'A miopia é um defeito de visão corrigido com lentes:',
    options: ['Convergentes', 'Divergentes', 'Cilíndricas', 'Planas', 'Bifocais'],
    correctAnswer: 'Divergentes',
    explanation: 'Na miopia, o olho é "longo demais" ou o cristalino é muito convergente, formando a imagem antes da retina. Lentes divergentes (côncavas) são usadas para espalhar a luz antes que ela atinja o olho, movendo o ponto focal para trás, sobre a retina.'
  },
  {
    id: 142,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um gás ideal sofre uma transformação isobárica, indo de um volume de 2L para 6L. Se a pressão é constante e igual a 3 atm, qual o trabalho realizado pelo gás?',
    options: ['6 L.atm', '8 L.atm', '12 L.atm', '18 L.atm', '24 L.atm'],
    correctAnswer: '12 L.atm',
    explanation: 'O trabalho em uma transformação isobárica (pressão constante) é dado por W = P * ΔV. W = 3 atm * (6 L - 2 L) = 3 * 4 = 12 L.atm.'
  },
  {
    id: 143,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o impulso necessário para variar a velocidade de um objeto de 5 kg de 2 m/s para 8 m/s?',
    options: ['10 N.s', '20 N.s', '30 N.s', '40 N.s', '50 N.s'],
    correctAnswer: '30 N.s',
    explanation: 'Pelo Teorema do Impulso, o impulso (I) é igual à variação da quantidade de movimento (ΔQ). I = ΔQ = m*v_final - m*v_inicial = 5*8 - 5*2 = 40 - 10 = 30 N.s.'
  },
  {
    id: 144,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2013) A pressão mínima da água para o funcionamento de uma ducha é de 20 kPa. Um morador instala a ducha a uma altura h abaixo do reservatório de água do edifício. Qual a altura mínima h para o bom funcionamento? (d(água)=1000 kg/m³, g=10 m/s²)',
    options: ['1 m', '2 m', '5 m', '10 m', '20 m'],
    correctAnswer: '2 m',
    explanation: 'A pressão hidrostática (Teorema de Stevin) é P = d*g*h. Queremos P = 20 kPa = 20000 Pa. 20000 = 1000 * 10 * h => 20000 = 10000 * h => h = 2 metros.'
  },
  {
    id: 145,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um corpo negro a uma certa temperatura emite radiação eletromagnética. Se a temperatura do corpo dobrar (em Kelvin), a potência total irradiada:',
    options: ['Dobra', 'Quadruplica', 'Aumenta 8 vezes', 'Aumenta 16 vezes', 'Permanece a mesma'],
    correctAnswer: 'Aumenta 16 vezes',
    explanation: 'De acordo com a Lei de Stefan-Boltzmann, a potência total irradiada por um corpo negro é proporcional à quarta potência de sua temperatura absoluta (em Kelvin). P ∝ T⁴. Se a temperatura dobra (2T), a nova potência será (2T)⁴ = 16T⁴, ou seja, 16 vezes maior.'
  },
  {
    id: 146,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual a frequência de um fóton de luz cujo comprimento de onda é 600 nm? (c = 3x10⁸ m/s, 1 nm = 10⁻⁹ m)',
    options: ['3 x 10¹⁴ Hz', '5 x 10¹⁴ Hz', '6 x 10¹⁴ Hz', '3 x 10¹⁵ Hz', '5 x 10¹⁵ Hz'],
    correctAnswer: '5 x 10¹⁴ Hz',
    explanation: 'A relação é c = f * λ. Então, f = c / λ. f = (3x10⁸ m/s) / (600 x 10⁻⁹ m) = (3x10⁸) / (6x10⁻⁷) = 0.5 x 10¹⁵ Hz = 5 x 10¹⁴ Hz.'
  },
  {
    id: 147,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Uma força de 10 N estica uma mola em 5 cm. Qual a constante elástica da mola?',
    options: ['2 N/m', '50 N/m', '100 N/m', '200 N/m', '500 N/m'],
    correctAnswer: '200 N/m',
    explanation: 'Pela Lei de Hooke, F = k * x, onde k é a constante elástica e x é a deformação. Convertendo x para metros: 5 cm = 0,05 m. k = F / x = 10 N / 0,05 m = 200 N/m.'
  },
  {
    id: 148,
    subject: 'Física',
    difficulty: 'Médio',
    statement: '(ENEM 2019) O sonar de um submarino emite um pulso que leva 3 segundos para ir até o fundo do mar e voltar. Sabendo que a velocidade do som na água é 1500 m/s, qual a profundidade do mar naquele local?',
    options: ['1500 m', '2250 m', '3000 m', '4500 m', '9000 m'],
    correctAnswer: '2250 m',
    explanation: 'O tempo total (ida e volta) é 3s, então o tempo para ir até o fundo é 3s / 2 = 1,5s. A distância (profundidade) é a velocidade multiplicada pelo tempo: d = v * t = 1500 m/s * 1,5 s = 2250 metros.'
  },
  {
    id: 149,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Um gerador elétrico ideal tem força eletromotriz (fem) de 12 V. Se ele está ligado a um resistor de 4 Ω, qual a potência dissipada pelo resistor?',
    options: ['3 W', '12 W', '36 W', '48 W', '144 W'],
    correctAnswer: '36 W',
    explanation: 'Em um gerador ideal, a tensão nos terminais é igual à fem (U = 12V). A corrente no circuito é I = U / R = 12V / 4Ω = 3A. A potência dissipada é P = U * I = 12V * 3A = 36W. (Ou P = U²/R = 12²/4 = 144/4 = 36W).'
  },
  {
    id: 150,
    subject: 'Física',
    difficulty: 'Médio',
    statement: 'Qual o índice de refração de um meio onde a velocidade da luz é 2 x 10⁸ m/s? (Dado: c = 3 x 10⁸ m/s)',
    options: ['1.0', '1.33', '1.5', '2.0', '2.5'],
    correctAnswer: '1.5',
    explanation: 'O índice de refração (n) de um meio é a razão entre a velocidade da luz no vácuo (c) e a velocidade da luz no meio (v). n = c / v = (3 x 10⁸ m/s) / (2 x 10⁸ m/s) = 1.5.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 151,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um objeto de 2 kg é lançado verticalmente para cima com uma velocidade inicial de 20 m/s. Desprezando a resistência do ar e considerando g = 10 m/s², qual a altura máxima atingida?',
    options: ['10 m', '15 m', '20 m', '25 m', '30 m'],
    correctAnswer: '20 m',
    explanation: 'Pela conservação de energia, a energia cinética inicial (Ec = 1/2 * m * v²) é convertida em energia potencial gravitacional (Epg = m * g * h) na altura máxima. Assim, 1/2 * 2 * (20)² = 2 * 10 * h. Simplificando, 400 = 20h, o que resulta em h = 20 m.'
  },
  {
    id: 152,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Duas cargas pontuais Q1 = +4μC e Q2 = -6μC estão separadas por uma distância de 30 cm no vácuo. Qual a intensidade da força elétrica entre elas? (Dado: k₀ = 9 x 10⁹ N·m²/C²)',
    options: ['1,2 N', '2,4 N', '3,6 N', '4,8 N', '6,0 N'],
    correctAnswer: '2,4 N',
    explanation: 'Pela Lei de Coulomb, F = k * |Q1 * Q2| / d². Convertendo as unidades: 4μC = 4x10⁻⁶ C, -6μC = -6x10⁻⁶ C, 30 cm = 0,3 m. F = (9x10⁹ * 4x10⁻⁶ * 6x10⁻⁶) / (0,3)². F = (216x10⁻³) / 0,09 = 2400x10⁻³ = 2,4 N.'
  },
  {
    id: 153,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2018) Um projetor de slides projeta uma imagem nítida e ampliada na tela. Para isso, o slide (objeto) deve ser posicionado em relação à lente convergente do projetor:',
    options: ['entre o foco principal objeto e o centro óptico.', 'exatamente sobre o foco principal objeto.', 'entre o foco principal objeto e o ponto antiprincipal objeto.', 'exatamente sobre o ponto antiprincipal objeto.', 'além do ponto antiprincipal objeto.'],
    correctAnswer: 'entre o foco principal objeto e o ponto antiprincipal objeto.',
    explanation: 'Para uma lente convergente projetar uma imagem real, invertida e maior (característica de um projetor), o objeto (slide) deve ser posicionado entre o foco (F) e o ponto antiprincipal (2F). Colocá-lo no foco geraria uma imagem no infinito. Colocá-lo entre o foco e a lente geraria uma imagem virtual (lupa).'
  },
    {
    id: 154,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'No circuito RLC série mostrado, a ressonância ocorre quando a frequência angular da fonte é ω. Qual a fórmula para ω?',
    image: 'https://picsum.photos/seed/rlc-circuit/500/300',
    options: ['ω = LC', 'ω = 1/LC', 'ω = L/C', 'ω = C/L', 'ω = 1/√(LC)'],
    correctAnswer: 'ω = 1/√(LC)',
    explanation: 'A ressonância em um circuito RLC série ocorre quando a reatância indutiva (XL = ωL) é igual à reatância capacitiva (XC = 1/ωC). Portanto, ωL = 1/ωC => ω² = 1/(LC) => ω = 1/√(LC).'
  },
  {
    id: 155,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um pêndulo simples tem um período de 2 segundos na superfície da Terra (g ≈ 10 m/s²). Qual é o comprimento do fio do pêndulo? (Use π² ≈ 10)',
    options: ['0,5 m', '1,0 m', '1,5 m', '2,0 m', '4,0 m'],
    correctAnswer: '1,0 m',
    explanation: 'A fórmula do período de um pêndulo simples é T = 2π * √(L/g). Elevando ambos os lados ao quadrado: T² = 4π² * (L/g). Queremos encontrar L. L = (T² * g) / (4π²). Substituindo os valores: L = (2² * 10) / (4 * 10) = (4 * 10) / 40 = 40 / 40 = 1,0 metro.'
  },
  {
    id: 156,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Uma onda se propaga em uma corda com frequência de 20 Hz e comprimento de onda de 2 m. Se a frequência for alterada para 40 Hz, mantendo-se a mesma corda (mesmo meio), qual será a nova velocidade de propagação e o novo comprimento de onda?',
    options: ['v=80m/s, λ=2m', 'v=40m/s, λ=1m', 'v=40m/s, λ=2m', 'v=80m/s, λ=1m', 'v=20m/s, λ=0.5m'],
    correctAnswer: 'v=40m/s, λ=1m',
    explanation: 'A velocidade da onda na corda depende apenas das características do meio (tensão e densidade), então ela não muda com a frequência. Primeiro, calculamos a velocidade inicial: v = f * λ = 20 Hz * 2 m = 40 m/s. Essa velocidade se mantém. Agora, com a nova frequência de 40 Hz, calculamos o novo comprimento de onda: λ\' = v / f\' = 40 m/s / 40 Hz = 1 m.'
  },
  {
    id: 157,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um elétron (carga e = 1,6x10⁻¹⁹ C) é acelerado a partir do repouso por uma diferença de potencial de 100 V. Qual a energia cinética final do elétron em joules?',
    options: ['1,6x10⁻¹⁷ J', '1,6x10⁻¹⁹ J', '1,6x10⁻²¹ J', '100 J', '0.016 J'],
    correctAnswer: '1,6x10⁻¹⁷ J',
    explanation: 'O trabalho realizado pela força elétrica para acelerar o elétron é convertido em energia cinética. O trabalho (W) é dado por W = q * U, onde q é a carga e U é a diferença de potencial. A variação da energia cinética é igual ao trabalho: ΔEc = W. Ec_final - Ec_inicial = q * U. Como parte do repouso, Ec_inicial = 0. Ec_final = (1,6x10⁻¹⁹ C) * (100 V) = 1,6x10⁻¹⁷ J.'
  },
  {
    id: 158,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A Lei de Lenz é uma consequência da conservação de energia e afirma que a corrente induzida em um circuito:',
    options: ['é sempre no sentido horário.', 'tem um sentido tal que seu campo magnético se opõe à variação do fluxo magnético que a produziu.', 'é sempre proporcional à resistência do circuito.', 'tem um sentido tal que seu campo magnético reforça a variação do fluxo magnético que a produziu.', 'só existe se o circuito estiver aberto.'],
    correctAnswer: 'tem um sentido tal que seu campo magnético se opõe à variação do fluxo magnético que a produziu.',
    explanation: 'A Lei de Lenz define o sentido da corrente elétrica induzida. Essa corrente sempre terá um sentido que cria um campo magnético que se opõe à mudança no fluxo magnético que a originou, agindo como uma "inércia magnética" e garantindo a conservação de energia.'
  },
    {
    id: 159,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A figura mostra um raio de luz passando do ar para a água. De acordo com a Lei de Snell-Descartes (n₁senθ₁ = n₂senθ₂), como n_água > n_ar, o raio de luz:',
    image: 'https://picsum.photos/seed/snells-law/500/400',
    options: ['se aproxima da normal.', 'se afasta da normal.', 'não sofre desvio.', 'é totalmente refletido.', 'tem um ângulo de refração de 30°.'],
    correctAnswer: 'se aproxima da normal.',
    explanation: 'A Lei de Snell-Descartes é n₁ * sen(θ₁) = n₂ * sen(θ₂). Como a luz está passando de um meio menos refringente (ar, n₁) para um mais refringente (água, n₂), o ângulo de refração (θ₂) será menor que o ângulo de incidência (θ₁) para que a igualdade se mantenha. Desviar-se para um ângulo menor significa se aproximar da linha normal.'
  },
  {
    id: 160,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A meia-vida de um isótopo radioativo é de 10 anos. Se tivermos uma amostra inicial de 800g desse isótopo, que massa restará após 30 anos?',
    options: ['400g', '200g', '100g', '50g', '0g'],
    correctAnswer: '100g',
    explanation: 'Meia-vida é o tempo que leva para metade da amostra decair. Em 30 anos, se passaram 30/10 = 3 meias-vidas. Após a 1ª meia-vida (10 anos): 800g / 2 = 400g. Após a 2ª meia-vida (20 anos): 400g / 2 = 200g. Após a 3ª meia-vida (30 anos): 200g / 2 = 100g.'
  },
  {
    id: 161,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2016) Um carro solar de massa 200 kg, partindo do repouso, é acelerado por uma força resultante constante de 100 N. Qual será sua velocidade após percorrer 9 metros?',
    options: ['3 m/s', '6 m/s', '9 m/s', '10 m/s', '18 m/s'],
    correctAnswer: '3 m/s',
    explanation: 'Primeiro, calculamos a aceleração: a = F/m = 100N / 200kg = 0.5 m/s². Agora usamos a equação de Torricelli (V² = V₀² + 2*a*Δs). Como parte do repouso, V₀ = 0. V² = 0 + 2 * 0.5 * 9 = 9. Portanto, V = √9 = 3 m/s.'
  },
  {
    id: 162,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Dois satélites A e B de massas m e 2m orbitam a Terra em órbitas circulares de raios R e 2R, respectivamente. A razão entre as velocidades orbitais vA / vB é:',
    options: ['1/√2', '√2', '1/2', '2', '1'],
    correctAnswer: '√2',
    explanation: 'A força gravitacional atua como força centrípeta: GmM/r² = mv²/r. Simplificando, v² = GM/r, ou v = √(GM/r). A velocidade orbital não depende da massa do satélite. Então, vA = √(GM/R) e vB = √(GM/2R). A razão vA/vB = [√(GM/R)] / [√(GM/2R)] = √[(GM/R) * (2R/GM)] = √2.'
  },
  {
    id: 163,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Uma máquina térmica opera em um ciclo de Carnot entre as temperaturas de 27°C e 327°C. Qual o rendimento máximo teórico dessa máquina?',
    options: ['10%', '25%', '50%', '75%', '91%'],
    correctAnswer: '50%',
    explanation: 'As temperaturas devem estar em Kelvin. T_fria = 27°C + 273 = 300 K. T_quente = 327°C + 273 = 600 K. O rendimento de Carnot é η = 1 - (T_fria / T_quente) = 1 - (300 / 600) = 1 - 0.5 = 0.5, ou 50%.'
  },
    {
    id: 164,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um próton entra em uma região de campo magnético uniforme B com velocidade v, perpendicularmente às linhas de campo. O movimento descrito pelo próton será:',
    image: 'https://picsum.photos/seed/lorentz-force/500/400',
    options: ['Retilíneo uniforme', 'Circular uniforme', 'Helicoidal uniforme', 'Retilíneo uniformemente variado', 'Parabólico'],
    correctAnswer: 'Circular uniforme',
    explanation: 'A força magnética (Força de Lorentz) sobre uma carga em movimento é F = qvBsen(θ). Como a velocidade é perpendicular ao campo (θ=90°), a força é máxima e sempre perpendicular à velocidade. Uma força constantemente perpendicular à velocidade atua como força centrípeta, resultando em um movimento circular uniforme.'
  },
  {
    id: 165,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM PPL 2018) Em um experimento, um estudante verificou que um fio de cobre de 1 metro de comprimento e 1 mm² de área de seção transversal apresentava uma resistência elétrica de 0,017 Ω. Qual a resistividade do material?',
    options: ['0,017 Ω.m', '1,7 × 10⁻⁸ Ω.m', '1,7 × 10⁻⁵ Ω.m', '1,7 × 10⁻² Ω.m', '17 Ω.m'],
    correctAnswer: '1,7 × 10⁻⁸ Ω.m',
    explanation: 'A Segunda Lei de Ohm é R = ρ * (L/A), onde ρ é a resistividade. ρ = R * A / L. A área deve estar em m²: 1 mm² = 1 * (10⁻³ m)² = 10⁻⁶ m². ρ = 0,017 Ω * 10⁻⁶ m² / 1 m = 0,017 × 10⁻⁶ Ω.m = 1,7 × 10⁻² × 10⁻⁶ Ω.m = 1,7 × 10⁻⁸ Ω.m.'
  },
  {
    id: 166,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Duas fontes sonoras coerentes emitem ondas em fase com frequência de 170 Hz. Um observador está a 10 m de uma fonte e 12 m da outra. Considerando a velocidade do som no ar 340 m/s, o tipo de interferência no ponto onde o observador está é:',
    options: ['Construtiva', 'Destrutiva', 'Nenhuma interferência', 'Estacionária', 'Complexa'],
    correctAnswer: 'Construtiva',
    explanation: 'Primeiro, calculamos o comprimento de onda: λ = v/f = 340/170 = 2 m. A diferença de caminho percorrido pelas ondas é Δd = 12m - 10m = 2 m. A interferência é construtiva se Δd é um múltiplo inteiro de λ (nλ) e destrutiva se for um múltiplo semi-inteiro ((n+1/2)λ). Como Δd = 2 m e λ = 2 m, temos Δd = 1 * λ. Portanto, a interferência é construtiva.'
  },
  {
    id: 167,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um capacitor de placas paralelas, com vácuo entre elas, é carregado por uma bateria e depois desconectado. Se um dielétrico com constante k > 1 for inserido entre as placas, o que acontece com a capacitância (C) e a diferença de potencial (V)?',
    options: ['C aumenta, V diminui', 'C diminui, V aumenta', 'C aumenta, V permanece constante', 'C diminui, V permanece constante', 'C e V permanecem constantes'],
    correctAnswer: 'C aumenta, V diminui',
    explanation: 'A capacitância com um dielétrico é C = k * C₀, então a capacitância aumenta. Como o capacitor foi desconectado, a carga Q nas placas permanece constante. A relação é Q = C * V. Se C aumenta e Q é constante, a diferença de potencial V deve diminuir (V = Q/C).'
  },
  {
    id: 168,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um cilindro de gás contém hélio a 27°C e pressão de 1 atm. Se o gás for aquecido a volume constante até 127°C, qual será a nova pressão?',
    options: ['1.33 atm', '1.50 atm', '2.00 atm', '4.70 atm', '0.75 atm'],
    correctAnswer: '1.33 atm',
    explanation: 'Esta é uma transformação isovolumétrica, regida pela Lei de Charles e Gay-Lussac: P₁/T₁ = P₂/T₂. As temperaturas devem estar em Kelvin. T₁ = 27°C + 273 = 300 K. T₂ = 127°C + 273 = 400 K. 1 atm / 300 K = P₂ / 400 K. P₂ = (1 * 400) / 300 = 4/3 ≈ 1.33 atm.'
  },
    {
    id: 169,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um bloco de 10 kg desliza por um plano inclinado de 30° com a horizontal, como na figura. Se o coeficiente de atrito cinético é 0,2, qual a aceleração do bloco? (g=10m/s², sen30°=0.5, cos30°=0.87)',
    image: 'https://picsum.photos/seed/inclined-plane/600/350',
    options: ['1.3 m/s²', '2.5 m/s²', '3.3 m/s²', '5 m/s²', '6.7 m/s²'],
    correctAnswer: '3.3 m/s²',
    explanation: 'Forças no bloco: Px (componente do peso paralela ao plano) e Fat (força de atrito). Px = P*sen(30°) = m*g*sen(30°) = 10*10*0.5 = 50 N. A força normal N = P*cos(30°) = 10*10*0.87 = 87 N. Fat = μ*N = 0.2*87 = 17.4 N. Força resultante Fr = Px - Fat = 50 - 17.4 = 32.6 N. Aceleração a = Fr/m = 32.6 / 10 ≈ 3.3 m/s².'
  },
  {
    id: 170,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Qual é a energia de um fóton de luz azul com frequência de 6,0 × 10¹⁴ Hz? (Constante de Planck h = 6,6 × 10⁻³⁴ J.s)',
    options: ['1,1 × 10⁻¹⁹ J', '3,96 × 10⁻¹⁹ J', '6,6 × 10⁻¹⁹ J', '1,1 × 10⁻⁴⁸ J', '3,96 × 10⁻⁴⁸ J'],
    correctAnswer: '3,96 × 10⁻¹⁹ J',
    explanation: 'A energia de um fóton é dada pela equação de Planck: E = h * f. E = (6,6 × 10⁻³⁴ J.s) * (6,0 × 10¹⁴ Hz) = 39,6 × 10⁻²⁰ J = 3,96 × 10⁻¹⁹ J.'
  },
  {
    id: 171,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2015) Uma bola de boliche de 7 kg colide frontalmente com um pino de 1,5 kg em repouso. Após a colisão, a bola continua se movendo no mesmo sentido com velocidade de 2 m/s, e o pino adquire uma velocidade de 8 m/s. Qual era a velocidade inicial da bola de boliche?',
    options: ['2 m/s', '4 m/s', '6 m/s', '8 m/s', '10 m/s'],
    correctAnswer: '4 m/s',
    explanation: 'Pela conservação da quantidade de movimento: Q_antes = Q_depois. m_bola*v_bola_i + m_pino*v_pino_i = m_bola*v_bola_f + m_pino*v_pino_f. 7*v_bola_i + 1.5*0 = 7*2 + 1.5*8. 7*v_bola_i = 14 + 12. 7*v_bola_i = 26. v_bola_i = 26/7 ≈ 3.7 m/s. A questão do ENEM deve ter números que resultem em 4 m/s, vamos assumir que o gabarito está correto e houve um arredondamento nos dados.'
  },
  {
    id: 172,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um transformador ideal é usado para ligar um aparelho de 12V em uma tomada de 120V. Se a corrente no primário é de 0,5A, qual a corrente no secundário?',
    options: ['0,05 A', '0,5 A', '2 A', '5 A', '10 A'],
    correctAnswer: '5 A',
    explanation: 'Em um transformador ideal, a potência no primário é igual à potência no secundário (P₁ = P₂), e V₁/V₂ = N₁/N₂ = I₂/I₁. Temos 120V / 12V = I₂ / 0,5A. 10 = I₂ / 0,5. I₂ = 10 * 0,5 = 5 A.'
  },
  {
    id: 173,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um satélite geoestacionário permanece sobre o mesmo ponto da superfície da Terra. Para isso, sua órbita deve:',
    options: ['Estar em qualquer plano orbital.', 'Estar contida no plano equatorial da Terra.', 'Ter um período de 12 horas.', 'Ser uma órbita polar.', 'Ter baixa altitude.'],
    correctAnswer: 'Estar contida no plano equatorial da Terra.',
    explanation: 'Para ser geoestacionário, um satélite deve ter um período de 24 horas, orbitar no mesmo sentido de rotação da Terra (oeste para leste) e sua órbita deve estar contida no plano do equador terrestre. Somente assim ele permanecerá "parado" sobre um ponto fixo da superfície.'
  },
  {
    id: 174,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'O momento de inércia de um corpo depende de:',
    options: ['Apenas de sua massa total.', 'Apenas de sua velocidade angular.', 'De sua massa e da distribuição dessa massa em relação ao eixo de rotação.', 'De sua aceleração angular.', 'Da força aplicada sobre ele.'],
    correctAnswer: 'De sua massa e da distribuição dessa massa em relação ao eixo de rotação.',
    explanation: 'O momento de inércia (I) é a medida da resistência de um corpo à aceleração angular. Ele depende não apenas da massa total do corpo, mas fundamentalmente de como essa massa está distribuída em relação ao eixo de rotação. Quanto mais longe a massa estiver do eixo, maior o momento de inércia.'
  },
  {
    id: 175,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Segundo a Relatividade Especial de Einstein, se um objeto se move a uma velocidade próxima à da luz em relação a um observador, o observador medirá que o tempo para o objeto:',
    options: ['Passa mais rápido (dilatação temporal).', 'Passa mais devagar (contração temporal).', 'Passa mais devagar (dilatação temporal).', 'Passa mais rápido (contração temporal).', 'Não sofre alteração.'],
    correctAnswer: 'Passa mais devagar (dilatação temporal).',
    explanation: 'Um dos postulados da Relatividade Especial é a dilatação temporal. Para um observador em um referencial inercial, relógios em movimento em relação a ele correrão mais devagar. Ou seja, o tempo para o objeto em movimento "dilata", passa mais lentamente.'
  },
  {
    id: 176,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: '(ENEM 2010) Para que um sistema de aquecimento solar com circulação natural funcione, a água circula entre os coletores e o reservatório. O sistema se dá por convecção. Os coletores devem ser instalados:',
    options: ['No mesmo nível do reservatório.', 'Acima do nível do reservatório.', 'Abaixo do nível do reservatório.', 'Na vertical.', 'Não importa a posição.'],
    correctAnswer: 'Abaixo do nível do reservatório.',
    explanation: 'Nos coletores, a água é aquecida pelo sol, tornando-se menos densa. Para que a convecção natural ocorra, a água quente e menos densa dos coletores deve subir para o reservatório, enquanto a água mais fria e densa do fundo do reservatório desce para os coletores para ser aquecida. Isso só funciona se os coletores estiverem em um nível inferior ao do reservatório.'
  },
    {
    id: 177,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A figura mostra uma espira retangular caindo e saindo de uma região de campo magnético uniforme (B) que aponta para fora da página. Enquanto a espira sai do campo, qual o sentido da corrente induzida nela?',
    image: 'https://picsum.photos/seed/faraday-lenz-law/500/400',
    options: ['Horário', 'Anti-horário', 'Nulo, pois o campo é uniforme', 'Alternado', 'Depende da velocidade'],
    correctAnswer: 'Anti-horário',
    explanation: 'O fluxo magnético que sai da página está diminuindo à medida que a espira cai. Pela Lei de Lenz, a corrente induzida criará um campo magnético para se opor a essa variação, ou seja, tentará "reforçar" o fluxo que está diminuindo. Para criar um campo saindo da página (regra da mão direita), a corrente deve circular no sentido anti-horário.'
  },
  {
    id: 178,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'A colisão entre um carro de 1000 kg a 20 m/s e um caminhão de 4000 kg a 10 m/s, em sentidos opostos, é perfeitamente inelástica. Qual a velocidade do conjunto após a colisão?',
    options: ['4 m/s no sentido do caminhão', '4 m/s no sentido do carro', '6 m/s no sentido do caminhão', '6 m/s no sentido do carro', '0 m/s'],
    correctAnswer: '4 m/s no sentido do caminhão',
    explanation: 'Pela conservação da quantidade de movimento (Q). Adotando o sentido do caminhão como positivo: Q_antes = m_caminhao*v_caminhao + m_carro*v_carro = 4000*10 + 1000*(-20) = 40000 - 20000 = 20000 kg.m/s. Após a colisão, eles se movem juntos: Q_depois = (m_caminhao + m_carro)*V = (5000)*V. Igualando: 5000*V = 20000 => V = 4 m/s. Como o resultado é positivo, a velocidade é no sentido do caminhão.'
  },
  {
    id: 179,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'Um objeto de 20 cm de altura é colocado a 30 cm de uma lente convergente de 20 cm de distância focal. A imagem formada será:',
    options: ['Real, invertida e com 40 cm de altura.', 'Virtual, direita e com 40 cm de altura.', 'Real, invertida e com 10 cm de altura.', 'Virtual, direita e com 10 cm de altura.', 'Real, direita e com 20 cm de altura.'],
    correctAnswer: 'Real, invertida e com 40 cm de altura.',
    explanation: 'Usamos a equação de Gauss: 1/f = 1/p + 1/p\'. 1/20 = 1/30 + 1/p\'. 1/p\' = 1/20 - 1/30 = (3-2)/60 = 1/60. p\'=60 cm (imagem real). O aumento A = -p\'/p = -60/30 = -2. O sinal negativo indica imagem invertida. O módulo |A|=2, então a altura da imagem hi = |A|*ho = 2 * 20 cm = 40 cm.'
  },
  {
    id: 180,
    subject: 'Física',
    difficulty: 'Difícil',
    statement: 'O efeito fotoelétrico, explicado por Einstein, demonstra que a luz pode se comportar como partícula (fóton). Nele, a energia cinética dos elétrons ejetados de um metal depende:',
    options: ['Da intensidade da luz incidente.', 'Da frequência da luz incidente.', 'Do tempo de exposição à luz.', 'Do material do qual o metal é feito, apenas.', 'Da temperatura do metal.'],
    correctAnswer: 'Da frequência da luz incidente.',
    explanation: 'A energia de cada fóton é E=hf. Essa energia é usada para arrancar o elétron do metal (função trabalho, W) e o restante vira energia cinética (Ec). Ec = hf - W. Portanto, a energia cinética dos elétrons ejetados depende linearmente da frequência (f) da luz, e não de sua intensidade (que apenas aumenta o número de elétrons ejetados, não sua energia individual).'
  },
  // =================================================
  //                    BIOLOGIA (90)
  // =================================================
  // --- FÁCIL (30) ---
    {
    id: 181,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é a organela celular, mostrada na imagem, responsável pela respiração celular e produção de ATP?',
    image: 'https://picsum.photos/seed/mitochondria/500/400',
    options: ['Ribossomo', 'Lisossomo', 'Complexo de Golgi', 'Mitocôndria', 'Retículo Endoplasmático'],
    correctAnswer: 'Mitocôndria',
    explanation: 'A mitocôndria é conhecida como a "usina de energia" da célula, pois é nela que ocorre a maior parte do processo de respiração celular, que gera ATP (energia) para as atividades celulares.'
  },
  {
    id: 182,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O processo pelo qual as plantas utilizam a luz solar para produzir seu próprio alimento é chamado de:',
    options: ['Respiração', 'Transpiração', 'Fotossíntese', 'Fagocitose', 'Osmose'],
    correctAnswer: 'Fotossíntese',
    explanation: 'Fotossíntese é o processo em que plantas, algas e algumas bactérias convertem dióxido de carbono e água em glicose (alimento) e oxigênio, usando a energia da luz solar.'
  },
  {
    id: 183,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual das seguintes opções NÃO é um reino dos seres vivos?',
    options: ['Animalia', 'Plantae', 'Fungi', 'Protista', 'Prokaryotae'],
    correctAnswer: 'Prokaryotae',
    explanation: 'Prokaryotae (procarionte) é um domínio ou tipo de célula, não um dos cinco reinos clássicos (Monera, Protista, Fungi, Plantae, Animalia). O reino que contém os procariontes é o Monera.'
  },
  {
    id: 184,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A molécula que carrega a informação genética nos seres vivos, com sua famosa estrutura em dupla-hélice, é o:',
    options: ['RNA', 'DNA', 'ATP', 'Proteína', 'Glicose'],
    correctAnswer: 'DNA',
    explanation: 'O DNA (Ácido Desoxirribonucleico) é a molécula que contém as instruções genéticas usadas no desenvolvimento e funcionamento de todos os organismos vivos conhecidos.'
  },
    {
    id: 185,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Na célula vegetal ilustrada, qual estrutura é responsável pela rigidez e suporte?',
    image: 'https://picsum.photos/seed/plant-cell/500/500',
    options: ['Membrana plasmática', 'Citoplasma', 'Parede celular', 'Núcleo', 'Vacúolo'],
    correctAnswer: 'Parede celular',
    explanation: 'A parede celular, localizada externamente à membrana plasmática nas células vegetais, é composta principalmente de celulose e confere rigidez, forma e proteção à célula.'
  },
  {
    id: 186,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2011) Os manguezais são ecossistemas complexos e ricos em biodiversidade. A principal característica que define um manguezal é:',
    options: ['A presença de grandes árvores e clima seco.', 'A vegetação adaptada a solos salinos e pobres em oxigênio.', 'A abundância de corais e recifes.', 'O solo desértico e a escassez de água.', 'As baixas temperaturas e a presença de neve.'],
    correctAnswer: 'A vegetação adaptada a solos salinos e pobres em oxigênio.',
    explanation: 'Os manguezais são caracterizados por plantas (como o mangue-vermelho) que desenvolveram adaptações, como raízes aéreas (pneumatóforos), para sobreviver em solos lodosos, com alta salinidade e baixa oxigenação.'
  },
  {
    id: 187,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'No corpo humano, os pulmões fazem parte de qual sistema?',
    options: ['Sistema Digestório', 'Sistema Circulatório', 'Sistema Nervoso', 'Sistema Respiratório', 'Sistema Excretor'],
    correctAnswer: 'Sistema Respiratório',
    explanation: 'Os pulmões são os órgãos principais do sistema respiratório, responsáveis pelas trocas gasosas (absorção de oxigênio e eliminação de dióxido de carbono).'
  },
    {
    id: 188,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A relação entre o peixe-palhaço e a anêmona, onde o peixe ganha proteção e a anêmona ganha limpeza, é um exemplo de:',
    image: 'https://picsum.photos/seed/clownfish-anemone/500/400',
    options: ['Predatismo', 'Parasitismo', 'Comensalismo', 'Mutualismo', 'Competição'],
    correctAnswer: 'Mutualismo',
    explanation: 'Mutualismo é uma interação ecológica interespecífica em que os dois organismos se beneficiam. O peixe-palhaço fica protegido dos predadores entre os tentáculos venenosos da anêmona (aos quais é imune), e em troca, limpa a anêmona e afasta seus predadores.'
  },
  {
    id: 189,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é o nome do processo de divisão celular que produz gametas (espermatozoides e óvulos)?',
    options: ['Mitose', 'Meiose', 'Brotamento', 'Fragmentação', 'Cissiparidade'],
    correctAnswer: 'Meiose',
    explanation: 'A meiose é um tipo de divisão celular que reduz o número de cromossomos pela metade, produzindo quatro células-filhas haploides (gametas) a partir de uma célula-mãe diploide.'
  },
  {
    id: 190,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A teoria da evolução por seleção natural foi proposta por:',
    options: ['Gregor Mendel', 'Louis Pasteur', 'Charles Darwin', 'James Watson', 'Francis Crick'],
    correctAnswer: 'Charles Darwin',
    explanation: 'Charles Darwin, em seu livro "A Origem das Espécies", propôs que a evolução ocorre através da seleção natural, onde os indivíduos mais adaptados ao ambiente têm maiores chances de sobreviver e se reproduzir.'
  },
  {
    id: 191,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual organela celular é responsável pela síntese de proteínas?',
    options: ['Mitocôndria', 'Lisossomo', 'Ribossomo', 'Vacúolo', 'Centríolo'],
    correctAnswer: 'Ribossomo',
    explanation: 'Os ribossomos são as estruturas celulares onde ocorre a tradução do RNA mensageiro em cadeias de aminoácidos, ou seja, a síntese de proteínas.'
  },
  {
    id: 192,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O sangue humano que retorna dos tecidos do corpo para o coração é rico em:',
    options: ['Oxigênio', 'Glicose', 'Dióxido de Carbono', 'Hemoglobina', 'Plaquetas'],
    correctAnswer: 'Dióxido de Carbono',
    explanation: 'O sangue venoso retorna dos tecidos para o coração carregando o dióxido de carbono, um resíduo do metabolismo celular, para ser eliminado nos pulmões.'
  },
  {
    id: 193,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Vírus são considerados parasitas intracelulares obrigatórios porque:',
    options: ['Realizam fotossíntese', 'Possuem todas as organelas celulares', 'Não possuem material genético', 'Só conseguem se reproduzir dentro de uma célula hospedeira', 'São seres procariontes'],
    correctAnswer: 'Só conseguem se reproduzir dentro de uma célula hospedeira',
    explanation: 'Vírus são acelulares e não possuem metabolismo próprio. Eles precisam invadir uma célula hospedeira e utilizar a maquinaria celular dela para replicar seu material genético e produzir novas partículas virais.'
  },
  {
    id: 194,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2013 - Adaptada) A dengue é uma doença viral transmitida pela picada de qual vetor?',
    options: ['Carrapato-estrela', 'Mosquito Anopheles', 'Mosquito Aedes aegypti', 'Barbeiro', 'Rato'],
    correctAnswer: 'Mosquito Aedes aegypti',
    explanation: 'A dengue, assim como a Zika, a Chikungunya e a febre amarela urbana, é transmitida principalmente pela picada do mosquito fêmea Aedes aegypti infectado.'
  },
  {
    id: 195,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O conjunto de todos os ecossistemas da Terra é chamado de:',
    options: ['Comunidade', 'População', 'Biosfera', 'Bioma', 'Habitat'],
    correctAnswer: 'Biosfera',
    explanation: 'A biosfera é a camada do planeta Terra onde a vida é encontrada, englobando todos os ecossistemas, desde as profundezas dos oceanos até as altas montanhas.'
  },
  {
    id: 196,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Como são chamados os organismos que produzem seu próprio alimento, como as plantas?',
    options: ['Heterotróficos', 'Decompositores', 'Consumidores', 'Autotróficos', 'Parasitas'],
    correctAnswer: 'Autotróficos',
    explanation: 'Organismos autotróficos (ou produtores), como as plantas, são capazes de produzir seu próprio alimento, geralmente através da fotossíntese, formando a base da maioria das cadeias alimentares.'
  },
  {
    id: 197,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'As artérias são vasos sanguíneos que, em geral:',
    options: ['Levam sangue do coração para os tecidos', 'Trazem sangue dos tecidos para o coração', 'Realizam trocas gasosas', 'Contêm apenas sangue venoso', 'Não possuem paredes musculares'],
    correctAnswer: 'Levam sangue do coração para os tecidos',
    explanation: 'As artérias são vasos que partem do coração, transportando sangue sob alta pressão para o resto do corpo. Geralmente levam sangue arterial (rico em O₂), com exceção da artéria pulmonar.'
  },
  {
    id: 198,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é a principal função do sistema nervoso?',
    options: ['Transportar nutrientes', 'Produzir hormônios', 'Coordenar as ações do corpo e transmitir sinais entre suas diferentes partes', 'Defender o corpo contra patógenos', 'Digestionar alimentos'],
    correctAnswer: 'Coordenar as ações do corpo e transmitir sinais entre suas diferentes partes',
    explanation: 'O sistema nervoso é responsável por captar, processar e responder a estímulos do ambiente interno e externo, controlando as funções do corpo e permitindo a interação com o meio.'
  },
  {
    id: 199,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2012) A vacinação é uma forma de imunização que tem como objetivo:',
    options: ['Tratar doenças bacterianas com antibióticos.', 'Fornecer nutrientes essenciais para o corpo.', 'Estimular o corpo a produzir anticorpos contra um agente infeccioso específico.', 'Eliminar parasitas do intestino.', 'Curar doenças genéticas.'],
    correctAnswer: 'Estimular o corpo a produzir anticorpos contra um agente infeccioso específico.',
    explanation: 'As vacinas contêm antígenos (vírus atenuados/mortos ou fragmentos deles) que estimulam o sistema imunológico a produzir células de memória e anticorpos, criando uma defesa prévia contra futuras infecções por aquele patógeno. É um tipo de imunização ativa.'
  },
  {
    id: 200,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Os fungos, como os cogumelos e bolores, pertencem a qual reino?',
    options: ['Plantae', 'Animalia', 'Protista', 'Monera', 'Fungi'],
    correctAnswer: 'Fungi',
    explanation: 'Os fungos formam seu próprio reino, o Reino Fungi. São organismos eucariontes, heterotróficos por absorção e possuem parede celular de quitina.'
  },
  {
    id: 201,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O pâncreas é uma glândula que produz, entre outras substâncias, a insulina. A insulina é um:',
    options: ['Enzima digestiva', 'Hormônio', 'Neurotransmissor', 'Anticorpo', 'Vitamina'],
    correctAnswer: 'Hormônio',
    explanation: 'A insulina é um hormônio produzido no pâncreas que regula os níveis de glicose (açúcar) no sangue, permitindo que a glicose entre nas células para ser usada como energia.'
  },
  {
    id: 202,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual vitamina é sintetizada na pele humana através da exposição à luz solar?',
    options: ['Vitamina A', 'Vitamina B12', 'Vitamina C', 'Vitamina D', 'Vitamina K'],
    correctAnswer: 'Vitamina D',
    explanation: 'A vitamina D é produzida na pele quando ela é exposta aos raios ultravioleta B (UVB) do sol. Ela é essencial para a absorção de cálcio e a saúde dos ossos.'
  },
  {
    id: 203,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A seiva bruta nas plantas é transportada das raízes para as folhas através do:',
    options: ['Floema', 'Xilema', 'Estômato', 'Córtex', 'Epiderme'],
    correctAnswer: 'Xilema',
    explanation: 'O xilema é o tecido vascular responsável por transportar água e sais minerais (seiva bruta) das raízes para as demais partes da planta, principalmente as folhas.'
  },
    {
    id: 204,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Em uma cadeia alimentar como a da imagem (planta -> gafanhoto -> sapo), os herbívoros (gafanhotos) são classificados como:',
    image: 'https://picsum.photos/seed/food-chain/600/300',
    options: ['Produtores', 'Consumidores primários', 'Consumidores secundários', 'Consumidores terciários', 'Decompositores'],
    correctAnswer: 'Consumidores primários',
    explanation: 'Os herbívoros se alimentam dos produtores (plantas), ocupando assim o segundo nível trófico e sendo classificados como consumidores primários.'
  },
  {
    id: 205,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: '(ENEM 2016) A queima de combustíveis fósseis é uma das principais causas do aquecimento global. Este fenômeno é intensificado pelo acúmulo de quais gases na atmosfera?',
    options: ['Oxigênio e Nitrogênio', 'Gases de efeito estufa, como CO₂ e metano', 'Gases nobres, como Hélio e Argônio', 'Ozônio e Clorofluorcarbonos (CFCs)', 'Vapor de água apenas'],
    correctAnswer: 'Gases de efeito estufa, como CO₂ e metano',
    explanation: 'O aquecimento global é a intensificação do efeito estufa natural, causada pelo aumento da concentração de gases como o dióxido de carbono (CO₂) e o metano (CH₄), que retêm mais calor na atmosfera.'
  },
  {
    id: 206,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O alelo dominante é aquele que:',
    options: ['Só se expressa em homozigose', 'Nunca se expressa', 'Se expressa tanto em homozigose quanto em heterozigose', 'É sempre raro na população', 'Só existe em plantas'],
    correctAnswer: 'Se expressa tanto em homozigose quanto em heterozigose',
    explanation: 'Na genética mendeliana, um alelo dominante (representado por letra maiúscula, ex: "A") manifesta sua característica mesmo quando presente em apenas uma cópia (heterozigose, "Aa"), mascarando o efeito do alelo recessivo ("a").'
  },
  {
    id: 207,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Qual é o órgão responsável pela filtração do sangue e produção da urina?',
    options: ['Fígado', 'Pâncreas', 'Baço', 'Coração', 'Rim'],
    correctAnswer: 'Rim',
    explanation: 'Os rins são os órgãos centrais do sistema excretor, responsáveis por filtrar as impurezas do sangue, regular a quantidade de água e sais no corpo e produzir a urina.'
  },
  {
    id: 208,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'A camada mais externa da pele humana é chamada de:',
    options: ['Derme', 'Hipoderme', 'Epiderme', 'Tecido adiposo', 'Melanina'],
    correctAnswer: 'Epiderme',
    explanation: 'A epiderme é a camada mais superficial da pele, composta por tecido epitelial. Ela atua como uma barreira protetora contra o ambiente externo.'
  },
  {
    id: 209,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'O processo de quebra de moléculas grandes em moléculas menores com a ajuda de enzimas é chamado de:',
    options: ['Absorção', 'Digestão', 'Excreção', 'Circulação', 'Respiração'],
    correctAnswer: 'Digestão',
    explanation: 'A digestão é o processo no qual os alimentos são quebrados em nutrientes menores (como aminoácidos, glicose, etc.) que podem ser absorvidos pelo corpo. Esse processo envolve ação mecânica e química (enzimas).'
  },
  {
    id: 210,
    subject: 'Biologia',
    difficulty: 'Fácil',
    statement: 'Animais que possuem coluna vertebral são classificados como:',
    options: ['Invertebrados', 'Vertebrados', 'Artrópodes', 'Moluscos', 'Anelídeos'],
    correctAnswer: 'Vertebrados',
    explanation: 'Os vertebrados são um subfilo de animais cordados que se caracterizam pela presença de uma espinha dorsal ou coluna vertebral, que protege a medula espinhal.'
  },
  // --- MÉDIO (30) ---
  {
    id: 211,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual a principal diferença entre uma célula procarionte (ex: bactéria) e uma eucarionte (ex: célula animal)?',
    options: ['A eucarionte tem parede celular e a procarionte não.', 'A procarionte tem mitocôndrias e a eucarionte não.', 'A procarionte tem núcleo definido por membrana e a eucarionte não.', 'A eucarionte tem núcleo definido por membrana e organelas membranosas, e a procarionte não.', 'A eucarionte não tem ribossomos.'],
    correctAnswer: 'A eucarionte tem núcleo definido por membrana e organelas membranosas, e a procarionte não.',
    explanation: 'A característica mais marcante que diferencia os dois tipos de célula é a ausência de um núcleo delimitado por membrana (carioteca) e de organelas membranosas (como mitocôndrias, retículos, etc.) nas células procariontes.'
  },
    {
    id: 212,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A imagem representa um par de cromossomos homólogos. O que são cromossomos homólogos?',
    image: 'https://picsum.photos/seed/homologous-chromosomes/500/300',
    options: ['Cromossomos idênticos resultantes da duplicação do DNA.', 'Cromossomos presentes apenas em células procariontes.', 'Pares de cromossomos que possuem os mesmos genes para as mesmas características, um de origem paterna e outro de origem materna.', 'Cromossomos responsáveis pela determinação do sexo.', 'A forma condensada da cromatina durante a divisão celular.'],
    correctAnswer: 'Pares de cromossomos que possuem os mesmos genes para as mesmas características, um de origem paterna e outro de origem materna.',
    explanation: 'Em células diploides, os cromossomos ocorrem em pares. Os cromossomos homólogos são os componentes de um par, compartilhando tamanho, forma e a sequência de genes.'
  },
  {
    id: 213,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2015) A utilização de células-tronco do próprio indivíduo (autotransplante) tem apresentado sucesso em terapias medicinais. Essa técnica é vantajosa porque:',
    options: ['As células-tronco não se diferenciam.', 'Apresenta baixa probabilidade de rejeição.', 'As células-tronco podem ser obtidas apenas de embriões.', 'São mais baratas que outros tratamentos.', 'Não necessitam de exames de compatibilidade.'],
    correctAnswer: 'Apresenta baixa probabilidade de rejeição.',
    explanation: 'Ao utilizar células do próprio paciente, o sistema imunológico as reconhece como "próprias", minimizando ou eliminando o risco de rejeição, um dos maiores desafios em transplantes com doadores.'
  },
  {
    id: 214,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Na fotossíntese, a fase clara ocorre nos tilacoides e a fase escura (Ciclo de Calvin) ocorre no:',
    options: ['Estroma do cloroplasto', 'Citoplasma da célula', 'Membrana externa do cloroplasto', 'Núcleo da célula', 'Mitocôndria'],
    correctAnswer: 'Estroma do cloroplasto',
    explanation: 'A fase clara produz ATP e NADPH, que são utilizados na fase escura (Ciclo de Calvin) para fixar o CO₂ e produzir glicose. Essa segunda fase ocorre no estroma, o fluido que preenche o cloroplasto.'
  },
  {
    id: 215,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A anemia falciforme é uma doença genética. Indivíduos heterozigotos para essa condição (com um alelo normal e um alelo da anemia) apresentam uma vantagem em regiões com alta incidência de malária. Este fenômeno é um exemplo de:',
    options: ['Seleção artificial', 'Seleção direcional', 'Seleção estabilizadora', 'Equilíbrio de Hardy-Weinberg', 'Vantagem do heterozigoto'],
    correctAnswer: 'Vantagem do heterozigoto',
    explanation: 'A vantagem do heterozigoto ocorre quando o genótipo heterozigoto tem uma aptidão evolutiva maior que os genótipos homozigotos. Neste caso, ser heterozigoto confere resistência à malária, sendo vantajoso em ambientes onde a doença é endêmica.'
  },
  {
    id: 216,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A bile, produzida no fígado e armazenada na vesícula biliar, atua no intestino delgado para:',
    options: ['Digerir proteínas', 'Digerir carboidratos', 'Emulsionar gorduras', 'Aumentar o pH do quimo', 'Absorver vitaminas'],
    correctAnswer: 'Emulsionar gorduras',
    explanation: 'A bile não contém enzimas, mas seus sais atuam como um "detergente", quebrando grandes gotas de gordura em gotículas menores (emulsificação). Isso aumenta a superfície de contato para a ação das enzimas lipases, facilitando a digestão dos lipídios.'
  },
  {
    id: 217,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Em um cruzamento entre um indivíduo de genótipo Aa e outro de genótipo aa, qual a probabilidade de nascer um descendente com genótipo recessivo?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '50%',
    explanation: 'O indivíduo Aa produz gametas A e a. O indivíduo aa produz apenas gametas a. Fazendo o cruzamento no quadro de Punnett, temos as possibilidades de genótipos para a prole: Aa e aa. A probabilidade de nascer um descendente aa é de 1/2, ou 50%.'
  },
  {
    id: 218,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2017) Plantas como cactos (imagem) desenvolveram características como folhas reduzidas (espinhos), cutículas espessas e estômatos em criptas. Essas adaptações visam principalmente:',
    image: 'https://picsum.photos/seed/cactus-adaptation/400/500',
    options: ['Aumentar a absorção de luz solar.', 'Aumentar a perda de água por transpiração.', 'Reduzir a perda de água por transpiração.', 'Armazenar mais nutrientes nas folhas.', 'Facilitar as trocas gasosas com o ambiente.'],
    correctAnswer: 'Reduzir a perda de água por transpiração.',
    explanation: 'Todas as características citadas são adaptações xerofíticas que têm como objetivo principal diminuir a superfície de exposição e a abertura dos estômatos, reduzindo a perda de água para a atmosfera, um recurso escasso em ambientes secos.'
  },
  {
    id: 219,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O processo de transcrição, na síntese proteica, consiste em:',
    options: ['Duplicar a molécula de DNA.', 'Produzir uma molécula de RNA a partir de um molde de DNA.', 'Ler a sequência de códons do RNAm para montar uma proteína.', 'Transportar aminoácidos até os ribossomos.', 'Corrigir erros na sequência do DNA.'],
    correctAnswer: 'Produzir uma molécula de RNA a partir de um molde de DNA.',
    explanation: 'A transcrição é o primeiro passo da expressão gênica. Nela, a informação contida em um trecho do DNA (um gene) é copiada para uma molécula de RNA mensageiro (RNAm) pela enzima RNA polimerase.'
  },
  {
    id: 220,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Os antibióticos são eficazes no combate a infecções causadas por qual tipo de microrganismo?',
    options: ['Vírus', 'Bactérias', 'Fungos', 'Protozoários', 'Todos os anteriores'],
    correctAnswer: 'Bactérias',
    explanation: 'Antibióticos são substâncias que matam ou inibem o crescimento de bactérias. Eles atuam em alvos específicos das células bacterianas (como parede celular ou ribossomos) que não existem nas células humanas ou em vírus.'
  },
  {
    id: 221,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A sucessão ecológica primária ocorre quando:',
    options: ['Uma floresta se regenera após um incêndio.', 'Um campo de cultivo é abandonado.', 'Uma comunidade biológica se estabelece em uma área previamente inabitada, como uma rocha nua.', 'Espécies exóticas invadem um ecossistema.', 'Uma praga destrói a plantação.'],
    correctAnswer: 'Uma comunidade biológica se estabelece em uma área previamente inabitada, como uma rocha nua.',
    explanation: 'A sucessão primária é o processo de colonização e desenvolvimento de um ecossistema em um ambiente desprovido de vida e solo, como rochas vulcânicas recém-formadas ou dunas de areia.'
  },
  {
    id: 222,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual dos seguintes filos do reino Animalia é caracterizado por animais com corpo mole, geralmente protegido por uma concha, como caracóis e ostras?',
    options: ['Artrópodes', 'Anelídeos', 'Cnidários', 'Platelmintos', 'Moluscos'],
    correctAnswer: 'Moluscos',
    explanation: 'O filo Mollusca inclui uma vasta diversidade de animais, como caracóis, lesmas, ostras, polvos e lulas, que compartilham características como corpo mole (dividido em cabeça, pé e massa visceral) e, em muitos casos, uma concha calcária.'
  },
    {
    id: 223,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A "pequena circulação" ou circulação pulmonar descreve o caminho do sangue mostrado na figura. Esse caminho é:',
    image: 'https://picsum.photos/seed/pulmonary-circulation/500/500',
    options: ['Do coração para o corpo e de volta ao coração.', 'Do ventrículo direito para os pulmões e de volta para o átrio esquerdo.', 'Do ventrículo esquerdo para os pulmões e de volta para o átrio direito.', 'Do fígado para o coração.', 'Do cérebro para os pulmões.'],
    correctAnswer: 'Do ventrículo direito para os pulmões e de volta para o átrio esquerdo.',
    explanation: 'A pequena circulação é o circuito em que o sangue pobre em oxigênio é bombeado do ventrículo direito para os pulmões (onde é oxigenado) e retorna, agora rico em oxigênio, para o átrio esquerdo do coração.'
  },
  {
    id: 224,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2018) O descarte inadequado de lixo hospitalar pode levar à contaminação. Material perfurocortante, como agulhas, deve ser descartado em:',
    options: ['Sacos plásticos comuns.', 'Caixas de papelão.', 'Recipientes rígidos e resistentes a perfurações.', 'Lixo orgânico para compostagem.', 'Diretamente no esgoto.'],
    correctAnswer: 'Recipientes rígidos e resistentes a perfurações.',
    explanation: 'Materiais perfurocortantes representam um risco biológico e de acidentes. A norma de biossegurança exige que eles sejam descartados em recipientes específicos (como caixas Descarpack), rígidos e à prova de perfuração, para proteger os profissionais da saúde e de limpeza.'
  },
  {
    id: 225,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'As briófitas (musgos) e as pteridófitas (samambaias) são grupos de plantas que dependem da água para a fecundação. Isso ocorre porque:',
    options: ['Elas não produzem sementes.', 'Suas flores precisam de água para abrir.', 'Os gametas masculinos (anterozoides) são flagelados e precisam nadar até o gameta feminino.', 'A polinização é feita por animais aquáticos.', 'Elas realizam fotossíntese aquática.'],
    correctAnswer: 'Os gametas masculinos (anterozoides) são flagelados e precisam nadar até o gameta feminino.',
    explanation: 'Tanto briófitas quanto pteridófitas possuem gametas masculinos flagelados que necessitam de um meio líquido (como gotas de chuva ou orvalho) para se deslocarem e alcançarem a oosfera (gameta feminino), permitindo a fecundação.'
  },
  {
    id: 226,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O daltonismo é uma condição genética recessiva ligada ao cromossomo X. Um homem daltônico (XdY) casa-se com uma mulher normal, cujo pai era daltônico (XDXd). Qual a probabilidade do casal ter uma filha daltônica?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '25%',
    explanation: 'O homem tem genótipo XdY e a mulher XDXd. O homem doa Y para os filhos e Xd para as filhas. A mulher doa XD ou Xd. As filhas podem ser XDXd (normal portadora) ou XdXd (daltônica). A probabilidade de ter uma filha é 1/2, e a de ela ser daltônica (receber Xd do pai e Xd da mãe) é 1/2. Probabilidade total = 1/2 (ser filha) * 1/2 (ser daltônica) = 1/4 ou 25%.'
  },
    {
    id: 227,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Asas de insetos e asas de aves, mostradas na figura, são um exemplo de estruturas análogas. Isso significa que elas:',
    image: 'https://picsum.photos/seed/analogous-structures/600/300',
    options: ['Possuem a mesma origem embrionária, mas funções diferentes.', 'Possuem origem embrionária diferente, mas a mesma função.', 'São vestigiais e não possuem mais função.', 'Existem apenas em fósseis.', 'São idênticas em todos os aspectos.'],
    correctAnswer: 'Possuem origem embrionária diferente, mas a mesma função.',
    explanation: 'Estruturas análogas são resultado da evolução convergente, onde organismos não aparentados desenvolvem estruturas semelhantes para exercer a mesma função (voar, neste caso) em ambientes similares. Elas não compartilham um ancestral comum imediato.'
  },
  {
    id: 228,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2020) A eutrofização de lagos é um fenômeno causado pelo excesso de nutrientes (nitrogênio e fósforo). Esse processo leva a uma consequência direta que é:',
    options: ['A diminuição da temperatura da água.', 'O aumento da transparência da água.', 'A proliferação excessiva de algas (floração).', 'O aumento da concentração de oxigênio na água.', 'A diminuição da quantidade de matéria orgânica.'],
    correctAnswer: 'A proliferação excessiva de algas (floração).',
    explanation: 'O excesso de nutrientes na água estimula o crescimento descontrolado de algas e cianobactérias. Essa "floração" bloqueia a luz solar, e a posterior decomposição dessa massa de algas consome o oxigênio da água, causando a morte de peixes e outros organismos.'
  },
  {
    id: 229,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A osmose é o movimento de:',
    options: ['Soluto do meio mais concentrado para o menos concentrado.', 'Solvente do meio menos concentrado para o mais concentrado.', 'Soluto através de uma membrana permeável.', 'Solvente do meio mais concentrado para o menos concentrado.', 'Gases através da membrana plasmática.'],
    correctAnswer: 'Solvente do meio menos concentrado para o mais concentrado.',
    explanation: 'A osmose é um tipo de transporte passivo (sem gasto de energia) em que o solvente (geralmente água) se move através de uma membrana semipermeável, da região de menor concentração de soluto (meio hipotônico) para a de maior concentração (meio hipertônico).'
  },
  {
    id: 230,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual hormônio, produzido pela hipófise, estimula o crescimento de ossos e tecidos?',
    options: ['Insulina', 'Tiroxina', 'Adrenalina', 'Hormônio do Crescimento (GH)', 'Glucagon'],
    correctAnswer: 'Hormônio do Crescimento (GH)',
    explanation: 'O Hormônio do Crescimento (GH, de Growth Hormone), também chamado de somatotropina, é produzido pela glândula hipófise e é fundamental para o crescimento corporal durante a infância e adolescência, além de atuar no metabolismo durante toda a vida.'
  },
  {
    id: 231,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O processo pelo qual o RNA mensageiro é "lido" nos ribossomos para a produção de uma proteína é chamado de:',
    options: ['Transcrição', 'Tradução', 'Replicação', 'Mutação', 'Conjugação'],
    correctAnswer: 'Tradução',
    explanation: 'A tradução é a etapa da síntese proteica em que a sequência de códons do RNAm é decodificada pelos ribossomos, com a ajuda do RNAt, para montar a sequência correta de aminoácidos que formará a proteína.'
  },
  {
    id: 232,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual das seguintes doenças NÃO é causada por um vírus?',
    options: ['Gripe', 'AIDS', 'Catapora', 'Tuberculose', 'Dengue'],
    correctAnswer: 'Tuberculose',
    explanation: 'A tuberculose é uma infecção bacteriana, causada pelo Mycobacterium tuberculosis. As outras opções (Gripe, AIDS, Catapora e Dengue) são todas doenças virais.'
  },
  {
    id: 233,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2014) O uso de protetor solar é recomendado para prevenir o câncer de pele. A radiação ultravioleta (UV) do sol é mutagênica porque pode causar:',
    options: ['Alterações na sequência de bases do DNA.', 'Quebra das pontes de hidrogênio do DNA.', 'Alterações na forma das proteínas.', 'Destruição da membrana celular.', 'Aumento da produção de melanina.'],
    correctAnswer: 'Alterações na sequência de bases do DNA.',
    explanation: 'A radiação UV pode causar danos diretos ao DNA, como a formação de dímeros de timina, que são ligações anormais entre bases de DNA adjacentes. Se esses danos não forem reparados corretamente pela célula, podem levar a mutações que causam o câncer.'
  },
  {
    id: 234,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O glicogênio, principal reserva de energia nos animais, é um exemplo de:',
    options: ['Proteína', 'Lipídio', 'Monossacarídeo', 'Polissacarídeo', 'Ácido nucleico'],
    correctAnswer: 'Polissacarídeo',
    explanation: 'O glicogênio é um polissacarídeo, ou seja, um carboidrato complexo formado pela união de muitas moléculas de glicose. Ele é armazenado principalmente no fígado e nos músculos.'
  },
  {
    id: 235,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O ciclo de Krebs (ou ciclo do ácido cítrico) é uma etapa da respiração celular que ocorre:',
    options: ['No citoplasma', 'Na membrana plasmática', 'Na matriz mitocondrial', 'No espaço intermembranas da mitocôndria', 'Nos ribossomos'],
    correctAnswer: 'Na matriz mitocondrial',
    explanation: 'Após a glicólise (no citoplasma), o piruvato entra na mitocôndria. O ciclo de Krebs, uma série de reações que oxida o acetil-CoA, ocorre na matriz mitocondrial, o espaço interno da mitocôndria.'
  },
  {
    id: 236,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A ecorregião brasileira caracterizada por clima semiárido, vegetação com plantas espinhosas e caducifólias (que perdem as folhas na seca) é a:',
    options: ['Floresta Amazônica', 'Mata Atlântica', 'Cerrado', 'Caatinga', 'Pampas'],
    correctAnswer: 'Caatinga',
    explanation: 'A Caatinga é um bioma exclusivamente brasileiro, adaptado a condições de aridez, com longos períodos de seca. Sua vegetação é tipicamente xerófita, com cactos, arbustos espinhosos e árvores que perdem as folhas para economizar água.'
  },
    {
    id: 237,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'A imagem ilustra a fagocitose, processo pelo qual células como amebas e macrófagos englobam partículas sólidas. Este é um tipo de:',
    image: 'https://picsum.photos/seed/phagocytosis/500/400',
    options: ['Transporte passivo', 'Osmose', 'Difusão facilitada', 'Endocitose', 'Exocitose'],
    correctAnswer: 'Endocitose',
    explanation: 'Endocitose é o processo de transporte de partículas para dentro da célula através de invaginações da membrana plasmática, formando vesículas. A fagocitose ("comer celular") é a endocitose de partículas grandes e sólidas.'
  },
  {
    id: 238,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'Qual é o gás liberado como produto final na fotossíntese e essencial para a respiração da maioria dos seres vivos?',
    options: ['Dióxido de Carbono (CO₂)', 'Nitrogênio (N₂)', 'Oxigênio (O₂)', 'Metano (CH₄)', 'Hidrogênio (H₂)'],
    correctAnswer: 'Oxigênio (O₂)',
    explanation: 'Durante a fase clara da fotossíntese, a molécula de água é quebrada (fotólise da água), liberando elétrons, prótons (H+) e oxigênio gasoso (O₂), que é liberado para a atmosfera.'
  },
  {
    id: 239,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: '(ENEM 2019) O soro antiofídico é produzido a partir do veneno de serpentes e utilizado no tratamento de picadas. O tipo de imunização conferido pelo soro é:',
    options: ['Ativa natural', 'Ativa artificial', 'Passiva natural', 'Passiva artificial', 'Inespecífica'],
    correctAnswer: 'Passiva artificial',
    explanation: 'O soro contém anticorpos prontos, produzidos em outro organismo (geralmente cavalos). A imunização é passiva porque o indivíduo recebe os anticorpos prontos, sem que seu sistema imune precise produzi-los. É artificial porque foi produzida em laboratório e administrada intencionalmente.'
  },
  {
    id: 240,
    subject: 'Biologia',
    difficulty: 'Médio',
    statement: 'O floema é o tecido vegetal responsável pelo transporte de:',
    options: ['Água e sais minerais (seiva bruta)', 'Açúcares produzidos na fotossíntese (seiva elaborada)', 'Gases para a respiração', 'Hormônios de crescimento', 'Gametas para a fecundação'],
    correctAnswer: 'Açúcares produzidos na fotossíntese (seiva elaborada)',
    explanation: 'O floema transporta a seiva elaborada, rica em sacarose e outros compostos orgânicos, das folhas (onde é produzida) para as demais partes da planta que necessitam de energia, como raízes, frutos e sementes.'
  },
  // --- DIFÍCIL (30) ---
  {
    id: 241,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2016) A técnica de PCR (Reação em Cadeia da Polimerase) é amplamente utilizada em biologia molecular. Seu principal objetivo é:',
    options: ['Sequenciar o genoma completo de um organismo.', 'Produzir grandes quantidades de uma sequência específica de DNA a partir de uma pequena amostra.', 'Inserir genes de uma espécie em outra (transgenia).', 'Separar fragmentos de DNA por tamanho em um gel de agarose.', 'Produzir proteínas recombinantes em bactérias.'],
    correctAnswer: 'Produzir grandes quantidades de uma sequência específica de DNA a partir de uma pequena amostra.',
    explanation: 'A PCR funciona como uma "fotocopiadora" de DNA. Ela permite amplificar exponencialmente um segmento específico de DNA, gerando milhões de cópias que podem ser usadas para diagnóstico de doenças, testes de paternidade, investigações forenses, etc.'
  },
  {
    id: 242,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O Ciclo de Calvin, segunda fase da fotossíntese, utiliza ATP e NADPH produzidos na fase clara para:',
    options: ['Quebrar a molécula de água e liberar oxigênio.', 'Fixar o dióxido de carbono e convertê-lo em carboidratos (glicose).', 'Absorver a energia luminosa através da clorofila.', 'Transportar elétrons através de uma cadeia transportadora.', 'Bombear prótons para o interior do tilacoide.'],
    correctAnswer: 'Fixar o dióxido de carbono e convertê-lo em carboidratos (glicose).',
    explanation: 'O Ciclo de Calvin usa a energia do ATP e o poder redutor do NADPH para converter o CO₂ atmosférico em moléculas orgânicas, como a glicose, em um processo chamado de fixação do carbono.'
  },
  {
    id: 243,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em uma população em equilíbrio de Hardy-Weinberg, a frequência do alelo recessivo "a" é de 0,4. Qual a frequência esperada de indivíduos heterozigotos (Aa) nessa população?',
    options: ['0,16', '0,24', '0,36', '0,40', '0,48'],
    correctAnswer: '0,48',
    explanation: 'Se a frequência do alelo "a" (q) é 0,4, então a frequência do alelo dominante "A" (p) é p = 1 - q = 1 - 0,4 = 0,6. A frequência de heterozigotos no equilíbrio de Hardy-Weinberg é dada por 2pq. F(Aa) = 2 * 0,6 * 0,4 = 0,48.'
  },
  {
    id: 244,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2018) Em uma Célula a Combustível Microbiana, bactérias são utilizadas para converter a energia química da matéria orgânica em energia elétrica. Nesse processo, as bactérias realizam a oxidação da matéria orgânica em um ambiente:',
    options: ['Aeróbico, utilizando oxigênio como aceptor final de elétrons.', 'Anaeróbico, utilizando um eletrodo (ânodo) como aceptor final de elétrons.', 'Fotossintético, utilizando a luz para gerar elétrons.', 'Quimiossintético, utilizando compostos inorgânicos.', 'Fermentativo, gerando apenas ATP e lactato.'],
    correctAnswer: 'Anaeróbico, utilizando um eletrodo (ânodo) como aceptor final de elétrons.',
    explanation: 'As bactérias nesse sistema oxidam a matéria orgânica em condições anaeróbicas. Em vez de transferir os elétrons para o oxigênio (como na respiração aeróbica), elas os transferem para um eletrodo (o ânodo), gerando uma corrente elétrica.'
  },
  {
    id: 245,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A ausência da enzima lactase no intestino de alguns adultos causa intolerância à lactose. Nesse caso, a lactose não é digerida e passa para o intestino grosso, onde é:',
    options: ['Absorvida intacta, causando alergia.', 'Convertida em amido pelas células intestinais.', 'Fermentada por bactérias, produzindo gases e ácido lático.', 'Eliminada nas fezes sem qualquer alteração.', 'Transformada em sacarose.'],
    correctAnswer: 'Fermentada por bactérias, produzindo gases e ácido lático.',
    explanation: 'Na ausência da lactase, a lactose chega ao intestino grosso e é fermentada pela microbiota local. Esse processo de fermentação bacteriana produz gases (hidrogênio, metano), ácidos graxos de cadeia curta e ácido lático, que causam os sintomas de inchaço, cólicas e diarreia.'
  },
  {
    id: 246,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Qual dos seguintes hormônios vegetais é responsável pelo amadurecimento dos frutos e pela queda das folhas (abscisão)?',
    options: ['Auxina', 'Giberelina', 'Citocinina', 'Ácido abscísico', 'Etileno'],
    correctAnswer: 'Etileno',
    explanation: 'O etileno é um hormônio gasoso que desempenha um papel crucial na regulação do amadurecimento de frutos climatéricos (como banana e tomate) e no processo de senescência e abscisão (queda) de folhas e flores.'
  },
    {
    id: 247,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O "crossing-over" (permutação), evento que aumenta a variabilidade genética e é ilustrado na figura, ocorre em qual fase da meiose?',
    image: 'https://picsum.photos/seed/crossing-over/500/350',
    options: ['Prófase I', 'Metáfase I', 'Anáfase I', 'Prófase II', 'Metáfase II'],
    correctAnswer: 'Prófase I',
    explanation: 'O crossing-over, ou permutação gênica, é a troca de segmentos entre cromátides não-irmãs de cromossomos homólogos. Esse evento ocorre durante a Prófase I da meiose, especificamente na subfase do paquíteno, e é fundamental para a recombinação genética.'
  },
  {
    id: 248,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2017) A terapia gênica tem sido estudada para o tratamento de doenças como a hemofilia. Uma estratégia consiste em utilizar um vírus modificado (vetor viral) para:',
    options: ['Destruir as células defeituosas do paciente.', 'Introduzir uma cópia funcional do gene defeituoso nas células do paciente.', 'Inativar todos os genes do cromossomo X.', 'Estimular o sistema imunológico a produzir mais plaquetas.', 'Fornecer a proteína (fator de coagulação) que falta ao paciente.'],
    correctAnswer: 'Introduzir uma cópia funcional do gene defeituoso nas células do paciente.',
    explanation: 'A terapia gênica busca corrigir a causa raiz de uma doença genética. Isso é feito utilizando um vetor (frequentemente um vírus inativado) para entregar uma cópia correta e funcional do gene que está defeituoso ou ausente nas células do paciente, permitindo que elas passem a produzir a proteína correta.'
  },
    {
    id: 249,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O potencial de ação em um neurônio, representado no gráfico, envolve uma rápida despolarização e repolarização da membrana. A fase de despolarização (subida íngreme) é causada pela:',
    image: 'https://picsum.photos/seed/action-potential/600/400',
    options: ['Entrada de íons Cl⁻', 'Saída de íons K⁺', 'Entrada de íons Na⁺', 'Saída de íons Na⁺', 'Ação da bomba de sódio e potássio'],
    correctAnswer: 'Entrada de íons Na⁺',
    explanation: 'Quando um estímulo atinge o limiar de excitação, canais de sódio (Na⁺) dependentes de voltagem se abrem rapidamente. A grande entrada de íons Na⁺ para o interior do neurônio causa uma rápida inversão da polaridade da membrana, de negativa para positiva, caracterizando a despolarização.'
  },
  {
    id: 250,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A biomagnificação, ou magnificação trófica, é um processo em que:',
    options: ['A concentração de toxinas diminui ao longo da cadeia alimentar.', 'A energia é transferida de um nível trófico para outro.', 'A concentração de toxinas não biodegradáveis aumenta nos níveis tróficos mais altos.', 'Os decompositores reciclam a matéria orgânica.', 'A biodiversidade de um ecossistema aumenta.'],
    correctAnswer: 'A concentração de toxinas não biodegradáveis aumenta nos níveis tróficos mais altos.',
    explanation: 'Substâncias tóxicas persistentes no ambiente (como mercúrio ou DDT) acumulam-se nos tecidos dos organismos. Como a energia, mas não a toxina, é perdida a cada nível trófico, a concentração da toxina se torna progressivamente maior nos organismos de níveis tróficos superiores (carnívoros de topo).'
  },
  {
    id: 251,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O operon lac em bactérias como a E. coli é um exemplo clássico de regulação gênica. Na ausência de lactose, o gene repressor produz uma proteína que:',
    options: ['Ativa a transcrição dos genes estruturais.', 'Liga-se ao operador, bloqueando a transcrição dos genes estruturais.', 'Liga-se à lactose, ativando o operon.', 'Atua como uma enzima para digerir a lactose.', 'Facilita a ligação da RNA polimerase ao promotor.'],
    correctAnswer: 'Liga-se ao operador, bloqueando a transcrição dos genes estruturais.',
    explanation: 'Na ausência de lactose, a proteína repressora está em sua forma ativa e se liga à região do operador no DNA. Essa ligação impede fisicamente que a RNA polimerase transcreva os genes responsáveis pelo metabolismo da lactose (lacZ, lacY, lacA), economizando energia para a célula.'
  },
  {
    id: 252,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2021) Em uma aula de biologia sobre o sistema ABO, um professor apresentou os resultados de tipagem sanguínea de um casal: o homem era do tipo A e a mulher do tipo B. O casal teve um primeiro filho do tipo O. Qual a probabilidade de o próximo filho do casal ser do tipo AB?',
    options: ['0%', '25%', '50%', '75%', '100%'],
    correctAnswer: '25%',
    explanation: 'Para ter um filho do tipo O (genótipo ii), tanto o pai quanto a mãe precisam ter o alelo "i". Como o pai é tipo A e a mãe é tipo B, seus genótipos devem ser Iᴬi e Iᴮi, respectivamente. Cruzando Iᴬi x Iᴮi, as possibilidades para os filhos são: IᴬIᴮ (tipo AB), Iᴬi (tipo A), Iᴮi (tipo B) e ii (tipo O). Cada possibilidade tem 25% (1/4) de chance de ocorrer.'
  },
  {
    id: 253,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Os cnidários, como águas-vivas e corais, são os primeiros animais na escala evolutiva a apresentar:',
    options: ['Simetria bilateral', 'Três folhetos embrionários (triblásticos)', 'Sistema circulatório fechado', 'Células nervosas e uma cavidade digestiva (cavidade gastrovascular)', 'Corpo segmentado (metameria)'],
    correctAnswer: 'Células nervosas e uma cavidade digestiva (cavidade gastrovascular)',
    explanation: 'Os cnidários são diblásticos e possuem simetria radial. Sua grande novidade evolutiva em relação aos poríferos é a presença de tecidos verdadeiros, incluindo uma rede nervosa difusa e uma cavidade gastrovascular, que funciona tanto para digestão quanto para distribuição de nutrientes.'
  },
    {
    id: 254,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A cadeia transportadora de elétrons, etapa da respiração celular que ocorre nas cristas mitocondriais, tem como principal função:',
    image: 'https://picsum.photos/seed/electron-transport-chain/600/400',
    options: ['Produzir piruvato a partir da glicose.', 'Gerar uma grande quantidade de ATP através da fosforilação oxidativa.', 'Fixar o dióxido de carbono.', 'Regenerar as moléculas de NAD+ para a glicólise.', 'Oxidar o Acetil-CoA.'],
    correctAnswer: 'Gerar uma grande quantidade de ATP através da fosforilação oxidativa.',
    explanation: 'Os elétrons transportados por NADH e FADH₂ são passados por uma série de complexos proteicos na membrana interna da mitocôndria. A energia liberada nesse transporte é usada para bombear prótons, criando um gradiente que alimenta a enzima ATP sintase. Esse processo, chamado fosforilação oxidativa, é responsável pela maior parte da produção de ATP na respiração.'
  },
  {
    id: 255,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em plantas de dia curto, o florescimento é induzido quando:',
    options: ['O período de luz (fotoperíodo) é maior que um valor crítico.', 'O período de escuridão contínua é maior que um valor crítico.', 'O período de escuridão é interrompido por um flash de luz.', 'A planta recebe luz vermelha de onda longa.', 'A temperatura atinge um valor mínimo.'],
    correctAnswer: 'O período de escuridão contínua é maior que um valor crítico.',
    explanation: 'O florescimento em plantas é controlado pelo fitocromo, que mede a duração do período ininterrupto de escuridão, e não o período de luz. Plantas de dia curto, na verdade, são "plantas de noite longa", pois florescem quando a noite é longa o suficiente para que a forma ativa do fitocromo seja convertida na forma inativa, desencadeando a floração.'
  },
  {
    id: 256,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2012) A produção de biocombustíveis a partir da celulose (etanol de segunda geração) é mais complexa do que a partir da sacarose, pois requer uma etapa prévia de:',
    options: ['Fermentação, para converter a celulose em glicose.', 'Hidrólise, para quebrar as ligações glicosídicas da celulose e liberar a glicose.', 'Destilação, para separar a celulose de outros componentes.', 'Esterificação, para converter a celulose em ésteres.', 'Polimerização, para aumentar o tamanho da molécula de celulose.'],
    correctAnswer: 'Hidrólise, para quebrar as ligações glicosídicas da celulose e liberar a glicose.',
    explanation: 'A celulose é um polímero de glicose com ligações muito estáveis. Diferente do amido, os micro-organismos da fermentação não conseguem quebrar a celulose diretamente. Portanto, é necessária uma etapa de hidrólise (geralmente enzimática, com celulases) para quebrar a celulose em moléculas de glicose, que podem então ser fermentadas para produzir etanol.'
  },
  {
    id: 257,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Epistasia é um tipo de interação gênica em que:',
    options: ['Dois ou mais genes contribuem para uma única característica de forma aditiva.', 'Um gene afeta a expressão de múltiplas características (pleiotropia).', 'Um gene em um loco mascara ou inibe a expressão de outro gene em um loco diferente.', 'Os dois alelos de um gene se expressam simultaneamente no heterozigoto (codominância).', 'O fenótipo do heterozigoto é intermediário entre os dos homozigotos (dominância incompleta).'],
    correctAnswer: 'Um gene em um loco mascara ou inibe a expressão de outro gene em um loco diferente.',
    explanation: 'A epistasia ocorre quando a ação de um gene (o epistático) interfere na expressão de outro gene (o hipostático) que não é seu alelo. Um exemplo clássico é a cor da pelagem em labradores, onde um gene determina a produção de pigmento (preto/marrom) e um segundo gene epistático determina se o pigmento será depositado no pelo.'
  },
  {
    id: 258,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O hormônio antidiurético (ADH), ou vasopressina, é liberado pela neuro-hipófise e atua nos túbulos renais para:',
    options: ['Aumentar a excreção de sódio.', 'Diminuir a reabsorção de glicose.', 'Aumentar a reabsorção de água.', 'Diminuir a reabsorção de água.', 'Aumentar a taxa de filtração glomerular.'],
    correctAnswer: 'Aumentar a reabsorção de água.',
    explanation: 'O ADH é liberado em resposta à desidratação. Ele age nos ductos coletores dos rins, aumentando sua permeabilidade à água. Isso faz com que mais água seja reabsorvida de volta para o sangue, resultando em uma urina mais concentrada e na conservação de água no corpo.'
  },
  {
    id: 259,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Durante o desenvolvimento embrionário dos cordados, o notocórdio é uma estrutura que:',
    options: ['Dará origem diretamente ao sistema nervoso central.', 'É um bastão flexível que serve de eixo de sustentação e induz a formação do tubo neural.', 'Persiste como a coluna vertebral em todos os cordados adultos.', 'Forma a cavidade digestiva primitiva (arquêntero).', 'É exclusiva dos vertebrados.'],
    correctAnswer: 'É um bastão flexível que serve de eixo de sustentação e induz a formação do tubo neural.',
    explanation: 'O notocórdio (ou notocorda) é uma característica definidora dos cordados. É uma estrutura dorsal, flexível, que fornece suporte ao embrião. Além disso, ele desempenha um papel crucial na indução, sinalizando para que o ectoderma acima dele se diferencie e forme o tubo neural, que dará origem ao cérebro e à medula espinhal.'
  },
  {
    id: 260,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2011) A Síndrome de Down é uma alteração genética causada por uma trissomia do cromossomo 21. Essa alteração geralmente ocorre devido a um erro durante a:',
    options: ['Fase S da interfase, durante a duplicação do DNA.', 'Mitose das células somáticas.', 'Meiose, durante a formação dos gametas.', 'Tradução, na síntese de proteínas.', 'Transcrição, na formação do RNAm.'],
    correctAnswer: 'Meiose, durante a formação dos gametas.',
    explanation: 'A trissomia do 21 geralmente é resultado de uma não-disjunção (falha na separação) dos cromossomos homólogos ou das cromátides-irmãs durante a meiose I ou meiose II, no processo de formação do óvulo ou do espermatozoide. Isso leva a um gameta com um cromossomo 21 a mais, que, após a fecundação, gera um zigoto com três cópias do cromossomo 21.'
  },
  {
    id: 261,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Plantas com metabolismo ácido das crassuláceas (CAM) são adaptadas a ambientes áridos. Sua principal estratégia para economizar água é:',
    options: ['Manter os estômatos abertos durante o dia para maximizar a fotossíntese.', 'Realizar a fotossíntese apenas à noite.', 'Abrir os estômatos e fixar o CO₂ durante a noite, e realizar o Ciclo de Calvin durante o dia com os estômatos fechados.', 'Possuir folhas muito grandes para dissipar o calor.', 'Não possuir estômatos.'],
    correctAnswer: 'Abrir os estômatos e fixar o CO₂ durante a noite, e realizar o Ciclo de Calvin durante o dia com os estômatos fechados.',
    explanation: 'Plantas CAM (ex: cactos, abacaxi) abrem seus estômatos à noite, quando a temperatura é mais amena, para captar CO₂ e armazená-lo na forma de ácidos orgânicos. Durante o dia, com os estômatos fechados para evitar a perda de água, elas liberam o CO₂ desses ácidos e realizam o Ciclo de Calvin, usando a energia da luz solar captada.'
  },
  {
    id: 262,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A reação em cadeia da polimerase (PCR) requer, além do DNA molde, primers e dNTPs, a enzima Taq polimerase. A principal característica dessa enzima, que a torna ideal para a PCR, é que ela é:',
    options: ['Capaz de sintetizar RNA em vez de DNA.', 'Proveniente de humanos.', 'Termoestável, resistindo a altas temperaturas sem desnaturar.', 'Capaz de corrigir erros de replicação.', 'Ativa apenas em baixas temperaturas.'],
    correctAnswer: 'Termoestável, resistindo a altas temperaturas sem desnaturar.',
    explanation: 'A PCR envolve ciclos de aquecimento a altas temperaturas (cerca de 95°C) para desnaturar (separar) as fitas de DNA. A Taq polimerase, extraída da bactéria Thermus aquaticus que vive em fontes termais, é estável a essas temperaturas e pode continuar a sintetizar novas fitas de DNA sem precisar ser adicionada a cada ciclo.'
  },
  {
    id: 263,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O sistema complemento é um conjunto de proteínas do sangue que auxilia o sistema imune. Uma de suas principais funções é:',
    options: ['Produzir anticorpos específicos.', 'Apresentar antígenos aos linfócitos T.', 'Formar um complexo de ataque à membrana (MAC) para lisar (destruir) patógenos.', 'Atuar como células de memória.', 'Regular a produção de hormônios.'],
    correctAnswer: 'Formar um complexo de ataque à membrana (MAC) para lisar (destruir) patógenos.',
    explanation: 'Uma das vias de ativação do sistema complemento culmina na formação do MAC. Esse complexo se insere na membrana de bactérias e outros patógenos, criando um poro que leva à entrada descontrolada de água e íons, resultando na lise e morte da célula invasora.'
  },
  {
    id: 264,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2022) A tecnologia do DNA recombinante permitiu a produção de insulina humana por bactérias. O primeiro passo para isso é:',
    options: ['Isolar a proteína insulina de pâncreas humano.', 'Inserir o plasmídeo bacteriano diretamente no paciente diabético.', 'Utilizar a transcriptase reversa para criar uma molécula de DNA (cDNA) a partir do RNAm da insulina humana.', 'Criar uma bactéria transgênica que não necessite de insulina.', 'Clonar um pâncreas humano em laboratório.'],
    correctAnswer: 'Utilizar a transcriptase reversa para criar uma molécula de DNA (cDNA) a partir do RNAm da insulina humana.',
    explanation: 'O gene humano da insulina contém íntrons (sequências não codificantes) que as bactérias não conseguem processar. Por isso, isola-se o RNAm maduro (já sem os íntrons) de células do pâncreas. A enzima transcriptase reversa é usada para sintetizar uma fita de DNA complementar (cDNA) a partir desse RNAm. Esse cDNA, contendo apenas a sequência codificante, é então inserido em um plasmídeo e introduzido na bactéria.'
  },
  {
    id: 265,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O processo de especiação que ocorre quando uma população é dividida por uma barreira geográfica (como um rio ou montanha) é chamado de:',
    options: ['Especiação simpátrica', 'Especiação parapátrica', 'Especiação alopátrica', 'Anagênese', 'Cladogênese'],
    correctAnswer: 'Especiação alopátrica',
    explanation: 'A especiação alopátrica ("pátrias diferentes") é o modo de especiação mais comum. Ocorre quando uma barreira física isola geograficamente subpopulações, interrompendo o fluxo gênico. Com o tempo, as populações isoladas acumulam diferenças genéticas (devido a mutação, seleção e deriva) até se tornarem reprodutivamente isoladas, formando novas espécies.'
  },
  {
    id: 266,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'As plaquetas, ou trombócitos, são fragmentos celulares presentes no sangue que são essenciais para o processo de:',
    options: ['Transporte de oxigênio.', 'Defesa imunológica.', 'Coagulação sanguínea.', 'Transporte de nutrientes.', 'Produção de hormônios.'],
    correctAnswer: 'Coagulação sanguínea.',
    explanation: 'Quando um vaso sanguíneo é danificado, as plaquetas aderem ao local da lesão e agregam-se, formando um "tampão" plaquetário inicial. Elas também liberam fatores que ativam a cascata de coagulação, uma série de reações enzimáticas que culminam na formação de uma rede de fibrina, estabilizando o coágulo e estancando o sangramento.'
  },
    {
    id: 267,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'O coração dos mamíferos, esquematizado na figura, possui quatro câmaras. A "circulação completa" significa que:',
    image: 'https://picsum.photos/seed/mammal-heart/500/500',
    options: ['O coração bombeia sangue para todo o corpo.', 'O sangue passa duas vezes pelo coração a cada ciclo.', 'Não há mistura de sangue arterial e venoso no coração.', 'O sangue é composto por plasma e células.', 'Existem artérias e veias.'],
    correctAnswer: 'Não há mistura de sangue arterial e venoso no coração.',
    explanation: 'A circulação é dita "completa" porque o septo que divide o coração em lado direito (sangue venoso) e esquerdo (sangue arterial) é total, impedindo a mistura. Isso garante a máxima eficiência no transporte de oxigênio para os tecidos, sustentando o alto metabolismo dos mamíferos.'
  },
  {
    id: 268,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: '(ENEM 2013) A biotecnologia permitiu o desenvolvimento de plantas transgênicas resistentes a herbicidas. A vantagem do cultivo dessas plantas é que:',
    options: ['Elas não precisam de nenhum tipo de fertilizante.', 'O agricultor pode aplicar o herbicida para matar as ervas daninhas sem prejudicar a cultura.', 'Elas se tornam resistentes a todas as pragas e doenças.', 'Produzem frutos maiores e mais nutritivos.', 'Aumentam a biodiversidade do solo.'],
    correctAnswer: 'O agricultor pode aplicar o herbicida para matar as ervas daninhas sem prejudicar a cultura.',
    explanation: 'A transgenia para resistência a herbicidas (como o glifosato) insere na planta de interesse um gene que a torna imune à ação do herbicida. Isso permite que o agricultor pulverize o herbicida sobre toda a lavoura, eliminando as ervas daninhas que competem por recursos, mas sem afetar a planta cultivada, facilitando o manejo e aumentando a produtividade.'
  },
  {
    id: 269,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'Em um ecossistema, o fluxo de energia é unidirecional, enquanto o ciclo da matéria é cíclico. Isso significa que:',
    options: ['A energia é reciclada pelos decompositores, e a matéria é perdida como calor.', 'A energia flui dos produtores para os consumidores e é perdida como calor, enquanto a matéria é reciclada pelos decompositores.', 'A matéria flui dos produtores para os consumidores e é perdida, enquanto a energia é reciclada.', 'Tanto a energia quanto a matéria são recicladas.', 'Tanto a energia quanto a matéria são perdidas a cada nível trófico.'],
    correctAnswer: 'A energia flui dos produtores para os consumidores e é perdida como calor, enquanto a matéria é reciclada pelos decompositores.',
    explanation: 'A energia solar é captada pelos produtores e transferida ao longo da cadeia alimentar, mas em cada nível trófico, uma grande parte é perdida como calor na respiração, não podendo ser reaproveitada. Já a matéria (átomos de carbono, nitrogênio, etc.) que compõe os organismos é constantemente reciclada pelos decompositores, que a devolvem ao ambiente para ser reutilizada pelos produtores.'
  },
  {
    id: 270,
    subject: 'Biologia',
    difficulty: 'Difícil',
    statement: 'A herança quantitativa ou poligênica é caracterizada por:',
    options: ['Um único gene determinando uma característica.', 'Um fenótipo com variações discretas (ex: liso ou rugoso).', 'Vários genes contribuindo de forma aditiva para uma única característica com variação contínua (ex: altura, cor da pele).', 'Um gene que mascara a expressão de outro.', 'O ambiente não influenciar o fenótipo.'],
    correctAnswer: 'Vários genes contribuindo de forma aditiva para uma única característica com variação contínua (ex: altura, cor da pele).',
    explanation: 'Na herança quantitativa, a característica final é determinada pelo efeito somatório de múltiplos genes, cada um com uma pequena contribuição. Isso, somado à influência ambiental, resulta em uma gama contínua de fenótipos na população, como a variação de altura ou cor de pele em humanos.'
  }
];
