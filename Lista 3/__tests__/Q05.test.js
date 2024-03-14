import Lista from "../structures/Lista";
import embaralhaOrdem from "../src/Q05-embaralhaOrdem";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Inicialização",
    () => {
        expect(l.isEmpty()).toBe(true);
    }
);

test("Adicionar elementos",
    () => {
        l.add("A");
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(1);
        l.removeFirst();
        expect(l.isEmpty()).toBe(true);
        expect(l.length()).toBe(0);
    }
);

test("Remover elementos da lista vazia",
    () => {
        expect(() => l.removeFirst()).toThrow(Error("Underflow"));
        expect(() => l.removeLast()).toThrow(Error("Underflow"));

    }
);

test("Embaralha ordem", 
    () => {
        l.add("A");
        l.add("B");
        l.add("C");
        l.add("D");
        expect(embaralhaOrdem(l)).not.toEqual('ABCD');
    }
);