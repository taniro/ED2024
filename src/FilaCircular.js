class FilaCircular {
    constructor(capacidade = 5) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
    }
    enqueue(dado) { }
    dequeue() { }
    front() { }
    isEmpty() {
        return this.inicio === this.fim;
    }
    isFull() {
        return this.length() === this.capacidade;
    }
    clear() { }
    toString() { }
    length() {
        if (this.inicio < this.fim) {
            return this.fim - this.inicio;
        } else if (this.inicio > this.fim) {
            return this.capacidade - this.inicio + this.fim + 1;
        }
        return 0;
    }
}

export default FilaCircular;