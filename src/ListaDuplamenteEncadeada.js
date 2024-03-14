import NoDuplo from "./NoDuplo";

/**
 * Classe representando uma Lista Duplamente Encadeada
 * São listas que possuem tanto um apontador para o sucessor e para o antecessor
 * Será possível caminhar para a direita ou para a esquerda com igual facilidade.
 */
class ListaDuplamenteEncadeada {
    /**
     * Cria uma lista duplamente encadeada vazia
     * @constructor
     */
    constructor() {
        this.head = null; // Referência para o primeiro nó da lista
        this.tail = null; // Referência para o último nó da lista
    }

    /**
     * Adiciona um novo elemento no INICIO da lista
     * @param {any} dado - Dado a ser inserido
     */
    add(dado) {
        let novo_no = new NoDuplo(dado);

        // Se a lista estiver vazia, o novo nó se torna tanto a cabeça quanto a cauda da lista
        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }

        // Caso contrário, o novo nó é adicionado como a nova cabeça da lista
        novo_no.prox = this.head;
        novo_no.ant = null;
        this.head.ant = novo_no;
        this.head = novo_no;
    }

    /**
     * Adiciona um novo elemento no FINAL da lista
     * @param {any} dado - Dado a ser adicionado
     */
    append(dado) {
        let novo_no = new NoDuplo(dado);

        // Se a lista estiver vazia, o novo nó se torna tanto a cabeça quanto a cauda da lista
        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }

        // Caso contrário, o novo nó é adicionado como o novo último nó da lista
        novo_no.ant = this.tail;
        novo_no.prox = null;

        this.tail.prox = novo_no;
        this.tail = novo_no;
    }

    /**
     * Retorna a lista como um array
     * @return {Array} - Retorna array com os elementos da lista
     */
    asArray() {
        let aux = this.head;
        let result = [];
        while (aux !== null) {
            result.push(aux.dado);
            aux = aux.prox;
        }
        return result;
    }

    /**
     * Verifica se a lista esta vazia
     * @return {boolean} - True se a lista estiver vazia
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Retorna a quantidade de elementos na lista
     * @return {number} - quantidade de elementos na lista
     */
    length() {
        let aux = this.head;
        let result = 0;
        while (aux !== null) {
            aux = aux.prox;
            result++;
        }
        return result;
    }

    /**
     * Método para remover todos dados da Lista
     */
    clear() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Metodo para remover o primeiro elemento da lista.
     */
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

    /**
     * Metodo para remover o ultimo elemento da lista.
     */
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

    /**
     * Metodo para adicionar um elemento na posiçao passada por parametro
     */
    addAt(dado, pos) {
        //sem implementação

     }

    /**
     * Metodo para remover um elemento na posiçao passada por parametro
     */
    removeAt(pos) { 
        //sem implementação

    }

    /**
     * Metodo para buscar um dado na lista e retornar true se encontrar ou false se não encontrar
     */
    search(dado) {
        //sem implementação
     }
}

export default ListaDuplamenteEncadeada;