class PilhaQ02 {
    constructor(tam = 4) {
        this.dados = [];
        this.tam = tam;
        this.topoA = 0;
        this.topoB = 0;
    }
    
    size(){
        return this.topoA;
    }

    isEmptyA(){
        return this.topoA === 0;
    } 
    isEmptyB(){
        return this.topoB === 0;
    } 

    isFull(){
        return this.topoA === this.tam;
    }

    topA() {
        if (!this.isEmptyA()) {
            return this.dados[this.topoA - 1];
        }
        throw new Error("Empty stack");
    }

    topB() {
        if (!this.isEmptyB()) {
            return this.dados[this.topoB + 1];
        }
        throw new Error("Empty stack");
    }

    pushA(dado){
        if (!this.isFull()){
            this.dados[this.topoA++] = dado;
            return;
        }
        throw new Error ("Stackoverflow");
    }
    pushB(dado){
        if (!this.isFull()){
            this.dados[this.topoB--] = dado;
            return;
        }
        throw new Error ("Stackoverflow");
    }

    popA(){
        if (this.isEmptyA){
            throw new Error("Stackunderflow em A");
        } else {
            this.topoA--;
        }
    }  
    popB(){
        if (this.isEmptyB){
            throw new Error("Stackunderflow em B");
        } else {
            this.topoB++;
        }
    }
}

export default PilhaQ02;