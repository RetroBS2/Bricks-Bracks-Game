class jogador {
  constructor() {
    this.largura = 80;
    this.altura = 12;
    this.arredondar = 20;
    this.x = width / 2 - this.largura / 2;
    this.y = height - this.altura * 2;
    this.velocidadeX = 0;
    this.angle = 0;
    this.forca = 0;
  }

  desenhar() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(51);
    rect(0, 0, this.largura, this.altura, this.arredondar);
    pop();
  }

  movimentar() {
    if (this.x + this.largura < width) {
      if (keyIsDown(RIGHT_ARROW)) {
        if (this.forca < 5) {
          this.forca += 0.25;
        }
        this.velocidadeX = this.forca;
        if (this.angle < 3) {
          this.angle += 0.3;
        }
      }
    } else {
      this.x = width - this.largura;
    }

    if (this.x > 0) {
      if (keyIsDown(LEFT_ARROW)) {
        if (this.forca > -5) {
          this.forca -= 0.25;
        }
        this.velocidadeX = this.forca;
        if (this.angle > -3) {
          this.angle -= 0.3;
        }
      }
    } else {
      this.x = 0;
    }
    if (!keyIsPressed) {
      if (this.angle != 0) {
        if (this.angle > 0) {
          this.angle -= 0.3;
        } else if (this.angle < 0) {
          this.angle += 0.3;
        }
      }
      if (this.velocidadeX != 0) {
        if (this.velocidadeX > 0) {
          this.forca -= 0.25;
          this.velocidadeX = this.forca;
        } else if (this.forca < 0) {
          this.forca += 0.25;
          this.velocidadeX = this.forca;
        }
      }
    }
    this.x += this.velocidadeX;
  }

  baterBola(ball) {
    for (this.bola of ball.bolas) {
      if (
        this.x <= this.bola[0] + ball.raio / 2 &&
        this.x + this.largura >= this.bola[0] - ball.raio / 2 &&
        this.y <= this.bola[1] + ball.raio / 2 &&
        this.bola[1] + ball.raio / 2 < this.y + this.altura &&
        this.bola[3] > 0
      ) {
        this.bola[3] *= -1;
      }
    }
  }

  IA(ball) {
    if (ball.posicaoX > this.x + this.largura / 2) {
      if (this.forca < 5) {
        this.forca += 1;
      }
      this.velocidadeX = this.forca;
      if (this.angle < 3) {
        this.angle += 0.3;
      }
      this.movimento = true;
    } else if (ball.posicaoX < this.x + this.largura / 2) {
      if (this.forca > -5) {
        this.forca -= 1;
      }
      this.velocidadeX = this.forca;
      if (this.angle > -3) {
        this.angle -= 0.3;
      }
      this.movimento = true;
    } else {
      this.movimento = false;
    }
  }
}
