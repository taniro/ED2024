export default function embaralhaOrdem(lista){
    // Convertendo a lista encadeada em um array
    let array = [];
    let node = lista.head.proximo;
    while (node !== null) {
        array.push(node.dado);
        node = node.proximo;
    }

    // Embaralhando o array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Reconstruindo a lista encadeada com os elementos embaralhados
    lista.clear();
    for (let i = 0; i < array.length; i++) {
        lista.add(array[i]);
    }
};