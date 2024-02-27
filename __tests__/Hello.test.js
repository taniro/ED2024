import Hello from "../src/Hello";

let h;

beforeEach(
    () => {
        h = new Hello();
    }
);

test("Hello World",
    () => {
        expect(h.toString()).toBe("Hello World");
    }
);

test("Hello TADS",
    () => {
        let p = new Hello("TADS")
        expect(p.toString()).toBe("Hello TADS");
    }
);