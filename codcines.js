let filmes = [
  {
    id: 1,
    nome: "Vingadores Era de Utron",
    genero: "Ação",
    sinopse: "os heróis enfrentam uma inteligência artificial criada acidentalmente por Tony Stark e Bruce Banner. Com o objetivo de proteger o mundo, Ultron conclui que a humanidade é a principal ameaça e tenta erradicar a vida na Terra, forçando o grupo a se unir novamente para salvar a humanidade.",
    classificacao: 12,
    duracao: "2:21",
    preco: 30,
    sessoes: [
  {
    sessao: "Segunda - 13:20 | Sala 01 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Segunda - 18:30 | Sala 01 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 13:20 | Sala 01 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 18:30 | Sala 01 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 16:00 | Sala 01 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 12:50 | Sala 01 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 15:50 | Sala 01 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 17:40 | Sala 01 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 19:00 | Sala 01 | 3D Dublado",
    assentos: criarAssentos(40) }
],

    ingressosVendidos: 0
  },
  
  {
    id: 2,
    nome: "Frozen 2",
    genero: "Animação",
    sinopse: "Elsa passa a ouvir uma voz misteriosa vinda da floresta, ameaçando o reino de Arendelle. Para descobrir a origem de seus poderes mágicos e desvendar antigos segredos de seus antepassados, ela, Anna, Kristoff, Olaf e Sven partem em uma jornada épica em direção a uma floresta encantada.",
    classificacao: 0,
    duracao: "1:44",
    preco: 20,
    sessoes: [
  {
    sessao: "Segunda - 22:00 | Sala 02 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 17:05 | Sala 02 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 20:45 | Sala 02 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 15:15 | Sala 02 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 21:00 | Sala 02 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 19:50 | Sala 02 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 21:30 | Sala 02 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 15:35 | Sala 02 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 20:30 | Sala 02 | 2D Dublado",
    assentos: criarAssentos(40) }
],
    
    ingressosVendidos: 0
  },
  
  {
    id: 3,
    nome: "Batman Begins",
    genero: "Suspense",
    sinopse: "O jovem Bruce Wayne viaja para o Oriente e recebe treinamento em artes marciais do mestre Henri Ducard, um membro da misteriosa Liga das Sombras. Quando Ducard revela que a verdadeira proposta da Liga é a destruição completa de Gotham City, Wayne retorna à sua cidade natal com o intuito de livrá-la de criminosos e assassinos. Bruce assume a persona de Batman, o Cavaleiro das Trevas, e conta com a ajuda do mordomo Alfred e do especialista Lucius Fox.",
    classificacao: 16,
    duracao: "2:22",
    preco: 35,
    
    sessoes: [
  {
    sessao: "Segunda - 14:00 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Segunda - 16:20 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 18:00 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 20:20 | Sala 03 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 15:15 | Sala 03 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 17:00 | Sala 03 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 12:55 | Sala 03 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 15:50 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 18:50 | Sala 03 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 19:00 | Sala 03 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 15:00 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 19:30 | Sala 03 | 2D Dublado",
    assentos: criarAssentos(40) }
],

    ingressosVendidos: 0
  },
  
  {
      id: 4,
      nome: "Titanic",
      genero: "Drama",
      sinopse: "Jack Dawson (Leonardo DiCaprio) é um jovem aventureiro que, na mesa de jogo, ganha uma passagem para a primeira viagem do transatlântico Titanic. Trata-se de um luxuoso e imponente navio, anunciado na época como inafundável, que parte para os Estados Unidos. Nele está também Rose DeWitt Bukater (Kate Winslet), a jovem noiva de Caledon Hockley (Billy Zane). Rose está descontente com sua vida, já que sente-se sufocada pelos costumes da elite e não ama Caledon. Entretanto, ela precisa se casar com ele para manter o bom nome da família, que está falida. Um dia, desesperada, Rose ameaça se atirar do Titanic, mas Jack consegue demovê-la da ideia. Pelo ato ele é convidado a jantar na primeira classe, onde começa a se tornar mais próximo de Rose. Logo eles se apaixonam, despertando a fúria de Caledon. A situação fica ainda mais complicada quando o Titanic se choca com um iceberg, provocando algo que ninguém imaginava ser possível: o naufrágio do navio.",
      classificacao: 12,
      duracao: "3:14",
      preco: 40,
       
      sessoes: [
  {
    sessao: "Segunda - 14:00 | Sala 04 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Segunda - 18:20 | Sala 04 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 15:15 | Sala 04 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 21:00 | Sala 04 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 20:00 | Sala 04 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 15:50 | Sala 04 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 20:20 | Sala 04 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 19:00 | Sala 04 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 16:00 | Sala 04 | 2D Dublado",
    assentos: criarAssentos(40) }
],
       
      ingressosVendidos: 0
  },
  
  {
      id: 5,
      nome: "Invocação do Mal",
      genero: "Terror/Mistério",
      sinopse: "Em 1971, a família Perron muda-se para uma fazenda isolada e passa a ser aterrorizada por forças sobrenaturais. Desesperada, a mãe Carolyn contata os renomados investigadores paranormais Ed e Lorraine Warren. O casal descobre que a casa é assombrada por uma poderosa e maligna entidade demoníaca, enfrentando o caso mais aterrorizante de suas vidas.",
      classificacao: 16,
      duracao: "1:52",
      preco: 35,
      
     sessoes: [
  {
    sessao: "Terça - 18:00 | Sala 05 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 22:00 | Sala 05 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 21:00 | Sala 05 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 21:30 | Sala 05 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 18:30 | Sala 05 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 21:45 | Sala 05 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 22:00 | Sala 05 | 2D Dublado",
    assentos: criarAssentos(40) }
],
     
      ingressosVendidos: 0
  },
  
  {
      id: 6,
      nome: "Minha Mãe é uma peça",
      genero: "Comédia",
      sinopse: "Dona Hermínia é uma senhora de meia-idade, divorciada do marido, que a trocou por uma mulher mais jovem. Hiperativa, ela não larga do pé de seus filhos, Marcelina e Juliano. Um dia, após descobrir que eles a consideram chata, ela resolve sair de casa sem avisar ninguém, deixando todos preocupados. Dona Hermínia decide visitar a querida tia Zélia para desabafar suas tristezas atuais e recordar os bons tempos do passado.",
      classificacao: 12,
      duracao: "1:24",
      preco: 20,
      
    sessoes: [
  {
    sessao: "Segunda - 14:15 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Segunda - 16:25 | Sala 06 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 18:00 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 15:15 | Sala 06 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 18:05 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40)  },
  {
    sessao: "Sexta - 14:40 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 17:50 | Sala 06 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 14:25 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 18:00 | Sala 06 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 16:45 | Sala 06 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 20:25 | Sala 06 | 3D Dublado",
    assentos: criarAssentos(40) }
],
     
      ingressosVendidos: 0
  },
  
  {
      id: 7,
      nome: "Interestelar",
      genero: "Ficção Cientifica",
      sinopse: "Em um futuro próximo, onde a Terra sofre com pragas e a escassez de recursos, a humanidade enfrenta a extinção iminente. O ex-piloto da NASA, Cooper, é convocado para liderar uma missão desesperada: viajar por um buraco de minhoca recém-descoberto em busca de outros planetas habitáveis para salvar a espécie.",
      classificacao: 10,
      duracao: "2:49",
      preco: 45,
      
     sessoes: [
  {
    sessao: "Segunda - 13:10 | Sala 07 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Segunda - 16:20 | Sala 07 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 18:30 | Sala 07 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 14:25 | Sala 07 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 18:35 | Sala 07 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 12:40 | Sala 07 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 15:20 | Sala 07 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 13:40 | Sala 07 | 2D Dublado",
    assentos: criarAssentos(40) }
    ],
    
      ingressosVendidos: 0
  },
  
  {
      id: 8,
      nome: "Como Eu Era Antes de Você",
      genero: "Romance",
      sinopse: "Em Como Eu Era Antes de Você, o rico e bem sucedido Will (Sam Claflin) leva uma vida repleta de conquistas, viagens e esportes radicais até ser atingido por uma moto. O acidente o torna tetraplégico, obrigando-o a permanecer em uma cadeira de rodas. A situação o torna depressivo e extremamente cínico, para a preocupação de seus pais (Janet McTeer e Charles Dance). É neste contexto que Louisa Clark (Emilia Clarke) é contratada para cuidar de Will. De origem modesta, com dificuldades financeiras e sem grandes aspirações na vida, ela faz o possível para melhorar o estado de espírito de Will e, aos poucos, acaba se envolvendo com ele.",
      classificacao: 0,
      duracao: "1:50",
      preco: 12,
      
      sessoes: [
  {
    sessao: "Terça - 17:30 | Sala 08 | 2D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Terça - 20:55 | Sala 08 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 14:35 | Sala 08 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quarta - 18:50 | Sala 08 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 12:50 | Sala 08 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Quinta - 22:00 | Sala 08 | 3D Legendado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sexta - 14:15 | Sala 08 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Sábado - 22:00 | Sala 08 | 3D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 16:25 | Sala 08 | 2D Dublado",
    assentos: criarAssentos(40) },
  {
    sessao: "Domingo - 20:35 | Sala 08 | 3D Legendado",
    assentos: criarAssentos(40) }
],
      
      ingressosVendidos: 0
  },
 
];
let totalArrecadado = 0;
let total = 0;
let quantidade = 0;
let filmeSelecionado = null;
let valor_pagamento = 0;
let sessaoSelecionada = null; 
let metodoPagamento = 0;

// ====================== MENU ============================
function menu() {

  console.log(`
====== SEJA BEM-VINDO AO CODCINES =====|
Escolha uma das opções abaixo:         | 
---------------------------------------|
1 - Comprar Ingressos.                 |
---------------------------------------|
2 - Loja.                              | 
---------------------------------------|
3 - Lista de Filmes.                   | 
---------------------------------------|
4 - Consultar Mapa de Assentos.        |
---------------------------------------|
5 - Relatório De Vendas.               |
---------------------------------------|
0 - Sair.                              |
=======================================|
`);

  let opcao = Number(prompt("Opção: "));
  if (opcao === 1) {
    comprarIngresso();
  } else if (opcao === 2) {
    loja();
  } else if (opcao === 3) {
    listarFilmes();
    menu();
  } else if (opcao === 4) {
    console.log("Use opção 1 (Comprar Ingresso) para ver os assentos.");
    menu();
  } else if (opcao === 5) {
      
    let senha = Number(prompt("Senha administrador: "));
    if (senha === 2444) {
        relatorio();
     }else {
      console.log("Senha inválida!");
      menu();
    } 
     
  }else if (opcao === 0) {
    console.log("Sistema encerrado!");
  }
  else {
    console.log("Opção inválida!");
    menu();
  }
}

function criarAssentos(quantidade) {
  let assentos = [];

  for (let i = 0; i < quantidade; i++) {
    assentos.push("Livre");
  }

  return assentos;
} 

// ------------------------ FUNÇÕES ------------------------
// LISTAR FILMES
function listarFilmes() {
    
  console.log("\n🎬 FILMES EM CARTAZ:\n");

  for (let i = 0; i < filmes.length; i++) {

    console.log(
      `${filmes[i].id} - ${filmes[i].nome} | ${filmes[i].genero} | ${filmes[i].classificacao}+ | ${filmes[i].duracao} | R$${filmes[i].preco}`
    );

  }
}

function listarSessoes(filme) {

  console.log("\n🎬 SESSÕES DISPONÍVEIS:\n");

  for (let i = 0; i < filme.sessoes.length; i++) {

    console.log(
      `${i + 1} - ${filme.sessoes[i].sessao}`
    );

  }
}

// MOSTRAR ASSENTOS
function mostrarAssentos(sessao) {

  console.log("\n MAPA DE ASSENTOS:\n");

  let linha = "";

  for (let i = 0; i < sessao.assentos.length; i++) {

    let simbolo = sessao.assentos[i] ==="Livre" ? "🟢" : "🔴";

    linha += (i + 1) + simbolo + "   ";

    if ((i + 1) % 5 === 0) {
      console.log(linha);
      linha = "";
    }
  }

  console.log("\n🟢 Livre | 🔴 Ocupado");
}

// CONSULTAR ASSENTOS
function consultarAssentos() {

    listarFilmes();

    let filmeEscolhido = Number(prompt("Digite o ID do filme:"));

    let filme = filmes.find(f => f.id === filmeEscolhido);

    if (!filme) {
        console.log("Filme não encontrado!");
        return menu();
    }

    listarSessoes(filme);

    let sessaoEscolhida = Number(prompt("Escolha a sessão:"));

    let sessao = filme.sessoes[sessaoEscolhida - 1];

    if (!sessao) {
        console.log("Sessão inválida!");
        return menu();
    }

    mostrarAssentos(sessao);

    menu();
}

// COMPRAR INGRESSO
function comprarIngresso() {
    
listarFilmes();

  let filmeEscolhido = Number(
    prompt("Digite o ID do filme:")
  );

  let filme = filmes.find(f => f.id === filmeEscolhido);
  if(!filme) {
    console.log(" Filme não encontrado!");
    return menu();
  }
  
  filmeSelecionado = filme;
  
  console.log(`
🎬 ${filme.nome}

📖 Sinopse:
${filme.sinopse}

 Gênero: ${filme.genero}
 Classificação: ${filme.classificacao}+
 3Duração: ${filme.duracao}
 Preço: R$${filme.preco}
`);
  
  listarSessoes(filme);

let sessaoEscolhida = Number(
    prompt("Escolha a sessão:")
);

 let sessao = filme.sessoes[sessaoEscolhida - 1];
 if (!sessao) {
     console.log("Sessão inválida!");
     return menu();
 }
 sessaoSelecionada = sessao;
  let idade = Number(
    prompt("Digite sua idade:")
  );

  if(idade < filme.classificacao) {

    console.log(
      "❌ Você não possui idade suficiente para assistir esse filme!"
    );
    menu();
    return;
  }
  
  quantidade = Number(
    prompt("Quantidade de ingressos:")
  );



  total = filme.preco * quantidade;

  // DESCONTO

  let estudante =Number(prompt(`
  ----------- Você é Estudante? -----------
  1- Sim
  2- Não
  -----------------------------------------
  Digite o numero da opção desejada:`
  ));

  if(estudante === 1) {

    total = total / 2;

    console.log(" Desconto de estudante aplicado! ");

  }
  
// ---------- PAGAMENTO ----------

console.log(`
========== METODOS DE PAGAMENTO ==========
1 - Débito
2 - Crédito
3 - Pix
4 - Dinheiro
==========================================
`);

let metodo = Number(prompt("Digite o método:"));

if (metodo < 1 || metodo > 4) {
  console.log("Método inválido!");
  return menu();
}

metodoPagamento = "";

if (metodo === 1) {
  metodoPagamento = "Débito";
}

if (metodo === 2) {
  metodoPagamento = "Crédito";

  let parcela = Number(prompt(`
================================|  
1 - A Vista      (Sem Juros)    |
2 - 2x Parcelado (2% juros)     |
3 - 4x Parcelado (3% juros)     |
4 - 6x Parcelado (4% juros)     |  
5 - 8x Parcelado (5% juros)     |
================================|
Digite a opção desejada:`));

  let parcelas = 1;
    if (parcela === 1) {
    total === total;
  } else if (parcela === 2) {
    total += total * 0.02;
  } else if (parcela === 3) {
    total += total * 0.03;
  } else if (parcela === 4) {
    total += total * 0.04;
  } else if (parcela === 5) {
    total += total * 0.05;  
  } else {
      
    console.log("Opção de parcelamento inválida!");
    return menu();
  }

  console.log(
    `${parcelas}x de R$${(total / parcelas).toFixed(2)}`
  );
}

if (metodo === 3) {
  metodoPagamento = "Pix";
  console.log(`
=========== PIX CODCINES ===========
Chave: codcines@pix.com.br
====================================
`);
}

 if (metodo === 4) {
  metodoPagamento = "Dinheiro";
}

console.log(`
========= RESUMO DA COMPRA =========
Filme: ${filme.nome}
Ingressos: ${quantidade}
Total: R$${total.toFixed(2)}
Método: ${metodoPagamento}
====================================
`);

if (metodo >= 1 || metodo <= 4) {
  valor_pagamento = Number(prompt("Digite o valor pago:"));

  if (valor_pagamento < total) {
    console.log("Dinheiro insuficiente!");
    return menu();
  }
} else {
  console.log("💳 Processando pagamento...");
  console.log("✅ Pagamento aprovado!");
  valor_pagamento = total;
}

escolherassento();
}

// ESCOLHER ASSENTO
function escolherassento() {

  mostrarAssentos(sessaoSelecionada);

  for (let i = 0; i < quantidade; i++) {

    let pos = Number(prompt(`Escolha o assento ${i + 1}:`)) - 1;
    if (pos < 0 || pos >= sessaoSelecionada.assentos.length) {
        console.log ("Assento inválido!");
        return menu();
    } 
    if (sessaoSelecionada.assentos[pos] === "Ocupado") {
      console.log("Assento Ocupado!");
      return menu();
    }

    sessaoSelecionada.assentos[pos] = "Ocupado";
  }

  let troco = valor_pagamento - total;

  filmeSelecionado.ingressosVendidos += quantidade;
  totalArrecadado += total;

  console.log(`
~~~~~~~~ COMPRA REALIZADA ~~~~~~~~

Filme: ${filmeSelecionado.nome}
Sessão: ${sessaoSelecionada.sessao}
Ingressos: ${quantidade} 
Pagamento: ${metodoPagamento}
Total: R$${total.toFixed(2)}
Troco: R$${troco.toFixed(2)}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

  menu();
}

// RELATÓRIO
function relatorio() {

  console.log(`
----------------- RELATÓRIO -----------------
Total Arrecadado do Cinema: R$ ${totalArrecadado.toFixed(2)}
 ~~~~~~ INGRESSOS ~~~~~~`);
 
  for (let i = 0; i < filmes.length; i++) {
    console.log(
      filmes[i].nome + ": " + filmes[i].ingressosVendidos
    );
  }

  menu();
}

// LOJA DO CINEMA
function loja(){
    let opcao=Number(prompt(`
============== LOJA DA CODCINES ========|
1- Bebidas                              |
----------------------------------------|
2- Salgados                             |
----------------------------------------|
3- Doces                                |
========================================|

Escolha o número da opção desejada:`))


if (opcao === 1) {
    console.log(`
============== LISTA DE BEBIDAS ==============
1- Água Mineral 500 ml (R$ 3,50)
2- Água com Gás 500 ml (R$ 5,00)
3- Suco (Del Valle) Uva  290 ml (R$ 7,50)
4- Suco (Del Valle) Goiaba  290 ml (R$ 7,50)
5- Suco (Del Valle) Laranja 290 ml (R$ 7,50)
6- Coca-Cola 350 ml (R$ 9,50)
7- Guaraná Antartica 350 ml (R$ 7,50)
8- Fanta Laranja 350 ml (R$ 8,00)
9- Fanta Uva  350 ml (R$ 8,00)
10- Sprite 350 ml (R$ 7,50)
==============================================
    `);
    let quantibebidas=Number(prompt("Digite a quantidade de produtos que deseja comprar:"))
    
    for (let i = 1; i <= quantibebidas; i++) {
    let bebida =Number(prompt(`Digite o número do ${i}° produto:`));
    if (bebida === 1) {
        total += 3.50;
        totalArrecadado += 3.50;
    }else if (bebida === 2) {
        total += 5.00;
        totalArrecadado += 5.00;
    }else if (bebida === 3) {
        total += 7.50;
        totalArrecadado += 7.50;
    }else if (bebida === 4) {
        total += 7.50;
        totalArrecadado += 7.50;
    }else if (bebida === 5) {
        total += 7.50;
        totalArrecadado += 7.50;
    }else if (bebida === 6) {
        total += 9.50;
        totalArrecadado += 9.50;
    }else if (bebida === 7) {
        total += 7.50; 
        totalArrecadado += 7.50;
    }else if (bebida === 8) {
        total += 8.00;
        totalArrecadado += 8.00;
    }else if (bebida === 9) {
        total += 8.00;
        totalArrecadado += 8.00;
    }else if (bebida === 10) {
        total += 7.50; 
        totalArrecadado += 7.50;
    }else {
    console.log("!!!Opção Invalida!!!");
    menu();
}
    
    }
   console.log(`
========== METODOS DE PAGAMENTO ==========
1 - Débito
2 - Crédito
3 - Pix
4 - Dinheiro
==========================================
`);

let metodo = Number(prompt("Digite o método:"));

if (metodo < 1 || metodo > 4) {
  console.log("Método inválido!");
  return menu();
}

metodoPagamento = "";

if (metodo === 1) {
  metodoPagamento = "Débito";
}

if (metodo === 2) {
  metodoPagamento = "Crédito";

  let parcela = Number(prompt(`
================================|  
1 - A Vista      (Sem Juros)    |
2 - 2x Parcelado (2% juros)     |
3 - 4x Parcelado (3% juros)     |
4 - 6x Parcelado (4% juros)     |  
5 - 8x Parcelado (5% juros)     |
================================|
Digite a opção desejada:`));

  let parcelas = 1;
    if (parcela === 1) {
    total === total;
  } else if (parcela === 2) {
    total += total * 0.02;
  } else if (parcela === 3) {
    total += total * 0.03;
  } else if (parcela === 4) {
    total += total * 0.04;
  } else if (parcela === 5) {
    total += total * 0.05;  
  } else {
      
    console.log("Opção de parcelamento inválida!");
    return menu();
  }

  console.log(
    `${parcelas}x de R$${(total / parcelas).toFixed(2)}`
  );
}

if (metodo === 3) {
  metodoPagamento = "Pix";
  console.log(`
=========== PIX CODCINES ===========
Chave: codcines@pix.com.br
====================================
`);
}

 if (metodo === 4) {
  metodoPagamento = "Dinheiro";
}

console.log(`
========= RESUMO DA COMPRA =========
Total: R$${total.toFixed(2)}
Método: ${metodoPagamento}
====================================
`);

if (metodo >= 1 || metodo <= 4) {
  valor_pagamento = Number(prompt(`Digite o valor pago:`));

  if (valor_pagamento < total) {
    console.log("Dinheiro insuficiente!");
    return menu();
  }else {
  console.log("💳 Processando pagamento...");
  console.log("✅ Pagamento aprovado!");
  valor_pagamento = total;
} 
}
total = 0;
menu();
}else if (opcao === 2) {
    console.log(`
============== LISTA DE SALGADOS =============
1- Coxinha Grande (R$ 7,00)
2- Coxinha (R$ 4,50)
3- Mini Coxinha "300 ml o copo" (R$ 5,70)
4- Quibe (R$ 6,50)
5- Pastel Queijo (R$ 3,50)
6- Pastel Carne (R$ 4,00)
7- Pipoca Grande 750g (R$ 15,00)
8- Pipoca Media 450g (R$ 7,50)
9- Pipoca Pequena 250g (R$ 4,30)
10- Fandangos Presunto 230g (R$ 10,00)
11- Cheetos Requeijão 160g (R$ 12,00)
12- Doritos Queijo Nacho 250g (R$ 15,00)
==============================================
    `);
    let quantisalgados=Number(prompt("Digite a quantidade de produtos que deseja comprar:"));
    for (let i = 1; i <= quantisalgados; i++) {
    let salgado =Number(prompt(`Digite o número do ${i}° produto:`));
    if (salgado === 1) {
        total += 7.00;
        totalArrecadado += 7.00;
    }else if (salgado === 2) {
        total += 4.50;
        totalArrecadado += 4.50;
    }else if (salgado === 3) {
        total += 5.70;
        totalArrecadado += 5.70;
    }else if (salgado === 4) {
        total += 6.50;
        totalArrecadado += 6.50;
    }else if (salgado === 5) {
        total += 3.50;
        totalArrecadado += 3.50;
    }else if (salgado === 6) {
        total += 4.00;
        totalArrecadado += 4.00;
    }else if (salgado === 7) {
        total += 15.00;
        totalArrecadado += 15.00;
    }else if (salgado === 8) {
        total += 7.50;
        totalArrecadado += 7.50;
    }else if (salgado === 9) {
        total += 4.30;
        totalArrecadado += 4.30;
    }else if (salgado === 10) {
        total += 10.00;
        totalArrecadado += 10.00;
    }else if (salgado === 11) {
        total += 12.00;
        totalArrecadado += 12.00;
    }else if (salgado === 12) {
        total += 15.00;
        totalArrecadado += 15.00;
    }else {
    console.log("!!!Opção Invalida!!!");
    menu();
}
    } 
    
    console.log(`
========== METODOS DE PAGAMENTO ==========
1 - Débito
2 - Crédito
3 - Pix
4 - Dinheiro
==========================================
`);

let metodo = Number(prompt("Digite o método:"));

if (metodo < 1 || metodo > 4) {
  console.log("Método inválido!");
  return menu();
}

metodoPagamento = "";

if (metodo === 1) {
  metodoPagamento = "Débito";
}

if (metodo === 2) {
  metodoPagamento = "Crédito";

  let parcela = Number(prompt(`
================================|  
1 - A Vista      (Sem Juros)    |
2 - 2x Parcelado (2% juros)     |
3 - 4x Parcelado (3% juros)     |
4 - 6x Parcelado (4% juros)     |  
5 - 8x Parcelado (5% juros)     |
================================|
Digite a opção desejada:`));

  let parcelas = 1;
    if (parcela === 1) {
    total === total;
  } else if (parcela === 2) {
    total += total * 0.02;
  } else if (parcela === 3) {
    total += total * 0.03;
  } else if (parcela === 4) {
    total += total * 0.04;
  } else if (parcela === 5) {
    total += total * 0.05;  
  } else {
      
    console.log("Opção de parcelamento inválida!");
    return menu();
  }

  console.log(
    `${parcelas}x de R$${(total / parcelas).toFixed(2)}`
  );
}

if (metodo === 3) {
  metodoPagamento = "Pix";
  console.log(`
=========== PIX CODCINES ===========
Chave: codcines@pix.com.br
====================================
`);
}

 if (metodo === 4) {
  metodoPagamento = "Dinheiro";
}

console.log(`
========= RESUMO DA COMPRA =========
Total: R$${total.toFixed(2)}
Método: ${metodoPagamento}
====================================
`);

if (metodo >= 1 || metodo <= 4) {
  valor_pagamento = Number(prompt("Digite o valor pago:"));

  if (valor_pagamento < total) {
    console.log("Dinheiro insuficiente!");
    return menu();
  }else {
  console.log("💳 Processando pagamento...");
  console.log("✅ Pagamento aprovado!");
  valor_pagamento = total;
} 
  
}
total = 0;
menu();
}else if (opcao === 3) {
    console.log(`
============== LISTA DE DOCES =================
1- Pipoca Doce 350g (R$ 6,50)
2- Pipoca de Caramelo 350g (R$ 7,00)
3- Bala Fini 60g (R$ 5,00)
4- 3x Brigadeiro 75g (R$ 10,00)
5- Mousse Maracujá 250ml (R$ 8,50)
6- Mousse Limão 250ml (R$ 8,50)
7- Mousse Morango 250ml (R$ 8,50)
8- Churros (R$ 2,50)
9- Casquinha Baunilha 200ml (R$ 4,50)
10- Casquinha Chocolate 200ml (R$ 4,50)
11- Casquinha Misto 200ml (R$ 5,00)
==============================================`);
    let quantidoces=Number(prompt("Digite a quantidade de produtos que deseja comprar:"))
    for (let i = 1; i <= quantidoces; i++) {
    let doce =Number(prompt(`Digite o número do ${i}° produto:`));
     if (doce === 1) {
        total += 6.50;
        totalArrecadado += 6.50;
    }else if (doce === 2) {
        total += 7.00;
        totalArrecadado += 7.00;
    }else if (doce === 3) {
        total += 5.00;
        totalArrecadado += 5.00;
    }else if (doce === 4) {
        total += 10.00;
        totalArrecadado += 10.00;
    }else if (doce === 5) {
        total += 8.50;
        totalArrecadado += 8.50;
    }else if (doce === 6) {
        total += 8.50;
        totalArrecadado += 8.50;
    }else if (doce === 7) {
        total += 8.50;
        totalArrecadado += 8.50;
    }else if (doce === 8) {
        total += 2.50;
        totalArrecadado += 2.50;
    }else if (doce === 9) {
        total += 4.50;
        totalArrecadado += 4.50;
    }else if (doce === 10) {
        total += 4.50;
        totalArrecadado += 4.50;
    }else if (doce === 11) {
        total += 5.00;
        totalArrecadado += 5.00;
    }else {
    console.log("!!!Opção Invalida!!!");
}
    }
    console.log(`
========== METODOS DE PAGAMENTO ==========
1 - Débito
2 - Crédito
3 - Pix
4 - Dinheiro
==========================================
`);

let metodo = Number(prompt("Digite o método:"));

if (metodo < 1 || metodo > 4) {
  console.log("Método inválido!");
  return menu();
}

metodoPagamento = "";

if (metodo === 1) {
  metodoPagamento = "Débito";
}

if (metodo === 2) {
  metodoPagamento = "Crédito";

  let parcela = Number(prompt(`
================================|  
1 - A Vista      (Sem Juros)    |
2 - 2x Parcelado (2% juros)     |
3 - 4x Parcelado (3% juros)     |
4 - 6x Parcelado (4% juros)     |  
5 - 8x Parcelado (5% juros)     |
================================|
Digite a opção desejada:`));

  let parcelas = 1;
    if (parcela === 1) {
    total === total;
  } else if (parcela === 2) {
    total += total * 0.02;
  } else if (parcela === 3) {
    total += total * 0.03;
  } else if (parcela === 4) {
    total += total * 0.04;
  } else if (parcela === 5) {
    total += total * 0.05;  
  } else {
      
    console.log("Opção de parcelamento inválida!");
    return menu();
  }

  console.log(
    `${parcelas}x de R$${(total / parcelas).toFixed(2)}`
  );
}

if (metodo === 3) {
  metodoPagamento = "Pix";
  console.log(`
=========== PIX CODCINES ===========
Chave: codcines@pix.com.br
====================================
`);
}

 if (metodo === 4) {
  metodoPagamento = "Dinheiro";
}

console.log(`
========= RESUMO DA COMPRA =========
Total: R$${total.toFixed(2)}
Método: ${metodoPagamento}
====================================
`);

if (metodo >= 1 || metodo <= 4) {
  valor_pagamento = Number(prompt("Digite o valor pago:"));

  if (valor_pagamento < total) {
    console.log("Dinheiro insuficiente!");
    return menu();
  }else {
  console.log("💳 Processando pagamento...");
  console.log("✅ Pagamento aprovado!");
  valor_pagamento = total;
} 
  
}
total = 0;
menu();
  
}else {
    console.log("!!!Opção Invalida!!!");
    menu();
}
}

// INICIAR
function cadastrarUsuario() {
    console.log("========== CADASTRAR USUARIO ==========");
  let nome = prompt("Digite seu nome:");
  let idade = Number(prompt("Digite sua idade:"));
  let cpf = prompt("Digite seu cpf: ");
 if (idade >= 18){
    console.log("Usuário cadastrado com sucesso!");
    menu();
 }else{
     console.log("Usuário não tem idade suficiente!!!!!!");
     cadastrarUsuario()
 }

}

cadastrarUsuario()

menu();

