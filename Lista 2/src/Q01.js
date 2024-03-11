/*
    Implemente uma pilha usando a implementação de duas filas básicas.
*/
import Fila from "./Fila";

class Pilha2F {

    constructor(tam = 5){
        this.F1 = new Fila(tam);
        this.F2 = new Fila(tam);
    }

    push(dado){
        if(!this.isFull()){
            while(this.F1.size() > 0){
                this.F2.enqueue( this.F1.dequeue() )
            }
            this.F1.enqueue(dado);

            while(this.F2.size() > 0){
                this.F1.enqueue( this.F2.dequeue() )
            }
        return;
        }
        throw new Error("Stackoverflow");
    }
    pop(){
        return this.F1.dequeue();
    }

    top(){
        return this.F1.front();
    }

    isEmpty(){
        return this.F1.isEmpty();
    }

    size(){
        return this.F1.size();
    }

    isFull(){
        return this.F1.isFull();
    }

    toString(){
        return this.F1.toString();
    }

};

export default Pilha2F;