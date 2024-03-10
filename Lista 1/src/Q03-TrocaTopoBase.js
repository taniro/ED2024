import Pilha from "./PilhaQ03";

export default function trocaTopoBase(pilha) {
 
    let pilhaAux = new Pilha();
    let pilhaFinal = new Pilha();

    if (pilha.size() <= 1) {
        return pilha;
    } else {
        pilhaFinal.push(pilha.pop()); // Pegando o topo da pilha original e tornando base da pilha final
        // Movendo todos os elementos menos a base para a pilha auxiliar 
        while (pilha.size() > 1) {
            pilhaAux.push(pilha.pop());
        }
        // Movendo os elementos do meio para a pilha final
        while (pilhaAux.size() > 0) {
            pilhaFinal.push(pilhaAux.pop());
        }
        pilhaFinal.push(pilha.pop());
 
        return pilhaFinal.toString(); 
    }
}

