class Fila {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    isEmpty(){
        return this.inicio === this.fim;
    }
    isFull(){
        return this.size() === this.capacidade;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado;
            this.fim++;
            return;
        }
        throw new Error("Queue overflow");
    }
    dequeue(){
        if (!this.isEmpty()){
            return this.dados[this.inicio++];
        }
        throw new Error("Queue underflow");
    }

    front(){
        if(!this.isEmpty()){
            return this.dados[this.inicio];
        }
    }

    size(){
        return this.fim - this.inicio;
    }

    clear(){
        this.inicio = 0;
        this.fim = 0;
    }

    toString() {
        let resultado = "[";
        for (let i = this.inicio; i < this.fim; i++) {
            if(i<this.fim - 1){
                resultado += this.dados[i] + " ";
            } else {
                resultado += this.dados[i] + "]";
            }
        }

        return resultado;

    }
}

export default Fila;