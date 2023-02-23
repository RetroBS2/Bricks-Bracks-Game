class bloco {
    constructor(x, y) {
        this.posicao = createVector(x, y);
        this.tamanho = 20;
        this.quadrados = []
    }
    comecar() {
        let i;
        let j;
        let aleatorio;
        for (let j = 0; j < (height/this.tamanho)/2; j++) {
            for (let i = 0; i < (width/this.tamanho); i++) {
              aleatorio = floor(random(10));
              if(aleatorio != 4){
                this.quadrados.push([this.posicao.x * i * this.tamanho, this.posicao.y * j * this.tamanho])
              }
            }
        }
    }
  ApagarTodosOsBlocos(){
    this.quadrados = [];
  }

    desenha() {
        for (this.blo of this.quadrados) {
            fill(255, 204, 0);
            square(this.blo[0], this.blo[1], this.tamanho)
        }
    }

}
