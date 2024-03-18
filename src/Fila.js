
/**
 * Classe representando uma Fila
 * Estrutura de dados do tipo FIFO (First In, First Out), onde o primeiro elemento a entrar é o primeiro a sair.
 * Implementada utilizando um array com capacidade limitada.
 */
class Fila {
    /**
     * Cria uma fila com uma capacidade opcional.
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
     * Adiciona um elemento ao final da fila.
     * @param {any} dado - Dado a ser enfileirado
     * @throws {Error} - Lança um erro caso a fila esteja cheia (Queueoverflow)
     */
    enqueue(dado) {
        if (!this.isFull()) {
            this.dados[this.fim++] = dado; // Adiciona o dado ao final da fila e incrementa o índice do fim
            return;
        }
        throw new Error("Queueoverflow"); // Lança um erro caso a fila esteja cheia
    }

    /**
     * Remove e retorna o elemento do início da fila.
     * @throws {Error} - Lança um erro caso a fila esteja vazia (Queueunderflow)
     */
    dequeue() {
        if (!this.isEmpty()) {
            this.inicio++; // Incrementa o índice do início para remover o elemento do início da fila
            return;
        }
        throw new Error("Queueunderflow"); // Lança um erro caso a fila esteja vazia
    }

    /**
     * Retorna o elemento do início da fila sem removê-lo.
     * @return {any} - Elemento do início da fila
     * @throws {Error} - Lança um erro caso a fila esteja vazia
     */
    front() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio]; // Retorna o elemento no início da fila
        }
        throw new Error("empty queue"); // Lança um erro caso a fila esteja vazia
    }

    /**
     * Remove todos os elementos da fila.
     */
    clear() {
        this.inicio = 0; // Define o índice do início como 0
        this.fim = 0; // Define o índice do fim como 0
    }

    /**
     * Verifica se a fila está vazia.
     * @return {boolean} - True se a fila estiver vazia, False caso contrário
     */
    isEmpty() {
        return this.inicio === this.fim; // Retorna true se o índice do início for igual ao índice do fim
    }

    /**
     * Verifica se a fila está cheia.
     * @return {boolean} - True se a fila estiver cheia, False caso contrário
     */
    isFull() {
        return this.length() === this.capacidade; // Retorna true se o comprimento da fila for igual à capacidade
    }

    /**
     * Retorna o número de elementos na fila.
     * @return {number} - Número de elementos na fila
     */
    length() {
        return this.fim - this.inicio; // Retorna a diferença entre o índice do fim e o índice do início
    }

    /**
     * Retorna uma representação em string da fila.
     * @return {string} - Representação em string da fila
     */
    toString() {
        let resultado = '';
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i] + " "; // Concatena os elementos da fila em uma string
        }

        return resultado; // Retorna a string com os elementos da fila
    }
}

export default Fila;
