class Pilha{

    /** 
      * creat a stack
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
     */

    top(){
        return this.dados[this.topo-1];
    }

    /**
     * Create the method clear 
     * @clear
     */
    clear(){
        this.topo = 0;
    }

    /**
     * Crate the method size
     * @size
     */
    size(){
       return this.topo;
    }

    /**
     * Create the method isEmpty
     * @isEmpty
     */
    isEmpty(){
        return this.size() === 0;
    }

    /**
     * Create the method isFull
     * @isFull
     */

    isFull(){
        return this.size() === this.tam;
    }

    /**
     * Create the toString
     * @toString
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
