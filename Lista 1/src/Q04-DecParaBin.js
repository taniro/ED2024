export default function decParaBin(dado, pilha){

    while(dado > 0){
        pilha.push(dado % 2);
        dado = Math.floor(dado/2);
    }

    let bin = "";
    while(!pilha.isEmpty()){
        bin += pilha.top();
        pilha.pop();
    }
    return bin;
}