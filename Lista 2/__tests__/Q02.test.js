import Fila from "../src/Q02";

let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
        expect(f.isFull()).toBe(false);
    }
);

test("Tamanho da Pilha recém instanciada é zero",
    () => {
        expect(f.lenght()).toBe(0);
    }
);

test("A pilha recém instanciada após um push o tamanho é 1",
    () => {
        f.enqueue('A')
        expect(f.lenght()).toBe(1);
    }
);

test("Inserções e remoções", 
    () => {
        f.enqueue("1");
        expect(f.dequeue()).toBe("1");

        f.enqueue("2");
        f.enqueue("3");
        f.enqueue("4");
        expect(f.dequeue()).toBe("2");

        f.enqueue("5");
        expect(f.dequeue()).toBe("3");
    }
);

test("Frente da fila",
    () => {
        f.enqueue("A");
        expect(f.front()).toBe("A");
        f.enqueue("B");
        expect(f.front()).toBe("A");
        f.enqueue("C");
        f.enqueue("D");
        expect(f.front()).toBe("A");
    }
);

test("Overflow",
    () => {
        f.enqueue("A");
        f.enqueue("B");
        f.enqueue("C");
        f.enqueue("D");
        f.enqueue("E");
        expect(() => f.enqueue("F")).toThrow("Queue overflow");
    }
);

test("Underflow",
    () => {
        expect(() => f.dequeue()).toThrow("Queue underflow");
    }
);

test("Teste de FIFO com pilhas",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        expect(f.front()).toBe('A');

        f.enqueue('C')
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);

test("Conversão para string",
    ( )=> {
        f.enqueue("1");
        f.enqueue("2");
        f.enqueue("3");
        f.enqueue("4");
        expect(f.toString()).toBe("[1 2 3 4]");
});