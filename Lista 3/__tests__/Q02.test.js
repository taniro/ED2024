import filaImplementaLista from "../src/Q02";

let f;

beforeEach(
    () => {
        f = new filaImplementaLista(5);
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
    }
);

test("Inserções e top",
    () => {
        f.enqueue("A");
        expect(f.front()).toBe("A");
        f.enqueue("B");
        expect(f.front()).toBe("A");
        f.enqueue("C");
        expect(f.front()).toBe("A");
        f.enqueue("D");
        expect(f.front()).toBe("A");
        f.enqueue("E");
        expect(f.front()).toBe("A");
    }
);


test("Underflow",
    () => {
        expect(() => f.dequeue()).toThrow("Underflow");
    }
);

test("Tamanho da Pilha recém instanciada é zero",
    () => {
        expect(f.size()).toBe(0);
    }
);

test("A pilha recém instanciada após um push o tamanho é 1",
    () => {
        f.enqueue('A')
        expect(f.size()).toBe(1);
    }
);

test("Teste de FIFO",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);