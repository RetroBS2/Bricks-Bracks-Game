class bonus {
    constructor(b, x, y) {
      this.tipoBonus = b;
      this.y = y;
      this.x = x;
      this.velocidadeY = 1;
      this.tamanho = 10;
      this.blocobonus = [];
      this.contador = 0;
    }
  
    desenhar() {
      for (this.bloco of this.blocobonus) {
        if (this.bloco[2] == 7) {
          fill("green");
        } else {
          fill("red");
        }
        square(this.bloco[0], this.bloco[1], this.tamanho);
      }
    }
  
    cair() {
      if (this.blocobonus.length > 0) {
        for (this.bloco of this.blocobonus) {
          this.bloco[1] += this.velocidadeY;
        }
      }
    }
  
    pegarBonus(jogador, bola) {
      for (this.bloco of this.blocobonus) {
        if (
          (jogador.x < this.bloco[0] + this.tamanho &&
          jogador.x + jogador.largura > this.bloco[0]- this.tamanho) &&
          this.bloco[1]+this.tamanho >= jogador.y &&
          this.bloco[1] < jogador.y + jogador.altura
        ) {
          if (this.bloco[2] == 3 || this.bloco[2] == 7) {
            bola.bolas.push([
              jogador.x + jogador.largura / 2,
              jogador.y - bola.raio,
              bola.velocidadeX,
              bola.velocidadeY,
              false,
              this.bloco[2],
            ]);
          }
          var index = this.blocobonus.indexOf(this.bloco);
          if (index > -1) {
            this.blocobonus.splice(index, 1);
          }
        }
      }
    }
  
    apagarBonus() {
      for (this.bloco of this.blocobonus) {
        if (this.bloco[1] > height) {
          var index = this.blocobonus.indexOf(this.bloco);
          if (index > -1) {
            this.blocobonus.splice(index, 1);
          }
        }
      }
    }
  }
  
  // Apagar o bloco se cair demais da tela, e delimitar o limite de pegar o bloco
  