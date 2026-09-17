/* ============================================================
   CONHECIMENTOS GERAIS — PROJETO DE VIDA  (V2)
   Jogo de cartas com 30 perguntas. JavaScript puro.
   ============================================================ */

/* ------------------------------------------------------------
   1) BANCO DE PERGUNTAS
   Cada carta tem: tema, nível, o texto da pergunta, as 4
   alternativas, o índice (0 a 3) da alternativa correta e a
   explicação que aparece depois de responder.
   ------------------------------------------------------------ */
const perguntas = [
  {
    tema: "Esportes",
    nivel: "média",
    pergunta: "Quantos jogadores de cada time ficam em quadra numa partida de vôlei?",
    opcoes: ["5", "6", "7", "11"],
    correta: 1,
    explicacao: "São 6 de cada lado. O sétimo jogador que aparece em quadra é sempre uma substituição, como o líbero."
  },
  {
    tema: "Esportes",
    nivel: "média",
    pergunta: "Qual país sediou a primeira Copa do Mundo de futebol, em 1930?",
    opcoes: ["Brasil", "Itália", "Uruguai", "Inglaterra"],
    correta: 2,
    explicacao: "O Uruguai organizou e ainda venceu o torneio, batendo a Argentina na final."
  },
  {
    tema: "Esportes",
    nivel: "média",
    pergunta: "O sumô é um esporte tradicional de qual país?",
    opcoes: ["China", "Coreia do Sul", "Japão", "Mongólia"],
    correta: 2,
    explicacao: "O sumô nasceu no Japão e está ligado a rituais religiosos com mais de mil anos de história."
  },
  {
    tema: "Geografia",
    nivel: "média",
    pergunta: "Qual é o maior deserto quente do mundo?",
    opcoes: ["Atacama", "Saara", "Gobi", "Kalahari"],
    correta: 1,
    explicacao: "O Saara ocupa boa parte do norte da África e tem área parecida com a do Brasil."
  },
  {
    tema: "Geografia",
    nivel: "média",
    pergunta: "Qual país do sudeste asiático é formado por mais de 17 mil ilhas?",
    opcoes: ["Japão", "Filipinas", "Tailândia", "Indonésia"],
    correta: 3,
    explicacao: "A Indonésia é o maior arquipélago do planeta, com ilhas como Java, Sumatra e Bali."
  },
  {
    tema: "Geografia",
    nivel: "média",
    pergunta: "Qual é a cordilheira mais extensa do mundo?",
    opcoes: ["Alpes", "Himalaia", "Andes", "Montanhas Rochosas"],
    correta: 2,
    explicacao: "Os Andes cruzam sete países da América do Sul e passam dos 7 mil quilômetros de extensão."
  },
  {
    tema: "Geografia",
    nivel: "média",
    pergunta: "Em qual país fica a antiga cidade inca de Machu Picchu?",
    opcoes: ["Peru", "Bolívia", "México", "Chile"],
    correta: 0,
    explicacao: "Machu Picchu fica nos Andes peruanos, a cerca de 2.400 metros de altitude."
  },
  {
    tema: "Brasil",
    nivel: "média",
    pergunta: "Qual foi a primeira capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Salvador", "Olinda", "São Paulo"],
    correta: 1,
    explicacao: "Salvador foi capital de 1549 a 1763, quando o título passou para o Rio de Janeiro."
  },
  {
    tema: "Brasil",
    nivel: "média",
    pergunta: "O frevo é uma dança típica de qual estado brasileiro?",
    opcoes: ["Bahia", "Ceará", "Pernambuco", "Maranhão"],
    correta: 2,
    explicacao: "O frevo nasceu em Recife e Olinda e é uma das marcas do carnaval pernambucano."
  },
  {
    tema: "Brasil",
    nivel: "difícil",
    pergunta: "Qual estado brasileiro tem a maior faixa de litoral?",
    opcoes: ["Rio Grande do Sul", "Bahia", "São Paulo", "Santa Catarina"],
    correta: 1,
    explicacao: "A Bahia tem mais de mil quilômetros de costa, a maior entre todos os estados."
  },
  {
    tema: "Ciência",
    nivel: "média",
    pergunta: "Quantos ossos tem, aproximadamente, o corpo de um adulto?",
    opcoes: ["106", "156", "206", "306"],
    correta: 2,
    explicacao: "São cerca de 206. Bebês nascem com mais ossos, que vão se fundindo com o crescimento."
  },
  {
    tema: "Ciência",
    nivel: "média",
    pergunta: "Qual é o maior órgão do corpo humano?",
    opcoes: ["Fígado", "Pele", "Intestino", "Pulmão"],
    correta: 1,
    explicacao: "A pele é o maior órgão do corpo e funciona como barreira de proteção."
  },
  {
    tema: "Ciência",
    nivel: "média",
    pergunta: "Como se chama a passagem da água do estado líquido para o gasoso?",
    opcoes: ["Condensação", "Solidificação", "Evaporação", "Fusão"],
    correta: 2,
    explicacao: "Na evaporação a água vira vapor. O caminho contrário, de vapor para líquido, é a condensação."
  },
  {
    tema: "Ciência",
    nivel: "difícil",
    pergunta: "Quantos corações tem um polvo?",
    opcoes: ["1", "2", "3", "5"],
    correta: 2,
    explicacao: "São três: dois bombeiam sangue para as brânquias e um para o resto do corpo."
  },
  {
    tema: "Astronomia",
    nivel: "média",
    pergunta: "Quanto tempo a luz do Sol leva para chegar até a Terra?",
    opcoes: ["8 segundos", "8 minutos", "8 horas", "8 dias"],
    correta: 1,
    explicacao: "Cerca de 8 minutos. Ou seja, você sempre vê o Sol como ele era 8 minutos atrás."
  },
  {
    tema: "Astronomia",
    nivel: "média",
    pergunta: "Quem foi a primeira pessoa a pisar na Lua?",
    opcoes: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
    correta: 2,
    explicacao: "Neil Armstrong desceu primeiro, em 1969. Buzz Aldrin pisou logo depois dele."
  },
  {
    tema: "Cinema",
    nivel: "média",
    pergunta: "Qual estúdio produziu as animações \"Shrek\" e \"Como Treinar o Seu Dragão\"?",
    opcoes: ["Pixar", "DreamWorks", "Illumination", "Studio Ghibli"],
    correta: 1,
    explicacao: "Os dois são da DreamWorks Animation, principal concorrente da Pixar nos anos 2000."
  },
  {
    tema: "Cinema",
    nivel: "média",
    pergunta: "Em qual saga de filmes aparece a escola de magia de Hogwarts?",
    opcoes: ["As Crônicas de Nárnia", "Percy Jackson", "Harry Potter", "O Senhor dos Anéis"],
    correta: 2,
    explicacao: "Hogwarts é a escola de magia e bruxaria da série Harry Potter."
  },
  {
    tema: "Cinema",
    nivel: "difícil",
    pergunta: "O filme brasileiro \"Cidade de Deus\" se passa em qual cidade?",
    opcoes: ["São Paulo", "Recife", "Rio de Janeiro", "Salvador"],
    correta: 2,
    explicacao: "A história acontece na Cidade de Deus, um bairro da zona oeste do Rio de Janeiro."
  },
  {
    tema: "Música",
    nivel: "média",
    pergunta: "Quantas cordas tem um violão tradicional?",
    opcoes: ["4", "5", "6", "7"],
    correta: 2,
    explicacao: "O violão comum tem 6 cordas. O de 7 cordas é bastante usado no samba e no choro."
  },
  {
    tema: "Música",
    nivel: "média",
    pergunta: "Em qual país surgiu o reggae?",
    opcoes: ["Cuba", "Jamaica", "Brasil", "Estados Unidos"],
    correta: 1,
    explicacao: "O reggae nasceu na Jamaica nos anos 1960 e ganhou o mundo com Bob Marley."
  },
  {
    tema: "História",
    nivel: "média",
    pergunta: "Qual navio naufragou em 1912 depois de bater em um iceberg?",
    opcoes: ["Lusitania", "Titanic", "Britannic", "Queen Mary"],
    correta: 1,
    explicacao: "O Titanic afundou na sua viagem inaugural, no Oceano Atlântico Norte."
  },
  {
    tema: "História",
    nivel: "difícil",
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    opcoes: ["Marechal Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "Floriano Peixoto"],
    correta: 0,
    explicacao: "Deodoro da Fonseca assumiu logo após a Proclamação da República, em 1889."
  },
  {
    tema: "Raciocínio",
    nivel: "média",
    pergunta: "Quantos minutos existem em duas horas e meia?",
    opcoes: ["120", "130", "150", "180"],
    correta: 2,
    explicacao: "Duas horas dão 120 minutos. Somando os 30 da meia hora, chega-se a 150."
  },
  {
    tema: "Tecnologia",
    nivel: "média",
    pergunta: "A sigla GPS, usada nos aplicativos de mapa, significa:",
    opcoes: [
      "Sistema de Posicionamento Global",
      "Sistema Geral de Proteção",
      "Programa Global de Satélites",
      "Sistema de Pesquisa por Satélite"
    ],
    correta: 0,
    explicacao: "GPS vem do inglês Global Positioning System e funciona com uma rede de satélites."
  },
  {
    tema: "Tecnologia",
    nivel: "média",
    pergunta: "Qual empresa é responsável pelo sistema operacional Android?",
    opcoes: ["Apple", "Microsoft", "Samsung", "Google"],
    correta: 3,
    explicacao: "O Android pertence ao Google e é usado por várias fabricantes, como Samsung e Motorola."
  },
  {
    tema: "Curiosidades",
    nivel: "média",
    pergunta: "Qual é o animal terrestre mais rápido do mundo?",
    opcoes: ["Guepardo", "Leão", "Avestruz", "Antílope"],
    correta: 0,
    explicacao: "O guepardo passa dos 100 km/h, mas só consegue manter essa velocidade por poucos segundos."
  },
  {
    tema: "Curiosidades",
    nivel: "difícil",
    pergunta: "Qual destes alimentos praticamente não estraga e pode durar milhares de anos?",
    opcoes: ["Arroz", "Mel", "Açúcar mascavo", "Farinha"],
    correta: 1,
    explicacao: "Potes de mel encontrados em tumbas egípcias continuavam próprios para consumo."
  },
  {
    tema: "Matemática",
    nivel: "média",
    pergunta: "Quanto é 25% de 200?",
    opcoes: ["25", "40", "50", "75"],
    correta: 2,
    explicacao: "25% é a quarta parte. Dividindo 200 por 4, chega-se a 50."
  },
  {
    tema: "Raciocínio",
    nivel: "difícil",
    pergunta: "Qual é o próximo número da sequência 2, 6, 12, 20, 30, ...?",
    opcoes: ["36", "40", "42", "45"],
    correta: 2,
    explicacao: "A diferença entre os números aumenta de 2 em 2: 4, 6, 8, 10 e depois 12. Então 30 + 12 = 42."
  }
];

