export default function analisaSequencia(pilha, texto){
    for (let i = 0; i < texto.length; i++) {
        let elemento = texto[i]

        if(elemento === "(" || elemento === "["){
            //Guarda todas as aberturas na pilha
            pilha.push(elemento)
        } 
        if (elemento === ')' || elemento === ']') {
            // Verifica se a pilha está vazia e começando com um fechamento (o que indicaria um padrão incorreto)
            if (pilha.isEmpty()) {
                return false;
            } else {
                // Verifica se o caractere de fechamento corresponde ao último caractere de abertura na pilha
                let topo = pilha.top();
                if (( elemento === ')' && topo === '(' ) || (elemento === ']' && topo === '[')) {
                    pilha.pop();  // Se o fechamento corresponde à abertura
                }
            }         
        }
    }
    return pilha.isEmpty(); 
}

