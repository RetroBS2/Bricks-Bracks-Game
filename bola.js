class Bola {
  constructor(bloco) {
    this.posicaoX = width / 2;
    this.posicaoY = height - 30;
    this.raio = 15;
    this.velocidadeY = -4;
    this.velocidadeX = -3;
    this.contarVencer = bloco;
    this.contagem = 0;
    this.bolas = [];
    this.bolas.push([
      this.posicaoX,
      this.posicaoY,
      this.velocidadeX,
      this.velocidadeY,
      false,
    ]);
  }

  desenhar() {
    for (this.bola of this.bolas) {
      if (this.bola[5] == 7) {
        fill("green");
      } else {
        fill("rgb(100%,0%,10%)");
      }
      circle(this.bola[0], this.bola[1], this.raio);
    }
  }

  zerar(bloco, jogador) {
    this.contarVencer = bloco;
    this.contagem = 0;
    this.bolas = [];
    this.bolas.push([jogador.x+jogador.largura/2, jogador.y-this.raio, 0, 0, false])
  }

  movimentar() {
    for (this.bola of this.bolas) {
      if (this.bola[4]) {
        this.bola[0] += this.bola[2];
        this.bola[1] += this.bola[3];
      }
    }
  }

  baterBola(quadrados, cont, bonus) {
    this.quadtam = quadrados.tamanho;
    for (this.quadr of quadrados.quadrados) {
      for (this.bola of this.bolas) {
        // Bater em Baixo
        if (
          this.quadr[1] + quadrados.tamanho >= this.bola[1] - this.raio / 2 &&
          this.quadr[1] + quadrados.tamanho / 4 <
            this.bola[1] - this.raio / 2 &&
          this.quadr[0] < this.bola[0] + this.raio / 2 &&
          this.quadr[0] + quadrados.tamanho > this.bola[0] - this.raio / 2 &&
          this.bola[3] < 0
        ) {
          this.bola[3] *= -1;
          if (this.quadr[2] == 3 || this.quadr[2] == 7) {
            bonus.blocobonus.push([
              this.quadr[0],
              this.quadr[1],
              this.quadr[2],
            ]);
          }
          if (this.bola[5] == 7) {
            var index = this.bolas.indexOf(this.bola);
            if (index > -1) {
              this.bolas.splice(index, 1);
            }
            this.explodir(this.quadr[0], this.quadr[1], quadrados);
          } else {
            this.quadr.pop();
            this.contagem += 1;
            this.quadr.pop();
          }
        }

        // Bater em cima
        if (
          this.quadr[1] <= this.bola[1] + this.raio / 2 &&
          this.quadr[1] + (quadrados.tamanho / 4) * 3 >=
            this.bola[1] + this.raio / 2 &&
          this.quadr[0] < this.bola[0] + this.raio / 2 &&
          this.quadr[0] + quadrados.tamanho > this.bola[0] - this.raio / 2 &&
          this.bola[3] > 0
        ) {
          this.bola[3] *= -1;
          if (this.quadr[2] == 3 || this.quadr[2] == 7) {
            bonus.blocobonus.push([
              this.quadr[0],
              this.quadr[1],
              this.quadr[2],
            ]);
          }
          if (this.bola[5] == 7) {
            var index = this.bolas.indexOf(this.bola);
            if (index > -1) {
              this.bolas.splice(index, 1);
            }
            this.explodir(this.quadr[0], this.quadr[1], quadrados);
          } else {
            this.quadr.pop();
            this.contagem += 1;
            this.quadr.pop();
          }
        }

        // Bater na direita
        if (
          this.quadr[0] + quadrados.tamanho >= this.bola[0] - this.raio / 2 &&
          this.quadr[0] + quadrados.tamanho / 4 <=
            this.bola[0] - this.raio / 2 &&
          this.quadr[1] <= this.bola[1] + this.raio / 2 &&
          this.quadr[1] + quadrados.tamanho >= this.bola[1] - this.raio / 2 &&
          this.bola[2] < 0
        ) {
          this.bola[2] *= -1;
          if (this.quadr[2] == 3 || this.quadr[2] == 7) {
            bonus.blocobonus.push([
              this.quadr[0],
              this.quadr[1],
              this.quadr[2],
            ]);
          }
          if (this.bola[5] == 7) {
            var index = this.bolas.indexOf(this.bola);
            if (index > -1) {
              this.bolas.splice(index, 1);
            }
            this.explodir(this.quadr[0], this.quadr[1], quadrados);
          } else {
            this.quadr.pop();
            this.contagem += 1;
            this.quadr.pop();
          }
        }

        // Bater na esquerda
        if (
          this.quadr[0] <= this.bola[0] + this.raio / 2 &&
          this.quadr[0] + (quadrados.tamanho / 4) * 3 >=
            this.bola[0] + this.raio / 2 &&
          this.quadr[1] <= this.bola[1] + this.raio / 2 &&
          this.quadr[1] + quadrados.tamanho >= this.bola[1] - this.raio / 2 &&
          this.bola[2] > 0
        ) {
          this.bola[2] *= -1;
          if (this.quadr[2] == 3 || this.quadr[2] == 7) {
            bonus.blocobonus.push([
              this.quadr[0],
              this.quadr[1],
              this.quadr[2],
            ]);
          }
          if (this.bola[5] == 7) {
            var index = this.bolas.indexOf(this.bola);
            if (index > -1) {
              this.bolas.splice(index, 1);
            }
            this.explodir(this.quadr[0], this.quadr[1], quadrados);
          } else {
            this.quadr.pop();
            this.contagem += 1;
            this.quadr.pop();
          }
        }
      }
    }
  }

  baterParede() {
    for (this.bola of this.bolas) {
      if (this.bola[0] - this.raio / 2 < 0) {
        this.bola[2] *= -1;
      }

      if (this.bola[0] + this.raio / 2 > width) {
        this.bola[2] *= -1;
      }

      if (this.bola[1] - this.raio / 2 < 0) {
        this.bola[3] *= -1;
      }

      // if(this.posicaoY + this.raio/2 > width){
      //   this.velocidadeY *= -1
      // }
    }
  }

  manterBolaX(jogador) {
    for (this.bola of this.bolas) {
      if (!this.bola[4]) {
        this.bola[0] = jogador.x + jogador.largura / 2;
      }
    }
  }

  explodir(x, y, quadrados) {
    // Maior que X - raio, Y
    // Menor que X + raio, Y
    // Maior que X, Y - raio
    // Menor que X, Y + raio
    
    this.explosaoX = x;
    this.explosaoY = y;
    this.explosaoR = 40;
    for (this.bloco of quadrados.quadrados) {
      if (
        this.bloco[0] >= this.explosaoX - this.explosaoR &&
        this.bloco[0] + quadrados.tamanho <= this.explosaoX + this.explosaoR &&
        this.bloco[1] >= this.explosaoY - this.explosaoR &&
        this.bloco[1] + quadrados.tamanho <= this.explosaoY + this.explosaoR
      ) {
        this.contagem += 1;
        this.bloco.pop();
        this.bloco.pop();
        this.bloco.pop();
      }
    }
  }
}