class Pilha {

    constructor(tam = 5) {
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
    toString() {
        let resultado = "";
        for (let i = 0; i <= this.topo; i++) {
            resultado += this.dados[i];
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