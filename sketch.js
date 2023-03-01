function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  quadrado = new bloco(1, 1);
  quadrado.comecar();
  bola = new Bola(quadrado.quadrados.length);
  jg = new jogador();
  controlar = new gerenciar();
  bon = new bonus();
  frameRate(60);
}

function draw() {
  background("#fae");
  if (keyIsDown(SHIFT)) {
    quadrado.animacaoexplodir();
  }
  quadrado.desenha();
  bola.desenhar();
  bola.baterBola(quadrado, controlar.contagem, bon);
  bola.baterParede();
  jg.desenhar();
  jg.movimentar();
  bon.cair();
  bon.desenhar();
  jg.baterBola(bola);
  controlar.Vencer(bola, jg, quadrado);
  controlar.perder(bola, jg, quadrado);
  bon.pegarBonus(jg, bola);
  //jg.IA(bola)
  if (!controlar.rodar) {
    if (controlar.vidas == 0) {
      controlar.GamerOver();
    }
    if (controlar.ganhou) {
      controlar.desenharVencer();
    }
    if (keyIsDown(ENTER)) {
      if (controlar.vidas == 0 || controlar.ganhou) {
        quadrado.comecar();
        controlar.vidas = 3;
        bola.zerar(quadrado.quadrados.length, jg);
        controlar.ganhou = false;
      }
    }
  } else {
    bola.movimentar();
    controlar.desenharPonto();
  }
  for (bola.bola of bola.bolas) {
    if (!bola.bola[4]) {
      bola.manterBolaX(jg);
      if (keyIsDown(ENTER)) {
        controlar.iniciar(bola, jg);
      }
    }
  }
}
