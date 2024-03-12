class FilaCircular {
    /**
    * Cria uma FilaCircular.
    * @constructor
    * @param {messagem} capacidade - A capacidade.
    */
    constructor(capacidade = 5) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
    }

    /**
     * Adiciona um elemento no final da fila
     */
    enqueue(dado) { 
        if(!this.isFull()){
            if(this.fim < this.capacidade){
                this.dados[this.fim++] = dado;
                return;
            }else{
                this.fim = 0;
                this.dados[this.fim++] = dado;
                return;
            }
        }

        throw new Error("Queueoverflow");
    }

    /**
     * Retira o elemento que está na primeira posição na fila de acordo com a ordem de inserção
     */
    dequeue() { 
        if(!this.isEmpty()){
            if(this.inicio+1 < this.capacidade){
                this.inicio++;
            }else{
                this.inicio = 0;
            }
            return;
        }

        throw new Error("Queueunderflow");
    }

    /**
     * Mostra o elementos que está na primeira posição na fila de acordo com a ordem de inserção
     */
    front() {
            if(this.inicio < this.capacidade)
                return this.dados[this.inicio];
            else{
                return this.dados[0];
            }
    }

    /**
     * Verifica se a fila está vazia
     */
    isEmpty() {
        return this.inicio === this.fim;
    }
    /**
     * Verifica se a fila está cheia
     */
    isFull() {
        return this.length() === this.capacidade-1;
    }
    /**
     * Limpa a fila
     */
    clear() { 
        this.inicio = 0;
        this.fim = 0;
    }
    /**
     * Mostra os elemetos presentes na fila circular
     * @return {string} Os elementos da fila.
     */
    toString() { 
        let texto = "";
        if(this.inicio < this.fim){
            for(let i = this.inicio; i < this.fim; i ++){
                texto += this.dados[i] + " ";
            }
        }else{
            for(let i = this.inicio; i <= this.length();i++){
                texto += this.dados[i] + " ";
            }
            
            for(let i = 0; i < this.fim;i++){
                texto += this.dados[i] + " ";
            }
        }

        return texto;
    }
    
    /**
     * Mostra a quantidade de elementos presentes na fila
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