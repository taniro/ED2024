
export default function filaInvertida(fila){
    if (fila.isEmpty()) {
        return fila; // Retorna a fila vazia
    } else {
        // Retira o elemento da frente da fila
        const frontElement = fila.dequeue();
        
        // Chama a função recursivamente para reverter o restante da fila
        const filaReversa = filaInvertida(fila);
        
        // Insere o elemento retirado de volta na fila, mas no final
        filaReversa.enqueue(frontElement);
        
        return filaReversa;
    }
}
