import Lista from "../structures/Lista";
import inverteLista from "../src/Q04-inverteLista";
import substring from "../src/Q06-substring";

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

test("Substring", 
    () => {
        l.add("A");
        l.add("B");
        l.add("C");
        l.add("D");
        l.add("E");
        l.add("F");   
        expect(substring(2,4,l)).toBe("B C D ");
    
    }
);