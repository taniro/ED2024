import Pilha from "../src/Questao3";

export default function trocaTopoBase(pilha) {
 
    let pilhaAux = new Pilha();
    let pilhaFinal = new Pilha();

    if (pilha.size() <= 1) {
        return pilha;
    } else {
        pilhaFinal.push(pilha.pop()); // Pegando o topo e tornando base da pilha final

        // Movendo todos os elementos menos a base para a pilha auxiliar 
        while (pilha.size() > 1) {
            pilhaAux.push(pilha.pop());
        }
        // Movendo os do meio para a final
        while (pilhaAux.size() > 0) {
            pilhaFinal.push(pilhaAux.pop());
        }

        pilhaFinal.push(pilha.pop());
        // pilhaFinal.push(pilhaAux.pop());

        return pilhaFinal; 
    }
}

