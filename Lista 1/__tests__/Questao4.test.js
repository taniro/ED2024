import Pilha from "../src/Questao4";

let p;

beforeEach (
    () => {
    p = new Pilha();
});

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