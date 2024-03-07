import Pilha from "../src/Questao5";

let p;

beforeEach (
    () => {
    p = new Pilha();
});

test("Pilha instanciada é vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
        expect(p.isFull()).toBe(false);
});

test("Overflow",
    () => {
        p.push("A");
        p.push("B");
        p.push("C");
        p.push("D");
        expect(() => p.push("F")).toThrow("Stackoverflow");
    }
);


test("Inserções",
    () => {
        p.push("A")
        expect(p.top()).toBe("A")
        p.push("B")
        expect(p.top()).toBe("B")
});

test("Remoções",
    () => {
        p.push("A")
        p.push("B")
        p.push("C")

        p.pop()
        expect(p.top()).toBe("B")
        p.pop()
        expect(p.top()).toBe("A")
});

test("Verificação da sequência",
    () => {
        const texto1 = "[ ( ) [ ( ) ] ] ( )";
        expect(p.analisaSequencia(texto1)).toBe(true);
        const texto2 = "( ( ) ]";
        expect(p.analisaSequencia(texto2)).toBe(false);

});

