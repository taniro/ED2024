/*
    Implemente uma fila usando a implementação duas pilhas básicas.
*/

import Pilha from "../structures/Pilha";

class Fila {
    constructor(maxsize){
        this.p1 = new Pilha(maxsize);
        this.p2 = new Pilha(maxsize);
    }

    isEmpty(){
        return this.p1.isEmpty();
    }
    isFull(){
        return this.p1.isFull();
    }
    clear(){
        return this.p1.clear();
    }

    enqueue(element){
        if(!this.p1.isFull()){
            this.p1.push(element);
            return;
        } 
        throw new Error("Queue overflow");
    }

    dequeue(){
        if (this.p1.isEmpty()) {
            throw new Error("Queue underflow");
        } else {
            while (this.p1.size() > 1){
                this.p2.push(this.p1.pop());
            }
            let front = this.p1.pop();
            this.p1.clear();

            while (this.p2.size() > 0) {
                this.p1.push(this.p2.pop());
            }
            return front;
        }
    }

    front() {
        if (!this.isEmpty()) {
            if (this.p2.isEmpty()) {
                while (this.p1.size() > 0) {
                    this.p2.push(this.p1.pop());
                }
            }
            let front = this.p2.top(); // Retorna o elemento do topo da pilha p2
            while (this.p2.size() > 0) {
                this.p1.push(this.p2.pop());
            }
            return front;
        }
        throw new Error("Queue underflow");
    }

    lenght(){
        return this.p1.size();
    }

    toString(){
        return this.p1.toString();
    }
}

export default Fila;