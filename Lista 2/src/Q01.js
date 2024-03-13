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
        if(this.F1.isFull()){
            throw new Error("Stackoverflow");
        } else {
            this.F1.enqueue(dado);
            return;
        }
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stackunderflow");
        } else {
            while (this.F1.size() > 1) {
                this.F2.enqueue(this.F1.dequeue());
            }
            let top = this.F1.dequeue(); // Armazena o topo antes de limpar F1
            while (!this.F2.isEmpty()) { // Restaura a ordem dos elementos
                this.F1.enqueue(this.F2.dequeue());
            }
            return top; // Retorna o topo armazenado
        }
    }
    
    top() {
        if (!this.isEmpty()) {
            while (this.F1.size() > 1) {
                this.F2.enqueue(this.F1.dequeue());
            }
            let top = this.F1.dequeue(); // Armazena o topo antes de limpar F1
            while (!this.F2.isEmpty()) { // Restaura a ordem dos elementos
                this.F1.enqueue(this.F2.dequeue());
            }
            return top; // Retorna o topo armazenado
        }
        throw new Error("Stackunderflow");
    }

    toString(){
        return this.F1.toString();
    }

};

export default Pilha2F;
