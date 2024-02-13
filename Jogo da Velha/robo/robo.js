var vez = 'jogadorX';
var placar = document.getElementById('placar')
var resultado = document.getElementById('vencer')
pontosX = 0
pontosRobo = 0
placar.innerHTML = `<img id='iconX' src='../abstract-shape-memphis-geometric-design-element-modern-shape-with-transparent-background-png.webp'> <h1 class='placar'> ${pontosX} : ${pontosRobo} </h1><img id='iconO' src='../319248.png'>`


var vencedorEncontrado = false;


var quadrados = [
  document.getElementById('quadrado1'),
  document.getElementById('quadrado2'),
  document.getElementById('quadrado3'),
  document.getElementById('quadrado4'),
  document.getElementById('quadrado5'),
  document.getElementById('quadrado6'),
  document.getElementById('quadrado7'),
  document.getElementById('quadrado8'),
  document.getElementById('quadrado9')
];
var marcados = [];
var marcadosX = [];
var marcadosRobo = [];
var jogoFinalizado = false;  // Variável de controle para verificar se o jogo já foi vencido

function jogar() {
  quadrados.forEach(function(quadrado) {
    

      if (!jogoFinalizado) {
        quadrado.addEventListener('click', function (){
          if (vez === 'jogadorX' && !marcadosX.includes(quadrado.id) && !marcadosRobo.includes(quadrado.id) && !marcados.includes(quadrado.id)) {
            quadrado.innerHTML = "<img class='qdrimg' src='../abstract-shape-memphis-geometric-design-element-modern-shape-with-transparent-background-png.webp'>";
            marcadosX.push(quadrado.id);
            marcados.push(quadrado.id);
            verificar();  // Verifica se o jogo foi finalizado
            jogarRobo()
          }
        })
        

      }
    
  });
}


var casas = ['quadrado1', 'quadrado3', 'quadrado4', 'quadrado5', 'quadrado6', 'quadrado7', 'quadrado8', 'quadrado9']

function jogarRobo(){
  if(vencedorEncontrado == true){
    console.log('')
    
  }else{
    if (!jogoFinalizado) {
      // Filtra as casas que ainda não foram marcadas
      var casasDisponiveis = casas.filter(function(casa) {
        return !marcados.includes(casa);
      });

      // Escolhe aleatoriamente uma casa disponível
      var casaEscolhida = casasDisponiveis[Math.floor(Math.random() * casasDisponiveis.length)];

      // Encontra o quadrado correspondente à casa escolhida
      var quadradoEscolhido = document.getElementById(casaEscolhida);

      // Marca o quadrado escolhido pelo robô
      quadradoEscolhido.innerHTML = "<img class='qdrimg' src='../319248.png'>";
      marcadosRobo.push(casaEscolhida);
      marcados.push(casaEscolhida);

      vez = 'jogadorX'
      // Verifica se o jogo foi finalizado
      verificar();
    }
  }
  // Verifica se o jogo ainda não foi finalizado
  
}

function verificar() {
  function contemTodos(elementos, array) {
    return elementos.every(function(elemento) {
      return array.includes(elemento);
    });
  }

  var lista_acertos = [
    ['quadrado1', 'quadrado2', 'quadrado3'],
    ['quadrado1', 'quadrado4', 'quadrado7'],
    ['quadrado1', 'quadrado5', 'quadrado9'],
    ['quadrado3', 'quadrado6', 'quadrado9'],
    ['quadrado2', 'quadrado5', 'quadrado8'],
    ['quadrado3', 'quadrado5', 'quadrado7'],
    ['quadrado7', 'quadrado8', 'quadrado9'],
    ['quadrado4', 'quadrado5', 'quadrado6']
  ];


  for (var i = 0; i < lista_acertos.length; i++) {
    if (contemTodos(lista_acertos[i], marcadosX) && !vencedorEncontrado) {

      pontosX += 1;
      Xvenceu();
      vencedorEncontrado = true;
    } else if (contemTodos(lista_acertos[i], marcadosRobo) && !vencedorEncontrado) {
      Robovenceu();
      vencedorEncontrado = true;
    }
  }

  if (!vencedorEncontrado && marcados.length === 9) {
    limpar();
  }
}



function Xvenceu() {
  setTimeout(function (){
    console.log(pontosX)
    resultado.innerHTML = `<img class='img' src='../abstract-shape-memphis-geometric-design-element-modern-shape-with-transparent-background-png.webp'> <h1 class='vc'>VENCEU!!<h1>`;
    atualizarPlacar();
    limpar();
    jogoFinalizado = true;
  }, 1500);
}

function Robovenceu() {
  setTimeout(function () {
    pontosRobo += 1;
    console.log(pontosRobo)
    resultado.innerHTML = `<img class='img' src='../319248.png'> <h1 class='vc'>VENCEU!!<h1>`;
    atualizarPlacar();
    limpar();
    jogoFinalizado = true;
  }, 1500);
}



function atualizarPlacar() {
  placar.innerHTML = `<img id='iconX' src='../abstract-shape-memphis-geometric-design-element-modern-shape-with-transparent-background-png.webp'> <h1 class='placar'> ${pontosX} : ${pontosRobo} </h1><img id='iconO' src='../319248.png'>`;
}


function restart(){
  marcados = [];
  marcadosX = [];
  marcadosRobo = [];
  jogoFinalizado = false;  // Variável de controle para verificar se o jogo já foi vencido
  quadrados.forEach(function(quadrado) {
    quadrado.innerHTML = "";
  });
}


function limpar() {
  vencedorEncontrado = false
  jogoFinalizado = false;  // Define a variável de controle como false para permitir novo jogo
  quadrados.forEach(function(quadrado) {
    quadrado.innerHTML = "<img id='restart' src='../pngtree-vector-art-layer-of-a-restart-and-refresh-icon-button-for-a-video-game-asset-menu-vector-png-image_24756282.png'>";
  });
  var imagens = 
    [
      document.getElementsByTagName('img')[3],
      document.getElementsByTagName('img')[4],
      document.getElementsByTagName('img')[5],
      document.getElementsByTagName('img')[6],
      document.getElementsByTagName('img')[7],
      document.getElementsByTagName('img')[8],
      document.getElementsByTagName('img')[9],
      document.getElementsByTagName('img')[10],
      document.getElementsByTagName('img')[11]
    ]
  imagens.forEach(function(imagem){
    imagem.onclick = restart
  })
}

jogar()