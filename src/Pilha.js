/**
 * Classe representando uma pilha.
 * Uma pilha é um conjunto ordenado de dados no qual os dados 
 * podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
 * É possível dizer que uma pilha é um tipo abstrato de dados baseado no princípio de Last-In, First-Out
 * LIFO ou  “o último a entrar é o primeiro a sair”. 
 */
class Pilha{

    /** 
      * Cria uma pilha vazia.
      * @constructor
      * @param {tam} [tam=5] - O tamanho da lista. Caso não seja informado a fila terá tamanho 5. 
    */
    constructor(tam = 5){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    /**
     * Método para inserir um dado no topo da pilha.
     * @param {dado} dado - Dado a ser inserido.
     * @throws {Error} - Se a pilha estiver cheia.
     * @return {void}
     */
    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }

    /**
     * Método para remover um dado no topo da pilha.
     * @throws {Error} - Se a pilha estiver vazia.
     * @return {void}
     */
    pop() {
        if (!this.isEmpty()) {
            this.topo--;
            return;
        }
        throw new Error("Stackunderflow");
    }

    /**
     * Método para obter o dado que está no topo da pilha.
     * @return {dado}
     */
    top(){
        return this.dados[this.topo-1];
    }

    /**
     * Método para remover todos dados da pilha.
     */
    clear() {
        this.topo = 0;
    }

    /**
     * Método para obter a quantidade de elementos na pilha.
     * @return {number}
     */
    size() {
        return this.topo;
    }

    /**
     * Método para verificar se uma pilha está vazia.
     * @return {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Método para verificar se uma pilha está cheia.
     * @return {boolean}
     */
    isFull(){
        return this.size() === this.tam;
    }

    /**
     * Método para retornar todos os dados de uma pilha em formato String.
     * @return {string}
     */
    toString() {
        let texto = "";
        for (let i = 0; i < this.topo; i++) {
            texto += this.dados[i] + " ";
        }
        return texto.trim();
    }

    /**
     * Método para retornar todos os dados de uma pilha como um array.
     * @return {object}
     */
    asArray(){
        let  resultado = [];
        for(let i = 0; i <= this.topo; i++){
            resultado.push(this.dados[i]);
        }
        return resultado;
    }
}

export default Pilha;