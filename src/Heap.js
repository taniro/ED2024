class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
	}
}

class Heap{
    constructor(){
        this.tree = [];
        this.tree[0] = new Node(0,9999999);
        this.size = 0;
    }

    insert(data, priority){
        let novoNo = new Node(data, priority);
        this.tree[++this.size] = novoNo;
        let indicePai = parseInt(this.size/2);
        let indiceFilho = this.size;
        while(this.tree[indiceFilho].priority > this.tree[indicePai].priority){
            let aux = this.tree[indicePai];
            this.tree[indicePai] = this.tree[indiceFilho];
            this.tree[indiceFilho] = aux;
            indiceFilho = indicePai;
            indicePai = parseInt(indiceFilho/2);
        }
    }

    toArray(){
        let saida = []
        for(let i = 1; i<=this.size; i++){
            saida.push(this.tree[i]);
        }
        return saida;
    }

    remove(){
        this.tree[1] = this.tree[this.size];
        this.size--;
        let indicePai = 1;
        let aux;        
        let filhoVezIndice;
        filhoVezIndice = this.filho_indice_fun(indicePai);
        while(this.tree[indicePai].priority < this.tree[filhoVezIndice].priority){
            aux = this.tree[filhoVezIndice];
            this.tree[filhoVezIndice] = this.tree[indicePai];
            this.tree[indicePai] =  aux;
            indicePai = filhoVezIndice;
            filhoVezIndice = this.filho_indice_fun(indicePai);
        }
    }

    filho_indice_fun(indicePai){
        if(indicePai*2 <= this.size){
            if(this.tree[indicePai*2+1].priority > this.tree[indicePai*2].priority && (indicePai*2+1 <= this.size)){
                return  indicePai*2+1;
            }
            return indicePai*2;
        }
        return indicePai;
    }

}

export default Heap;
