import No from "./No";

class Lista {
    //Inicializa a lista encadeada com uma cabeça.
    //A cabeça é um nó especial que não contém nenhum dado e serve apenas como ponto de partida para a lista. 
    constructor() {
        this.head = new No(); //referência para o nó de cabeçalho
        this.size = 0; //this.size mantém o tamanho da lista.
    }
    //Adiciona um novo nó contendo o dado fornecido no início da lista.
    add(dado) {
        let novo_no = new No(dado);

        novo_no.proximo = this.head.proximo; ////Move-se o ponteiro do novo nó para apontar para o primeiro nó atual da lista.
        this.head.proximo = novo_no; //em seguida, ajustando o ponteiro do cabeçalho para apontar para o novo nó.
        this.size++;
    }
    //Adiciona um novo nó com a informação do dado fornecido no final da lista.
    //Isso é feito percorrendo a lista até o último nó e ajustando o ponteiro do último nó para apontar para o novo nó.
    append(dado) {
        let novo_no = new No(dado); //Cria um novo nó com o dado fornecido.
        let aux = this.head;
        //Laço para percorrer a lista até o último nó.
        while (aux.proximo !== null) {
            aux = aux.proximo;
        }

        aux.proximo = novo_no; //Ajusta o ponteiro do último nó para apontar para o novo nó.
        this.size++;
    }
    remove() { // Remove o primeiro nó da lista.
        if (!this.isEmpty()) {
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }
    removeLast() { // Remove o último nó da lista.
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
        throw new Error("Underflow");//Lança uma exceção se a lista estiver vazia.
    }
    //Adiciona um novo nó contendo o dado fornecido em uma posição específica na lista.
    addAt(dado, pos) { //Lista começa na posição 1(Ignora a head)
        if (pos <= this.length() && pos >= 1) { //Verifica se a posição é válida
            let novoNo = new No(dado);
            let cont = 0;
            let aux = this.head;
            let anterior, posterior;
            while (cont != pos) { //Percorre a lista até a posição desejada
                posterior = aux.proximo;
                anterior = aux;
                aux = aux.proximo;
                cont++;
            }
            //Adiciona o novo nó na posição desejada
            novoNo.proximo = posterior;
            anterior.proximo = novoNo;
            this.size++;
        } else {
            throw new Error("NullPointerException"); //Lança uma exceção se a posição for inválida
        }
    }


    removeAt(pos) {//Remove um nó de uma posição específica na lista.
        if (!this.isEmpty()) { //Verifica se a lista está vazia
            if (pos <= this.length() && pos >= 1) { //Verifica se a posição é válida
                let cont = 0;
                let aux = this.head;
                let anterior, posterior;
                while (cont != pos) { //Percorre a lista até a posição desejada
                    posterior = aux.proximo;
                    anterior = aux;
                    aux = aux.proximo;
                    cont++;
                }
                anterior.proximo = posterior.proximo;
                this.size--;
            } else { //Lança uma exceção se a posição for inválida
                throw new Error("NullPointerException");
            }
        } else { //Lança uma exceção se a lista estiver vazia
            throw new Error("Underflow");
        }
    }

    length() { //Retorna o tamanho da lista.
        return this.size;
    }
    isEmpty() { //Verifica se a lista está vazia.
        return this.head.proximo === null;
    }
    //Retorna o dado do primeiro nó da lista.
    search(dado) {
        if (!this.isEmpty()) {
            let aux = this.head;
            while (aux.proximo != null) { //Percorre a lista até encontrar o dado
                if (dado === aux.dado) { //Retorna o dado se encontrado
                    return true;
                }
                aux = aux.proximo;
            }
        } else {
            throw new Error("ListEmpty");
        }
        return false;
    }

    searchIndex(pos) { //Retorna o dado de uma posição específica na lista.
        if (!this.isEmpty()) { //Verifica se a lista está vazia
            if (pos >= 1 && pos <= this.length()) { //Verifica se a posição é válida
                let aux = this.head.proximo;
                let cont = 0; //Contador para percorrer a lista
                let dado;
                while (cont !== pos) { //Percorre a lista até a posição desejada
                    dado = aux.dado;
                    aux = aux.proximo;
                    cont++;
                }
                return dado;
            } else {
                throw new Error("NullPointerException"); //Lança uma exceção se a posição for inválida
            }
        } else {
            throw new Error("ListEmpty");
        }
    }
    //Retorna um array com os dados da lista.
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