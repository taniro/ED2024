import No from "./No"; // Importa a classe No do arquivo No.js

/**
 * Classe representando uma lista simplesmente ligada.
 * Nas listas, a ordem é determinada por um 
ponteiro em cada objeto.
 */

class Lista {
    /**
     * Cria uma lista encadeada vazia.
     * @constructor
     */
    constructor() {
        this.head = new No(); // Cria um nó vazio que representa o início da lista
        this.size = 0; // Inicializa o tamanho da lista como zero
    }

    /**
     * Retorna o tamanho atual da lista.
     * @returns {number} O tamanho da lista.
     */
    length() {
        return this.size; 
    }

    /**
     * Verifica se a lista está vazia.
     * @returns {boolean} Verdadeiro se a lista estiver vazia, falso caso contrário.
     */
    isEmpty() {
        return this.head.proximo === null; 
    }

    /**
     * Adiciona um novo elemento no início da lista.
     * @param {*} dado - O dado a ser adicionado à lista.
     */
    add(dado) {
        let novo_no = new No(dado); // Cria um novo nó com o dado fornecido

        novo_no.proximo = this.head.proximo; // O próximo do novo nó aponta para o primeiro elemento da lista
        this.head.proximo = novo_no; // Atualiza o início da lista para apontar para o novo nó
        this.size++; // Incrementa o tamanho da lista
    }

    /**
     * Adiciona um novo elemento no final da lista.
     * @param {*} dado - O dado a ser adicionado à lista.
     */
    append(dado) {
        let novo_no = new No(dado); // Cria um novo nó com o dado fornecido
        let aux = this.head; // Define um nó auxiliar para percorrer a lista

        while (aux.proximo !== null) { // Percorre a lista até encontrar o último nó
            aux = aux.proximo;
        }

        aux.proximo = novo_no; // Adiciona o novo nó ao final da lista
        this.size++; // Incrementa o tamanho da lista
    }

    
    /**
     * Remove o primeiro elemento da lista.
     * @throws {Error} Se a lista estiver vazia.
     */
    remove() {
        if (!this.isEmpty()) { // Verifica se a lista não está vazia
            let aux = this.head.proximo; // Obtém o primeiro elemento da lista
            this.head.proximo = aux.proximo; // Atualiza o início da lista para apontar para o segundo elemento
            this.size--; // Decrementa o tamanho da lista
            return; // Retorna
        }
        throw new Error("Underflow"); // Lança um erro de "Underflow" se a lista estiver vazia
    }

     /**
     * Remove o último elemento da lista.
     * @throws {Error} Se a lista estiver vazia.
     */
    removeLast() {
        if (!this.isEmpty()) { // Verifica se a lista não está vazia
            let node_a = this.head; // Define um nó inicial para percorrer a lista
            let node_b = node_a; // Define um nó auxiliar que seguirá node_a

            while (node_a.proximo !== null) { // Percorre a lista até o penúltimo elemento
                node_b = node_a; // Atualiza node_b para o nó anterior a node_a
                node_a = node_a.proximo; // Atualiza node_a para o próximo nó
            }

            node_b.proximo = null; // Remove o último nó, definindo o próximo do penúltimo nó como nulo
            this.size--; // Decrementa o tamanho da lista
            return; // Retorna
        }
        throw new Error("Underflow"); // Lança um erro de "Underflow" se a lista estiver vazia
    }

     /**

    * Adiciona um novo elemento em uma posição específica na lista.
    * @param {*} dado - O dado a ser adicionado à lista.
    * @param {number} pos - A posição na lista onde o dado será inserido.
    * @throws {Error} Se a posição especificada for inválida ou se a lista estiver vazia.
    */
    addAt(dado, pos) { // Lista começa na posição 1 (Ignora a head)
        if (pos <= this.length() && pos >= 1) { // Verifica se a posição é válida
            let novoNo = new No(dado); // Cria um novo nó com o dado fornecido
            let cont = 0; // Inicializa o contador de posição
            let aux = this.head; // Define um nó auxiliar para percorrer a lista
            let anterior, posterior; // Declara variáveis para armazenar o nó anterior e posterior à posição de inserção

            while (cont !== pos) { // Percorre a lista até encontrar a posição de inserção
                posterior = aux.proximo; // Atualiza o nó posterior
                anterior = aux; // Atualiza o nó anterior
                aux = aux.proximo; // Avança para o próximo nó
                cont++; // Incrementa o contador de posição
            }

            novoNo.proximo = posterior; // Define o próximo do novo nó como o nó posterior à posição de inserção
            anterior.proximo = novoNo; // Atualiza o próximo do nó anterior para apontar para o novo nó
            this.size++; // Incrementa o tamanho da lista
        } else {
            throw new Error("NullPointerException"); // Lança um erro se a posição especificada for inválida
        }
    }

