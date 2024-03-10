class PilhaQ03 {   
    constructor(tam = 4){
        this.dados = [];
        this.aux = [];
        this.topo = 0;
        this.tam = tam;
    }

    size(){
        return this.topo;
    }
    top(){
        return this.dados[this.topo - 1];
    }
    base(){
        return this.dados[0];
    }

    size() {
        return this.topo;
    }
    isEmpty(){
        return this.size() === 0;
    }
    isFull(){
        return this.size() === this.tam;
    }

    push(dado) {
        if (this.isFull()) {
            throw new Error("Stackoverflow")
        } else {
            this.dados[this.topo] = dado; // Adiciona o elemento na posição atual do topo
            this.topo++; // Incrementa o topo
        }
    }     

    pop(){
        if (this.isEmpty()){
            throw new Error("Stackunderflow")
        } else {
            this.topo--;
            return this.dados[this.topo];
        }
        
    }

    toString(){
        let resultado = "";
        for (let i = 0; i < this.size(); i++){
            resultado += this.dados[i]
            if (i !== this.size() - 1) { // Adiciona espaço apenas se não for o último elemento
                resultado += " "
            }
        }
        return resultado;
    }

}

export default PilhaQ03;