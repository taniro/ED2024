class Pilha {
    constructor(tam = 10) {
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--;
            return;
        }
        throw new Error("Stackunderflow");
    }

    isEmpty() {
        return this.topo === 0;
    }

    isFull() {
        return this.topo === this.tam;
    }
}

export default function verificacao(texto) {
    let p = new Pilha(texto.length);
    let aux;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '(' || texto[i] === '[') {
            p.push(texto[i]);
        } else {
            aux = p.pop();
            if ((aux === '(' && texto[i] !== ')') || (aux === '[' && texto[i] !== ']')) {
                return false;
            }
        }
    }
    return p.isEmpty();
}