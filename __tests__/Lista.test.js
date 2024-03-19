import Lista from "../src/Lista";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Incialização",
    () => {
        expect(l.isEmpty()).toBe(true);
    }
);

test("Adicionar elementos",
    () => {
        l.add("A");
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(1);
        l.remove();
        expect(l.isEmpty()).toBe(true);
        expect(l.length()).toBe(0);
    }
);

test("Remover elementos da lista Vazia",
    () => {
        expect(() => l.remove()).toThrow(Error("Underflow"));
        expect(() => l.removeLast()).toThrow(Error("Underflow"));

    }
);

test("Testes Diversos",
    () => {
        l.add(20);
        l.add(30);
        l.add(40);
        expect(l.isEmpty()).toBe(false);
        expect(l.length()).toBe(3);
        l.append(50);
        expect(l.length()).toBe(4);
        expect(l.asArray()).toStrictEqual([40, 30, 20, 50]);
        l.remove();
        l.removeLast();
        expect(l.asArray()).toStrictEqual([30, 20]);
        expect(l.length()).toBe(2);
    }
);

test("Limpar lista",
    () => {
        l.add(30);
        l.add(40);
        l.clear();
        expect(l.isEmpty()).toBe(true);
    }
);

test("Buscar dado na lista", 
    () => {
        l.add("A");
        l.add("B");
        l.add("C");
        l.add("D");
        expect(l.search("C")).toBe(true);
        expect(l.search("F")).toBe(false);
})