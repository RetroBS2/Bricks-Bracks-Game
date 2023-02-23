class gerenciar{
  constructor(){
    this.vidas = 3;
    this.vencer = false;
    this.rodar = false;
    this.ganhou = false;
  }
  
  perder(ball, jogador, quad){
    if(ball.posicaoY > height){
      this.vidas -= 1;
      ball.posicaoY = jogador.y-ball.raio;
      ball.posicaoX = jogador.x + jg.largura/2;
      ball.velocidadeY = 0;
      ball.velocidadeX = 0;
      this.rodar = false;
      if(this.vidas == 0){
        quad.ApagarTodosOsBlocos();
      }
    }
  }
    iniciar(ball, jogador){
      let num = [3, 2, -2, 3]
      ball.velocidadeX = random(num)
      ball.velocidadeY = random(-5,-3)
      this.rodar = true;
  }
  desenharPonto(){
    fill(0);
    textSize(30);
    text(this.vidas, width-20,height-10)
  }
  GamerOver(blocos){
    
    fill('rgb(100%,0%,10%)');
    textSize(50);
    text('Game Over', width/2-120, height/2+50)
  }
  
  desenharVencer(){
      fill(color(0, 0, 255));
      textSize(50);
      text('Parabéns', width/2-120, height/2);
      text('Você Venceu!!!', width/2-180, height/2+50);
  }
  
  Vencer(ball, jogador, quad){
    if(ball.contagem == ball.contarVencer){
      this.vidas -= 1;
      ball.posicaoY = jogador.y-ball.raio;
      ball.posicaoX = jogador.x + jg.largura/2;
      ball.velocidadeY = 0;
      ball.velocidadeX = 0;
      this.rodar = false;
      this.ganhou = true;
      quad.ApagarTodosOsBlocos();
    }
  }
}