const TOTAL_PERGUNTAS = perguntas.length;

/* Cor do selo de tema em cada carta (só enfeite) */
const CORES_TEMA = {
  "Geografia":    "#2f6a44",
  "Brasil":       "#1f6b5e",
  "História":     "#8a5a1e",
  "Ciência":      "#26355e",
  "Astronomia":   "#3b3070",
  "Cultura":      "#8a3a6b",
  "Cinema":       "#6a3a86",
  "Música":       "#9a4a2a",
  "Esportes":     "#1d5a8a",
  "Tecnologia":   "#2b5d6b",
  "Matemática":   "#a0522d",
  "Curiosidades": "#7a6a1a",
  "Raciocínio":   "#5a4a8a"
};

/* Embaralhar também as alternativas dentro de cada carta.
   Deixe false se quiser que A, B, C e D apareçam sempre na
   mesma ordem em que foram escritas. */
const EMBARALHAR_ALTERNATIVAS = true;

const LETRAS = ["A", "B", "C", "D"];

/* ------------------------------------------------------------
   2) ESTADO DO JOGO
   ------------------------------------------------------------ */
let ordemCartas = [];        // ordem em que as cartas serão puxadas
let ordemOpcoes = [];        // ordem em que as alternativas aparecem na carta atual
let indiceCartaAtual = 0;
let pontuacao = 0;
let opcaoSelecionada = null; // índice ORIGINAL da alternativa tocada
let cartaRespondida = false;

