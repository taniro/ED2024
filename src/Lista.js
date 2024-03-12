import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
        this.size = 0;
    }
    add(dado) {
        let novo_no = new No(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
        this.size++;
    }

    append(dado) {
        let novo_no = new No(dado);
        let aux = this.head;

        while (aux.proximo !== null) {
            aux = aux.proximo;
        }

        aux.proximo = novo_no;
        this.size++;
    }
    remove() {
        if (!this.isEmpty()) {
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }
    removeLast() {
        if (!this.isEmpty()) {
            let node_a = this.head;
            let node_b = node_a;
            while (node_a.proximo !== null) {
                node_b = node_a;
                node_a = node_a.proximo;
            }
            node_b.proximo = null;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }
    addAt(pos) { }
    removeAt(pos) { }
    length() {
        return this.size;
    }
    isEmpty() {
        return this.head.proximo === null;
    }
    search(dado) { }
    asArray() {
        let resultado = [];
        let aux = this.head.proximo;
        while (aux !== null) {
            resultado.push(aux.dado);
            aux = aux.proximo;
        }
        return resultado;
    }
}

export default Lista;