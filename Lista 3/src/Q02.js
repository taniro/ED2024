import Lista from "../structures/Lista";

class filaImplementaLista{
    constructor(){
        this.lista = new Lista();
    }

    isEmpty(){
        return this.lista.isEmpty();
    }
    clear(){
        return this.lista.clear();
    }
    size(){
        return this.lista.length();
    }
    
    enqueue(dado){
        this.lista.append(dado);
    }
    dequeue(){
        this.lista.removeFirst();
    }

    front(){
        let aux = this.lista.head.proximo;
        return aux.dado;
    }
    toString(){
        this.lista.toString();
    }
}

export default filaImplementaLista;