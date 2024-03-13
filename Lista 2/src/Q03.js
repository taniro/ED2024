
import Fila from "../structures/Fila";

class FilaCaminhoes{
    constructor(){
        this.fila = new Fila(10);
    }

    emAguardo(){
        return this.fila.isEmpty();
    }
    carregamentoAtingido(){
        return this.fila.isFull();
    }
    chegada(dado){
        this.fila.enqueue(dado);
    }
    saida(){
        this.fila.dequeue();
    }

    toString(){
        return this.fila.toString();
    }
};


export default FilaCaminhoes;