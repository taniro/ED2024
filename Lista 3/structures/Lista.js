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
        if (this.head.proximo === null) {
            this.head.proximo = novo_no;
        } else {
            let atual = this.head;
            while(atual.proximo !== null){
                atual = atual.proximo;
            }
            atual.proximo = novo_no;
        }
        this.size++;
        }

    addAt(dado, posicao) {
        if (posicao <= this.length() && posicao >= 0) {
            let novo_no = new No(dado);
            if (posicao === 0) {
                this.add();
            } else {
                let atual = this.head;
                for (let i = 0; i < posicao - 1; i++) {
                    atual = atual.next;
                }
                novo_no.proximo = atual.proximo;
                atual.proximo = novo_no;
                this.size++;
            }
        } else {
            throw new Error("Posição inválida");
        }
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

    removeFirst() {
        if (!this.isEmpty()) {
            this.head = this.head.proximo;
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

    searchForPos(pos) {
        let i = 0;
        let aux = this.head;
    
        while (aux !== null) {
            if (i === pos) {
                return aux;
            }
            aux = aux.proximo;
            i++;
        }
    
        return null; // Se a posição não for encontrada, retorna null
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

    toString(){
        let string = "";
        let nodeAux = this.head.proximo;

        while(nodeAux != null){
            string += nodeAux.dado + " ";
            nodeAux = nodeAux.proximo;
        }

        return string;
    }
}

export default Lista;