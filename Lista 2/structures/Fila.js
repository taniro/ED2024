class Fila {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
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

    isEmpty(){
        return this.inicio === this.fim;
    }
    isFull(){
        return this.size() === this.capacidade;
    }

    size(){
        return this.fim - this.inicio;
    }

    clear(){
        this.inicio = 0;
        this.fim = 0;
    }

    toString() {
        resultado = "[";
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += `${this.dados[i]}`
            if (i!==0){
                resultado += " ";
            }
        }
        resultado += "]";

        return resultado;

    }
}

export default Fila;