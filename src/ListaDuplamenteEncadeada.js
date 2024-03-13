import NoDuplo from "./NoDuplo";

/**
 * Representa uma lista duplamente encadeada.
 * Cada nó da lista possui referências para o próximo e o anterior.
 */

class ListaDuplamenteEncadeada {

    /**
     * Constrói uma nova ListaDuplamenteEncadeada vazia.
     */
    constructor() {
        this.head = null; // Referência para o primeiro nó da lista
        this.tail = null; // Referência para o último nó da lista
    }

    /**
     * Adiciona um novo elemento no início da lista.
     * O dado a ser armazenado no novo nó.
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
     * Adiciona um novo elemento no final da lista.
     * O dado a ser armazenado no novo nó.
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
     * Converte a lista em um array.
     * Um array contendo os elementos da lista.
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
     * Verifica se a lista está vazia.
     * True se a lista estiver vazia, False caso contrário.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Retorna o número de elementos na lista.
     * O número de elementos na lista.
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
     * Remove todos os elementos da lista, tornando-a vazia.
     */
    clear() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Remove o primeiro elemento da lista.
     * Se a lista estiver vazia.
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
     * Remove o último elemento da lista.
     * Se a lista estiver vazia.
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

    // Os métodos addAt, removeAt e search podem ser implementados aqui.
    addAt(dado, pos) { } //Vazio
    removeAt(pos) { } //Vazio
    search(dado) { } //Vazio
}

export default ListaDuplamenteEncadeada;