    /**
     * Remove o elemento de uma posição específica na lista.
     * @param {number} pos - A posição do elemento a ser removido na lista.
     * @throws {Error} Se a posição especificada for inválida ou se a lista estiver vazia.
     */
    removeAt(pos) {
        if (!this.isEmpty()) { // Verifica se a lista não está vazia
            if (pos <= this.length() && pos >= 1) { // Verifica se a posição é válida
                let cont = 0; // Inicializa o contador de posição
                let aux = this.head; // Define um nó auxiliar para percorrer a lista
                let anterior, posterior; // Declara variáveis para armazenar o nó anterior e posterior à posição de remoção

                while (cont !== pos) { // Percorre a lista até encontrar a posição de remoção
                    posterior = aux.proximo; // Atualiza o nó posterior
                    anterior = aux; // Atualiza o nó anterior
                    aux = aux.proximo; // Avança para o próximo nó
                    cont++; // Incrementa o contador de posição
                }

                anterior.proximo = posterior.proximo; // Remove o elemento da posição especificada, atualizando as referências dos nós anterior e posterior
                this.size--; // Decrementa o tamanho da lista
            } else {
                throw new Error("NullPointerException"); // Lança um erro se a posição especificada for inválida
            }
        } else {
            throw new Error("Underflow"); // Lança um erro se a lista estiver vazia
        }
    }

    /**
     * Procura por um dado na lista e retorna true se encontrado, false caso contrário.
     * @param {*} dado - O dado a ser procurado na lista.
     * @returns {boolean} Verdadeiro se o dado for encontrado na lista, falso caso contrário.
     * @throws {Error} Se a lista estiver vazia.
     */
    search(dado) {
        if (!this.isEmpty()) { // Verifica se a lista não está vazia
            let aux = this.head; // Define um nó auxiliar para percorrer a lista
            while (aux.proximo !== null) { // Percorre a lista
                if (dado === aux.dado) { // Verifica se o dado é igual ao dado do nó atual
                    return true; // Retorna verdadeiro se o dado for encontrado
                }
                aux = aux.proximo; // Avança para o próximo nó
            }
        } else {
            throw new Error("Empty list"); // Lança um erro se a lista estiver vazia
        }
        return false; // Retorna falso se o dado não for encontrado na lista
    }

    /**
     * Procura por um dado na lista e retorna seu índice se encontrado.
     * @param {*} dado - O dado a ser procurado na lista.
     * @returns {number} O índice do dado na lista, ou -1 se não encontrado.
     * @throws {Error} Se a lista estiver vazia ou se a posição especificada for inválida.
     */
    searchIndex(dado) {
        if (!this.isEmpty()) { // Verifica se a lista não está vazia
            let aux = this.head.proximo; // Define um nó auxiliar para percorrer a lista, começando do segundo nó
            let cont = 0; // Inicializa o contador de posição
            let dadoEncontrado; // Declara uma variável para armazenar o dado encontrado

            while (cont !== pos) { // Percorre a lista até encontrar a posição especificada
                dadoEncontrado = aux.dado; // Armazena o dado do nó atual
                aux = aux.proximo; // Avança para o próximo nó
                cont++; // Incrementa o contador de posição
            }
            return dadoEncontrado; // Retorna o dado encontrado na posição especificada
        } else {
            throw new Error("Empty list"); // Lança um erro se a lista estiver vazia
        }
    }

    /**
     * Retorna os elementos da lista como um array.
     * @returns {Array} Um array contendo os elementos da lista.
     */
    asArray() {
        let resultado = []; // Inicializa um array para armazenar os elementos da lista
        let aux = this.head.proximo; // Define um nó auxiliar para percorrer a lista, começando do segundo nó

        while (aux !== null) { // Percorre a lista até o final
            resultado.push(aux.dado); // Adiciona o dado do nó atual ao array
            aux = aux.proximo; // Avança para o próximo nó
        }

        return resultado; // Retorna o array contendo os elementos da lista
    }

}

export default Lista; // Exporta a classe Lista como padrão
