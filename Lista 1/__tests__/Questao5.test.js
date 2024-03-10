import Pilha from "../src/Pilha";
import analisaSequencia from "../src/Q05-AnalisaSequencia"

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
        p.push("E");
        p.push("F");
        p.push("G");
        expect(() => p.push("H")).toThrow("Stackoverflow");
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
        expect(analisaSequencia(p, texto1)).toBe(true);
       const texto2 = "( ( ) ]";
        expect(analisaSequencia(p, texto2)).toBe(false);

});

