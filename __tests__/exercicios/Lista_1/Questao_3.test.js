import Pilhas from "../../../src/exercicios/Lista_1/Questao_3";

let p;

beforeEach(() => {
	p = new Pilhas(10);
});

test("#1", () => {
	expect(p.isAEmpty()).toBe(true);
	expect(p.isBEmpty()).toBe(true);
	p.pushA("A");
	expect(p.isAEmpty()).toBe(false);
	expect(p.isBEmpty()).toBe(true);
	p.popA();
	p.pushB("1");
	expect(p.isAEmpty()).toBe(true);
	expect(p.isBEmpty()).toBe(false);
});

test("#2",
    () => {
        expect(p.isAEmpty()).toBe(true);
        expect(p.isFull()).toBe(false);
    }
);

test("#3",
    () => {
        p.pushA("A");
        expect(p.topA()).toBe("A");
        p.pushA("B");
        expect(p.topA()).toBe("B");
        p.pushA("C");
        expect(p.topA()).toBe("C");
        p.pushA("D");
        expect(p.topA()).toBe("D");
        p.pushA("E");
        expect(p.topA()).toBe("E");
    }
);


test("#4",
    () => {
        p.pushA("A");
        p.pushA("B");
        p.pushA("C");
        p.pushA("D");
        p.pushA("E");
        p.pushB("1");
        p.pushB("2");
        p.pushB("3");
        p.pushB("4");
        p.pushB("5");
        expect(() => p.pushA("F")).toThrow("Overflow");
    }
);

test("#5",
    () => {
        expect(() => p.popA()).toThrow("Underflow");
    }
);

test("#6",
    () => {
        expect(p.sizeA()).toBe(0);
        expect(p.sizeB()).toBe(0);
    }
);

test("#7",
    () => {
        p.pushA('A')
        expect(p.sizeA()).toBe(1);
        expect(p.sizeB()).toBe(0);
    }
);

test("#8",
    () => {
        p.pushA('A')
        p.pushA('B')
        p.popA()
        expect(p.topA()).toBe('A');
    }
);