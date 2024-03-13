import Fila from "../structures/Fila";

export default function intercalarFilas(fila1, fila2){

    let maxSize = fila1.maxSize + fila2.maxSize
    let filaIntercalada = new Fila(maxSize);

    while(!fila1.isEmpty() || !fila2.isEmpty()){
        if(!fila1.isEmpty()){
            filaIntercalada.enqueue(fila1.dequeue());
        }
        if(!fila2.isEmpty()){
            filaIntercalada.enqueue(fila2.dequeue());
        }
    }

    return filaIntercalada.toString();
};