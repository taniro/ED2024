class Pilha {
    constructor(maxsize = 5) {
        this.dados = [];
        this.tam = maxsize;
        this.topo = 0;
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stack overflow");
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        } else {
            return this.dados[--this.topo];       
        }
    }
    
    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1];
        }
        throw new Error("Empty stack");
    }
    clear() {
        this.topo = 0;
    }
    size() {
        return this.topo;
    }
    toString() {
        let resultado = "[";
        for (let i = 0; i < this.topo; i++) {
            if(i<this.topo - 1){
                resultado += this.dados[i] + " ";
            } else {
                resultado += this.dados[i] + "]";
            }
        }
        return resultado;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    isFull() {
        return this.size() === this.tam;
    }
}

export default Pilha;