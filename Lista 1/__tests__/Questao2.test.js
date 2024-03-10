import PilhaQ02 from "../src/PilhaQ02";

let p;

beforeEach(
    () => {
        p = new PilhaQ02();
    }
);

test("Pilha instanciada é vazia",
    () => {
        expect(p.isEmptyA()).toBe(true);
        expect(p.isEmptyB()).toBe(true);
        expect(p.isFull()).toBe(false);
    }
);

test("A pilha recém instanciada após um push o tamanho é 1",
    () => {
        p.pushA('A')
        expect(p.size()).toBe(1);
    }
);


test("Inserções",
    () => {
        p.pushA("2");
        expect(p.topA()).toBe("2");
        p.pushA("1");
        expect(p.topA()).toBe("1");

        p.pushB("4");
        expect(p.topB()).toBe("4");
        p.pushB("3");
        expect(p.topB()).toBe("3");
    }
);

test("Stack Overflow",
    () => {
        p.pushA("A")
        p.pushA("B")
        p.pushB("C")
        p.pushB("D")
        expect(() => p.pushB("E").toThrow("Stackoverflow"))
    }
);

test("Stack Underflow A",
    () => {
        expect(() => p.popA()).toThrow("Stackunderflow em A");
}
);
test("Stack Underflow B",
    () => {
        expect(() => p.popB()).toThrow("Stackunderflow em B");
}
);




