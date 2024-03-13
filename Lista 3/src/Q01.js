import Lista from "../structures/Lista";

class pilhaImplementaLista {
    constructor(){
        this.lista = new Lista();
    }

    push(dado){
        this.lista.append(dado);
    }
    pop(){
        this.lista.removeLast();
    }

    top(){
        if(!this.lista.isEmpty()){
            let aux = this.lista.head;
            while(aux.proximo != null){
                aux = aux.proximo;
            }
            return aux.dado;
        }
        throw new Error("Stack empty");
    }

    isEmpty(){
        return this.lista.isEmpty();
    }
 
    size(){
         return this.lista.length();
    }
    clear(){
        this.lista.head.proximo = null;
        this.lista.size = 0;
    }
    toString(){
        return this.lista.asArray();
    }
    
}

export default pilhaImplementaLista;