/* ------------------------------------------------------------
   3) ELEMENTOS DA TELA
   ------------------------------------------------------------ */
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const btnComecar = document.getElementById("btn-comecar");
const btnResponder = document.getElementById("btn-responder");
const btnProxima = document.getElementById("btn-proxima");
const btnJogarNovamente = document.getElementById("btn-jogar-novamente");

const pilha = document.getElementById("pilha");
const pilhaRestantes = document.getElementById("pilha-restantes");
const carta = document.getElementById("carta");
const cartaTema = document.getElementById("carta-tema");
const cartaNivel = document.getElementById("carta-nivel");
const cartaPergunta = document.getElementById("carta-pergunta");
const cartaNumero = document.getElementById("carta-numero");

const listaOpcoes = document.getElementById("lista-opcoes");
const mensagemAviso = document.getElementById("mensagem-aviso");
const feedback = document.getElementById("feedback");

const pontosAtualEl = document.getElementById("pontos-atual");
const contadorPerguntasEl = document.getElementById("contador-perguntas");
const barraProgresso = document.getElementById("barra-progresso");
const barraProgressoWrap = document.getElementById("barra-progresso-wrap");

const pontuacaoFinalEl = document.getElementById("pontuacao-final");
const mensagemFinalEl = document.getElementById("mensagem-final");
const detalheFinalEl = document.getElementById("detalhe-final");
const boletimDataEl = document.getElementById("boletim-data");

