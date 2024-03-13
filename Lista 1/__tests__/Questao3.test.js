import PilhaQ03 from "../src/PilhaQ03";
import trocaTopoBase from "../src/Q03-TrocaTopoBase";

let p;

beforeEach (
    () => {
    p = new PilhaQ03();
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

test("Underflow",
    () => {
        expect(() => p.pop()).toThrow("Stackunderflow");
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

test("Troca de topo por base",
    () => {
        p.push(1)
        p.push(2)
        p.push(3)
        p.push(4)
        expect(p.toString()).toBe("1 2 3 4");
        console.log("Pilha antes da troca: ", p.toString());
 
        expect(trocaTopoBase(p)).toBe("4 2 3 1");
});

