import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
        this.size = 0;
    }

    length() {
        return this.size;
    }
    isEmpty() {
        return this.head.proximo === null;
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

    addAt(pos) {

    }
    removeAt(pos) { }

    search(dado) { 
        if(!this.isEmpty()){
            let no_atual = this.head;
            let pos = 0;

            while (no_atual.proximo !== null) {
                if(no_atual.dado === dado){
                    return pos;
                }
                pos++;
                no_atual = no_atual.proximo;
            }
        }
        return -1; //dado não encontrado
    }
    
    asArray() {
        let resultado = [];
        let aux = this.head.proximo;
        while (aux !== null) {
            resultado.push(aux.dado);
            aux = aux.proximo;
        }
        return resultado;
    }
    clear(){
        let aux;
        let no_atual = new No();
        for (no_atual = this.head; no_atual !== null; ){
            aux = no_atual.proximo;
            no_atual.proximo = null;
            no_atual = aux;
        }
        this.head.proximo = null;
        this.size = 0;
    }
}

export default Lista;