/* ------------------------------------------------------------
   4) FUNÇÕES AUXILIARES
   ------------------------------------------------------------ */

/* Embaralha uma lista (algoritmo de Fisher-Yates) */
function embaralhar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/* Troca a tela visível */
function mostrarTela(tela) {
  [telaInicial, telaJogo, telaFinal].forEach((t) => t.classList.remove("ativa"));
  tela.classList.add("ativa");
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------
   5) INICIAR / REINICIAR O JOGO
   ------------------------------------------------------------ */
function iniciarJogo() {
  ordemCartas = embaralhar(perguntas.map((_, i) => i));
  indiceCartaAtual = 0;
  pontuacao = 0;
  atualizarPontuacao();
  mostrarTela(telaJogo);
  carregarCarta();
}

/* ------------------------------------------------------------
   6) CARREGAR A CARTA DO TOPO DA PILHA
   ------------------------------------------------------------ */
function carregarCarta() {
  cartaRespondida = false;
  opcaoSelecionada = null;

  const dados = perguntas[ordemCartas[indiceCartaAtual]];
  const numero = indiceCartaAtual + 1;
  const restantes = TOTAL_PERGUNTAS - numero;

  /* --- Carta --- */
  cartaTema.textContent = dados.tema;
  cartaNivel.textContent = dados.nivel;
  cartaPergunta.textContent = dados.pergunta;
  cartaNumero.textContent = `carta ${numero}`;
  carta.style.setProperty("--cor-tema", CORES_TEMA[dados.tema] || "#26355e");

  /* --- Visual da pilha --- */
  pilhaRestantes.textContent =
    restantes === 0 ? "última carta da pilha" :
    restantes === 1 ? "1 carta na pilha" :
    `${restantes} cartas na pilha`;

  pilha.classList.toggle("acabando", restantes > 0 && restantes <= 6);
  pilha.classList.toggle("ultima", restantes === 0);

  /* --- Cabeçalho e progresso --- */
  contadorPerguntasEl.textContent = `Carta ${numero} de ${TOTAL_PERGUNTAS}`;
  barraProgresso.style.width = `${((numero - 1) / TOTAL_PERGUNTAS) * 100}%`;
  barraProgressoWrap.setAttribute("aria-valuenow", numero - 1);

  /* --- Alternativas no caderno --- */
  const indices = dados.opcoes.map((_, i) => i);
  ordemOpcoes = EMBARALHAR_ALTERNATIVAS ? embaralhar(indices) : indices;

  listaOpcoes.innerHTML = "";
  ordemOpcoes.forEach((indiceOriginal, posicao) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao";
    botao.dataset.indice = indiceOriginal;

    const letra = document.createElement("span");
    letra.className = "opcao-letra";
    letra.textContent = LETRAS[posicao];
    letra.setAttribute("aria-hidden", "true");

    const texto = document.createElement("span");
    texto.className = "opcao-texto";
    texto.textContent = dados.opcoes[indiceOriginal];

    botao.append(letra, texto);
    botao.addEventListener("click", () => selecionarOpcao(indiceOriginal));
    listaOpcoes.appendChild(botao);
  });

  /* --- Limpa feedback e botões --- */
  mensagemAviso.textContent = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  btnResponder.classList.remove("oculto");
  btnProxima.classList.add("oculto");

  /* --- Animação de puxar a carta --- */
  carta.classList.remove("entrando");
  void carta.offsetWidth; // reinicia a animação
  carta.classList.add("entrando");
}

