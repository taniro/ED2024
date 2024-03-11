/*
    Implemente uma fila usando a implementação duas pilhas básicas.
*/

import Pilha from "./Pilha";

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

    //Insere os elementos de forma que, ao retira-los, se comportem como numa pilha
    enqueue(element){
        if(this.isFull()){
            throw new Error("Queue overflow");
        } else {
            while(this.p1.size()>0){
                this.p2.push( this.p1.pop() );
            }
            this.p1.push(element);
            while(this.p2.size()>0){
                this.p1.push( this.p2.pop() );
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue underflow");
        } else {
            return this.p1.pop();
        }
    }

    front(){
        return this.p1.top();
    }

    lenght(){
        return this.p1.size();
    }

    toString(){
        let resultado = "[";
        for(let i = this.p1.topo - 1; i >= 0; i--){
            resultado += `${this.p1.dados[i]}`
            if (i!==0){
                resultado += " ";
            }
        }
        resultado += "]";

        return resultado;
    }

}

export default Fila;