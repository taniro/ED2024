import Pilha from "../src/Pilha";
import inverte from "../src/Q01-InvertePilha"

let p;
beforeEach(
    () => {
        p = new Pilha();
    }
);

test("Pilha instanciada é vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
        expect(p.isFull()).toBe(false);
    }
);

test("Inserções",
    () => {
        p.push("A");
        expect(p.top()).toBe("A");
        p.push("B");
        expect(p.top()).toBe("B");
        p.push("C");
        expect(p.top()).toBe("C");
        p.push("D");
        expect(p.top()).toBe("D");
        p.push("E");
        expect(p.top()).toBe("E");
    }
);


test("Underflow",
    () => {
        expect(() => p.pop()).toThrow("Stackunderflow");
    }
);

test("Pilha invertida",
    () => {
        p.push("A");
        p.push("B");
        p.push("A");
        p.push("C");
        p.push("A");
        p.push("X");
        p.push("I");
        expect(inverte(p)).toBe("IXACABA");
}
);