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

    addAt(dado, posicao) {
        // Verifica se a posição é válida
        if (posicao < 0 || posicao > this.length()) {
            throw new Error("Posição inválida");
        }
    
        // Cria um novo nó com o dado fornecido
        let novo_no = new No(dado);
    
        // Se a posição for 0, adiciona o novo nó no início da lista
        if (posicao === 0) {
            this.add(dado);
        } else {
            let atual = this.head;
            // Percorre a lista até o nó anterior à posição desejada
            for (let i = 0; i < posicao - 1; i++) {
                atual = atual.proximo;
            }
            // Insere o novo nó após o nó atual
            novo_no.proximo = atual.proximo;
            atual.proximo = novo_no;
        }
        // Incrementa o tamanho da lista
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
            let atual= this.head;
            while (atual.proximo.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = null;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }

    
    removeAt(pos) {
        // Verifica se a posição é válida
        if (pos < 0 || pos >= this.length()) {
            throw new Error("Posição inválida");
        }
    
        // Se a posição for 0, remove o primeiro nó
        if (pos === 0) {
            this.removeFirst();
        } else {
            let atual = this.head;
            let anterior = null;
            for (let i = 0; i < pos; i++) {
                anterior = atual;
                atual = atual.proximo;
            }
    
            // Remove o nó na posição especificada atualizando os ponteiros
            anterior.proximo = atual.proximo;
        }
    
        // Reduz o tamanho da lista
        this.size--;
    }
    
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
        // Verifica se a lista está vazia
        if (this.isEmpty()) {
            throw new Error("Underflow");
        }
    
        // Verifica se a posição é válida
        if (pos < 1 || pos > this.length()) {
            throw new Error("Posição inválida");
        }
    
        // Percorre a lista até a posição desejada
        let i = 0;
        let atual = this.head;
        while (atual !== null) {
            if (i === pos) {
                return atual;
            }
            atual = atual.proximo;
            i++;
        }
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

    display() {
        let atual = this.head;
        while (atual !== null) {
            console.log(atual.dado + " -> ");
            atual = atual.proximo;
        }
        console.log("null");
    }
    
}

export default Lista;