/**
 * Classe representando uma Fila
 * Estrutura de dados do tipo FIFO (First In, First Out), onde o primeiro elemento a entrar é o primeiro a sair.
 * Implementada utilizando um array com capacidade limitada.
 */
class Fila {
    /**
     * Cria uma fila com uma capacidade opcional
     * @constructor
     * @param {number} capacidade - Capacidade máxima da fila (padrão: 5)
     */
    constructor(capacidade = 5) {
        this.capacidade = capacidade; // Capacidade máxima da fila
        this.dados = []; // Array para armazenar os dados da fila
        this.inicio = 0; // Índice do primeiro elemento na fila
        this.fim = 0; // Índice após o último elemento na fila
    }

    /**
     * Adiciona um elemento ao final da fila
     * @param {any} dado - Dado a ser enfileirado
     * @throws {Error} - Lança um erro caso a fila esteja cheia (Queueoverflow)
     */
    enqueue(dado) {
        if (!this.isFull()) {
            this.dados[this.fim++] = dado;
            return;
        }
        throw new Error("Queueoverflow");
    }

    /**
     * Remove e retorna o elemento do início da fila
     * @throws {Error} - Lança um erro caso a fila esteja vazia (Queueunderflow)
     */
    dequeue() {
        if (!this.isEmpty()) {
            this.inicio++;
            return;
        }
        throw new Error("Queueunderflow");
    }

    /**
     * Retorna o elemento do início da fila sem removê-lo
     * @return {any} - Elemento do início da fila
     * @throws {Error} - Lança um erro caso a fila esteja vazia
     */
    front() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio];
        }
        throw new Error("empty queue");
    }

    /**
     * Remove todos os elementos da fila
     */
    clear() {
        this.inicio = 0;
        this.fim = 0;
    }

    /**
     * Verifica se a fila está vazia
     * @return {boolean} - True se a fila estiver vazia, False caso contrário
     */
    isEmpty() {
        return this.inicio === this.fim;
    }

    /**
     * Verifica se a fila está cheia
     * @return {boolean} - True se a fila estiver cheia, False caso contrário
     */
    isFull() {
        return this.length() === this.capacidade;
    }

    /**
     * Retorna o número de elementos na fila
     * @return {number} - Número de elementos na fila
     */
    length() {
        return this.fim - this.inicio;
    }

    /**
     * Retorna uma representação em string da fila
     * @return {string} - Representação em string da fila
     */
    toString() {
        let resultado = '';
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i] + " ";
        }

        return resultado;
    }
}

export default Fila;
