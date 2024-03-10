export default function inverte(pilha) {
    let resultado = "";
    for (let i = pilha.topo - 1; i >= 0; i--){
            resultado += pilha.dados[i];
    }
    return resultado;
}
