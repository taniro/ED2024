class Pilha {

    /**
     * Cria uma nova pilha.
     * @constructor
     * @param {number} tam - O tamanho máximo da pilha (opcional, padrão: 5)
     */
    constructor(tam = 5) {
        this.dados = []; // Array para armazenar os elementos da pilha
        this.topo = 0; // Índice do topo da pilha
        this.tam = tam; // Tamanho máximo da pilha
    }

    /**
     * Insere um elemento no topo da pilha.
     * @method push
     * @param {*} dado - O dado a ser inserido na pilha
     * @throws {Error} - Se a pilha estiver cheia
     * @returns {void}
     * @example
     * pilha.push(10); // Adiciona o elemento 10 na pilha
     * pilha.push(20);
     * pilha.push(30);
     * pilha.push(40);
     * pilha.push(50);
     * pilha.push(60); // Erro: Stackoverflow, a pilha está cheia
     */
    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }

    /**
     * Remove o elemento do topo da pilha.
     * @method pop
     * @throws {Error} - Se a pilha estiver vazia
     * @returns {void}
     */
    pop() {
        if (!this.isEmpty()) {
            this.topo--;
            return;
        }
        throw new Error("Stackunderflow");
    }

    /**
     * Retorna o elemento do topo da pilha.
     * @method top
     * @returns {*} O elemento do topo da pilha
     */
    top() {
        return this.dados[this.topo - 1];
    }

    /**
     * Remove todos os elementos da pilha.
     * @method clear
     * @returns {void}
     */
    clear() {
        this.topo = 0;
    }

    /**
     * Retorna o tamanho atual da pilha.
     * @method size
     * @returns {number} O tamanho atual da pilha
     */
    size() {
        return this.topo;
    }

    /**
     * Verifica se a pilha está vazia.
     * @method isEmpty
     * @returns {boolean} True se a pilha estiver vazia, False caso contrário
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Verifica se a pilha está cheia.
     * @method isFull
     * @returns {boolean} True se a pilha estiver cheia, False caso contrário
     */
    isFull() {
        return this.size() === this.tam;
    }

    /**
     * Retorna os elementos da pilha em formato de string.
     * @method toString
     * @returns {string} Os elementos da pilha em formato de string
     */
    toString() {
        let texto = "";
        for (let i = 0; i < this.topo; i++) {
            texto += this.dados[i] + " ";
        }
        return texto.trim();
    }
}

export default Pilha;