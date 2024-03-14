import Lista from "../structures/Lista";
import inverteLista from "../src/Q04-inverteLista";

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

test("Inverte elementos", ()=>{
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    expect(inverteLista(l)).toBe("[5, 4, 3, 2, 1]");

})