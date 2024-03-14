import Lista from "../structures/Lista";
export default function inverteLista(lista){
    let a = lista.asArray();
    let b = [];

    for(let i = a.length - 1; i >= 0; i--){
        b.push(a[i]);
    }
    return b.join(', ');
}


// const inverteLista = (lista) => {
//     // Cria uma nova lista vazia
//     let lista2 = new Lista();

//     // Preenche a nova lista com os elementos da lista original
//     for(let elemento of lista){
//         lista2.append(elemento);
//     }
//     // Inicializa um contador para controle do loop
//     let cont = 1;
//     let aux;

//     // Inverte os elementos na lista2 de forma iterativa
//     while(cont < lista2.size()){
//         // Remove o último elemento da lista 'l' e armazena-o em 'aux'
//         aux = lista2.searchForPos(lista2.size() - 1);
//         lista2.removeLast();
//         // Adiciona o elemento removido no início da lista 'l', invertendo a ordem dos elementos
//         lista2.add(aux);
//         cont++; // Incrementa o contador
//     }

//     // Constrói a string de resposta contendo os elementos invertidos da lista 'l'
//     let resposta = "";
//     aux = lista2.head.proximo; // Inicializa o ponteiro auxiliar apontando para o segundo nó da lista
//     while(aux != null){
//         resposta += aux.dado; // Adiciona o dado do nó atual à string de resposta
//         aux = aux.proximo; // Atualiza o ponteiro auxiliar para o próximo nó na lista
//     }

//     // Retorna a string de resposta contendo os elementos invertidos da lista
//     return resposta;
// };

// export default inverteLista;