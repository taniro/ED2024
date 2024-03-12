import FilaCircular from "../src/FilaCircular";

let fc;

beforeEach(
    () => {
        fc = new FilaCircularVitor(5);
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(fc.isEmpty()).toBe(true);
        expect(fc.isFull()).toBe(false);
    }
);

test("Inserções",
    () => {
        fc.enqueue("A");
        expect(fc.front()).toBe("A");
        fc.enqueue("B");
        expect(fc.front()).toBe("A");
        fc.enqueue("C");
        expect(fc.front()).toBe("A");
        fc.enqueue("D");
        expect(fc.front()).toBe("A");
    }
);

test("Overflow",
    () => {
        fc.enqueue("A");
        fc.enqueue("B");
        fc.enqueue("C");
        fc.enqueue("D");
        fc.enqueue("D");
        expect(() => fc.enqueue("E")).toThrow("Queueoverflow");
    }
);

test("Underflow",
    () => {
        expect(() => fc.dequeue()).toThrow("Queueunderflow");
    }
);

test("Tamanho da Pilha recem instanciada é zero",
    () => {
        expect(fc.length()).toBe(0);
    }
);

test("A pilha recem instanciada após um push o tamanho é 1",
    () => {
        fc.enqueue('A')
        expect(fc.length()).toBe(1);
    }
);

test("Outro teste de FIFO",
    () => {
        fc.enqueue('A')
        fc.enqueue('B')
        fc.dequeue()
        expect(fc.front()).toBe('B');
        fc.enqueue('C')
        fc.enqueue('D')
        expect(fc.front()).toBe('B');
        fc.dequeue();
        fc.dequeue();
        fc.dequeue();
        fc.enqueue('E');
        expect(fc.front()).toBe('E');
        fc.enqueue('F');
        fc.enqueue('G');
        expect(fc.front()).toBe('E');
    }
);

test("Teste de vazio",
    ()=>{
        fc.enqueue("A");
        fc.enqueue("B");
        fc.enqueue("C");
        fc.enqueue("D");
        fc.dequeue();
        fc.dequeue();
        fc.dequeue();
        fc.dequeue();
        fc.enqueue("E");
        fc.enqueue("F");
        fc.dequeue();
        fc.dequeue();
        expect(fc.isEmpty()).toBe(true);
        fc.enqueue("F");
        expect(fc.isEmpty()).toBe(false);
    }
);

test("Procurando erros ",
    () => {
        fc.enqueue("A");
        fc.enqueue("B");
        fc.enqueue("C");
        fc.enqueue("D");
        fc.dequeue();
        fc.dequeue();
        fc.enqueue("E");
        fc.enqueue("F");
        fc.dequeue();
        fc.dequeue();
        fc.enqueue("A");
        fc.enqueue("B");
        console.log(fc.toString());
    }
);


test("Procurando erros ",
    () => {
        fc.enqueue("A");
        fc.enqueue("B");
        fc.enqueue("C");
        fc.enqueue("D");
        fc.enqueue("E");
        console.log(fc.toString());
    }
);
