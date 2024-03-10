class Pilha {
    constructor(tam = 7) {
        this.dados = [];
        this.tam = tam;
        this.topo = 0;
    }
    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stackunderflow");
        } else {
            this.topo--;
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
    toString(){
        let resultado = "";
        for (let i = 0; i < this.size(); i++){
            resultado += this.dados[i]
            if (i !== this.size() - 1) { // Adiciona espaço apenas se não for o último elemento
                resultado += " "
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