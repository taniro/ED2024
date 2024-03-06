class Pilha {
    
    constructor(tam = 4){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    push(dado){
        if (this.isFull()){
            throw new Error ("Stackoverflow")
        } else {
            this.dados[this.topo++] = dado;
        }
    }

    pop(){
        if (this.isEmpty()){
            throw new Error("Stackunderflow")
        } else {
            this.topo--;
        }
    }
    size(){
        return this.topo;
    }
    top(){
        return this.dados[this.topo - 1];
    }
    isEmpty(){
        return this.size() === 0;
    }
    isFull(){
        return this.size() === this.tam;
    }

};
export default Pilha;