/* ------------------------------------------------------------
   7) SELECIONAR UMA ALTERNATIVA
   ------------------------------------------------------------ */
function selecionarOpcao(indiceOriginal) {
  if (cartaRespondida) return;

  opcaoSelecionada = indiceOriginal;
  mensagemAviso.textContent = "";

  listaOpcoes.querySelectorAll(".opcao").forEach((botao) => {
    botao.classList.toggle("selecionada", Number(botao.dataset.indice) === indiceOriginal);
  });
}

/* ------------------------------------------------------------
   8) CONFIRMAR A RESPOSTA
   ------------------------------------------------------------ */
function responderCarta() {
  if (cartaRespondida) return;

  if (opcaoSelecionada === null) {
    mensagemAviso.textContent = "Escolha uma alternativa para continuar.";
    return;
  }

  cartaRespondida = true;
  const dados = perguntas[ordemCartas[indiceCartaAtual]];
  const acertou = opcaoSelecionada === dados.correta;

  /* Bloqueia as opções e marca a certa e a errada */
  listaOpcoes.querySelectorAll(".opcao").forEach((botao) => {
    const indice = Number(botao.dataset.indice);
    botao.classList.add("bloqueada");
    botao.classList.remove("selecionada");
    botao.disabled = true;

    if (indice === dados.correta) {
      botao.classList.add("correta");
    } else if (indice === opcaoSelecionada) {
      botao.classList.add("incorreta");
    }
  });

  /* Letra em que a resposta certa apareceu nesta carta */
  const letraCorreta = LETRAS[ordemOpcoes.indexOf(dados.correta)];

  const titulo = document.createElement("span");
  titulo.className = "feedback-titulo";
  titulo.textContent = acertou
    ? "Você acertou! +1 ponto"
    : `Resposta certa: ${letraCorreta}) ${dados.opcoes[dados.correta]}`;

  const explicacao = document.createElement("span");
  explicacao.className = "feedback-explicacao";
  explicacao.textContent = dados.explicacao;

  feedback.textContent = "";
  feedback.className = "feedback " + (acertou ? "acerto" : "erro");
  feedback.append(titulo, explicacao);
  feedback.classList.add("mostrar");

  if (acertou) pontuacao += 1;
  atualizarPontuacao();

  /* Troca os botões */
  btnResponder.classList.add("oculto");
  btnProxima.classList.remove("oculto");
  btnProxima.textContent =
    indiceCartaAtual + 1 >= TOTAL_PERGUNTAS ? "Ver meu resultado" : "Puxar próxima carta";

  /* No celular, leva o feedback e o botão para a área visível */
  setTimeout(() => {
    btnProxima.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
}

/* ------------------------------------------------------------
   9) PONTUAÇÃO NO CABEÇALHO
   ------------------------------------------------------------ */
function atualizarPontuacao() {
  pontosAtualEl.textContent = pontuacao;
}

/* ------------------------------------------------------------
   10) PRÓXIMA CARTA OU FIM DE JOGO
   ------------------------------------------------------------ */
function proximaCarta() {
  indiceCartaAtual += 1;

  if (indiceCartaAtual >= TOTAL_PERGUNTAS) {
    finalizarJogo();
    return;
  }

  carregarCarta();
  /* volta o foco para o topo da carta nova */
  carta.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ------------------------------------------------------------
   11) TELA FINAL
   ------------------------------------------------------------ */
function finalizarJogo() {
  barraProgresso.style.width = "100%";
  barraProgressoWrap.setAttribute("aria-valuenow", TOTAL_PERGUNTAS);

  pontuacaoFinalEl.textContent = pontuacao;
  mensagemFinalEl.textContent = mensagemPorPontuacao(pontuacao);

  const erros = TOTAL_PERGUNTAS - pontuacao;
  const porcentagem = Math.round((pontuacao / TOTAL_PERGUNTAS) * 100);
  detalheFinalEl.textContent =
    `${porcentagem}% de aproveitamento · ${erros} ${erros === 1 ? "erro" : "erros"}`;

  boletimDataEl.textContent = new Date().toLocaleDateString("pt-BR");

  mostrarTela(telaFinal);
}

function mensagemPorPontuacao(pontos) {
  if (pontos === TOTAL_PERGUNTAS) return "Gabaritou a pilha inteira!";
  if (pontos >= 26) return "Resultado excelente!";
  if (pontos >= 21) return "Muito bom, você manja dos assuntos.";
  if (pontos >= 15) return "Bom resultado, dá para melhorar ainda mais.";
  if (pontos >= 8) return "Boa tentativa! Jogue de novo para subir a pontuação.";
  return "Cada carta é um aprendizado. Bora tentar mais uma vez?";
}

/* ------------------------------------------------------------
   12) EVENTOS
   ------------------------------------------------------------ */
btnComecar.addEventListener("click", iniciarJogo);
btnResponder.addEventListener("click", responderCarta);
btnProxima.addEventListener("click", proximaCarta);
btnJogarNovamente.addEventListener("click", iniciarJogo);

/* Atalhos de teclado (úteis para apresentar no computador):
   teclas 1 a 4 escolhem a alternativa, Enter confirma ou avança. */
document.addEventListener("keydown", (evento) => {
  if (!telaJogo.classList.contains("ativa")) return;

  if (["1", "2", "3", "4"].includes(evento.key) && !cartaRespondida) {
    const posicao = Number(evento.key) - 1;
    if (posicao < ordemOpcoes.length) selecionarOpcao(ordemOpcoes[posicao]);
    return;
  }

  if (evento.key === "Enter") {
    /* evita disparar duas vezes quando um botão já está com foco */
    if (document.activeElement && document.activeElement.tagName === "BUTTON") return;
    evento.preventDefault();
    if (cartaRespondida) {
      proximaCarta();
    } else {
      responderCarta();
    }
  }
});
