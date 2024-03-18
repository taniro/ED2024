import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
        this.size = 0;
    }

    length() {
        return this.size;
    }
    isEmpty() {
        return this.head.proximo === null;
    }

    add(dado) {
        let novo_no = new No(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
        this.size++;
    }
    append(dado) {
        let novo_no = new No(dado);
        let aux = this.head;

        while (aux.proximo !== null) {
            aux = aux.proximo;
        }

        aux.proximo = novo_no;
        this.size++;
    }

    remove() {
        if (!this.isEmpty()) {
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }
    removeLast() {
        if (!this.isEmpty()) {
            let node_a = this.head;
            let node_b = node_a;
            while (node_a.proximo !== null) {
                node_b = node_a;
                node_a = node_a.proximo;
            }
            node_b.proximo = null;
            this.size--;
            return;
        }
        throw new Error("Underflow");
    }
    
    addAt(dado, pos){ //Lista começa na posição 1(Ignora a head)
        if(pos <= this.length() && pos>= 1){
            let novoNo = new No(dado);
            let cont = 0;
            let aux = this.head;
            let anterior, posterior;
            while(cont != pos){
                posterior = aux.proximo;
                anterior = aux;
                aux = aux.proximo;      
                cont++; 
            }
            novoNo.proximo = posterior;
            anterior.proximo = novoNo;
            this.size++;
        }else{
            throw new Error("NullPointerException");
        }
    }

    removeAt(pos){
        if(!this.isEmpty()){
            if(pos <= this.length() && pos>= 1){
                let cont = 0;
                let aux = this.head;
                let anterior, posterior;
                while(cont != pos){
                    posterior = aux.proximo;
                    anterior = aux;
                    aux = aux.proximo;      
                    cont++; 
                }
                anterior.proximo = posterior.proximo;
                this.size--;
            }else{
                throw new Error("NullPointerException");
            }
        }else{
            throw new Error("Underflow");
        }
    }

    search(dado){
        if(!this.isEmpty()){
            let aux = this.head;
            while(aux.proximo!=null){
                if(dado === aux.dado){
                    return true;
                }
                aux = aux.proximo;
            }
        }else{
            throw new Error("ListEmpty");
        }
        return false;
    }

    searchIndex(pos){
        if(!this.isEmpty()){
            if(pos >= 1 && pos <= this.length()){
                let aux = this.head.proximo;
                let cont = 0;
                let dado;
                while(cont !== pos){
                    dado = aux.dado;
                    aux = aux.proximo;
                    cont++;
                }
                return dado;
            }else{
                throw new Error("NullPointerException");
            }
        }else{
            throw new Error("ListEmpty");
        }
    }
    
    asArray() {
        let resultado = [];
        let aux = this.head.proximo;
        while (aux !== null) {
            resultado.push(aux.dado);
            aux = aux.proximo;
        }
        return resultado;
    }

    clear(){
        let aux;
        let no_atual = new No();
        for (no_atual = this.head; no_atual !== null; ){
            aux = no_atual.proximo;
            no_atual.proximo = null;
            no_atual = aux;
        }
        this.head.proximo = null;
        this.size = 0;
    }
}

export default Lista;
