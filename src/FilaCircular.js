/**
 * Classe representando uma Fila Circular
 * Estrutura de dados do tipo FIFO (First In, First Out), onde o primeiro elemento a entrar é o primeiro a sair,
 * e a fila possui uma capacidade fixa, reutilizando os espaços quando necessário.
 */
class FilaCircular {
    /**
     * Cria uma Fila Circular com uma capacidade opcional
     * @constructor
     * @param {number} capacidade - Capacidade máxima da fila (padrão: 5)
     */
    constructor(capacidade = 5) {
        this.capacidade = capacidade; // Capacidade máxima da fila
        this.inicio = 0; // Índice do início da fila
        this.fim = 0; // Índice após o último elemento da fila
        this.dados = []; // Array para armazenar os dados da fila
    }

    /**
     * Adiciona um elemento no final da fila circular
     * @param {any} dado - Dado a ser enfileirado
     * @throws {Error} - Lança um erro caso a fila esteja cheia (Queueoverflow)
     */
    enqueue(dado) { 
        if (!this.isFull()) {
            if (this.fim < this.capacidade) {
                this.dados[this.fim++] = dado;
            } else {
                this.fim = 0;
                this.dados[this.fim++] = dado;
            }
            return;
        }
        throw new Error("Queueoverflow");
    }

    /**
     * Retira o elemento que está na primeira posição na fila de acordo com a ordem de inserção
     * @throws {Error} - Lança um erro caso a fila esteja vazia (Queueunderflow)
     */
    dequeue() { 
        if (!this.isEmpty()) {
            if (this.inicio + 1 < this.capacidade) {
                this.inicio++;
            } else {
                this.inicio = 0;
            }
            return;
        }
        throw new Error("Queueunderflow");
    }

    /**
     * Retorna o elemento que está na primeira posição na fila de acordo com a ordem de inserção
     * @return {any} - Elemento na primeira posição da fila
     */
    front() {
        if (this.inicio < this.capacidade)
            return this.dados[this.inicio];
        else
            return this.dados[0];
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
        return (this.length() === this.capacidade) || (this.fim + 1 == this.inicio);
    }

    /**
     * Limpa a fila, removendo todos os elementos
     */
    clear() { 
        this.inicio = 0;
        this.fim = 0;
    }

    /**
     * Retorna uma representação em string da fila
     * @return {string} - Representação em string da fila
     */
    toString() { 
        let resposta = "";
        if (this.inicio < this.fim) {
            for (let i = this.inicio; i < this.fim; i++) {
                resposta += this.dados[i];
            }
        } else {
            for (let i = this.inicio; i < this.capacidade; i++) {
                resposta += this.dados[i];
            }
            if (this.fim != 0) {
                for (let i = 0; i < this.fim; i++) {
                    resposta += this.dados[i];
                }
            }
        }
        return resposta;
    }

    /**
     * Retorna a quantidade de elementos presentes na fila
     * @return {number} - Número de elementos na fila
     */
    length() {
        if (this.inicio < this.fim) {
            return this.fim - this.inicio;
        } else if (this.inicio > this.fim) {
            return this.capacidade - this.inicio + this.fim + 1;
        }
        return 0;
    }
}

export default FilaCircular;
