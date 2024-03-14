import Lista from "../structures/Lista";

export default function substring(pos1, pos2, lista){
    let novaLista = new Lista();

    // Verifica se as posições são válidas
    if (pos1 < 0 || pos2 >= lista.length() || pos1 > pos2) {
        throw new Error("Posições inválidas");
    }

    let atual = lista.searchForPos(pos1);

     // Itera sobre os nós da posição A até a posição B
     for (let i = pos1; i <= pos2; i++) {
        novaLista.add(atual.dado); // Adiciona o caractere atual à nova lista
        atual = atual.proximo; // Move para o próximo nó
    }

    let string = novaLista.toString();
    return string;
};