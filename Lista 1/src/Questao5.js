class Pilha {   
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
            return this.dados[this.topo];
        }
        
    }

    toString(){
        let resultado = "";
        for (let i=0; i<this.size(); i++){
            resultado += this.dados[i]
            if (i !== this.size() - 1) { // Adiciona espaço apenas se não for o último elemento
                resultado += " "
            }
        }
        return resultado;
    }

    analisaSequencia(texto){
        for (let i = 0; i < texto.length; i++) {
            let elemento = texto[i]
            if(elemento === "(" || elemento === "["){
                this.push(elemento)
            } else if (elemento === ')' || elemento === ']') {
                // Verifica se a pilha está vazia e começando com um fechamento (o que indicaria um padrão incorreto)
                if (this.isEmpty()) {
                    return false;
                } else {
                    let topo = this.pop();
                    if (( elemento === ')' && topo !== '(' ) || (elemento === ']' && topo !== '[')) {
                        return false; // Se o fechamento não corresponde à abertura
                    }
            }
            }
        }
        return this.isEmpty(); 
    }

}


export default Pilha;