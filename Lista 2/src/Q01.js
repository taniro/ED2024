/*
    Implemente uma pilha usando a implementação de duas filas básicas.
*/
import Fila from "../structures/Fila";

class Pilha2F {
    constructor(capacidade = 5){
        this.F1 = new Fila(capacidade);
        this.F2 = new Fila(capacidade);
    }

    isEmpty(){
        return this.F1.isEmpty();
    }
    isFull(){
        return this.F1.isFull();
    }
    size(){
        return this.F1.size();
    }
    clear(){
        return this.F1.clear();
    }

    push(dado){
        if(this.isFull()){
            throw new Error("Stackoverflow");
        } else {
            while(this.F1.size() > 0){
                this.F2.enqueue( this.F1.dequeue() )
            }
            this.F1.enqueue(dado);

            while(this.F2.size() > 0){
                this.F1.enqueue( this.F2.dequeue() )
            }
        
        }
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stackunderflow");
        } else {
            return this.F1.dequeue();
        }
    }

    top(){
        return this.F1.front();
    }

    toString(){
        return this.F1.toString();
    }

};

export default Pilha2F;