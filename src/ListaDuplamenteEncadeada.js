import NoDuplo from "./NoDuplo";

class ListaDuplamenteEncadeada {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(dado) {
        let novo_no = new NoDuplo(dado);

        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }

        novo_no.prox = this.head;
        novo_no.ant = null;
        this.head.ant = novo_no;
        this.head = novo_no;
    }



    append(dado) {
        let novo_no = new NoDuplo(dado);

        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }

        novo_no.ant = this.tail;
        novo_no.prox = null;

        this.tail.prox = novo_no;
        this.tail = novo_no;
    }
    asArray() {
        let aux = this.head;
        let result = [];
        while (aux !== null) {
            result.push(aux.dado);
            aux = aux.prox;
        }
        return result;
    }
    isEmpty() {
        return this.head === null;
    }
    length() {
        let aux = this.head;
        let result = 0;
        while (aux !== null) {
            aux = aux.prox;
            result++;
        }
        return result;
    }
    clear() {
        this.head = null;
        this.tail = null;
    }
    remove() {
        if (!this.isEmpty()) {
            let aux = this.head.prox;

            if (aux === null) {
                this.clear();
                return;
            }

            aux.ant = null;
            this.head.prox = null;
            this.head = aux;

            return;
        }
        throw new Error("Underflow");
    }
    removeLast() {
        if (!this.isEmpty()) {
            let aux = this.tail.ant;

            if (aux === null) {
                this.clear();
                return;
            }

            aux.prox = null;
            this.tail.ant = null;

            this.tail = aux;
            return;
        }
        throw new Error("Underflow");
    }
    addAt(dado, pos) { }
    removeAt(pos) { }
    search(dado) { }
}

export default ListaDuplamenteEncadeada;