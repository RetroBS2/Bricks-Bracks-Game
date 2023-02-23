class Bola {
    constructor(bloco) {
        this.posicaoX = width / 2;
        this.posicaoY = height - 30;
        this.raio = 15;
        this.velocidadeY = -4;
        this.velocidadeX = -3;
        this.contarVencer = bloco;
        this.contagem = 0;
    }

    desenhar() {
        fill('rgb(100%,0%,10%)');
        circle(this.posicaoX, this.posicaoY, this.raio);
    }
    
    zerar(bloco){
        this.contarVencer = bloco;
        this.contagem = 0;
    }

    movimentar() {
        this.posicaoX += this.velocidadeX;
        this.posicaoY += this.velocidadeY;
    }

    baterBola(quadrados, cont) {
        for (this.quadr of quadrados.quadrados) {
          
          // Bater em Baixo
          if((this.quadr[1] + quadrados.tamanho >= this.posicaoY-this.raio/2 && this.quadr[1] + quadrados.tamanho/4 < this.posicaoY-this.raio/2) && (this.quadr[0] < this.posicaoX+this.raio/2 && this.quadr[0] + quadrados.tamanho > this.posicaoX-this.raio/2) && this.velocidadeY < 0 ){
            this.quadr.pop();
            this.velocidadeY *= -1
            this.contagem += 1;
            
          }
          
          // Bater em cima
          if((this.quadr[1] <= this.posicaoY + this.raio/2 && this.quadr[1] + (quadrados.tamanho/4) * 3 >= this.posicaoY+this.raio/2) && (this.quadr[0] < this.posicaoX+this.raio/2 && this.quadr[0] + quadrados.tamanho > this.posicaoX-this.raio/2) && this.velocidadeY > 0 ){
            this.quadr.pop();
            this.velocidadeY *= -1;
            this.contagem += 1;
            
          }
          
          // Bater na direita
          if((this.quadr[0] + quadrados.tamanho >= this.posicaoX - this.raio/2 && this.quadr[0] + (quadrados.tamanho/4) <= this.posicaoX - this.raio/2) && (this.quadr[1] <= this.posicaoY + this.raio/2 && this.quadr[1] + quadrados.tamanho >= this.posicaoY - this.raio/2) && this.velocidadeX < 0 ){
          
            this.velocidadeX *= -1;
            this.quadr.pop();
            this.contagem += 1;
            
        }
          
          // Bater na esquerda
          if((this.quadr[0] <= this.posicaoX + this.raio/2 && this.quadr[0] + (quadrados.tamanho/4) * 3 >= this.posicaoX + this.raio/2) && (this.quadr[1] <= this.posicaoY + this.raio/2 && this.quadr[1] + quadrados.tamanho >= this.posicaoY - this.raio/2) && this.velocidadeX > 0 ){
            this.velocidadeX *= -1;
            this.quadr.pop();
            this.contagem += 1;
          
          }
    }
    }
  baterParede(){
    
    if(this.posicaoX - this.raio/2 < 0){
      this.velocidadeX *= -1
    }
    
    if(this.posicaoX + this.raio/2 > width){
      this.velocidadeX *= -1
    }
    
    if(this.posicaoY - this.raio/2 < 0){
      this.velocidadeY *= -1
    }
    
    // if(this.posicaoY + this.raio/2 > width){
    //   this.velocidadeY *= -1
    // }
    
  }
  
  manterBolaX(jogador){
    this.posicaoX = jogador.x+jogador.largura/2;
  }
}
