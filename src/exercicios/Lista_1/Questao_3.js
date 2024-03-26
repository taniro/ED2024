class Pilhas {

	constructor(t = 10) {
		this.comprimento = t;
		this.dados = [];
		this.topoA = -1;
		this.topoB = t;
	}

	isAEmpty() {
		return this.topoA === -1;
	}

	isBEmpty() {
		return this.topoB === this.comprimento;
	}

	pushA(dado) {
		if (!this.isFull()) {
			this.dados[++this.topoA] = dado;
		} else {
			throw new Error("Overflow");
		}
	}

	pushB(dado) {
		if (!this.isFull()) {
			this.dados[--this.topoB] = dado;
		} else {
			throw new Error("Overflow");
		}
	}

	popA() {
		if (!this.isAEmpty()) {
			this.topoA--;
		} else {
			throw new Error("Underflow");
		}
	}
	popB() {
		if (!this.isBEmpty()) {
			this.topoB++;
		} else {
			throw new Error("Underflow");
		}
	}

	isFull() {
		if (this.topoA + 1 === this.topoB || this.topoB + 1 === this.topoA)
			return true;
		else
			return false;
	}

    topA(){
	    return this.dados[this.topoA];
    }
    topB(){
	    return this.dados[this.topoB];
    }


	sizeA(){
		return this.topoA+1;
	}

	sizeB(){
		return this.comprimento - this.topoB;
	}
}

export default Pilhas;