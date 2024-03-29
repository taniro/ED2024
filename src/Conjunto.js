import ListaDuplamenteEncadeada from "./ListaDuplamenteEncadeada";

class Conjunto {
    constructor() {
        this.dados = new ListaDuplamenteEncadeada();
    }

    add(dado) {
        if (!this.has(dado)) {
            this.dados.add(dado);
        }
    }
    delete(dado) {
        return this.dados.remove(dado);
    }

    has(dado) {
        return this.dados.search(dado);
    }

    size() {
        return this.dados.length();
    }

    clear() {
        this.dados.clear();
    }
    values() {
        return this.dados.asArray();
    }

    isEqual(conjuntoB) {
        return this.contains(conjuntoB) && conjuntoB.contains(this);
    }
    union(conjuntoB) {
        let resultado = new Conjunto();

        let valoresA = this.values();
        let valoresB = conjuntoB.values();

        for (let a of valoresA) {
            resultado.add(a);
        }
        for (let b of valoresB) {
            resultado.add(b);
        }

        return resultado;
    }
    intersection(conjuntoB) {
        let resultado = new Conjunto();

        let valoresA = this.values();

        for (let a of valoresA) {
            if (conjuntoB.has(a)) {
                resultado.add(a);
            }
        }

        return resultado;
    }
    difference(conjuntoB) {
        let resultado = new Conjunto();
        let valoresA = this.values();
        let valoresB = conjuntoB.values();

        for (let a of valoresA) {
            resultado.add(a);
        }
        for (let b of valoresB) {
            resultado.delete(b);
        }
        return resultado;
    }
    contains(conjuntoB) {

        let valoresB = conjuntoB.values();

        for (let b of valoresB) {
            if (!this.has(b)) {
                return false;
            }
        }

        return true;
    }
}

export default Conjunto;