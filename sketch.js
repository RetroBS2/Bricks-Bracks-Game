

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    quadrado = new bloco(1, 1);
    quadrado.comecar();
    bola = new Bola(quadrado.quadrados.length);
    jg = new jogador;
    controlar = new gerenciar;
}

function draw() {
    background('#fae');
    quadrado.desenha();
    bola.desenhar();
    bola.baterBola(quadrado, controlar.contagem);
    bola.baterParede();
    jg.desenhar();
    jg.movimentar();
    jg.baterBola(bola)
    controlar.Vencer(bola, jg, quadrado);
    controlar.perder(bola, jg, quadrado);
    //jg.IA(bola)
    if(!controlar.rodar){
      if(controlar.vidas == 0){
        controlar.GamerOver();
      }
      if(controlar.ganhou){
        controlar.desenharVencer();
      }
      if(keyIsDown(ENTER)){
        controlar.iniciar(bola, jg);
        if(controlar.vidas == 0 || controlar.ganhou){
          quadrado.comecar();
          controlar.vidas = 3;
          bola.zerar(quadrado.quadrados.length)
          controlar.ganhou = false;
        }
      }
      bola.manterBolaX(jg);
    }else{
      bola.movimentar();
      controlar.desenharPonto();
    }
}
