class Pilha{

    /** 
      * creat a pilha
      * @constructor
      * @param {tam} tam - O tamanho da lista
    */
    constructor(tam = 5){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    /**
     * Create the method push
     * @push
     * @param {dado} dado - Dado a ser inserido na pilha
     * @throws {Error} - Se a pilha estiver cheia
     * @return {void}
     * @example
     * pilha.push(10); -> add elemnt in the stack
     * pilha.push(20);
     * pilha.push(30);
     * pilha.push(40);
     * pilha.push(50);
     * pilha.push(60); // Error: Stackoverflow moment that the stack is full, because the size is 5
     */

    push(dado){
        if(!this.isFull()){
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }


    /**
     * Create the method pop
     * @pop
     * the method pop remove the last element of the stack
     */
    pop(){
        if(!this.isEmpty()){
            this.topo--;
            return;
        }
        throw new Error("Stackunderflow");
    }

    /**
     * Create the topo
     * @topo
     * the method topo return the last element of the stack
     */

    top(){
        return this.dados[this.topo-1];
    }

    /**
     * Create the method clear 
     * @clear
     * the method clear remove all elements of the stack
     */
    clear(){
        this.topo = 0;
    }

    /**
     * Crate the method size
     * @size
     * the method size return the size of the stack
     */
    size(){
       return this.topo;
    }

    /**
     * Create the method isEmpty
     * @isEmpty
     * the method isEmpty return true if the stack is empty
     */
    isEmpty(){
        return this.size() === 0;
    }

    /**
     * Create the method isFull
     * @isFull
     * the method isFull return true if the stack is full
     */

    isFull(){
        return this.size() === this.tam;
    }

    /**
     * Create the toString
     * @toString
     * the method toString return the elements of the stack in string format
     */
    toString(){
        let  texto = "";
        for(let i = 0; i <= this.topo; i++){
            texto+=texto;
        }
        return texto;
    }
}

export default Pilha;
