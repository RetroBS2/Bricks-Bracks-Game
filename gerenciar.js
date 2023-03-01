class gerenciar{
  constructor(){
    this.vidas = 3;
    this.vencer = false;
    this.rodar = false;
    this.ganhou = false;
  }
  
  perder(ball, jogador, quad){
    for (this.bola of ball.bolas){
    if(this.bola[1] > height){
      var index = ball.bolas.indexOf(this.bola);
      if (index > -1) {
        ball.bolas.splice(index, 1);
      }
    }
    }
      if(ball.bolas.length == 0){
      this.vidas -= 1;
      ball.bolas.push([jogador.x+jogador.largura/2, jogador.y-ball.raio, 0, 0, false])
      this.rodar = false;
      if(this.vidas == 0){
        quad.ApagarTodosOsBlocos();
      }
      }
    
    
  }
    iniciar(ball, jogador){
      for(this.bola of ball.bolas){
        if(!this.bola[4]){
          let num = [3, 2, 1, -1, -2, -3]
          this.bola[2] = random(num);
          this.bola[3] = -3.5;
          this.bola[4] = true;
        }
        if(!this.rodar){
          this.rodar = true;
        }
      }
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